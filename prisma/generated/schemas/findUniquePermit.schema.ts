import { z } from "zod"
import { PermitWhereUniqueInputObjectSchema } from "./objects/PermitWhereUniqueInput.schema"

export const PermitFindUniqueSchema = z.object({ where: PermitWhereUniqueInputObjectSchema })
