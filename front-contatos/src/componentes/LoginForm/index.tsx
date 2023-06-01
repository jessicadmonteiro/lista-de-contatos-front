import { useForm, SubmitHandler } from "react-hook-form"
import { ILoginFormData } from "../../Interfaces/LoginInterfaces"
import { useContext } from "react"
import { ContextLogin } from "../../context/LoginContext/LoginContext"
import { Form } from "../../styles/Form"
import { ButtonBlue } from "../../styles/ButtonBlue"
import { Input } from "../Input"
import { TFormPropsLogin, loginFormSchema } from "./loginFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"

export const LoginForm = () => {

    const { userLogin } = useContext(ContextLogin)
    const {register, handleSubmit, formState: {errors}} = useForm<TFormPropsLogin>({
        resolver: zodResolver(loginFormSchema)
    })

    const submit: SubmitHandler<TFormPropsLogin> = (formData) => {
        userLogin(formData)
    }
 
    return (
        <Form onSubmit={handleSubmit(submit)}>
            <Input label="E-mail" type="email" id="email" placeholder="Digite seu email" {...register("email")} error={errors.email}/>

            <Input label="Senha" type="password" id="password" placeholder="Digite sua senha" {...register("password")} error={errors.password} />

            <ButtonBlue type="submit">Entrar</ButtonBlue>
        </Form>
    )
}
           