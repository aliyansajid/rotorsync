"use client";

import MopekaForm from "@/components/forms/MopekaForm";
import { useRouter } from "next/navigation";

const AddMopekaSensor = () => {
  const router = useRouter();
  return <MopekaForm onMopekaAdded={() => router.push("/mopeka")} />;
};

export default AddMopekaSensor;
