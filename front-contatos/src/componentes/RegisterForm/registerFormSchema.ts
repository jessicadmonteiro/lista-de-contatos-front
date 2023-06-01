import { z } from "zod"

export const registerFormSchema = z.object({
    username: z.string().min(3, "Obrigatório e precisa conter pelo menos 3 caracteres.").max(45),
    email: z.string().email("Forneça um e-mail válido").max(45),
    telephone: z.string().
    regex(/^(?:(?:\+|00)?(55)\s?)?(?:(?:\(?[1-9][0-9]\)?)?\s?)?(?:((?:9\d|[2-9])\d{3})-?(\d{4}))$/, "Adicione um número de telefone valido!"),
    password: z.string().min(4, "Obrigatório e precisa conter pelo menos 4 caracteres.").max(120)
})


export type TFormProps = z.infer<typeof registerFormSchema>