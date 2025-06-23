"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { CustomFormField, FormFieldType } from "../CustomFormField";
import { CustomButton, ButtonVariants } from "../CustomButton";
import { useState, useEffect } from "react";
import { SelectItem } from "../ui/select";
import { PlusCircle, RefreshCcw } from "lucide-react";
import axiosInstance from "../../lib/axios";
import { toast } from "sonner";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: z.string().optional(),
  role: z.enum(["ADMIN", "CREW", "PILOT"], {
    required_error: "Role is required",
  }),
});

interface UserFormProps {
  userId?: string;
  onUserAdded?: () => void;
}

export default function UserForm({ userId, onUserAdded }: UserFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      password: "",
      role: "CREW",
    },
  });

  useEffect(() => {
    if (userId) {
      async function fetchUser() {
        try {
          const response = await axiosInstance.get(`/users/${userId}`);
          const user = response.data.user;
          form.reset({
            name: user.name,
            email: user.email,
            password: "",
            role: user.role,
          });
        } catch (error: any) {
          toast.error(error.response?.data?.error || "Failed to fetch user.");
        }
      }
      fetchUser();
    }
  }, [userId, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (userId) {
        const updateData = {
          name: values.name,
          email: values.email,
          role: values.role,
          ...(values.password && { password: values.password }),
        };
        const response = await axiosInstance.put(
          `/users/${userId}`,
          updateData
        );
        toast.success(response.data.message || "User updated successfully!");
      } else {
        const response = await axiosInstance.post("/auth/register", values);
        toast.success(response.data.message || "User registered successfully!");
      }
      form.reset();
      if (onUserAdded) onUserAdded();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        `Failed to ${userId ? "update" : "register"} user.`;
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="flex flex-col gap-6"
      >
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          type="text"
          name="name"
          label="Name"
          placeholder="John Doe"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          type="email"
          name="email"
          label="Email"
          placeholder="m@example.com"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          type="password"
          name="password"
          label="Password"
          placeholder="********"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SELECT}
          name="role"
          label="Role"
          placeholder="Select a role"
        >
          <SelectItem value="ADMIN">Admin</SelectItem>
          <SelectItem value="CREW">Crew</SelectItem>
          <SelectItem value="PILOT">Pilot</SelectItem>
        </CustomFormField>
        <CustomButton
          variant={ButtonVariants.DEFAULT}
          text={
            isLoading
              ? userId
                ? "Updating..."
                : "Creating..."
              : userId
              ? "Update"
              : "Create"
          }
          icon={userId ? <RefreshCcw /> : <PlusCircle />}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>
    </Form>
  );
}
