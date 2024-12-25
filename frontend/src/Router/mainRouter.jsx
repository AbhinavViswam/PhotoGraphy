import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home"
import Gallery from "../components/Gallery"
import Highlights from "../components/Highlights"
import Testmonial from "../components/Testimonial"
import ContactUs from "../components/ContactUs"
import App from "../App"

const Router=createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[{
        path:"/",
        element:<Home/>
    },
    {
        path:"/gallery",
        element:<Gallery/>
    },
    {
        path:"/highlights",
        element:<Highlights/>
    },
    {
        path:"/testimonial",
        element:<Testmonial/>
    },
    {
        path:"/contact-us",
        element:<ContactUs/>
    }]}
    
])

export default Router