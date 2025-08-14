"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { CustomFormField, FormFieldType } from "@/components/CustomFormField";
import { ButtonVariant, CustomButton } from "@/components/CustomButton";

const formSchema = z.object({
  email: z.email({ error: "Please enter a valid email" }),
});
const ForgotPasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Trouble Logging In?</h1>
          <p className="text-muted-foreground text-sm text-balance">
            No worries — enter your registered email to receive reset
            instructions
          </p>
        </div>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          inputType="email"
          name="email"
          label="Email"
          placeholder="m@example.com"
        />
        <CustomButton
          variant={ButtonVariant.DEFAULT}
          text="Send OTP"
          className="w-full"
        />
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
