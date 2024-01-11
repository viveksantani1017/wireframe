import { Cross2Icon, PlusCircledIcon } from "@radix-ui/react-icons"
import { Table } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"

import { Input } from "@/components/ui/input"

import { DialogHeader } from "../ui/dialog"
import { DataTableFacetedFilter } from "./data-table-faced-filter"
import { DataTableViewOptions } from "./data-table-view-options"
import { priorities, statuses } from "./data/data"
import { ArrowDown } from "lucide-react"

interface DataTableToolbarProps<TData> {
  table: Table<TData>
}
export function DataTableToolbar<TData>({
  table,
}: DataTableToolbarProps<TData>) {
  const isFiltered = table.getState().columnFilters.length > 0

  return (
    <div className="flex items-center justify-between">
      <div className="flex flex-1 items-center space-x-2">
        <Input
          placeholder="Search..."
          onChange={(event) =>
            table.getColumn("propertyName")?.setFilterValue(event.target.value)
          }
          className="h-8 w-[150px] lg:w-[250px]"
        />

        {/* {table.getColumn("status") && (
          <DataTableFacetedFilter
            column={table.getColumn("status")}
            title="Status"
            options={statuses}
          />
        )}
        {table.getColumn("priority") && (
          <DataTableFacetedFilter
            column={table.getColumn("priority")}
            title="Priority"
            options={priorities}
          />
        )} */}
        {/* {isFiltered && (
          <Button
            variant="ghost"
            onClick={() => table.resetColumnFilters()}
            className="h-8 px-2 lg:px-3"
          >
            Reset
            <Cross2Icon className="ml-2 h-4 w-4" />
          </Button>
        )} */}
        
      </div>
      <div className="flex flex-2 items-center space-x-2">
       
      <Button
          className=""
          size="icon"
        >
          <PlusCircledIcon/>
        </Button>
      <Button
          className="flex-end"
          size="icon"
        >
          <ArrowDown/>
        </Button>
      <Button
          className="flex-end text-sm"
          size="icon"
        >
          PDF
        </Button>

        {/* <DataTableViewOptions table={table} /> */}
      </div>
    </div>
  )
}
