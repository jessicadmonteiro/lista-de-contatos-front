import { AuthContactProvider } from "./context/ContactContext/ContactContext"
import { AuthLoginProvider } from "./context/LoginContext/LoginContext"
import { AuthRegisterProvider } from "./context/RegisterContext/RegisterContext"
import { RoutesMain } from "./routes"
import { ToastContainer } from "react-toastify"

function App() {

  return (
    <>
    <ToastContainer/>
    <AuthRegisterProvider>
      <AuthLoginProvider>
        <AuthContactProvider>
          <RoutesMain/>
        </AuthContactProvider>
      </AuthLoginProvider>
    </AuthRegisterProvider>
    </>
  )
}

export default App
