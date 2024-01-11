import { DotsHorizontalIcon } from "@radix-ui/react-icons"
import { Row } from "@tanstack/react-table"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { AlertDialog } from "../ui/alert-dialog"
import { DeleteIcon, Edit2Icon, Trash2Icon } from "lucide-react"

interface DataTableRowActionsProps<TData> {
  row: Row<TData>
}

export function DataTableRowActions<TData>({
  row,
}: DataTableRowActionsProps<TData>) {
  // const task = taskSchema.parse(row.original)

  return (
    // <DropdownMenu>
    //   <DropdownMenuTrigger asChild>
    //     <Button
    //       variant="ghost"
    //       className="flex h-8 w-8 p-0 data-[state=open]:bg-muted"
    //     >
    //       <DotsHorizontalIcon className="h-4 w-4" />
    //       <span className="sr-only">Open menu</span>
    //     </Button>
    //   </DropdownMenuTrigger>
    //   <DropdownMenuContent align="end" className="w-[160px]">
    //     <DropdownMenuItem>Edit</DropdownMenuItem>
    //     <DropdownMenuSeparator />
    //     <AlertDialog>
    //     <DropdownMenuItem >
    //       Delete
    //       <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
    //     </DropdownMenuItem>
    //     </AlertDialog>
    //   </DropdownMenuContent>
    // </DropdownMenu>
    <>
    <div className="flex h-2 flex-row items-center justify-center space-x-1"> 
      <Edit2Icon/>
      <Trash2Icon/>
    </div>
    </>
  )
}