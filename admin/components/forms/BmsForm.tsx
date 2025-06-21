"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import { CustomButton, ButtonVariants } from "../CustomButton";
import { useState } from "react";
import { SelectItem } from "../ui/select";
import { PlusCircle } from "lucide-react";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  deviceName: z
    .string()
    .min(1, "Device name is required")
    .regex(
      /^[a-zA-Z0-9]+$/,
      "Device name must contain only letters and numbers"
    )
    .max(50, "Device name cannot exceed 50 characters"),
  mqttTopic: z
    .string()
    .min(1, "MQTT topic is required")
    .regex(
      /^[a-zA-Z0-9\/]+$/,
      "MQTT topic must contain only letters, numbers, and slashes"
    )
    .max(100, "MQTT topic cannot exceed 100 characters"),
  trailer: z.string().min(1, "Trailer selection is required"),
  threshold: z
    .number()
    .min(0, "Threshold must be at least 0")
    .max(100, "Threshold cannot exceed 100"),
});

const BmsForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      deviceName: "",
      mqttTopic: "",
      trailer: "",
      threshold: 20,
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
          label="Name"
          placeholder="e.g., BatteryMonitor1"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          type="text"
          name="deviceName"
          label="Device Name"
          placeholder="e.g., BMS123"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          type="text"
          name="mqttTopic"
          label="MQTT Topic"
          placeholder="e.g., bms/BMS123/status"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SELECT}
          name="trailer"
          label="Trailer"
          placeholder="Select a trailer"
        >
          <SelectItem value="trailer1">FreightMaster</SelectItem>
          <SelectItem value="trailer2">CargoPro</SelectItem>
          <SelectItem value="trailer3">HeavyDutyX</SelectItem>
        </CustomFormField>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SLIDER}
          name="threshold"
          label="Threshold"
        />

        <CustomButton
          variant={ButtonVariants.DEFAULT}
          text={isLoading ? "Adding..." : "Add BMS"}
          icon={<PlusCircle />}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>
    </Form>
  );
};

export default BmsForm;
