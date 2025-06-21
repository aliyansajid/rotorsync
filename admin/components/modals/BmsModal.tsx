"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CustomButton, ButtonVariants } from "../CustomButton";
import { PlusCircle } from "lucide-react";
import TrailerForm from "../forms/TrailerForm";
import BmsForm from "../forms/BmsForm";

const BmsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <CustomButton
          variant={ButtonVariants.DEFAULT}
          text="Add"
          icon={<PlusCircle />}
        />
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>Add New BMS</DialogTitle>
          <DialogDescription>
            Fill out the form below to add a new bms to the system.
          </DialogDescription>
        </DialogHeader>
        <BmsForm />
      </DialogContent>
    </Dialog>
  );
};

export default BmsModal;
