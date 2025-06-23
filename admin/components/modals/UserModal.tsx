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
import UserForm from "../forms/UserForm";
import { Button } from "../ui/button";

interface UserModalProps {
  userId?: string;
  isOpen?: boolean;
  onOpenChange?: (open: boolean) => void;
  onUserAdded?: () => void;
}

export function UserModal({
  userId,
  isOpen,
  onOpenChange,
  onUserAdded,
}: UserModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      {!userId && (
        <DialogTrigger asChild>
          <Button>
            <PlusCircle />
            Add
          </Button>
        </DialogTrigger>
      )}
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle>{userId ? "Edit User" : "Create New User"}</DialogTitle>
          <DialogDescription>
            {userId
              ? "Update the details below to edit the user."
              : "Fill out the form below to add a new user to the system."}
          </DialogDescription>
        </DialogHeader>
        <UserForm userId={userId} onUserAdded={onUserAdded} />
      </DialogContent>
    </Dialog>
  );
}
