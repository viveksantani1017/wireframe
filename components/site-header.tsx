import { BellIcon } from "lucide-react"

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ThemeToggle } from "@/components/theme-toggle"

import ProfileButton from "./ui/ProfileButton"
import { Button } from "./ui/button"

export function SiteHeader() {
  return (
    <header className="bg-background sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <div className="flex flex-1 items-center justify-start space-x-4">
          <nav className="flex items-center justify-center space-x-3">
            <ThemeToggle />
            <Select>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Riviera" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Riviera</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Riviera" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Riviera</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-[300px]">
                <SelectValue placeholder="Select Or type a command" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="light">Riviera</SelectItem>
              </SelectContent>
            </Select>
            <div className="flex items-center justify-center ">
              <Button variant="ghost" size="icon">
                <BellIcon />
              </Button>
              <ProfileButton />
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
