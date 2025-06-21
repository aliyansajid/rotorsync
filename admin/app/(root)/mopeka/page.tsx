"use client";

import { ButtonVariants, CustomButton } from "@/components/CustomButton";
import { PlusCircle } from "lucide-react";
import { useRouter } from "next/navigation";

const Mopeka = () => {
  const router = useRouter();
  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-col gap-2">
        <h1 className="text-2xl font-bold">Mopeka</h1>
        <p className="text-muted-foreground text-sm text-balance">
          View and manage all mopeka sensors in the system or add a new as
          needed.
        </p>
      </div>
      <CustomButton
        variant={ButtonVariants.DEFAULT}
        text="Add"
        icon={<PlusCircle />}
        onClick={() => router.push("/mopeka/create")}
      />
    </div>
  );
};

export default Mopeka;
