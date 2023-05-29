import { useContext, useState } from "react"
import { ContextLogin } from "../../context/LoginContext/LoginContext"
import {  useNavigate } from "react-router-dom"
import { ModalAddContact } from "../../componentes/Modal/ModalAdd"
import { ModalListContact } from "../../componentes/Modal/ModalList"
import {  HeaderHome, ContainerButtonContacts} from "./styles"
import { ButtonBlueBorder } from "../../styles/ButtonBlue"


export const Home = () => {

    const { user } = useContext(ContextLogin)
    
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalListOpen, setModalListOpen] = useState<boolean>(false)

    const navigate = useNavigate()

    const LogoutUser = () => {
        window.localStorage.clear()
        navigate("/")
    }

    return (
        <body>
             <div>
                <HeaderHome>
                    <h3>
                        Olá, {user?.username}
                    </h3>
                    <ButtonBlueBorder onClick={()=> LogoutUser()}>Sair</ButtonBlueBorder>
                </HeaderHome>

                <ModalAddContact modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                <ModalListContact modalListOpen={modalListOpen} setModalListOpen={setModalListOpen}/>
                
                <ContainerButtonContacts>
                    <button onClick={() => {setModalOpen(true)}}>Criar novo contato</button>
                    <button onClick={() => {setModalListOpen(true)}}>Listar contatos</button>
                </ContainerButtonContacts>
            </div>
        </body>
    )
}