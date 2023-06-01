import { useContext } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ContexContact } from "../../../context/ContactContext/ContactContext"
import { BackgroundModal, ContainerModal } from "../style"
import { ButtonBlue, ButtonBlueBorder } from "../../../styles/ButtonBlue"
import { IModalAdd } from "../../../Interfaces/ModalInterfaces"
import { TFormPropsAdd, addFormSchema } from "./addFormSchema"
import { zodResolver } from "@hookform/resolvers/zod"
import { Input } from "../../Input"

export const ModalAddContact = ({ modalOpen, setModalOpen}: IModalAdd) => {

    const { AddContact } = useContext(ContexContact)
    const { register, handleSubmit, formState: {errors}, reset} = useForm<TFormPropsAdd>(({
        resolver: zodResolver(addFormSchema)
    }))

    const submit: SubmitHandler<TFormPropsAdd> = async (data) => {
        await AddContact(data)
        await setModalOpen(false)
        reset()
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
                    <Input label="Nome" type="text" id="username" placeholder="Digite o nome do contato" {...register("username")} error={errors.username}/>

                    <Input label="E-mail" type="email" id="email" placeholder="Digite o e-mail do contato" {...register("email")} error={errors.email}/>

                    <Input label="Telefone" type="text" id="telephone"  placeholder="Digite o telefone do contato" {...register("telephone")} error={errors.telephone}/>

                    <ButtonBlue type="submit">Adicionar</ButtonBlue>
                </form>
            </ContainerModal>
        </BackgroundModal>

    )
}