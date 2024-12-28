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
    "https://media-api.xogrp.com/images/f4570601-a1e6-4802-86fb-ad9e988066fe~rs_768.h",
    "https://julianribinikweddings.com/wp-content/uploads/2022/02/indian-wedding-photography.jpg",
    "https://cdn0.weddingwire.in/article-gallery-o/00000/3_2/960/jpg/articulos-india/2019/non-troncales/indian-bridal-look/wedding-salad-indian-bridal-look-lead-image.jpeg",
    "https://images.squarespace-cdn.com/content/v1/5ebc5b0285bdc72d1aee199d/2093235c-ccd6-439e-91de-0caf06e26dc8/Indian_Wedding_Documentary_Candid-127.jpg",
    "https://girlandworld.com/wp-content/uploads/2018/03/indian-bridal-pakistani-bride-hair-and-makeup-artist-vancouver-mindy-bansal-beauty-influencer-destination-weddings-girlfriendz-studio1.jpg?w=1920&h=1080&crop=1"
  ];

  return (
    <section className="py-8 px-10">
      <div className="container mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
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
