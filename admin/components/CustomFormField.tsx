"use client";

import { useState } from "react";
import { Control } from "react-hook-form";
import { Input } from "@/components/ui/input";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

interface CustomProps {
  control: Control<any>;
  fieldType: FormFieldType;
  inputType?: string;
  name: string;
  label?: string;
  placeholder?: string;
  className?: string;
  children?: React.ReactNode;
  onChange?: (value: string) => void;
}

enum FormFieldType {
  INPUT = "input",
  TEXTAREA = "textarea",
  SELECT = "select",
  RADIO = "radio",
  CHECKBOX = "checkbox",
}

const RenderField = ({ field, props }: { field: any; props: CustomProps }) => {
  const [showPassword, setShowPassword] = useState(false);

  switch (props.fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <div className="relative">
            <Input
              {...field}
              placeholder={props.placeholder}
              type={
                props.inputType === "password" && showPassword
                  ? "text"
                  : props.inputType
              }
              // Handle number inputs properly
              onChange={(e) => {
                if (props.inputType === "number") {
                  // Convert to number, handle empty string
                  const value =
                    e.target.value === "" ? "" : Number(e.target.value);
                  field.onChange(value);
                } else {
                  field.onChange(e.target.value);
                }
              }}
              value={
                props.inputType === "number" && field.value === ""
                  ? ""
                  : field.value
              }
            />
            {props.inputType === "password" && (
              <Button
                type="button"
                variant="ghost"
                size="icon"
                className="absolute right-0 top-1/2 -translate-y-1/2 hover:rounded-full"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? (
                  <EyeOff size={16} className="text-muted-foreground" />
                ) : (
                  <Eye size={16} className="text-muted-foreground" />
                )}
              </Button>
            )}
          </div>
        </FormControl>
      );

    case FormFieldType.SELECT:
      return (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger className={props.className}>
              <SelectValue placeholder="Select a verified email to display" />
            </SelectTrigger>
          </FormControl>
          <SelectContent>{props.children}</SelectContent>
        </Select>
      );

    default:
      return null;
  }
};

const CustomFormField = (props: CustomProps) => {
  const { control, fieldType, name, label } = props;
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {fieldType !== FormFieldType.CHECKBOX && label && (
            <FormLabel>{label}</FormLabel>
          )}
          <RenderField props={props} field={field} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export { CustomFormField, FormFieldType };
