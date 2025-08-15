"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { CustomFormField, FormFieldType } from "@/components/CustomFormField";
import { ButtonVariant, CustomButton } from "@/components/CustomButton";
import { useState, useEffect } from "react";
import { toast } from "sonner";
import { SelectItem } from "../ui/select";
import {
  saveMqttConfiguration,
  getMqttConfiguration,
} from "@/app/actions/mqttAction";
import { mqttConfigSchema } from "@/schema";
import { Loader2 } from "lucide-react";

const MqttConfigurationForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [configExists, setConfigExists] = useState(false);
  const [isLoadingConfig, setIsLoadingConfig] = useState(true);

  const currentSchema = mqttConfigSchema(configExists);
  type FormData = z.infer<typeof currentSchema>;

  const form = useForm<FormData>({
    resolver: zodResolver(currentSchema),
    defaultValues: {
      host: "",
      port: 1883,
      basePath: "mqtt",
      protocol: "websocket" as const,
      username: "",
      password: "",
    },
  });

  // Load existing configuration
  useEffect(() => {
    async function loadConfig() {
      setIsLoadingConfig(true);
      try {
        const result = await getMqttConfiguration();

        if (result.success && result.data) {
          setConfigExists(true);
          form.reset({
            host: result.data.host,
            port: result.data.port,
            basePath: result.data.basePath,
            protocol: result.data.protocol as "websocket" | "tls",
            username: result.data.username,
            password: result.data.password,
          });
        }
      } catch (error) {
        toast.error("Failed to load existing configuration");
      } finally {
        setIsLoadingConfig(false);
      }
    }

    loadConfig();
  }, [form]);

  async function onSubmit(values: FormData) {
    setIsLoading(true);

    try {
      const result = await saveMqttConfiguration(values);

      if (result.success) {
        toast.success(result.message);
        if (!configExists) setConfigExists(true);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again.");
    } finally {
      setIsLoading(false);
    }
  }

  if (isLoadingConfig) {
    return (
      <div className="h-screen flex flex-col items-center justify-center p-4">
        <Loader2 className="animate-spin w-8 h-8" />
        <p className="mt-2 text-sm text-muted-foreground text-center">
          Loading configuration...
        </p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex justify-center p-4">
      <div className="w-full max-w-md space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">MQTT Configuration</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Configure your MQTT broker connection settings
          </p>
        </div>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              inputType="text"
              name="host"
              label="Host"
              placeholder="e.g. broker.hivemq.com"
            />

            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              inputType="number"
              name="port"
              label="Port"
              placeholder="e.g. 1883"
            />

            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              inputType="text"
              name="basePath"
              label="Base Path"
              placeholder="e.g. mqtt"
            />

            <CustomFormField
              fieldType={FormFieldType.SELECT}
              control={form.control}
              name="protocol"
              label="Protocol"
              placeholder="Select a protocol"
              className="w-full"
            >
              <SelectItem value="websocket">WebSocket</SelectItem>
              <SelectItem value="tls">TLS</SelectItem>
            </CustomFormField>

            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              inputType="text"
              name="username"
              label="Username"
              placeholder="e.g. rotorsync"
            />

            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              inputType="password"
              name="password"
              label="Password"
              placeholder={
                configExists ? "Enter new password to change" : "********"
              }
            />

            <CustomButton
              variant={ButtonVariant.DEFAULT}
              text={configExists ? "Update" : "Save"}
              isLoading={isLoading}
              className="w-full"
            />
          </form>
        </Form>
      </div>
    </div>
  );
};

export default MqttConfigurationForm;
