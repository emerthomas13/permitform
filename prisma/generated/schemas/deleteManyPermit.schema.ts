import { z } from "zod"
import { PermitWhereInputObjectSchema } from "./objects/PermitWhereInput.schema"

export const PermitDeleteManySchema = z.object({ where: PermitWhereInputObjectSchema.optional() })
