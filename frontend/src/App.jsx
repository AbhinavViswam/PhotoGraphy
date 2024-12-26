import { Outlet } from "react-router-dom"
import { Navbar } from "./components"
import { Footer } from "./components/Footer"
function App() {
  return (
    <>
    <Navbar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App