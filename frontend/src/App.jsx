import { Outlet } from "react-router-dom"
import { Navbar } from "./components"
import { Footer } from "./components/Footer"
function App() {
  return (
    <div className="w-screen">
      <div className="flex justify-center align-center">
        <Navbar />
      </div>
      <div className="min-h-screen h-full">
      <Outlet />
      </div>
      <div className="">
      <Footer />
      </div>
    </div>
  )
}

export default App