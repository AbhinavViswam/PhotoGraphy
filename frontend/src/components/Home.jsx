import { useState, useEffect } from "react";

function Home() {
  const images = [
    "https://d397bfy4gvgcdm.cloudfront.net/96811-32-IMG-1364-_id92467318.jpeg",
    "https://i.pinimg.com/originals/f8/48/c0/f848c07fdb08a16c7cdbaa9e8c4180d9.jpg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNBusDGVJmfoVuNblkwexJS7lTIIwcSTFn_JBXonHzaDU2a9t7aE47IhjHQK_ZGrNWFgU&usqp=CAU"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup on component unmount
  }, [images.length]);

  return (
    <div>
      {/* Slider for Small Screens */}
      <div className="relative w-full h-[400px] overflow-hidden md:hidden">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Slide ${index + 1}`}
            className={`absolute w-full h-full object-cover transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}

        {/* Dots Indicator */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image Grid for Larger Screens */}
      <div className="hidden md:grid grid-cols-3 gap-4 p-4">
        {images.map((image, index) => (
          <div
            key={index}
            className="relative group overflow-hidden cursor-pointer"
          >
            <img
              src={image}
              alt={`Image ${index + 1}`}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
            />
            {/* Optional: Overlay on Hover */}
            <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center">
              <p className="text-white font-bold">Image {index + 1}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Other Content */}
      <div className="p-4 text-center">
        <h1 className="text-2xl font-bold">Welcome to Home</h1>
        <p className="text-lg mt-2">Explore our amazing content below!</p>
      </div>
    </div>
  );
}

export { Home };