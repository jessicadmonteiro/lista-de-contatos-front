import { useForm, SubmitHandler } from "react-hook-form"
import { ILoginFormData } from "../../Interfaces/LoginInterfaces"
import { useContext } from "react"
import { ContextLogin } from "../../context/LoginContext/LoginContext"


export const LoginForm = () => {

    const { userLogin } = useContext(ContextLogin)
    const {register, handleSubmit, formState: {errors}} = useForm<ILoginFormData>()

    const submit: SubmitHandler<ILoginFormData> = (formData) => {
        userLogin(formData)
    }

    return (
       
        <form onSubmit={handleSubmit(submit)}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" {...register("email")} />

            <label htmlFor="password">Senha</label>
            <input type="password" id="password" {...register("password")} />

            <button type="submit">Cadastrar</button>
        </form>
        
    )
}
           