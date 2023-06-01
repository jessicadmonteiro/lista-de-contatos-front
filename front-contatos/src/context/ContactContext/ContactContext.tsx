import { createContext, useContext, useState } from "react"
import { IUserProviderProps } from "../../Interfaces/UserInterfaces"
import { IContactContext, IContactData, INewContactData } from "../../Interfaces/ContactInterfaces"
import { api } from "../../service/api"
import { ContextLogin } from "../LoginContext/LoginContext"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.min.css"


export const ContexContact = createContext({} as IContactContext)

export const AuthContactProvider = ({ children }: IUserProviderProps) => {


    const {arrayContacts, setArrayContacts} = useContext(ContextLogin)
    const [idContact, setIdContact] = useState<number | "">("")
    const [search, setSearch] = useState("")

    const contactFilter = arrayContacts.filter(
        (contact) =>
          contact.username.toLowerCase().startsWith(search.toLowerCase()) ||
          contact.email.toLowerCase().startsWith(search.toLowerCase())
    )


    const AddContact = async (newData: IContactData) => {

        const token = window.localStorage.getItem("token")

        try {
            const { data } = await api.post("/contacts", newData,{
                headers: {
                    authorization: `Bearer ${token}`,
                }
            })

            setArrayContacts([...contactFilter, data])
            toast.success("Contato adicionado!")
            
        } catch (error) {
            console.log(error)
        }

    }

    const DeleteContact = async (id: number) => {

        const token = window.localStorage.getItem("token")
    
        try {
            await api.delete(`/contacts/${id}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
    
          const filterList = arrayContacts.filter((element) => element.id !== id)
    
          setArrayContacts(filterList)
          toast.success("Contato removido com sucesso!")

        } catch (error) {
          console.error(error)
        }
    }

    
    const ToEdit = async (data: INewContactData) => {
        const id = idContact

        const token = window.localStorage.getItem("token")

    try {
        const res = await api.patch(`/contacts/${id}`, data, {
        headers: {
            authorization: `Bearer ${token}`,
        }
        })

        const filter = arrayContacts.filter((element: INewContactData) => element.id !== id)

        setArrayContacts([...filter, res.data])

    } catch (error) {
        console.log(error)
    }
}
    
    return (
        <ContexContact.Provider value={{ AddContact, DeleteContact, setIdContact, idContact, ToEdit, contactFilter, search, setSearch, setArrayContacts }}>
            {children}
        </ContexContact.Provider>
    )
}