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
import TrailerForm from "../forms/TrailerForm";
import { Button } from "../ui/button";

const TrailerModal = () => {
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
