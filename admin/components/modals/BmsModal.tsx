"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { PlusCircle } from "lucide-react";
import BmsForm from "../forms/BmsForm";
import { Button } from "../ui/button";

const BmsModal = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>
          <PlusCircle />
          Add
        </Button>
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
