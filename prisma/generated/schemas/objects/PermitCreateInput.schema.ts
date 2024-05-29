import { z } from "zod"
import { JsonNullValueInputSchema } from "../enums/JsonNullValueInput.schema"

import type { Prisma } from "@prisma/client"

const literalSchema = z.union([z.string(), z.number(), z.boolean()])
const jsonSchema: z.ZodType<Prisma.InputJsonValue> = z.lazy(() =>
  z.union([literalSchema, z.array(jsonSchema.nullable()), z.record(jsonSchema.nullable())])
)

const Schema: z.ZodType<Prisma.PermitCreateInput> = z
  .object({
    createdAt: z.coerce.date().optional(),
    updatedAt: z.coerce.date().optional(),
    name: z.string(),
    requirements: z.union([z.lazy(() => JsonNullValueInputSchema), jsonSchema]),
  })
  .strict()

export const PermitCreateInputObjectSchema = Schema
