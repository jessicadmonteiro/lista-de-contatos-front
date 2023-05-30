import { AuthContactProvider } from "./context/ContactContext/ContactContext"
import { AuthLoginProvider } from "./context/LoginContext/LoginContext"
import { AuthRegisterProvider } from "./context/RegisterContext/RegisterContext"
import { RoutesMain } from "./routes"
import { ToastContainer } from "react-toastify"
import GlobalStyle from "./styles/GlobalStyle"

function App() {

  return (
    <>
    <GlobalStyle/>
    <ToastContainer/>
    <AuthLoginProvider>
      <AuthRegisterProvider>
        <AuthContactProvider>
          <RoutesMain/>
        </AuthContactProvider>
      </AuthRegisterProvider>
    </AuthLoginProvider>
    </>
  )
}

export default App
