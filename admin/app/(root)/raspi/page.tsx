import { DataTable } from "@/components/data-table/data-table";
import AddRaspi from "@/components/dialogs/AddRaspi";
import { raspiColumns } from "@/components/data-table/raspi-columns";
import { getRaspis } from "@/app/actions/raspiActions";
import { Loader2 } from "lucide-react";
import { Suspense } from "react";

// Loading component
function RaspiTableLoading() {
  return (
    <div className="h-screen flex flex-col items-center justify-center gap-2">
      <Loader2 className="animate-spin" size={32} />
      <p className="text-sm text-muted-foreground text-center">Loading...</p>
    </div>
  );
}

// Main data component
async function RaspiTable() {
  const response = await getRaspis();

  // Handle error case
  if (!response.success) {
    return (
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold">Raspi Devices</h1>
            <p className="text-muted-foreground text-sm text-balance">
              Manage your Raspi sensor configurations
            </p>
          </div>
          <AddRaspi />
        </div>

        <div className="flex items-center justify-center h-64 bg-muted/50 rounded-lg">
          <div className="text-center gap-1">
            <h3 className="text-lg font-medium text-muted-foreground">
              Server Error
            </h3>
            <p className="text-sm text-muted-foreground">{response.error}</p>
          </div>
        </div>
      </div>
    );
  }

  const raspis = response.data || [];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold">Raspi Devices</h1>
          <p className="text-muted-foreground text-sm text-balance">
            Manage your Raspi sensor configurations
          </p>
        </div>
        <AddRaspi />
      </div>

      <DataTable data={raspis} columns={raspiColumns} />
    </div>
  );
}

const Raspi = () => {
  return (
    <Suspense fallback={<RaspiTableLoading />}>
      <RaspiTable />
    </Suspense>
  );
};

export default Raspi;
