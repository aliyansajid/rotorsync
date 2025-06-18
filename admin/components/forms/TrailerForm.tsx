"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import { CustomButton, ButtonVariants } from "../CustomButton";
import { useState } from "react";
import { PlusCircle } from "lucide-react";

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

const TrailerForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      serialNumber: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
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
          text={isLoading ? "Adding..." : "Add Trailer"}
          icon={<PlusCircle />}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>
    </Form>
  );
};

export default TrailerForm;
