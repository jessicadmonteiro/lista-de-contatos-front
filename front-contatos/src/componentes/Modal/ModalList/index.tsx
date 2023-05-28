import { useContext } from "react"
import { ContexContact } from "../../../context/ContactContext/ContactContext"
import { ContextLogin } from "../../../context/LoginContext/LoginContext"


export const ModalListContact = ({ modalListOpen, setModalListOpen}) => {

    const { ListContacts, contacts } = useContext(ContexContact)
    const { user } = useContext(ContextLogin)

    if(!modalListOpen) return null

    if(modalListOpen) {
        ListContacts(user!.id)
    }

    
    return (
        <div>
            <div>
                <span>
                <h2>Lista de contatos</h2>
                <button type="button" onClick={() => { setModalListOpen(false) }}>X</button>
                </span>
                <div>
                {
                    contacts.map((contacts) => (
                        <li>
                            <h3>{contacts.username}</h3>
                            <p>{contacts.telephone}</p>
                            <p>{contacts.email}</p>
                        </li>
                    ))
                }
            </div>
                
            </div>
        </div>

    )
}