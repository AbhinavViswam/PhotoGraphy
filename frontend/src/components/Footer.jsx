import { FaInstagram, FaYoutube, FaFacebook, FaTwitter, FaPinterest } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-avocado-dark text-avocado-light w-full flex flex-col justify-between p-6 lg:px-16 lg:py-12 gap-3 h-full border-t-[1px] border-[#704012]">
      {/* About Us Section */}
      <div className="flex flex-col justify-between gap-3 mt-0 w-[80vw]">
        <h2 className="font-black lg:text-sm w-[80vw]">About us</h2>
        <div className="flex flex-col gap-4 w-[80vw]">
          <p className="text-xs lg:text-sm">
            Premium wedding photography company in Kerala, India. 
            Capturing unforgettable moments.
          </p>
          <p className="text-xs lg:text-sm">
            Address: Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro ipsa ipsam ab expedita saepe cum quod dolor nostrum incidunt debitis.
          </p>
        </div>
      </div>

      {/* Socials Section */}
      <div className="mt-2 w-[80vw]">
        <div className="flex justify-around">
          <a href="#" className="text-avocado-light hover:text-avocado-highlight">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-avocado-light hover:text-avocado-highlight">
            <FaYoutube size={24} />
          </a>
          <a href="#" className="text-avocado-light hover:text-avocado-highlight">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-avocado-light hover:text-avocado-highlight">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-avocado-light hover:text-avocado-highlight">
            <FaPinterest size={24} />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="text-xs lg:text-sm w-[80vw]">
        &copy; 2025 _NAME_, All rights Reserved.
      </div>
    </footer>
  );
}

export { Footer };