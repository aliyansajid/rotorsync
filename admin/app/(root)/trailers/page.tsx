"use client";

import { useState, useEffect } from "react";
import axiosInstance from "@/lib/axios";
import { columns } from "@/components/data-table/columns-trailer";
import { DataTable } from "@/components/data-table/data-table";
import { toast } from "sonner";
import { TrailerModal } from "@/components/modals/TrailerModal";
import { Trailer } from "@/components/data-table/schema";

const Trailers = () => {
  const [trailers, setTrailers] = useState<Trailer[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchTrailers() {
      try {
        const response = await axiosInstance.get("/trailers");
        setTrailers(response.data.trailers);
      } catch (error: any) {
        toast.error(error.response?.data?.error || "Failed to fetch trailers.");
      } finally {
        setIsLoading(false);
      }
    }
    fetchTrailers();
  }, []);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-2">
          <h1 className="text-2xl font-semibold">Trailers</h1>
          <p className="text-muted-foreground text-sm text-balance">
            View and manage all trailers in the system or add a new trailer as
            needed.
          </p>
        </div>
        <TrailerModal onTrailerAdded={() => window.location.reload()} />
      </div>
      <DataTable data={trailers} columns={columns} />
    </div>
  );
};

export default Trailers;
