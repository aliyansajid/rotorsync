import BmsModal from "@/components/modals/BmsModel";
import React from "react";

const BMS = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">BMS</h1>
        <p className="text-muted-foreground text-sm text-balance">
          View and manage all batteries in the system or add a new battery as
          needed.
        </p>
      </div>
      <BmsModal />
    </div>
  );
};

export default BMS;
