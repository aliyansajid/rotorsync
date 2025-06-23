"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import { CustomFormField, FormFieldType } from "../CustomFormField";
import { CustomButton, ButtonVariants } from "../CustomButton";
import { useState, useEffect } from "react";
import { PlusCircle, RefreshCcw } from "lucide-react";
import axiosInstance from "../../lib/axios";
import { toast } from "sonner";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  serialNumber: z
    .string()
    .min(1, "Serial number is required")
    .regex(
      /^[a-zA-Z0-9]+$/,
      "Serial number must contain only letters and numbers"
    )
    .max(50, "Serial number cannot exceed 50 characters"),
});

interface TrailerFormProps {
  trailerId?: string;
  onTrailerAdded?: () => void;
}

export default function TrailerForm({
  trailerId,
  onTrailerAdded,
}: TrailerFormProps) {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      serialNumber: "",
    },
  });

  useEffect(() => {
    if (trailerId) {
      async function fetchTrailer() {
        try {
          const response = await axiosInstance.get(`/trailers/${trailerId}`);
          const trailer = response.data.trailer;
          form.reset({
            name: trailer.name,
            serialNumber: trailer.serialNumber,
          });
        } catch (error: any) {
          toast.error(
            error.response?.data?.error || "Failed to fetch trailer."
          );
        }
      }
      fetchTrailer();
    }
  }, [trailerId, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (trailerId) {
        const response = await axiosInstance.put(
          `/trailers/${trailerId}`,
          values
        );
        toast.success(response.data.message || "Trailer updated successfully!");
      } else {
        const response = await axiosInstance.post("/trailers", values);
        toast.success(response.data.message || "Trailer created successfully!");
      }
      form.reset();
      if (onTrailerAdded) onTrailerAdded();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        `Failed to ${trailerId ? "update" : "create"} trailer.`;
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
          label="Trailer Name"
          placeholder="e.g., FreightMaster"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          type="text"
          name="serialNumber"
          label="Serial Number"
          placeholder="e.g., ABC1234"
        />

        <CustomButton
          variant={ButtonVariants.DEFAULT}
          text={
            isLoading
              ? trailerId
                ? "Updating..."
                : "Adding..."
              : trailerId
              ? "Update Trailer"
              : "Add Trailer"
          }
          icon={trailerId ? <RefreshCcw /> : <PlusCircle />}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>
    </Form>
  );
}
