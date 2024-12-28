import { useState, useEffect } from "react";
import { Collage } from "../components/index";

function Home() {
  const images = [
    "https://d397bfy4gvgcdm.cloudfront.net/96811-32-IMG-1364-_id92467318.jpeg",
    "https://i.pinimg.com/originals/f8/48/c0/f848c07fdb08a16c7cdbaa9e8c4180d9.jpg",
    "https://bowsnvows.com/wp-content/uploads/2023/08/Prarana-scaled.jpg",
    "https://bowsnvows.com/wp-content/uploads/2023/10/n-and-h-scaled.webp"
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
              className={`w-1 h-1 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Image Slider for Larger Screens */}
      <div className="hidden md:flex items-center justify-center w-full h-[600px] overflow-hidden relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`Image ${index + 1}`}
            className={`absolute w-1/3 h-full object-cover transition-transform duration-1000 ${
              index === currentIndex ? "translate-x-0" : index === (currentIndex + 1) % images.length ? "translate-x-full" : "-translate-x-full"
            }`}
          />
        ))}

        {/* Dots Indicator */}
        <div className="absolute bottom-4 flex space-x-2">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-1 h-1 rounded-full ${
                index === currentIndex ? "bg-white" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Other Content */}
     
     <div className="my-8 w-[99vw] flex flex-col justify-center items-center gap-5">
      <h1 className="font-bold text-xl self-start mx-32">Wedding Photography</h1>
      <p className="w-[80vw] ">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat explicabo sunt possimus eos aliquid adipisci, veniam quisquam, harum quam, consequatur nobis dolorum quod deleniti quasi corrupti saepe est praesentium beatae eum. Et error vel consequuntur culpa sequi magni non consequatur est perferendis. Corporis, id ex? Ut magnam reiciendis culpa nisi ad voluptas asperiores ratione hic! Cumque harum totam, at corrupti atque incidunt officiis ab aperiam ex dolores perferendis veniam cum ad eveniet obcaecati molestias. Recusandae doloribus sit sapiente facilis, quibusdam accusantium laudantium, esse quas, totam autem nulla animi vero. Quaerat odio officiis libero accusantium quo recusandae, aut non eos, corporis et minima vel atque sit eveniet tempora id ullam provident incidunt error, quisquam mollitia porro? Minus odio esse quod ut. Sunt repellat iste deserunt ullam assumenda. Culpa consequatur aut ratione fugit, dolor cumque ut voluptate laboriosam nobis reprehenderit deleniti iste placeat ipsa aliquam nam repellendus? Id asperiores et maiores atque ex minima ab veritatis repudiandae. Vitae omnis perspiciatis consequatur reiciendis aliquid iure, hic maiores ad. Ad maiores est beatae pariatur laborum nemo non expedita quibusdam temporibus illo ex et vel in culpa quo odit sit quod, commodi voluptate quia iste enim ipsum voluptatibus veritatis. Repellat atque voluptates a nam distinctio nostrum maiores, possimus et voluptatum aspernatur magni incidunt aliquam error omnis alias! Blanditiis vitae voluptas, corrupti quos tempore ad consequatur cum officiis quis excepturi incidunt id laudantium illo natus harum, culpa numquam impedit voluptates atque asperiores quod! Exercitationem ad architecto eius facere, quisquam cupiditate soluta magnam perferendis nam voluptate, repudiandae, tempore placeat magni voluptatem dignissimos? Animi fuga in blanditiis quisquam culpa, autem nihil similique. Eum sequi a ad veritatis, repudiandae, laborum perspiciatis odio ipsa voluptatibus mollitia tempora numquam facere rem consequatur accusantium, illo asperiores qui reprehenderit! Atque repellendus unde vitae iste, ipsum consequatur eaque, fugit maiores dicta reprehenderit molestias nihil?</p>
     </div>

     <div>
      <Collage/>
     </div>
    </div>
  );
}

export { Home };