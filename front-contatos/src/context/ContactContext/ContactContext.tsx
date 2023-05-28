import { createContext, useEffect, useState } from "react"
import { IUserProviderProps } from "../../Interfaces/UserInterfaces"
import { IContactContext, IContactData, INewContactData } from "../../Interfaces/ContactInterfaces"
import { api } from "../../service/api"

export const ContexContact = createContext({} as IContactContext)

export const AuthContactProvider = ({ children }: IUserProviderProps) => {

    const [contactNew, steContactNew] = useState<INewContactData[]>([])
    const [contacts, setContacts] = useState<INewContactData[]>([])

    const AddContact = async (newData: IContactData) => {

        const token = window.localStorage.getItem("token")

        try {
            const { data } = await api.post("/contacts", newData,{
                headers: {
                    authorization: `Bearer ${token}`,
                }
            })
            steContactNew([...contactNew, data])
            
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
                    console.log(res.data.contacts)
        
        
                } catch (error) {
                    console.log(error)
                }
            }
            loadContacts()
            
        }, [])

    }

    return (
        <ContexContact.Provider value={{ AddContact, ListContacts, contacts }}>
            {children}
        </ContexContact.Provider>
    )
}