import { z } from "zod"
import { PermitOrderByWithRelationInputObjectSchema } from "./objects/PermitOrderByWithRelationInput.schema"
import { PermitWhereInputObjectSchema } from "./objects/PermitWhereInput.schema"
import { PermitWhereUniqueInputObjectSchema } from "./objects/PermitWhereUniqueInput.schema"
import { PermitScalarFieldEnumSchema } from "./enums/PermitScalarFieldEnum.schema"

export const PermitFindManySchema = z.object({
  orderBy: z
    .union([
      PermitOrderByWithRelationInputObjectSchema,
      PermitOrderByWithRelationInputObjectSchema.array(),
    ])
    .optional(),
  where: PermitWhereInputObjectSchema.optional(),
  cursor: PermitWhereUniqueInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  distinct: z.array(PermitScalarFieldEnumSchema).optional(),
})
