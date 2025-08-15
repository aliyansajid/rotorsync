"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "@/components/ui/form";
import { CustomFormField, FormFieldType } from "@/components/CustomFormField";
import { ButtonVariant, CustomButton } from "@/components/CustomButton";
import { useState } from "react";
import { toast } from "sonner";
import { SelectItem } from "../ui/select";
import { serialNumberSchema, SerialNumberFormData } from "@/schema/index";
import { createSerialNumber } from "@/app/actions/serialNumberAction";

interface SerialNumberFormProps {
  onSuccess?: () => void;
  initialData?: SerialNumberFormData & { id?: string };
}

const SerialNumberForm = ({
  onSuccess,
  initialData,
}: SerialNumberFormProps) => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<SerialNumberFormData>({
    resolver: zodResolver(serialNumberSchema),
    defaultValues: {
      assetType: "TRAILER",
      name: "",
      serialNumber: "",
    },
  });

  async function onSubmit(values: SerialNumberFormData) {
    setIsLoading(true);

    try {
      const result = await createSerialNumber(values);

      if (result.success) {
        toast.success(result.message);
        form.reset();
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

  return (
    <div className="min-h-screen flex justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Serial Number Registration</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Register a new asset serial number in the system
          </p>
        </div>

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
              placeholder="e.g., Trailer1"
            />

            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              inputType="text"
              name="serialNumber"
              label="Serial Number"
              placeholder="e.g., N789KB"
            />

            <CustomButton
              variant={ButtonVariant.DEFAULT}
              text="Register Serial Number"
              isLoading={isLoading}
              className="w-full"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default SerialNumberForm;
