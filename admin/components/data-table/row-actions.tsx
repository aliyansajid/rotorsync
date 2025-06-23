"use client";

import { Row } from "@tanstack/react-table";
import { MoreHorizontal, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useState } from "react";
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
import axiosInstance from "@/lib/axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

interface DataTableRowActionsProps<TData> {
  row: Row<TData>;
  deleteEndpoint: string;
  entityName?: string;
  EditModal?: React.ComponentType<{
    id: string;
    isOpen: boolean;
    onOpenChange: (open: boolean) => void;
    onEntityUpdated?: () => void;
  }>;
}

export function DataTableRowActions<TData>({
  row,
  deleteEndpoint,
  entityName = "item",
  EditModal,
}: DataTableRowActionsProps<TData>) {
  const data = row.original as { id: string; name?: string };
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteDialogOpen, setIsDeleteDialogOpen] = useState(false);
  const router = useRouter();

  const handleDelete = async () => {
    try {
      await axiosInstance.delete(`${deleteEndpoint}/${data.id}`);
      toast.success(`${entityName} deleted successfully`);
      router.refresh();
    } catch (error: any) {
      const errorMessage =
        error.response?.data?.error ||
        `Failed to delete ${entityName.toLowerCase()}.`;
      toast.error(errorMessage);
    }
  };

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="ghost"
            className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
          >
            <MoreHorizontal className="h-4 w-4" />
            <span className="sr-only">Open menu</span>
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {EditModal && (
            <DropdownMenuItem onClick={() => setIsEditModalOpen(true)}>
              Edit
            </DropdownMenuItem>
          )}
          <DropdownMenuSeparator />
          <DropdownMenuItem onClick={() => setIsDeleteDialogOpen(true)}>
            Delete
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      {EditModal && isEditModalOpen && (
        <EditModal
          id={data.id}
          isOpen={isEditModalOpen}
          onOpenChange={setIsEditModalOpen}
          onEntityUpdated={() => router.refresh()}
        />
      )}

      <AlertDialog
        open={isDeleteDialogOpen}
        onOpenChange={setIsDeleteDialogOpen}
      >
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete the{" "}
              {entityName.toLowerCase()} from the system.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>Delete</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
