"use client"

import { playlists } from "@/data/playlists"

import { DataTable } from "@/components/datatable/DataTable"
import { columns } from "@/components/datatable/columns"
import { Sidebar } from "@/components/sidebar"
import { SiteHeader } from "@/components/site-header"

export default function MusicPage() {
  const data = [
    {
      mrisCode:"1234",
      requisitionDate:"12-12-12",
      requisitionBy:"Abc",
      category:"1",
      version:1,
      remarks:"remarks",
      createdBy:"DEF",
      createdDate:"12-12-12",
      approvedBy:"GHI",
      approvalStatus:"approved",
      docStatus:"submit",
      issuedBy:"JKL",
      mrisStatus:"issued",
      receivedBy:"MNO"
    },
    {
      mrisCode:"1234",
      requisitionDate:"12-12-12",
      requisitionBy:"Abc",
      category:"1",
      version:1,
      remarks:"remarks",
      createdBy:"DEF",
      createdDate:"12-12-12",
      approvedBy:"GHI",
      approvalStatus:"approved",
      docStatus:"draft",
      issuedBy:"JKL",
      mrisStatus:"pending",
      receivedBy:"MNO"
    },
  ]
  return (
    <>
      <div className="hidden md:block">
        <div className="border-t">
          <div className="bg-background">
            <div className="grid lg:grid-cols-5">
              <Sidebar playlists={playlists} className="hidden lg:block" />
              <div className="col-span-3 lg:col-span-4 lg:border-l">
                <div className="h-full px-4 py-6 lg:px-8">
                  <div className="space-between flex flex-col items-center justify-center">
                    <SiteHeader />
                    
                    <div className="flex space-x-4 mt-[200px]  pb-4">
                      <DataTable data={data} columns={columns} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
