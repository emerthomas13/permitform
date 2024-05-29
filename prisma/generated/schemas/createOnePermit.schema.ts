import { z } from "zod"
import { PermitCreateInputObjectSchema } from "./objects/PermitCreateInput.schema"
import { PermitUncheckedCreateInputObjectSchema } from "./objects/PermitUncheckedCreateInput.schema"

export const PermitCreateOneSchema = z.object({
  data: z.union([PermitCreateInputObjectSchema, PermitUncheckedCreateInputObjectSchema]),
})
