import { createContext, useEffect, useState } from "react"
import { IUserProviderProps } from "../../Interfaces/UserInterfaces"
import { IContactContext, IContactData, INewContactData } from "../../Interfaces/ContactInterfaces"
import { api } from "../../service/api"


export const ContexContact = createContext({} as IContactContext)

export const AuthContactProvider = ({ children }: IUserProviderProps) => {


    const [arrayContacts, setArrayContacts] = useState<INewContactData[]>([])
    const [contacts, setContacts] = useState<INewContactData[]>([])

    const AddContact = async (newData: IContactData) => {

        const token = window.localStorage.getItem("token")

        try {
            const { data } = await api.post("/contacts", newData,{
                headers: {
                    authorization: `Bearer ${token}`,
                }
            })
            setArrayContacts([...arrayContacts, data])
            
        } catch (error) {
            console.log(error)
        }

    }

    const ListContacts = async (id: number | undefined) => {

        const token = window.localStorage.getItem("token")

        useEffect(() => {

            const loadContacts = async () =>{

                try {

                    const res = await api.get(`/contacts/users/${id}`,
                    {
                        headers: {
                          authorization: `Bearer ${token}`,
                        },
                    })
        
                    setContacts(res.data.contacts)
        
                } catch (error) {
                    console.log(error)
                }
            }
            loadContacts()
            
        }, [])

    }

    const DeleteContact = async (id: number) => {

        const token = window.localStorage.getItem("token")
    
        try {
            await api.delete(`/contacts/${id}`, {
            headers: {
              authorization: `Bearer ${token}`,
            },
          })
    
          const filterList = contacts.filter((element) => element.id !== id)
    
          setContacts(filterList)
          console.log("Contato removido com sucesso!")

        } catch (error) {
          console.error(error)
        }
    }
    
    return (
        <ContexContact.Provider value={{ AddContact, ListContacts, contacts, DeleteContact }}>
            {children}
        </ContexContact.Provider>
    )
}