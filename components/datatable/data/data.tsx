import {
    ArrowDownIcon,
    ArrowRightIcon,
    ArrowUpIcon,
    CheckCircledIcon,
    CircleIcon,
    CrossCircledIcon,
    QuestionMarkCircledIcon,
    StopwatchIcon,
  } from "@radix-ui/react-icons"
import { SaveIcon, SendIcon } from "lucide-react"
  
  
  
  export const statuses = [
    {
      value: "approved",
      label: "approved",
      icon: CheckCircledIcon,
    },
    {
      value: "waiting",
      label: "waiting",
      icon: QuestionMarkCircledIcon,
    },
  ]
  export const docStatuses = [
    {
      value: "draft",
      label: "draft",
      icon: SaveIcon,
    },
    {
      value: "submit",
      label: "submit",
      icon: SendIcon,
    },
  ]
  export const mrisStatuses = [
    {
      value: "issued",
      label: "issued",
      icon: CheckCircledIcon,
    },
    {
      value: "pending",
      label: "pending",
      icon: QuestionMarkCircledIcon,
    },
  ]
  
  export const priorities = [
    {
      label: "Low",
      value: "low",
      icon: ArrowDownIcon,
    },
    {
      label: "Medium",
      value: "medium",
      icon: ArrowRightIcon,
    },
    {
      label: "High",
      value: "high",
      icon: ArrowUpIcon,
    },
  ]