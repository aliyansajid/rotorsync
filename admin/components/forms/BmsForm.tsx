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
  trailerId: z.string().min(1, "Trailer selection is required"),
  threshold: z
    .number()
    .min(0, "Threshold must be at least 0")
    .max(100, "Threshold cannot exceed 100"),
});

interface BmsFormProps {
  bmsId?: string;
  onBmsAdded?: () => void;
}

export default function BmsForm({ bmsId, onBmsAdded }: BmsFormProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [trailers, setTrailers] = useState<Trailer[]>([]);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      deviceName: "",
      mqttTopic: "",
      trailerId: "",
      threshold: 20,
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

    if (bmsId) {
      async function fetchBms() {
        try {
          const response = await axiosInstance.get(`/bms/${bmsId}`);
          const bms = response.data.bms;
          form.reset({
            name: bms.name,
            deviceName: bms.deviceName,
            mqttTopic: bms.mqttTopic,
            trailerId: bms.trailer.id,
            threshold: bms.threshold,
          });
        } catch (error: any) {
          toast.error(error.response?.data?.error || "Failed to fetch BMS.");
        }
      }
      fetchBms();
    }
  }, [bmsId, form]);

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    try {
      if (bmsId) {
        const response = await axiosInstance.put(`/bms/${bmsId}`, values);
        toast.success(response.data.message || "BMS updated successfully!");
      } else {
        const response = await axiosInstance.post("/bms", values);
        toast.success(response.data.message || "BMS created successfully!");
      }
      form.reset();
      if (onBmsAdded) onBmsAdded();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        `Failed to ${bmsId ? "update" : "create"} BMS.`;
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
              ? bmsId
                ? "Updating..."
                : "Adding..."
              : bmsId
              ? "Update BMS"
              : "Add BMS"
          }
          icon={bmsId ? <RefreshCcw /> : <PlusCircle />}
          disabled={isLoading}
          isLoading={isLoading}
        />
      </form>
    </Form>
  );
}
