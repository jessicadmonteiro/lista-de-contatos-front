import { z } from "zod"

export const addFormSchema = z.object({
        username: z.string().min(3, "Obrigatório e precisa conter pelo menos 3 caracteres.").max(45),
        email: z.string().max(45).nullish().optional(),
        telephone: z.string().
        regex(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/, "Adicione um número de telefone valido!")
})


export type TFormPropsAdd = z.infer<typeof addFormSchema>