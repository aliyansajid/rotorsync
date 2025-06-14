"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import CustomButton, { ButtonVariants } from "../CustomButton";
import Link from "next/link";
import { useState } from "react";

const formSchema = z.object({
  password: z.string().min(1, "Password is required"),
  confirmPassword: z.string().min(1, "Confirm password is required"),
});

const ResetPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      password: "",
      confirmPassword: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"flex flex-col gap-6"}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Reset your password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your new password to change
          </p>
        </div>
        <div className="grid gap-6">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="password"
            name="password"
            label="Password"
            placeholder="********"
          />

          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="password"
            name="confirmPassword"
            label="Confirm Password"
            placeholder="********"
          />

          <CustomButton
            variant={ButtonVariants.DEFAULT}
            text={isLoading ? "Resetting..." : "Reset Password"}
            disabled={isLoading}
            isLoading={isLoading}
          />
          <Link
            href="/login"
            className="text-sm text-center underline-offset-4 hover:underline"
          >
            Back to login
          </Link>
        </div>
      </form>
    </Form>
  );
};

export default ResetPasswordForm;
