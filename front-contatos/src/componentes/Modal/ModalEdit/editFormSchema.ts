import { z } from "zod"

export const editFormSchema = z.object({
    id: z.number(),
    username: z.string().min(3, "Clique para preencher campo").max(45).optional(),
    email: z.string().email("Clique para preencher campo").max(45).nullish().optional(),
    telephone: z.string().
    regex(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/, "Clique para preencher campo").optional(),
    userId: z.number()
}).omit({
    userId: true,
    id: true
})

export const updateContactSchema = editFormSchema.partial()

export type TFormPropsEdit = z.infer<typeof editFormSchema>
