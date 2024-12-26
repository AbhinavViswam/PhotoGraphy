import { createBrowserRouter } from "react-router-dom";
import {Home,Gallery,Contact,Testimonial,Highlights} from "../components/index"
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
        element:<Testimonial/>
    },
    {
        path:"/contact",
        element:<Contact/>
    }]}
    
])

export default Router