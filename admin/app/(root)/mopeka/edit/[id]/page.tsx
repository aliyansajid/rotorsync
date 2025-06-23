"use client";

import MopekaForm from "@/components/forms/MopekaForm";
import { useRouter, useParams } from "next/navigation";

const EditMopekaSensor = () => {
  const router = useRouter();
  const { id } = useParams();

  return (
    <MopekaForm
      mopekaId={typeof id === "string" ? id : undefined}
      onMopekaAdded={() => router.push("/mopeka")}
    />
  );
};

export default EditMopekaSensor;
