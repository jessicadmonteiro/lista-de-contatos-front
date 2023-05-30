import { BackgroundModal, ContainerModal } from "../style"
import { ButtonBlue, ButtonBlueBorder } from "../../../styles/ButtonBlue"
import { useContext } from "react"
import { ContexContact } from "../../../context/ContactContext/ContactContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { IEditFormData} from "../../../Interfaces/RegisterInterfaces"
import { IModalEdit } from "../../../Interfaces/ModalInterfaces"

export const ModalEditContact = ({ modalEditOpen, setModalEditOpen}: IModalEdit) => {

    const { ToEdit } = useContext(ContexContact)
    const { register, handleSubmit} = useForm<IEditFormData>()

    const submit: SubmitHandler<IEditFormData> = async (data) => {

        await ToEdit(data)
        await setModalEditOpen(false)
    }

    if(!modalEditOpen) return null

    return (
        <BackgroundModal>
            <ContainerModal>
                <span>
                <h2>Editar contato</h2>
                <ButtonBlueBorder type="button" onClick={() => { setModalEditOpen(false) }}>X</ButtonBlueBorder>
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