import { useNavigate } from "react-router-dom"
import { RegisterForm } from "../../componentes/RegisterForm"
import { ContainerForm } from "../../styles/Form"
import { ButtonBlueBackLogin } from "../../styles/ButtonBlue"

export const Register = () => {

    const navigate = useNavigate()

    const pageRoute = () => {
        navigate("/")
    }

    return (
        <>
        <ContainerForm>
            <ButtonBlueBackLogin onClick={() => {pageRoute()}}>
                Voltar para o login
            </ButtonBlueBackLogin>
            <h2>Cadastre-se</h2>
            <RegisterForm/>
        </ContainerForm>
        </>
    )
}