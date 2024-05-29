import { z } from "zod"
import { SortOrderSchema } from "../enums/SortOrder.schema"
import { PermitCountOrderByAggregateInputObjectSchema } from "./PermitCountOrderByAggregateInput.schema"
import { PermitAvgOrderByAggregateInputObjectSchema } from "./PermitAvgOrderByAggregateInput.schema"
import { PermitMaxOrderByAggregateInputObjectSchema } from "./PermitMaxOrderByAggregateInput.schema"
import { PermitMinOrderByAggregateInputObjectSchema } from "./PermitMinOrderByAggregateInput.schema"
import { PermitSumOrderByAggregateInputObjectSchema } from "./PermitSumOrderByAggregateInput.schema"

import type { Prisma } from "@prisma/client"

const Schema: z.ZodType<Prisma.PermitOrderByWithAggregationInput> = z
  .object({
    id: z.lazy(() => SortOrderSchema).optional(),
    createdAt: z.lazy(() => SortOrderSchema).optional(),
    updatedAt: z.lazy(() => SortOrderSchema).optional(),
    name: z.lazy(() => SortOrderSchema).optional(),
    requirements: z.lazy(() => SortOrderSchema).optional(),
    _count: z.lazy(() => PermitCountOrderByAggregateInputObjectSchema).optional(),
    _avg: z.lazy(() => PermitAvgOrderByAggregateInputObjectSchema).optional(),
    _max: z.lazy(() => PermitMaxOrderByAggregateInputObjectSchema).optional(),
    _min: z.lazy(() => PermitMinOrderByAggregateInputObjectSchema).optional(),
    _sum: z.lazy(() => PermitSumOrderByAggregateInputObjectSchema).optional(),
  })
  .strict()

export const PermitOrderByWithAggregationInputObjectSchema = Schema
