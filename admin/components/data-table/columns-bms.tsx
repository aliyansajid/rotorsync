"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./column-header";
import { DataTableRowActions } from "./row-actions";
import { format } from "date-fns";
import { Bms } from "./schema";
import BmsModal from "../modals/BmsModal";

export const columns: ColumnDef<Bms>[] = [
  {
    id: "serial",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sr." />
    ),
    cell: ({ row }) => <div>{row.index + 1}</div>,
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "name",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("name")}</div>,
    enableSorting: true,
  },
  {
    accessorKey: "deviceName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Device Name" />
    ),
    cell: ({ row }) => <div>{row.getValue("deviceName")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "mqttTopic",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="MQTT Topic" />
    ),
    cell: ({ row }) => <div>{row.getValue("mqttTopic")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "trailer",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Trailer" />
    ),
    cell: ({ row }) => {
      const trailer = row.getValue("trailer") as { name: string };
      return <div>{trailer.name}</div>;
    },
    enableSorting: false,
  },
  {
    accessorKey: "threshold",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Threshold (%)" />
    ),
    cell: ({ row }) => <div>{row.getValue("threshold")}%</div>,
    enableSorting: false,
  },
  {
    accessorKey: "createdAt",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created At" />
    ),
    cell: ({ row }) => {
      const date = new Date(row.getValue("createdAt"));
      return <div>{format(date, "MMMM d, yyyy")}</div>;
    },
    enableSorting: false,
  },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        deleteEndpoint="/bms"
        entityName="BMS"
        EditModal={(props) => <BmsModal bmsId={props.id} {...props} />}
      />
    ),
  },
];
