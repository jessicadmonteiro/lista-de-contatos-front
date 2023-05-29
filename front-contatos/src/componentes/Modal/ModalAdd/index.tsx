import { useContext } from "react"
import { useForm } from "react-hook-form"
import { ContexContact } from "../../../context/ContactContext/ContactContext"
import { BackgroundModal, ContainerModal } from "../style"
import { ButtonBlue, ButtonBlueBorder } from "../../../styles/ButtonBlue"
import { IRegisterFormData } from "../../../Interfaces/RegisterInterfaces"

export const ModalAddContact = ({ modalOpen, setModalOpen}) => {

    const { AddContact } = useContext(ContexContact)
    const { register, handleSubmit} = useForm<IRegisterFormData>()

    const submit = async (data:IRegisterFormData) => {

        await AddContact(data)
        await setModalOpen(false)
    }

    if(!modalOpen) return null

    return (
        <BackgroundModal>
            <ContainerModal>
                <span>
                <h2>Adicionar contato</h2>
                <ButtonBlueBorder type="button" onClick={() => { setModalOpen(false) }}>X</ButtonBlueBorder>
                </span>
                <form onSubmit={ handleSubmit(submit) }>
                    <label htmlFor="text">Nome</label>
                    <input type="text" id="username" placeholder="Digite o nome do contato" {...register("username")}/>

                    <label htmlFor="email">Email</label>
                    <input type="email" id="email" placeholder="Digite o e-mail do contato" {...register("email")}/>

                    <label htmlFor="text">Telefone</label>
                    <input type="text" id="telephone"  placeholder="Digite o telefone do contato" {...register("telephone")}/>

                    <ButtonBlue type="submit">Adicionar</ButtonBlue>
                </form>
            </ContainerModal>
        </BackgroundModal>

    )
}