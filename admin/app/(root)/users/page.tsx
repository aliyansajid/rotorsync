"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { columns } from "@/components/data-table/columns-user";
import { DataTable } from "@/components/data-table/data-table";
import { toast } from "sonner";
import { UserModal } from "@/components/modals/UserModal";
import { User } from "@/components/data-table/schema";

const Users = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const response = await axiosInstance.get("/users");
        setUsers(response.data.users);
      } catch (error: any) {
        toast.error(error.response?.data?.error || "Failed to fetch users.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchUsers();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Users</h1>
          <p className="text-muted-foreground text-sm text-balance">
            View all users in the system and add new users as needed.
          </p>
        </div>
        <UserModal />
      </div>
      <DataTable data={users} columns={columns} />
    </div>
  );
};

export default Users;
