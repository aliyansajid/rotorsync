"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type CustomButtonProps = {
  variant: ButtonVariants;
  text: string;
  type?: "button" | "reset" | "submit";
  disabled?: boolean;
  isLoading?: boolean;
};

export enum ButtonVariants {
  DEFAULT = "default",
  DESTRUCTIVE = "destructive",
  OUTLINE = "outline",
  SECONDARY = "secondary",
  GHOST = "ghost",
  LINK = "link",
}

const CustomButton = (props: CustomButtonProps) => {
  const { variant, text, type, disabled, isLoading } = props;
  return (
    <Button
      variant={variant}
      type={type}
      disabled={disabled || isLoading}
      size={"lg"}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="animate-spin" />
          {text}
        </span>
      ) : (
        text
      )}
    </Button>
  );
};

export default CustomButton;
