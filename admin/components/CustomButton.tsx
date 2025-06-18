"use client";

import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";

type CustomButtonProps = {
  variant: ButtonVariants;
  text: string;
  icon?: React.ReactNode;
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void;
  type?: "button" | "reset" | "submit";
};

enum ButtonVariants {
  DEFAULT = "default",
  DESTRUCTIVE = "destructive",
  OUTLINE = "outline",
  SECONDARY = "secondary",
  GHOST = "ghost",
  LINK = "link",
}

const CustomButton = ({
  variant,
  text,
  icon,
  type,
  disabled,
  isLoading,
  onClick,
}: CustomButtonProps) => {
  return (
    <Button
      variant={variant}
      type={type}
      disabled={disabled || isLoading}
      size={"lg"}
      onClick={onClick}
    >
      {isLoading ? (
        <span className="flex items-center gap-2">
          <Loader2 className="animate-spin" />
          {text}
        </span>
      ) : (
        <span className="flex items-center gap-2">
          {icon}
          {text}
        </span>
      )}
    </Button>
  );
};

export { CustomButton, ButtonVariants };
