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
import { mediumOptions } from "@/data";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  sensorId: z
    .string()
    .min(1, "Sensor ID is required")
    .regex(/^[a-zA-Z0-9]+$/, "Sensor ID must contain only letters and numbers")
    .max(50, "Sensor ID cannot exceed 50 characters"),
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
  tankSize: z
    .number()
    .min(0, "Tank size must be at least 0")
    .max(1000, "Tank size cannot exceed 1000 inches"),
  tankSizeGal: z
    .number()
    .min(0, "Tank size must be at least 0")
    .max(10000, "Tank size cannot exceed 10,000 gallons"),
  heightOffset: z
    .number()
    .min(-10, "Height offset cannot be less than -10")
    .max(10, "Height offset cannot exceed 10"),
  medium: z.enum([
    "AIR",
    "PROPANE",
    "FRESH_WATER",
    "WASTE_WATER",
    "LIVE_WELL",
    "BLACK_WATER",
    "RAW_WATER",
    "GASOLINE",
    "DIESEL",
    "OIL",
    "LNG",
    "HYDRAULIC_OIL",
  ]),
});

const MopekaForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      sensorId: "",
      mqttTopic: "",
      trailer: "",
      threshold: 20,
      tankSize: 0,
      tankSizeGal: 0,
      heightOffset: 0,
      medium: "AIR",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    console.log(values);
    setIsLoading(false);
  }

  return (
    <Form {...form}>
      <div className="flex justify-center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full lg:w-1/2 gap-6"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">Add Mopeka Sensor</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Enter the details below to add a new Mopeka sensor
            </p>
          </div>

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            name="name"
            label="Name"
            placeholder="e.g., Trailer1"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            name="sensorId"
            label="Sensor ID"
            placeholder="e.g., 52:7C:6B"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="text"
            name="mqttTopic"
            label="MQTT Topic"
            placeholder="e.g., mopeka/Trailer1/status"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="number"
            name="tankSize"
            label="Tank Size (inches)"
            placeholder="e.g., 60"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="number"
            name="tankSizeGal"
            label="Tank Size (gallons)"
            placeholder="e.g., 1000"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="number"
            name="heightOffset"
            label="Height Offset"
            placeholder="e.g., 0.5"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.SELECT}
            name="medium"
            label="Medium"
            placeholder="Select a medium"
          >
            {mediumOptions.map((option) => (
              <SelectItem key={option.value} value={option.value}>
                {option.label}
              </SelectItem>
            ))}
          </CustomFormField>

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
            text={isLoading ? "Adding..." : "Add"}
            icon={<PlusCircle />}
            disabled={isLoading}
            isLoading={isLoading}
          />
        </form>
      </div>
    </Form>
  );
};

export default MopekaForm;
