"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import CustomButton, { ButtonVariants } from "../CustomButton";
import { useState } from "react";
import { SelectItem } from "../ui/select";
import { PlusCircle } from "lucide-react";

const formSchema = z.object({
  name: z.string().min(1, "Name is required"),
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
  role: z.enum(["ADMIN", "CREW", "PILOT"], {
    required_error: "Role is required",
  }),
});

const UserForm = () => {
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

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"flex flex-col gap-6"}
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
          text={isLoading ? "Creating..." : "Create"}
          icon={<PlusCircle />}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>
    </Form>
  );
};

export default UserForm;
