"use client"

import Link from "next/link"

import { cn } from "@/lib/utils"

import { Playlist } from "../data/playlists"
import one from "@/components/assets/1.png"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import Image from "next/image"
import { ChevronLeftIcon, ChevronsLeftIcon } from "lucide-react"

interface SidebarProps extends React.HTMLAttributes<HTMLDivElement> {
  playlists: Playlist[]
}

export function Sidebar({ className, playlists }: SidebarProps) {
  return (
    <div className={cn("pb-12", className)}>
      <div className="space-y-4 py-4">
        <div className="flex items-center justify-between px-3 py-2">
          <Link href="/" className="flex items-center space-x-2">
            <Image
            src={one}
            alt="logo"
            width="50"
            height="50"
            />
            <h1 className="inline-block font-bold uppercase font-[3rem]">Rnet</h1>
          </Link>
          <ChevronsLeftIcon/>
        </div>
        <div className="px-5">
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Admin</AccordionTrigger>
              <AccordionContent>
                Master
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Procurment</AccordionTrigger>
              <AccordionContent>
                Master
              </AccordionContent>
              <AccordionContent>
                Transaction
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Store</AccordionTrigger>
              <AccordionContent>
                Master
              </AccordionContent>
              <AccordionContent>
                Transaction
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Sub-contract</AccordionTrigger>
              <AccordionContent>
                Master
              </AccordionContent>
              <AccordionContent>
                Transaction
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Client Billing</AccordionTrigger>
              <AccordionContent>
                Transaction
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Finance</AccordionTrigger>
              <AccordionContent>
                Master
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Budget</AccordionTrigger>
              <AccordionContent>
                Master
              </AccordionContent>
              <AccordionContent>
                Transaction
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Feedback</AccordionTrigger>
              <AccordionContent>
                Master
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>Plant-Machinery</AccordionTrigger>
              <AccordionContent>
                Master
              </AccordionContent>
              <AccordionContent>
                Transaction
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </div>
  )
}
