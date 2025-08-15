"use client";

import { Row } from "@tanstack/react-table";
import { Loader2, MoreHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { toast } from "sonner";
import { serialNumberSchema } from "./schema";
import { deleteSerialNumber } from "@/app/actions/serialNumberAction";
import SerialNumberForm from "../forms/SerialNumberForm";

interface SerialNumberRowActionsProps<TData> {
  row: Row<TData>;
}

export function SerialNumberRowActions<TData>({
  row,
}: SerialNumberRowActionsProps<TData>) {
  const serialNumber = serialNumberSchema.parse(row.original);
  const [showEditDialog, setShowEditDialog] = useState(false);
  const [showDeleteDialog, setShowDeleteDialog] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  const handleDelete = async () => {
    setIsDeleting(true);
    try {
      const result = await deleteSerialNumber(serialNumber.id);

      if (result.success) {
        toast.success(result.message);
        setShowDeleteDialog(false);
      } else {
        toast.error(result.error);
      }
    } catch (error) {
      toast.error("Failed to delete serial number");
    } finally {
      setIsDeleting(false);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(serialNumber.serialNumber);
    toast.success("Serial number copied to clipboard");
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[160px]">
          <DropdownMenuItem onClick={() => setShowEditDialog(true)}>
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleCopy}>
            Copy Serial Number
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => setShowDeleteDialog(true)}
            className="text-destructive"
          >
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <Dialog open={showEditDialog} onOpenChange={setShowEditDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Serial Number</DialogTitle>
            <DialogDescription>
              Update the serial number information below.
            </DialogDescription>
          </DialogHeader>
          <SerialNumberForm
            serialNumberId={serialNumber.id}
            onSuccess={() => setShowEditDialog(false)}
          />
        </DialogContent>
      </Dialog>

      <AlertDialog open={showDeleteDialog} onOpenChange={setShowDeleteDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the
              serial number {serialNumber.serialNumber}.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel disabled={isDeleting}>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleDelete}
              disabled={isDeleting}
              className="bg-destructive hover:bg-red-700"
            >
              {isDeleting ? (
                <Loader2 className="animate-spin" size={20} />
              ) : (
                "Delete"
              )}
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
