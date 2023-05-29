import { useContext } from "react"
import { ContexContact } from "../../../context/ContactContext/ContactContext"
import { ContextLogin } from "../../../context/LoginContext/LoginContext"
import { BackgroundModal, ContainerModal, ContactsUl, DivImg, ContainerDivLi } from "../style"
import { ButtonBlueBorder } from "../../../styles/ButtonBlue"
import email from "../../../assets/email.jpg"
import telep from "../../../assets/telep.jpg"
import contact from "../../../assets/contact.jpg"
import bin from "../../../assets/bin.jpg"
import pencil from "../../../assets/pencil.jpg"

export const ModalListContact = ({ modalListOpen, setModalListOpen}) => {

    const { ListContacts, contacts, DeleteContact } = useContext(ContexContact)
    const { user } = useContext(ContextLogin)

    if(!modalListOpen) return null

    if(modalListOpen) {
        ListContacts(user!.id)
    }

    
    return (
        <BackgroundModal>
            <ContainerModal>
                <span>
                <h2>Lista de contatos</h2>
                <ButtonBlueBorder type="button" onClick={() => { setModalListOpen(false) }}>X</ButtonBlueBorder>
                </span>
                <div>
                        <ContactsUl>
                            {
                                contacts.length <= 0 && (
                                    <div>
                                        <h3>Adicione Contatos</h3>
                                    </div>
                                )
                            }
                            {
                                contacts.map((contacts) => (
                                    <li>
                                        <ContainerDivLi>
                                            <div>
                                                <img src={contact} alt="Contato" width="10px" height="10px"  />
                                                <h4>{contacts.username}</h4>
                                            </div>
                                            <div>
                                                <img src={telep} alt="Telefone" width="10px" height="10px"  />
                                                <p>{contacts.telephone}</p>
                                            </div>
                                            <div>
                                                <img src={email} alt="E-mail" width="10px" height="10px"  />
                                                <p>{contacts.email}</p>
                                            </div>
                                        </ContainerDivLi>
                                        
                                        <DivImg>
                                            <img src={pencil} alt="Lapis" width="18px" height="15px"
                                            
                                            />
                                            <img src={bin} alt="lixeira" width="18px" height="15px" onClick={() => { DeleteContact(contacts.id)}} />
                                        </DivImg>
                                    </li>
                                )) 
                            }  
                        </ContactsUl>
                </div>
            </ContainerModal>
        </BackgroundModal>

    )
}