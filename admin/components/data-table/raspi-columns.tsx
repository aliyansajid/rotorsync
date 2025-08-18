"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnHeader } from "./column-header";
import { RaspiRowActions } from "./raspi-row-actions";
import { Raspi } from "./schema";

// Helper function to format date
const formatDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
};

export const raspiColumns: ColumnDef<Raspi>[] = [
  {
    id: "index",
    header: "#",
    cell: ({ row }) => {
      return <div className="font-medium">{row.index + 1}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => <ColumnHeader column={column} title="Name" />,
    cell: ({ row }) => (
      <div className="font-medium">{row.getValue("name")}</div>
    ),
    enableSorting: false,
  },
  {
    accessorKey: "deviceName",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Device Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("deviceName")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "mqttTopic",
    header: ({ column }) => <ColumnHeader column={column} title="MQTT Topic" />,
    cell: ({ row }) => <div>{row.getValue("mqttTopic")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "helicopter",
    header: ({ column }) => <ColumnHeader column={column} title="Helicopter" />,
    cell: ({ row }) => {
      const helicopter = row.original.helicopter;

      if (!helicopter) {
        return <div className="text-muted-foreground">-</div>;
      }

      return <div>{helicopter.serialNumber}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "trailer",
    header: ({ column }) => <ColumnHeader column={column} title="Trailer" />,
    cell: ({ row }) => {
      const trailer = row.original.trailer;

      if (!trailer) {
        return <div className="text-muted-foreground">-</div>;
      }

      return <div>{trailer.serialNumber}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => <ColumnHeader column={column} title="Created At" />,
    cell: ({ row }) => {
      const date = row.getValue("createdAt") as Date;
      return <div>{formatDate(date)}</div>;
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row }) => <RaspiRowActions row={row} />,
  },
];
