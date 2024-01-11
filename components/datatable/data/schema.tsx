import { z } from "zod"

export const taskSchema = z.object({
  id: z.string(),
  propertyName: z.string(),
  propertyType: z.string(),
  ownerName: z.string(),
  brokerName: z.string(),
  customerName: z.string(),
  status: z.string(),
  label: z.string(),
  priority: z.string(),
})
export const brokerSchema = z.object({
  id: z.string(),
  brokerName: z.string(),
  age: z.string(),
  gender: z.string(),
  phone: z.string(),
  email: z.string(),
  allotedArea: z.string(),
})

export type Task = z.infer<typeof taskSchema>
export type Broker = z.infer<typeof brokerSchema>