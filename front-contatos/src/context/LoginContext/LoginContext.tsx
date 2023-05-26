import { useEffect } from "react"
import { useState } from "react"
import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { api } from "../../service/api"
import { ILoginFormData, IUserLoginResponse } from "../../Interfaces/LoginInterfaces"
import { IUser, IUserContextLogin, IUserProviderProps } from "../../Interfaces/UserInterfaces"

export const ContextLogin = createContext({} as IUserContextLogin)

export const AuthLoginProvider = ({ children }: IUserProviderProps) => {

  const [user, setUser] = useState< IUser | null >(null)
  const [loading, setLoading] = useState(true)

  const navigate = useNavigate()

  const userLogin = async (data: ILoginFormData) => {

    try {

      const res = await api.post<IUserLoginResponse>("/login", data)
     
      window.localStorage.clear()
      window.localStorage.setItem("token", res.data.token)
      window.localStorage.setItem("email", data.email)

      navigate("/home")

    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {

    const loadUser = async () => {

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
        
      } catch (error) {
        console.error(error)

      } finally {
        setLoading(false)

      }
    }
    loadUser();
  
  }, []);

  return (
    <ContextLogin.Provider value={{ userLogin, user, setUser, loading }}>
      {children}
    </ContextLogin.Provider>
  )
}
