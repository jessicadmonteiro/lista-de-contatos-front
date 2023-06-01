import { BackgroundModal, ContainerModal } from "../style"
import { ButtonBlue, ButtonBlueBorder } from "../../../styles/ButtonBlue"
import { useContext } from "react"
import { ContexContact } from "../../../context/ContactContext/ContactContext"
import { SubmitHandler, useForm } from "react-hook-form"
import { IModalEdit } from "../../../Interfaces/ModalInterfaces"
import { TFormPropsEdit, updateContactSchema } from "./editFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../Input"

export const ModalEditContact = ({ modalEditOpen, setModalEditOpen}: IModalEdit) => {

    const { ToEdit } = useContext(ContexContact)

    const { register, handleSubmit, formState: {errors}} = useForm<TFormPropsEdit>(({
        resolver: zodResolver(updateContactSchema),
    }))

    const submit: SubmitHandler<TFormPropsEdit> = async (data) => {

        await ToEdit(data)
        setModalEditOpen(false)
        
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
                    <Input label="Nome" type="text" id="username" placeholder="Digite o nome do contato" {...register("username")}  error={errors.username}/>

                    <Input label="E-mail" type="email" id="email" placeholder="Digite o e-mail do contato"  {...register("email")}  error={errors.email}/>

                    <Input label="Telefone" type="text" id="telephone"  placeholder="Digite o telefone do contato" {...register("telephone")} error={errors.telephone}/>

                    <ButtonBlue type="submit" >Adicionar</ButtonBlue>
                </form>
            </ContainerModal>
        </BackgroundModal>

    )
}