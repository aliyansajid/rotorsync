"use client";

import { ColumnDef } from "@tanstack/react-table";
import { DataTableColumnHeader } from "./column-header";
import { DataTableRowActions } from "./row-actions";
import { format } from "date-fns";
import { Mopeka } from "./schema";

export const columns: ColumnDef<Mopeka>[] = [
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
    accessorKey: "sensorId",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Sensor ID" />
    ),
    cell: ({ row }) => <div>{row.getValue("sensorId")}</div>,
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
    accessorKey: "tankSize",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tank Size (in)" />
    ),
    cell: ({ row }) => <div>{row.getValue("tankSize")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "tankSizeGal",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Tank Size (gal)" />
    ),
    cell: ({ row }) => <div>{row.getValue("tankSizeGal")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "heightOffset",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Height Offset" />
    ),
    cell: ({ row }) => <div>{row.getValue("heightOffset")}</div>,
    enableSorting: false,
  },
  {
    accessorKey: "medium",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Medium" />
    ),
    cell: ({ row }) => <div>{row.getValue("medium")}</div>,
    enableSorting: false,
  },
  // {
  //   accessorKey: "createdAt",
  //   header: ({ column }) => (
  //     <DataTableColumnHeader column={column} title="Created At" />
  //   ),
  //   cell: ({ row }) => {
  //     const date = new Date(row.getValue("createdAt"));
  //     return <div>{format(date, "MMMM d, yyyy")}</div>;
  //   },
  //   enableSorting: false,
  // },
  {
    id: "actions",
    cell: ({ row }) => (
      <DataTableRowActions
        row={row}
        deleteEndpoint="/mopeka"
        entityName="Mopeka Sensor"
        editPath="/mopeka/edit"
      />
    ),
  },
];
