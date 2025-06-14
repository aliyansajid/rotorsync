"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form } from "../ui/form";
import CustomFormField, { FormFieldType } from "../CustomFormField";
import CustomButton, { ButtonVariants } from "../CustomButton";
import { useState } from "react";

const formSchema = z.object({
  email: z
    .string()
    .min(1, "Email is required")
    .email("Please enter a valid email"),
  password: z.string().min(1, "Password is required"),
});

const LoginForm = () => {
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
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
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
          </p>
        </div>
        <div className="grid gap-6">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            type="email"
            name="email"
            label="Email"
            placeholder="m@example.com"
          />

          <div className="grid gap-2">
            <CustomFormField
              control={form.control}
              fieldType={FormFieldType.INPUT}
              type="password"
              name="password"
              label="Password"
              placeholder="********"
            />
            <a
              href="/forgot-password"
              className="text-sm underline-offset-4 hover:underline"
            >
              Forgot your password?
            </a>
          </div>
          <CustomButton
            variant={ButtonVariants.DEFAULT}
            text={isLoading ? "Logging..." : "Login"}
            disabled={isLoading}
            isLoading={isLoading}
          />
        </div>
      </form>
    </Form>
  );
};

export default LoginForm;
