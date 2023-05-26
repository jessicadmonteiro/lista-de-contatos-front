import { useContext } from "react"
import { ContextLogin } from "../../context/LoginContext/LoginContext"
import {  useNavigate } from "react-router-dom"


export const Home = () => {

    const { user } = useContext(ContextLogin)
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
        </div>
    )
}