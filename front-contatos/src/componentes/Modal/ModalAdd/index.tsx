import { useContext } from "react"
import { useForm,  SubmitHandler } from "react-hook-form"
import { ContexContact } from "../../../context/ContactContext/ContactContext"
import { IRegisterFormData } from "../../../Interfaces/RegisterInterfaces"

export const ModalAddContact = ({ modalOpen, setModalOpen}) => {

    const { AddContact } = useContext(ContexContact)
    const { register, handleSubmit} = useForm<IRegisterFormData>()

    const submit: SubmitHandler<IRegisterFormData>= async (data) => {

        await AddContact(data)
        await setModalOpen(false)
    }

    if(!modalOpen) return null

    return (
        <div>
            <div>
                <span>
                <h2>Adicionar contato</h2>
                <button type="button" onClick={() => { setModalOpen(false) }}>X</button>
                </span>
                <form onSubmit={ handleSubmit(submit) }>
                    <label htmlFor="text">Nome</label>
                    <input type="text" id="username" {...register("username")}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" {...register("email")}/>

                    <label htmlFor="text">Telefone</label>
                    <input type="text" id="telephone" {...register("telephone")}/>

                    <button type="submit">Adicionar</button>
                </form>
            </div>
        </div>

    )
}