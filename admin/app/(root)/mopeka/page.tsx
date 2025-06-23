"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { columns } from "@/components/data-table/columns-mopeka";
import { DataTable } from "@/components/data-table/data-table";
import { toast } from "sonner";
import { ButtonVariants, CustomButton } from "@/components/CustomButton";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";
import { Mopeka as MopekaSchema } from "@/components/data-table/schema";

const Mopeka = () => {
  const [mopeka, setMopeka] = useState<MopekaSchema[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    async function fetchMopeka() {
      try {
        const response = await axiosInstance.get("/mopeka");
        setMopeka(response.data.mopeka);
      } catch (error: any) {
        toast.error(
          error.response?.data?.error || "Failed to fetch Mopeka sensors."
        );
      } finally {
        setIsLoading(false);
      }
    }
    fetchMopeka();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Mopeka Sensors</h1>
          <p className="text-muted-foreground text-sm text-balance">
            View and manage all Mopeka sensors in the system or add a new sensor
            as needed.
          </p>
        </div>
        <CustomButton
          variant={ButtonVariants.DEFAULT}
          text="Add"
          icon={<PlusCircle />}
          onClick={() => router.push("/mopeka/create")}
        />
      </div>
      <DataTable data={mopeka} columns={columns} />
    </div>
  );
};

export default Mopeka;
