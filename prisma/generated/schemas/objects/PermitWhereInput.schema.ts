import { z } from "zod"
import { IntFilterObjectSchema } from "./IntFilter.schema"
import { DateTimeFilterObjectSchema } from "./DateTimeFilter.schema"
import { StringFilterObjectSchema } from "./StringFilter.schema"
import { JsonFilterObjectSchema } from "./JsonFilter.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PermitWhereInput> = z
  .object({
    AND: z
      .union([
        z.lazy(() => PermitWhereInputObjectSchema),
        z.lazy(() => PermitWhereInputObjectSchema).array(),
      ])
      .optional(),
    OR: z
      .lazy(() => PermitWhereInputObjectSchema)
      .array()
      .optional(),
    NOT: z
      .union([
        z.lazy(() => PermitWhereInputObjectSchema),
        z.lazy(() => PermitWhereInputObjectSchema).array(),
      ])
      .optional(),
    id: z.union([z.lazy(() => IntFilterObjectSchema), z.number()]).optional(),
    createdAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    updatedAt: z.union([z.lazy(() => DateTimeFilterObjectSchema), z.coerce.date()]).optional(),
    name: z.union([z.lazy(() => StringFilterObjectSchema), z.string()]).optional(),
    requirements: z.lazy(() => JsonFilterObjectSchema).optional(),
  })
  .strict()

export const PermitWhereInputObjectSchema = Schema
