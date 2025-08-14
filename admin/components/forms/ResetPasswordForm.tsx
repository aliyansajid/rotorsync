"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { CustomFormField, FormFieldType } from "@/components/CustomFormField";
import { ButtonVariant, CustomButton } from "@/components/CustomButton";

const formSchema = z
  .object({
    newPassword: z
      .string()
      .min(8, "Password must be at least 8 characters long")
      .regex(/[a-z]/, "Password must contain at least one lowercase letter")
      .regex(/[A-Z]/, "Password must contain at least one uppercase letter")
      .regex(/[0-9]/, "Password must contain at least one number")
      .regex(
        /[^a-zA-Z0-9]/,
        "Password must contain at least one special character"
      ),
    confirmPassword: z.string(),
  })
  .refine((data) => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
  });

const ResetPasswordForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newPassword: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Reset Your Password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your new password below to complete the reset process
          </p>
        </div>
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          inputType="password"
          name="newPassword"
          label="New Password"
          placeholder="********"
        />
        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          inputType="password"
          name="confirmPassword"
          label="Confirm Password"
          placeholder="********"
        />
        <CustomButton
          variant={ButtonVariant.DEFAULT}
          text="Save"
          className="w-full"
        />
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
