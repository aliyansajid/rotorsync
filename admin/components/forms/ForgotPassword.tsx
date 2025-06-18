"use client";

import { Form } from "../ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import z from "zod";
import CustomButton, { ButtonVariants } from "../CustomButton";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import Link from "next/link";
import { useState } from "react";
import { Send } from "lucide-react";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
});

const ForgotPasswordForm = () => {
  const [isLoading, setIsLoading] = useState(false);

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
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={"flex flex-col gap-6"}
      >
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Reset Password</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email and we'll send you a link to reset your password.
          </p>
        </div>

        <CustomFormField
          control={form.control}
          fieldType={FormFieldType.INPUT}
          type="email"
          name="email"
          label="Email"
          placeholder="m@example.com"
        />

        <CustomButton
          variant={ButtonVariants.DEFAULT}
          text={isLoading ? "Sending..." : "Send Reset Link"}
          icon={<Send />}
          disabled={isLoading}
          isLoading={isLoading}
        />

        <Link
          href="/login"
          className="text-sm text-center underline-offset-4 hover:underline"
        >
          Back to login
        </Link>
      </form>
    </Form>
  );
};

export default ForgotPasswordForm;
