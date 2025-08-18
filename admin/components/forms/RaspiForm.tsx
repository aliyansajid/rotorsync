"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { CustomFormField, FormFieldType } from "@/components/CustomFormField";
import { ButtonVariant, CustomButton } from "@/components/CustomButton";
import { SelectItem } from "@/components/ui/select";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { getSerialNumbers } from "@/app/actions/serialNumberActions";
import {
  createRaspi,
  updateRaspi,
  getRaspiById,
} from "@/app/actions/raspiActions";
import { raspiSchema } from "@/schema";
import { Loader2 } from "lucide-react";

interface SerialNumber {
  id: string;
  assetType: string;
  name: string;
  serialNumber: string;
}

interface RaspiFormProps {
  raspiId?: string;
  onSuccess?: () => void;
}

const RaspiForm = ({ raspiId, onSuccess }: RaspiFormProps) => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [helicopters, setHelicopters] = useState<SerialNumber[]>([]);
  const [trailers, setTrailers] = useState<SerialNumber[]>([]);
  const [fetchingSerialNumbers, setFetchingSerialNumbers] = useState(true);
  const [fetchingRaspiData, setFetchingRaspiData] = useState(!!raspiId);

  const isEditMode = !!raspiId;

  const form = useForm<z.infer<typeof raspiSchema>>({
    resolver: zodResolver(raspiSchema),
    defaultValues: {
      name: "",
      deviceName: "",
      mqttTopic: "",
      helicopterId: "",
      trailerId: "",
    },
  });

  // Fetch existing raspi data for edit mode
  useEffect(() => {
    const fetchRaspiData = async () => {
      if (!raspiId) return;

      setFetchingRaspiData(true);
      try {
        const response = await getRaspiById(raspiId);

        if (response.success && response.data) {
          const raspi = response.data;
          form.reset({
            name: raspi.name,
            deviceName: raspi.deviceName,
            mqttTopic: raspi.mqttTopic,
            helicopterId: raspi.helicopterId || "",
            trailerId: raspi.trailerId || "",
          });
        } else {
          toast.error(response.error);
        }
      } catch (error) {
        toast.error("Failed to fetch Raspi data");
      } finally {
        setFetchingRaspiData(false);
      }
    };

    fetchRaspiData();
  }, [raspiId, form]);

  // Fetch serial numbers on component mount
  useEffect(() => {
    const fetchSerialNumbers = async () => {
      try {
        const response = await getSerialNumbers();

        if (response.success && response.data) {
          // Filter helicopters and trailers
          const helicopterList = response.data.filter(
            (item: SerialNumber) =>
              item.assetType.toLowerCase() === "helicopter"
          );
          const trailerList = response.data.filter(
            (item: SerialNumber) => item.assetType.toLowerCase() === "trailer"
          );

          setHelicopters(helicopterList);
          setTrailers(trailerList);
        } else {
          toast.error(response.error);
        }
      } catch (error) {
        toast.error("Failed to fetch serial numbers");
      } finally {
        setFetchingSerialNumbers(false);
      }
    };

    fetchSerialNumbers();
  }, []);

  async function onSubmit(values: z.infer<typeof raspiSchema>) {
    setIsLoading(true);

    try {
      let response;

      if (isEditMode) {
        response = await updateRaspi(raspiId!, values);
      } else {
        response = await createRaspi(values);
      }

      if (response.success) {
        toast.success(response.message);

        if (isEditMode && onSuccess) {
          onSuccess();
        } else if (!isEditMode) {
          form.reset();
          if (onSuccess) onSuccess();
        }
      } else {
        toast.error(response.error);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  // Show loading state while fetching initial data
  if (fetchingRaspiData || fetchingSerialNumbers) {
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <Loader2 className="animate-spin" size={32} />
        <p className="text-sm text-muted-foreground text-center">Loading....</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          inputType="text"
          name="name"
          label="Name"
          placeholder="e.g. Raspi"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          inputType="text"
          name="deviceName"
          label="Device name"
          placeholder="e.g. raspi"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          inputType="text"
          name="mqttTopic"
          label="MQTT topic"
          placeholder="e.g. trailer1/raspi"
        />

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SELECT}
          name="helicopterId"
          label="Helicopter"
          placeholder="Select a helicopter (optional)"
          className="w-full"
        >
          {helicopters.map((helicopter) => (
            <SelectItem key={helicopter.id} value={helicopter.id}>
              {helicopter.name} ({helicopter.serialNumber})
            </SelectItem>
          ))}
        </CustomFormField>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.SELECT}
          name="trailerId"
          label="Trailer"
          placeholder="Select a trailer (optional)"
          className="w-full"
        >
          {trailers.map((trailer) => (
            <SelectItem key={trailer.id} value={trailer.id}>
              {trailer.name} ({trailer.serialNumber})
            </SelectItem>
          ))}
        </CustomFormField>

        <CustomButton
          variant={ButtonVariant.DEFAULT}
          text={isEditMode ? "Update" : "Save"}
          isLoading={isLoading}
          className="w-full"
        />
      </form>
    </Form>
  );
};

export default RaspiForm;
