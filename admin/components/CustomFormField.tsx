"use client";

import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "./ui/form";
import { Input } from "./ui/input";
import { Control } from "react-hook-form";
import { Select, SelectContent, SelectTrigger, SelectValue } from "./ui/select";
import { Slider } from "./ui/slider";

type CustomFormFieldProps = {
  control: Control<any>;
  fieldType: FormFieldType;
  type?: string;
  name: string;
  label?: string;
  placeholder?: string;
  children?: React.ReactNode;
};

export enum FormFieldType {
  INPUT = "input",
  CHECKBOX = "checkbox",
  SELECT = "select",
  SLIDER = "slider",
}

const RenderField = ({
  field,
  props,
}: {
  field: any;
  props: CustomFormFieldProps;
}) => {
  const { fieldType, type, placeholder, children } = props;

  switch (fieldType) {
    case FormFieldType.INPUT:
      return (
        <FormControl>
          <Input {...field} type={type} placeholder={placeholder} />
        </FormControl>
      );

    case FormFieldType.SELECT:
      return (
        <Select onValueChange={field.onChange} defaultValue={field.value}>
          <FormControl>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={placeholder} />
            </SelectTrigger>
          </FormControl>
          <SelectContent>
            <SelectContent>{children}</SelectContent>
          </SelectContent>
        </Select>
      );

    case FormFieldType.SLIDER:
      return (
        <FormControl>
          <div className="flex items-center gap-2">
            <Slider
              value={[field.value]}
              onValueChange={(value) => field.onChange(value[0])}
              min={0}
              max={100}
              step={1}
              className="w-full"
            />
            <span className="text-sm text-muted-foreground">
              {field.value}%
            </span>
          </div>
        </FormControl>
      );

    default:
      return null;
  }
};

const CustomFormField = (props: CustomFormFieldProps) => {
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
          <RenderField field={field} props={props} />
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default CustomFormField;
