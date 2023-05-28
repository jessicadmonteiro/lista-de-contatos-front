import { useContext, useState } from "react"
import { ContextLogin } from "../../context/LoginContext/LoginContext"
import {  useNavigate } from "react-router-dom"
import ButtonPlus from "../../assets/Button Plus.svg"
import { ModalAddContact } from "../../componentes/Modal/ModalAdd"
import { ModalListContact } from "../../componentes/Modal/ModalList"
import { ContexContact } from "../../context/ContactContext/ContactContext"



export const Home = () => {

    const { user } = useContext(ContextLogin)
    const {  contacts} = useContext(ContexContact)
    
    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalListOpen, setModalListOpen] = useState<boolean>(false)

    const navigate = useNavigate()

    const LogoutUser = () => {
        window.localStorage.clear()
        navigate("/")
    }


    return (
        <div>
            <header>
                <h3>
                    Olá, {user?.username}
                </h3>
              
                <button onClick={()=> LogoutUser()}>Sair</button>
            </header>
            <ModalAddContact modalOpen={modalOpen} setModalOpen={setModalOpen}/>
            <ModalListContact modalListOpen={modalListOpen} setModalListOpen={setModalListOpen}/>
            <div>
                <img onClick={() => {
                    setModalOpen(true)}}
                    src={ButtonPlus}
                    alt="Button More" 
                />
                <button onClick={() => {setModalListOpen(true)}}>Lista</button>
            </div>
            {
                    contacts.map((contacts) => (
                        <ul>
                            <li>
                                <h3>{contacts.username}</h3>
                                <p>{contacts.telephone}</p>
                                <p>{contacts.email}</p>
                            </li>
                        </ul>
                        
                    ))
                }
        </div>
    )
}