import { z } from "zod"

export const editFormSchema = z.object({
    id: z.number(),
    username: z.string().min(3, "Obrigatório e precisa conter pelo menos 3 caracteres.").max(45),
    email: z.string().email().max(45).nullish(),
    telephone: z.string().
    regex(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/, "Adicione um número de telefone valido!"),
    userId: z.number()
}).omit({
    userId: true,
    id: true
})

export const updateContactSchema = editFormSchema.partial()

export type TFormPropsEdit = z.infer<typeof editFormSchema>
