import { SubmitHandler, useForm } from "react-hook-form"
import { useContext } from "react"
import { ContextRegister } from "../../context/RegisterContext/RegisterContext"
import { Form } from "../../styles/Form"
import { ButtonBlue } from "../../styles/ButtonBlue"
import { zodResolver } from "@hookform/resolvers/zod"
import { TFormProps, registerFormSchema } from "./registerFormSchema"
import { Input } from "../Input"

export const RegisterForm = () => {

    const { userRegister } = useContext(ContextRegister)
    const {register, handleSubmit, formState: {errors}} = useForm<TFormProps>({
        resolver: zodResolver(registerFormSchema)
    })

    const submit: SubmitHandler<TFormProps> = (formData) => {
        userRegister(formData)
    }

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <Input label="Nome Completo" type="text" id="username" placeholder="Digite seu Nome" {...register("username")} error={errors.username}/>

            <Input label="E-mail" type="email" id="email" placeholder="Digite seu email" {...register("email")} error={errors.email} />

            <Input label="Telefone" type="text" id="telephone" placeholder="Digite seu telefone" {...register("telephone")} error={errors.telephone} />

            <Input label="Senha" type="password" id="password" placeholder="Digite sua senha" {...register("password")} error={errors.password}/>

            <ButtonBlue type="submit">Cadastrar</ButtonBlue>
        </Form>
    )
}