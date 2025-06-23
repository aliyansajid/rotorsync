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

interface TrailerModalProps {
  trailerId?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onTrailerAdded?: () => void;
}

export function TrailerModal({
  trailerId,
  isOpen,
  onOpenChange,
  onTrailerAdded,
}: TrailerModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {!trailerId && (
        <DialogTrigger asChild>
          <Button>
            <PlusCircle />
            Add
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>
            {trailerId ? "Edit Trailer" : "Add New Trailer"}
          </DialogTitle>
          <DialogDescription>
            {trailerId
              ? "Update the details below to edit the trailer."
              : "Fill out the form below to add a new trailer to the system."}
          </DialogDescription>
        </DialogHeader>
        <TrailerForm trailerId={trailerId} onTrailerAdded={onTrailerAdded} />
      </DialogContent>
    </Dialog>
  );
}

export default TrailerModal;
