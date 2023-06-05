import { useContext, useState } from "react"
import { ContextLogin } from "../../context/LoginContext/LoginContext"
import {  Navigate, useNavigate } from "react-router-dom"
import { ModalAddContact } from "../../componentes/Modal/ModalAdd"
import { ModalEditContact } from "../../componentes/Modal/ModalEdit"
import {  HeaderHome, ConteinerUl, ContainerDivLi, DivImg, ContainerSearch, ContainerTitleContacs, ButtonfirstLetterUser} from "./styles"
import { ButtonBlueBorder } from "../../styles/ButtonBlue"
import email from "../../assets/email.jpg"
import telep from "../../assets/telep.jpg"
import contact from "../../assets/contact.jpg"
import bin from "../../assets/bin.jpg"
import pencil from "../../assets/pencil.jpg"
import { ContexContact } from "../../context/ContactContext/ContactContext"
import Search  from "../../assets/Search.png"
import Spinner from "../../assets/spinner.svg"
import { ContainerSpinner, SpinnerImg } from "../../styles/Sipnner"


export const Home = () => {

    const { loading, firstNameUser } = useContext(ContextLogin)
    const {DeleteContact, setIdContact, search, setSearch, contactFilter } = useContext(ContexContact)

    const [modalOpen, setModalOpen] = useState<boolean>(false)
    const [modalEditOpen, setModalEditOpen] = useState(false)

    const navigate = useNavigate()

    if(loading) {
        return (
            <ContainerSpinner>
                <SpinnerImg src={Spinner} alt="Spinner" />
            </ContainerSpinner>
        )
    }

    const userLetter = firstNameUser!.substring(0, 1)

    const LogoutUser = () => {
        window.localStorage.clear()
        navigate("/")
    }

    const Edit = (id: number) => {
        setIdContact(id)
        setModalEditOpen(true)
    }

    const token = window.localStorage.getItem("token")

    return token? (
        <body>
                <div>
                    <HeaderHome>
                        <ButtonfirstLetterUser>{userLetter}</ButtonfirstLetterUser>
                        <h3>
                            Olá, {firstNameUser}
                        </h3>
                        <ButtonBlueBorder onClick={()=> LogoutUser()}>Sair</ButtonBlueBorder>
                    </HeaderHome>

                    <ModalAddContact modalOpen={modalOpen} setModalOpen={setModalOpen}/>
                    
                    <ModalEditContact
                    modalEditOpen={modalEditOpen}
                    setModalEditOpen={setModalEditOpen}
                    />

                    <ContainerSearch>
                        <span>
                            <img src={Search} alt="Search" />
                            <input
                            type="text"
                            placeholder="Pesquise contatos"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            />
                        </span>
                    </ContainerSearch>

                    <div>
                        <ConteinerUl>
                            <ContainerTitleContacs>
                                <h2>Seus contatos</h2>
                                <button onClick={() => {setModalOpen(true)}}><p>Criar novo contato</p> <span>+</span></button>
                            </ContainerTitleContacs>
                            {
                                contactFilter.length <= 0 && (
                                    <div>
                                        <h3>Você ainda não possui contatos</h3>
                                    </div>
                                )
                            }
                            {
                                contactFilter.map((contactFilter) => (
                                    <li key={(contactFilter.id)} id={String(contactFilter.id)}>
                                        <ContainerDivLi>
                                            <div>
                                                <img src={contact} alt="Contato" width="10px" height="10px"  />
                                                <h4>{contactFilter.username}</h4>
                                            </div>
                                            <div>
                                                <img src={telep} alt="Telefone" width="10px" height="10px"  />
                                                <p>{contactFilter.telephone}</p>
                                            </div>
                                            <div>
                                                <img src={email} alt="E-mail" width="10px" height="10px"  />
                                                <p>{contactFilter.email}</p>
                                            </div>
                                        </ContainerDivLi>
                                        
                                        <DivImg>
                                            <img id={String(contactFilter.id)} src={pencil} alt="Lapis" width="18px" height="15px"
                                            onClick={() => { Edit(contactFilter.id)}}
                                            />
                                            <img id={String(contactFilter.id)} src={bin} alt="lixeira" width="18px" height="15px" onClick={() => { DeleteContact(contactFilter.id)}} />
                                        </DivImg>
                                    </li>
                                )) 
                            }  
                        </ConteinerUl>
                    </div>
                </div>
        </body>
    ) : (
        <Navigate to="/" />
    )
}