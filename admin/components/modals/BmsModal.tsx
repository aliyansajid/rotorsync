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

interface BmsModalProps {
  bmsId?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onBmsAdded?: () => void;
}

export function BmsModal({
  bmsId,
  isOpen,
  onOpenChange,
  onBmsAdded,
}: BmsModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {!bmsId && (
        <DialogTrigger asChild>
          <Button>
            <PlusCircle />
            Add
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{bmsId ? "Edit BMS" : "Add New BMS"}</DialogTitle>
          <DialogDescription>
            {bmsId
              ? "Update the details below to edit the BMS."
              : "Fill out the form below to add a new BMS to the system."}
          </DialogDescription>
        </DialogHeader>
        <BmsForm bmsId={bmsId} onBmsAdded={onBmsAdded} />
      </DialogContent>
    </Dialog>
  );
}

export default BmsModal;
