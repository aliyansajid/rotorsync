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
import { Trailer } from "../data-table/schema";
import { mediumOptions } from "@/data";

const formSchema = z.object({
  name: z
    .string()
    .min(1, "Name is required")
    .max(50, "Name cannot exceed 50 characters"),
  sensorId: z
    .string()
    .min(1, "Sensor ID is required")
    .regex(
      /^[a-zA-Z0-9:]+$/,
      "Sensor ID must contain only letters, numbers, and colons"
    )
    .max(50, "Sensor ID cannot exceed 50 characters"),
  mqttTopic: z
    .string()
    .min(1, "MQTT topic is required")
    .regex(
      /^[a-zA-Z0-9\/]+$/,
      "MQTT topic must contain only letters, numbers, and slashes"
    )
    .max(100, "MQTT topic cannot exceed 100 characters"),
  trailerId: z.string().min(1, "Trailer selection is required"),
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

interface MopekaFormProps {
  mopekaId?: string;
  onMopekaAdded?: () => void;
}

export default function MopekaForm({
  mopekaId,
  onMopekaAdded,
}: MopekaFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [trailers, setTrailers] = useState<Trailer[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      sensorId: "",
      mqttTopic: "",
      trailerId: "",
      threshold: 20,
      tankSize: 0,
      tankSizeGal: 0,
      heightOffset: 0,
      medium: "AIR",
    },
  });

  useEffect(() => {
    async function fetchTrailers() {
      try {
        const response = await axiosInstance.get("/trailers");
        setTrailers(response.data.trailers);
      } catch (error: any) {
        toast.error(error.response?.data?.error || "Failed to fetch trailers.");
      }
    }
    fetchTrailers();

    if (mopekaId) {
      async function fetchMopeka() {
        try {
          const response = await axiosInstance.get(`/mopeka/${mopekaId}`);
          const mopeka = response.data.mopeka;
          form.reset({
            name: mopeka.name,
            sensorId: mopeka.sensorId,
            mqttTopic: mopeka.mqttTopic,
            trailerId: mopeka.trailer.id,
            threshold: mopeka.threshold,
            tankSize: mopeka.tankSize,
            tankSizeGal: mopeka.tankSizeGal,
            heightOffset: mopeka.heightOffset,
            medium: mopeka.medium,
          });
        } catch (error: any) {
          toast.error(
            error.response?.data?.error || "Failed to fetch Mopeka sensor."
          );
        }
      }
      fetchMopeka();
    }
  }, [mopekaId, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (mopekaId) {
        const response = await axiosInstance.put(`/mopeka/${mopekaId}`, values);
        toast.success(
          response.data.message || "Mopeka sensor updated successfully!"
        );
      } else {
        const response = await axiosInstance.post("/mopeka", values);
        toast.success(
          response.data.message || "Mopeka sensor created successfully!"
        );
      }
      form.reset();
      if (onMopekaAdded) onMopekaAdded();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        `Failed to ${mopekaId ? "update" : "create"} Mopeka sensor.`;
      toast.error(errorMessage);
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <div className="flex justify-center">
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="flex flex-col w-full lg:w-1/2 gap-6"
        >
          <div className="flex flex-col items-center gap-2 text-center">
            <h1 className="text-2xl font-bold">
              {mopekaId ? "Edit Mopeka Sensor" : "Add Mopeka Sensor"}
            </h1>
            <p className="text-muted-foreground text-sm text-balance">
              {mopekaId
                ? "Update the details below to edit the Mopeka sensor."
                : "Enter the details below to add a new Mopeka sensor."}
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
            name="trailerId"
            label="Trailer"
            placeholder="Select a trailer"
          >
            {trailers.map((trailer) => (
              <SelectItem key={trailer.id} value={trailer.id}>
                {trailer.name}
              </SelectItem>
            ))}
          </CustomFormField>

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.SLIDER}
            name="threshold"
            label="Threshold (%)"
          />

          <CustomButton
            variant={ButtonVariants.DEFAULT}
            text={
              isLoading
                ? mopekaId
                  ? "Updating..."
                  : "Adding..."
                : mopekaId
                ? "Update Mopeka Sensor"
                : "Add Mopeka Sensor"
            }
            icon={mopekaId ? <RefreshCcw /> : <PlusCircle />}
            disabled={isLoading}
            isLoading={isLoading}
          />
        </form>
      </div>
    </Form>
  );
}
