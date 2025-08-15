"use client";

import { ColumnDef } from "@tanstack/react-table";
import { Checkbox } from "@/components/ui/checkbox";
import { AssetType } from "@/app/generated/prisma";
import { ColumnHeader } from "./column-header";
import { SerialNumber } from "./schema";
import { SerialNumberRowActions } from "./serial-number-actions";

const assetTypes = {
  HELICOPTER: {
    label: "Helicopter",
    variant: "default" as const,
  },
  TRAILER: {
    label: "Trailer",
    variant: "secondary" as const,
  },
} as const;

export const serialNumberColumns: ColumnDef<SerialNumber>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "assetType",
    header: ({ column }) => <ColumnHeader column={column} title="Type" />,
    cell: ({ row }) => {
      const assetType = assetTypes[row.getValue("assetType") as AssetType];

      if (!assetType) {
        return null;
      }

      return <div>{assetType.label}</div>;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "name",
    header: ({ column }) => <ColumnHeader column={column} title="Name" />,
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
  },
  {
    accessorKey: "serialNumber",
    header: ({ column }) => (
      <ColumnHeader column={column} title="Serial Number" />
    ),
    cell: ({ row }) => <div>{row.getValue("serialNumber")}</div>,
  },
  {
    id: "actions",
    cell: ({ row }) => <SerialNumberRowActions row={row} />,
  },
];
