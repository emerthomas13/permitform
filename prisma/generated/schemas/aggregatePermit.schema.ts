import { z } from "zod"
import { PermitOrderByWithRelationInputObjectSchema } from "./objects/PermitOrderByWithRelationInput.schema"
import { PermitWhereInputObjectSchema } from "./objects/PermitWhereInput.schema"
import { PermitWhereUniqueInputObjectSchema } from "./objects/PermitWhereUniqueInput.schema"
import { PermitCountAggregateInputObjectSchema } from "./objects/PermitCountAggregateInput.schema"
import { PermitMinAggregateInputObjectSchema } from "./objects/PermitMinAggregateInput.schema"
import { PermitMaxAggregateInputObjectSchema } from "./objects/PermitMaxAggregateInput.schema"
import { PermitAvgAggregateInputObjectSchema } from "./objects/PermitAvgAggregateInput.schema"
import { PermitSumAggregateInputObjectSchema } from "./objects/PermitSumAggregateInput.schema"

export const PermitAggregateSchema = z.object({
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
  _count: z.union([z.literal(true), PermitCountAggregateInputObjectSchema]).optional(),
  _min: PermitMinAggregateInputObjectSchema.optional(),
  _max: PermitMaxAggregateInputObjectSchema.optional(),
  _avg: PermitAvgAggregateInputObjectSchema.optional(),
  _sum: PermitSumAggregateInputObjectSchema.optional(),
})
