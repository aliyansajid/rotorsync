"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import CustomButton, { ButtonVariants } from "../CustomButton";
import { PlusCircle } from "lucide-react";
import UserForm from "../forms/UserForm";

export function UserModal() {
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
          <DialogTitle>Create New User</DialogTitle>
          <DialogDescription>
            Fill out the form below to add a new user to the system.
          </DialogDescription>
        </DialogHeader>
        <UserForm />
      </DialogContent>
    </Dialog>
  );
}
