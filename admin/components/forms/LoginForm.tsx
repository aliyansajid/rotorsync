"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form } from "@/components/ui/form";
import { CustomFormField, FormFieldType } from "@/components/CustomFormField";
import { ButtonVariant, CustomButton } from "@/components/CustomButton";
import Link from "next/link";
import { useState } from "react";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

const formSchema = z.object({
  email: z.email({ error: "Please enter a valid email" }),
  password: z.string().min(1, "Password is required"),
});

const LoginForm = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);

    try {
      const response = await signIn("credentials", {
        email: values.email,
        password: values.password,
        redirect: false,
      });

      // Check for authentication errors
      if (response?.error) {
        if (response.error === "CredentialsSignin") {
          toast.error("Invalid email or password");
        } else {
          toast.error("Authentication failed. Please try again.");
        }
        return;
      }

      if (response?.ok) {
        router.push("/");
      } else {
        toast.error("Login failed. Please try again.");
      }
    } catch (error) {
      toast.error("An unexpected error occurred. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="flex flex-col items-center gap-2 text-center">
          <h1 className="text-2xl font-bold">Login to your account</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Enter your email below to login to your account
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
        <div className="grid gap-2">
          <CustomFormField
            control={form.control}
            fieldType={FormFieldType.INPUT}
            inputType="password"
            name="password"
            label="Password"
            placeholder="********"
          />
          <Link
            href="forgot-password"
            className="text-sm underline-offset-4 hover:underline"
          >
            Forgot your password?
          </Link>
        </div>
        <CustomButton
          variant={ButtonVariant.DEFAULT}
          text="Login"
          isLoading={isLoading}
          className="w-full"
        />
      </form>
    </Form>
  );
};

export default LoginForm;
