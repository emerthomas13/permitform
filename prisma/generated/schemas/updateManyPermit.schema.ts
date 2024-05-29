import { z } from "zod"
import { PermitUpdateManyMutationInputObjectSchema } from "./objects/PermitUpdateManyMutationInput.schema"
import { PermitWhereInputObjectSchema } from "./objects/PermitWhereInput.schema"

export const PermitUpdateManySchema = z.object({
  data: PermitUpdateManyMutationInputObjectSchema,
  where: PermitWhereInputObjectSchema.optional(),
})
