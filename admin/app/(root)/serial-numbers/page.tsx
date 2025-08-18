import { DataTable } from "@/components/data-table/data-table";
import { serialNumberColumns } from "@/components/data-table/serial-number-columns";
import AddSerialNumber from "@/components/dialogs/AddSerialNumber";
import { getSerialNumbers } from "@/app/actions/serialNumberActions";
import { toast } from "sonner";

const SerialNumberPage = async () => {
  const result = await getSerialNumbers();
  const serialNumbers = result.success ? result.data : [];

  if (!result.success) {
    toast.error("Failed to fetch serial numbers");
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Serial Numbers</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Manage helicopter and trailer serial numbers
          </p>
        </div>
        <AddSerialNumber />
      </div>

      <DataTable data={serialNumbers || []} columns={serialNumberColumns} />
    </div>
  );
};

export default SerialNumberPage;
