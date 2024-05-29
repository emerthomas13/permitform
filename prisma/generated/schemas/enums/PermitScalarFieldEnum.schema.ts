import { z } from "zod"

export const PermitScalarFieldEnumSchema = z.enum([
  "id",
  "createdAt",
  "updatedAt",
  "name",
  "requirements",
])
