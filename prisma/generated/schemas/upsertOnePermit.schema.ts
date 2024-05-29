import { z } from "zod"
import { PermitWhereUniqueInputObjectSchema } from "./objects/PermitWhereUniqueInput.schema"
import { PermitCreateInputObjectSchema } from "./objects/PermitCreateInput.schema"
import { PermitUncheckedCreateInputObjectSchema } from "./objects/PermitUncheckedCreateInput.schema"
import { PermitUpdateInputObjectSchema } from "./objects/PermitUpdateInput.schema"
import { PermitUncheckedUpdateInputObjectSchema } from "./objects/PermitUncheckedUpdateInput.schema"

export const PermitUpsertSchema = z.object({
  where: PermitWhereUniqueInputObjectSchema,
  create: z.union([PermitCreateInputObjectSchema, PermitUncheckedCreateInputObjectSchema]),
  update: z.union([PermitUpdateInputObjectSchema, PermitUncheckedUpdateInputObjectSchema]),
})
