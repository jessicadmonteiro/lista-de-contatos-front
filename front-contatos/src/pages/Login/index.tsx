import { useNavigate } from "react-router-dom"
import { LoginForm } from "../../componentes/LoginForm"
import { ButtonBlueReverse } from "../../styles/ButtonBlue"
import { ContainerForm } from "../../styles/Form"

export const Login = () => {

    const navigate = useNavigate()

    const pageRoute = () => {
        navigate("/register")
    }

    return (
        <ContainerForm>
            <h2>Login</h2>
            <LoginForm/>
            <p>Ainda não possui uma conta?</p>
            <ButtonBlueReverse onClick={() => {pageRoute()}}>Cadastre-se</ButtonBlueReverse>
        </ContainerForm>
    )
}