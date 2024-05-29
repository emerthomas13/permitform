import { z } from "zod"
import { PermitWhereInputObjectSchema } from "./objects/PermitWhereInput.schema"
import { PermitOrderByWithAggregationInputObjectSchema } from "./objects/PermitOrderByWithAggregationInput.schema"
import { PermitScalarWhereWithAggregatesInputObjectSchema } from "./objects/PermitScalarWhereWithAggregatesInput.schema"
import { PermitScalarFieldEnumSchema } from "./enums/PermitScalarFieldEnum.schema"

export const PermitGroupBySchema = z.object({
  where: PermitWhereInputObjectSchema.optional(),
  orderBy: z
    .union([
      PermitOrderByWithAggregationInputObjectSchema,
      PermitOrderByWithAggregationInputObjectSchema.array(),
    ])
    .optional(),
  having: PermitScalarWhereWithAggregatesInputObjectSchema.optional(),
  take: z.number().optional(),
  skip: z.number().optional(),
  by: z.array(PermitScalarFieldEnumSchema),
})
