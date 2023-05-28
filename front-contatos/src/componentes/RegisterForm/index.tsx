import { useForm, SubmitHandler } from "react-hook-form"
import { IRegisterFormData } from "../../Interfaces/RegisterInterfaces"
import { useContext } from "react"
import { ContextRegister } from "../../context/RegisterContext/RegisterContext"
import { Form } from "../../styles/Form"
import { ButtonBlue } from "../../styles/ButtonBlue"

export const RegisterForm = () => {

    const { userRegister } = useContext(ContextRegister)
    const {register, handleSubmit} = useForm<IRegisterFormData>()

    const submit: SubmitHandler<IRegisterFormData> = (formData) => {
        userRegister(formData)
    }

    return (
        <Form onSubmit={handleSubmit(submit)}>
            <label htmlFor="text">Nome Completo</label>
            <input type="text" id="username" placeholder="Digite seu Nome" {...register("username")}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" placeholder="Digite seu email" {...register("email")}/>

            <label htmlFor="text">Telefone</label>
            <input type="text" id="telephone" placeholder="Digite seu telefone" {...register("telephone")}/>

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" placeholder="Digite sua senha" {...register("password")}/>

            <ButtonBlue type="submit">Cadastrar</ButtonBlue>
        </Form>
    )
}