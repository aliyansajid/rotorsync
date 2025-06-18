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

const TrailerModal = () => {
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
          <DialogTitle>Add New Trailer</DialogTitle>
          <DialogDescription>
            Fill out the form below to add a new trailer to the system.
          </DialogDescription>
        </DialogHeader>
        <TrailerForm />
      </DialogContent>
    </Dialog>
  );
};

export default TrailerModal;
