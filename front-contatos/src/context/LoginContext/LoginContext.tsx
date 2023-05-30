import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../service/api"
import { ILoginFormData, IUserLoginResponse } from "../../Interfaces/LoginInterfaces"
import { IUser, IUserContextLogin, IUserProviderProps } from "../../Interfaces/UserInterfaces"
import { IArrayUserContacts } from "../../Interfaces/ContactInterfaces"

export const ContextLogin = createContext({} as IUserContextLogin)

export const AuthLoginProvider = ({ children }: IUserProviderProps) => {

  const [user, setUser] = useState< IUser | null >(null)
  const [loading, setLoading] = useState(true)
  const [arrayContacts, setArrayContacts] = useState<IArrayUserContacts[]>([])
  const [firstLetterUser, setFirstLetterUser] = useState<string>()

  const navigate = useNavigate()

  const userLogin = async (data: ILoginFormData) => {

    try {

      const res = await api.post<IUserLoginResponse>("/login", data)
     
      window.localStorage.clear()
      window.localStorage.setItem("token", res.data.token)
      window.localStorage.setItem("email", data.email)

      LoadUser()
      navigate("/home")

    } catch (error) {
      console.log(error)
    }
  }



  const LoadUser = async () => {

    const token = window.localStorage.getItem("token")
    const email = window.localStorage.getItem("email")

    if (!token) {
      setLoading(false);
      return;
    }

    try {

      const { data } = await api.get("/users", {
  
        headers: {
          authorization: `Bearer ${token}`,
        },
      })

      const userFind = data.find((user: IUser) => user.email === email)

      setUser(userFind)

      if(userFind){
        const userLetter = userFind.username.substring(0, 1)
        setFirstLetterUser(userLetter)
      }
      
      const res =await api.get(`/contacts/users/${userFind.id}`, {
        headers: {
          authorization: `Bearer ${token}`,
        },
      })
      
      setArrayContacts(res.data.contacts)
      
  
    } catch (error) {
      console.error(error)

    } finally {
      setLoading(false)

    }
  }
  
  useEffect(() => {
    const autoLogin = async (): Promise<void> => {

      const token = window.localStorage.getItem("token")

      if(token){
        LoadUser()
        navigate("/home")
      }
    }
    autoLogin()
  }, [])
  


  return (
    <ContextLogin.Provider value={{ userLogin, user, setUser, loading, setArrayContacts, arrayContacts, firstLetterUser }}>
      {children}
    </ContextLogin.Provider>
  )
}
