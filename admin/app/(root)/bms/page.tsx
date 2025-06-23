"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { columns } from "@/components/data-table/columns-bms";
import { DataTable } from "@/components/data-table/data-table";
import { toast } from "sonner";
import { BmsModal } from "@/components/modals/BmsModal";
import { Bms } from "@/components/data-table/schema";

const BMS = () => {
  const [bms, setBms] = useState<Bms[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchBms() {
      try {
        const response = await axiosInstance.get("/bms");
        setBms(response.data.bms);
      } catch (error: any) {
        toast.error(
          error.response?.data?.error || "Failed to fetch BMS entries."
        );
      } finally {
        setIsLoading(false);
      }
    }
    fetchBms();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">BMS</h1>
          <p className="text-muted-foreground text-sm text-balance">
            View and manage all batteries in the system or add a new battery as
            needed.
          </p>
        </div>
        <BmsModal onBmsAdded={() => window.location.reload()} />
      </div>
      <DataTable data={bms} columns={columns} />
    </div>
  );
};

export default BMS;
