import { useForm, SubmitHandler } from "react-hook-form"
import { ILoginFormData } from "../../Interfaces/LoginInterfaces"
import { useContext } from "react"
import { ContextLogin } from "../../context/LoginContext/LoginContext"
import { Form } from "../../styles/Form"
import { ButtonBlue } from "../../styles/ButtonBlue"

export const LoginForm = () => {

    const { userLogin } = useContext(ContextLogin)
    const {register, handleSubmit} = useForm<ILoginFormData>()

    const submit: SubmitHandler<ILoginFormData> = (formData) => {
        userLogin(formData)
    }

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" {...register("email")} />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" {...register("password")} />

            <ButtonBlue type="submit">Entrar</ButtonBlue>
        </Form>
    )
}
           