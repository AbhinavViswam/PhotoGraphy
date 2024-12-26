import { NavLink } from "react-router-dom"

function Navbar() {
  return (
    <div className="border-2 border-zinc-950">
        <ul>
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/highlights">Highlights</NavLink></li>
            <li><NavLink to="/testimonial">Testimonial</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/gallery">Gallery</NavLink></li>
        </ul>
    </div>
  )
}

export {Navbar}