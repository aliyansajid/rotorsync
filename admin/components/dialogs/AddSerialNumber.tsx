"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ButtonVariant, CustomButton } from "../CustomButton";
import SerialNumberForm from "../forms/SerialNumberForm";
import { useState } from "react";

const AddSerialNumber = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CustomButton
          variant={ButtonVariant.DEFAULT}
          text="Add serial number"
        />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Serial Number Registration</DialogTitle>
          <DialogDescription>
            Register a new asset serial number in the system
          </DialogDescription>
        </DialogHeader>
        <SerialNumberForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default AddSerialNumber;
