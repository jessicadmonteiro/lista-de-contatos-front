import { useForm, SubmitHandler } from "react-hook-form"
import { IRegisterFormData } from "../../Interfaces/RegisterInterfaces"
import { useContext } from "react"
import { ContextRegister } from "../../context/RegisterContext/RegisterContext"

export const RegisterForm = () => {

    const { userRegister } = useContext(ContextRegister)
    const {register, handleSubmit, formState: {errors}} = useForm<IRegisterFormData>()

    const submit: SubmitHandler<IRegisterFormData> = (formData) => {
        userRegister(formData)
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="text">Nome Completo</label>
            <input type="text" id="username" {...register("username")}/>

            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")}/>

            <label htmlFor="text">Telefone</label>
            <input type="text" id="telephone" {...register("telephone")}/>

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" {...register("password")}/>

            <button type="submit">Cadastrar</button>
        </form>
    )
}