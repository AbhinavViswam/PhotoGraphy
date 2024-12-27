import { useState } from "react";
import { NavLink } from "react-router-dom";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="relative flex items-center justify-around w-screen h-[12vh] bg-gray-800 text-white px-4">
      <div className="w-[10vw] flex justify-center align-center">
        <h1 className="text-xl font-bold">_NAME_</h1>
      </div>

      <ul className="hidden md:flex items-center space-x-8">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            HOME
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/highlights"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            HIGHLIGHTS
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/testimonial"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            TESTIMONIAL
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            CONTACT
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              isActive ? "text-yellow-300" : "hover:text-yellow-300"
            }
          >
            GALLERY
          </NavLink>
        </li>
      </ul>

    
      <button
        className="block md:hidden text-2xl focus:outline-none"
        onClick={toggleMenu}
      >
        ☰
      </button>

   
      <div
        className={`fixed top-0 right-0 h-full w-[60vw] bg-gray-700 text-white transform transition-transform duration-300 z-50 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <button
          className="absolute top-4 right-4 text-xl focus:outline-none"
          onClick={toggleMenu}
        >
          ✖
        </button>
        <ul className="flex flex-col items-center mt-20 space-y-6">
          <li>
            <NavLink
              to="/"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/highlights"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
            >
              HIGHLIGHTS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/testimonial"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
            >
              TESTIMONIAL
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
            >
              CONTACT
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/gallery"
              onClick={toggleMenu}
              className={({ isActive }) =>
                isActive ? "text-yellow-300" : "hover:text-yellow-300"
              }
            >
              GALLERY
            </NavLink>
          </li>
        </ul>
      </div>
    </div>
  );
}

export { Navbar };
