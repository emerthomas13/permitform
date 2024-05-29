import { z } from "zod"
import { PermitUpdateInputObjectSchema } from "./objects/PermitUpdateInput.schema"
import { PermitUncheckedUpdateInputObjectSchema } from "./objects/PermitUncheckedUpdateInput.schema"
import { PermitWhereUniqueInputObjectSchema } from "./objects/PermitWhereUniqueInput.schema"

export const PermitUpdateOneSchema = z.object({
  data: z.union([PermitUpdateInputObjectSchema, PermitUncheckedUpdateInputObjectSchema]),
  where: PermitWhereUniqueInputObjectSchema,
})
