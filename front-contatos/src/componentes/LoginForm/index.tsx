import { useForm, SubmitHandler } from "react-hook-form"
import { ILoginFormData } from "../../Interfaces/LoginInterfaces"
import { useContext } from "react"
import { ContextLogin } from "../../context/LoginContext/LoginContext"
import { ContexContact } from "../../context/ContactContext/ContactContext"


export const LoginForm = () => {

    const { userLogin, user} = useContext(ContextLogin)
    const { ListContacts } = useContext(ContexContact)
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

            <button type="submit" onClick={() =>{ListContacts(user?.id)}}>Entrar</button>
        </form>
        
    )
}
           