import { AuthContactProvider } from "./context/ContactContext/ContactContext"
import { AuthLoginProvider } from "./context/LoginContext/LoginContext"
import { AuthRegisterProvider } from "./context/RegisterContext/RegisterContext"
import { RoutesMain } from "./routes"
import { ToastContainer } from "react-toastify"
import GlobalStyle from "./styles/GlobalStyle"

function App() {

  return (
    <>
      <ToastContainer
      position="top-right"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="light"
      />
      <GlobalStyle/>
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
