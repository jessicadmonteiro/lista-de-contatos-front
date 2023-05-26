import { createContext } from "react"
import { useNavigate } from "react-router-dom"
import { useState } from "react"
import { api } from "../../service/api"
import { IUserContextRegister, IUserProviderProps } from "../../Interfaces/UserInterfaces"
import { IRegisterFormData } from "../../Interfaces/RegisterInterfaces"

export const ContextRegister = createContext({} as IUserContextRegister)

export const AuthRegisterProvider = ({children}: IUserProviderProps) => {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    
    const userRegister = async (formData: IRegisterFormData) => {
      
        try {
          setLoading(true)
          await api.post("/users ", formData)

          navigate("/")

        } catch (error) {
          console.log(error)
          
        } finally {
          setLoading(false)
        }
    }
    return (
        <ContextRegister.Provider value={{userRegister, loading}}>
            {children}
        </ContextRegister.Provider>
    )
}
