"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { CustomFormField, FormFieldType } from "@/components/CustomFormField";
import { ButtonVariant, CustomButton } from "@/components/CustomButton";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { SelectItem } from "../ui/select";
import { serialNumberSchema } from "@/schema/index";
import {
  createSerialNumber,
  updateSerialNumber,
  getSerialNumberById,
} from "@/app/actions/serialNumberAction";
import { Loader2 } from "lucide-react";
import z from "zod";

interface SerialNumberFormProps {
  serialNumberId?: string;
  onSuccess?: () => void;
}

const SerialNumberForm = ({
  serialNumberId,
  onSuccess,
}: SerialNumberFormProps) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingData, setIsLoadingData] = useState(false);
  const isEditing = !!serialNumberId;

  const form = useForm<z.infer<typeof serialNumberSchema>>({
    resolver: zodResolver(serialNumberSchema),
    defaultValues: {
      assetType: "TRAILER",
      name: "",
      serialNumber: "",
    },
  });

  // Load data for editing
  useEffect(() => {
    if (isEditing && serialNumberId) {
      setIsLoadingData(true);
      getSerialNumberById(serialNumberId)
        .then((result) => {
          if (result.success && result.data) {
            form.reset({
              assetType: result.data.assetType,
              name: result.data.name,
              serialNumber: result.data.serialNumber,
            });
          } else {
            toast.error(result.error || "Failed to load serial number data");
          }
        })
        .catch((error) => {
          console.error("Error loading serial number:", error);
          toast.error("Failed to load serial number data");
        })
        .finally(() => {
          setIsLoadingData(false);
        });
    }
  }, [isEditing, serialNumberId, form]);

  async function onSubmit(values: z.infer<typeof serialNumberSchema>) {
    setIsLoading(true);

    try {
      const result = isEditing
        ? await updateSerialNumber(serialNumberId!, values)
        : await createSerialNumber(values);

      if (result.success) {
        toast.success(result.message);
        if (!isEditing) {
          form.reset();
        }
        onSuccess?.();
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoadingData) {
    return (
      <div className="flex flex-col items-center justify-center gap-2 p-4">
        <Loader2 className="animate-spin w-8 h-8" />
        <p className="text-sm text-muted-foreground text-center">Loading....</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          fieldType={FormFieldType.SELECT}
          control={form.control}
          name="assetType"
          label="Asset Type"
          placeholder="Select an asset type"
          className="w-full"
        >
          <SelectItem value="TRAILER">Trailer</SelectItem>
          <SelectItem value="HELICOPTER">Helicopter</SelectItem>
        </CustomFormField>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          inputType="text"
          name="name"
          label="Name"
          placeholder="e.g. Trailer1"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          inputType="text"
          name="serialNumber"
          label="Serial Number"
          placeholder="e.g. N789KB"
        />

        <CustomButton
          variant={ButtonVariant.DEFAULT}
          text={isEditing ? "Update" : "Save"}
          isLoading={isLoading}
          className="w-full"
        />
      </form>
    </Form>
  );
};

export default SerialNumberForm;
