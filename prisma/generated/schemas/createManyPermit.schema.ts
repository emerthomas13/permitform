import { z } from "zod"
import { PermitCreateManyInputObjectSchema } from "./objects/PermitCreateManyInput.schema"

export const PermitCreateManySchema = z.object({
  data: z.union([PermitCreateManyInputObjectSchema, z.array(PermitCreateManyInputObjectSchema)]),
  skipDuplicates: z.boolean().optional(),
})
