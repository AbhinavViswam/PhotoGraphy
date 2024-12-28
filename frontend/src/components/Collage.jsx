import { useState, useEffect, useRef } from "react";

function Collage() {
  const [visibleIndexes, setVisibleIndexes] = useState([]);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.dataset.index);
            setTimeout(() => {
              setVisibleIndexes((prev) => [...prev, index]);
            }, index * 300); // Delay increases with the index (300ms apart)
          }
        });
      },
      { threshold: 0.1 } // Trigger when 10% of the element is visible
    );

    const imageElements = ref.current.querySelectorAll("[data-index]");
    imageElements.forEach((element) => observer.observe(element));

    return () => {
      imageElements.forEach((element) => observer.unobserve(element));
    };
  }, []);

  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Q-gux8Ul8T_fIm6wpMmdi9DOyoILn7KvsA&s",
    "https://media.istockphoto.com/id/1124826836/photo/newlyweds-on-the-beach-at-sunset.jpg?s=612x612&w=0&k=20&c=uxB3llYeczLczznWDt-mJdxlo483NV0FNV0N48Y1E48=",
    "https://static01.nyt.com/images/2023/05/14/multimedia/FAT-INDIAN-WEDDINGS-01-hptq/FAT-INDIAN-WEDDINGS-01-hptq-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "https://kamatharjun.b-cdn.net/wp-content/uploads/2023/03/South-Indian-wedding-photography-PA-123.jpg",
  ];

  return (
    <section className="py-8 px-10">
      <div className="container mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {images.map((image, index) => (
            <div
              key={index}
              data-index={index}
              className={`relative group transition-opacity duration-300 ${
                visibleIndexes.includes(index)
                  ? "animate-flyIn"
                  : "opacity-0"
              }`}
            >
              <img
                src={image}
                alt={`Wedding ${index + 1}`}
                className="w-full h-full object-cover shadow-md"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export { Collage };
