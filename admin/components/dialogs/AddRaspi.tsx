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
import { useState } from "react";
import RaspiForm from "../forms/RaspiForm";

const AddRaspi = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <CustomButton variant={ButtonVariant.DEFAULT} text="Add Raspi" />
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Add Raspi</DialogTitle>
          <DialogDescription>
            Configure your Raspi sensor settings
          </DialogDescription>
        </DialogHeader>
        <RaspiForm onSuccess={() => setOpen(false)} />
      </DialogContent>
    </Dialog>
  );
};

export default AddRaspi;
