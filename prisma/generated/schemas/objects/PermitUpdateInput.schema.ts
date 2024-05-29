import { z } from "zod"
import { DateTimeFieldUpdateOperationsInputObjectSchema } from "./DateTimeFieldUpdateOperationsInput.schema"
import { StringFieldUpdateOperationsInputObjectSchema } from "./StringFieldUpdateOperationsInput.schema"
import { JsonNullValueInputSchema } from "../enums/JsonNullValueInput.schema"

import type { Prisma } from "@prisma/client"

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())])
)

const Schema: z.ZodType<Prisma.PermitUpdateInput> = z
  .object({
    createdAt: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    updatedAt: z
      .union([z.coerce.date(), z.lazy(() => DateTimeFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    name: z
      .union([z.string(), z.lazy(() => StringFieldUpdateOperationsInputObjectSchema)])
      .optional(),
    requirements: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]).optional(),
  })
  .strict()

export const PermitUpdateInputObjectSchema = Schema
