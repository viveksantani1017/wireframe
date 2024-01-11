import { ColumnDef } from "@tanstack/react-table"

import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"

import {  docStatuses, mrisStatuses, priorities, statuses } from "./data/data"
import { Task } from "./data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"

export const columns: ColumnDef<Task>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //       className="translate-y-[2px]"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "mrisCode",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="MRIS-Code" />
    ),
  },
  {
    accessorKey: "requisitionDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requistion Date" />
    ),
  },
  {
    accessorKey: "requisitionBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Requistion By" />
    ),
  },
  {
    accessorKey: "category",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Category" />
    ),
  },
  {
    accessorKey: "version",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Version" />
    ),
  },
  {
    accessorKey: "remarks",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Remarks" />
    ),
  },
  {
    accessorKey: "createdBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created By" />
    ),
  },
  {
    accessorKey: "createdDate",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Created Date" />
    ),
  },
  {
    accessorKey: "approvedBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Approved By" />
    ),
  },
  {
    accessorKey: "approvalStatus",
    enableSorting: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Approval Status" />
      ),
      cell: ({ row }) => {
        const status = statuses.find(
          (status) => status.value === row.getValue("approvalStatus")
          )
          
          if (!status) {
            return null
          }
          
          return (
        <div className="flex w-[100px] items-center">
          
          <Badge variant={"secondary"}>{status.icon && (
            <status.icon className="mr-2 h-4 w-4 " />
            )}{status.label}</Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  
  {
    accessorKey: "docStatus",
    enableSorting: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Doc Status" />
    ),
    cell: ({ row }) => {
      const status = docStatuses.find(
        (status) => status.value === row.getValue("docStatus")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          
          <Badge variant={"secondary"}>{status.icon && (
            <status.icon className="mr-2 h-4 w-4 " />
          )}{status.label}</Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "issuedBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Issued By" />
    ),
  },
  {
    accessorKey: "mrisStatus",
    enableSorting: false,
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="MRIS Status" />
    ),
    cell: ({ row }) => {
      const status = mrisStatuses.find(
        (status) => status.value === row.getValue("mrisStatus")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          
          <Badge variant={"secondary"}>{status.icon && (
            <status.icon className="mr-2 h-4 w-4 " />
          )}{status.label}</Badge>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "receivedBy",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Received  By" />
    ),
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]