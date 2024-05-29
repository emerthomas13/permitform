import { z } from "zod"
import { PermitWhereUniqueInputObjectSchema } from "./objects/PermitWhereUniqueInput.schema"

export const PermitDeleteOneSchema = z.object({ where: PermitWhereUniqueInputObjectSchema })
