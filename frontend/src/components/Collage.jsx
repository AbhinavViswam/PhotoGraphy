
function Collage() {
  const images = [
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR7Q-gux8Ul8T_fIm6wpMmdi9DOyoILn7KvsA&s",
    "https://media.istockphoto.com/id/1124826836/photo/newlyweds-on-the-beach-at-sunset.jpg?s=612x612&w=0&k=20&c=uxB3llYeczLczznWDt-mJdxlo483NV0FNV0N48Y1E48=",
    "https://static01.nyt.com/images/2023/05/14/multimedia/FAT-INDIAN-WEDDINGS-01-hptq/FAT-INDIAN-WEDDINGS-01-hptq-articleLarge.jpg?quality=75&auto=webp&disable=upscale",
    "https://kamatharjun.b-cdn.net/wp-content/uploads/2023/03/South-Indian-wedding-photography-PA-123.jpg",
    "https://www.candidshutters.com/maintenance/wp-content/uploads/2024/06/Best-wedding-photographers-India-Top-5-destination-wedding-photographers-Indian-weddings-2.jpg",
    "https://media.weddingz.in/images/26d6a53998b7cdf801678e13120329cc/fRH3MmrXm5wo5Fd4bptbwNmU-LdLbTLYiOj-Fag9VlowrrH7VxrOKBFhSqgDoLlk6xMdMDHxg6hg2T5ulBfUmY6uPfFl-uPZYzp8UfFYWYaflb09XY8vS2eNoBAjEmskLNnQ0RMK.jpg",
    "https://www.shutterstock.com/image-photo/image-young-asian-bride-groom-600nw-2145073147.jpg",
    "https://www.ptaufiqphotography.com/wp-content/uploads/2018/10/ptaufiq-indian-wedding-cedar-grove-new-jersey-bride-entrance.png",
  ];

  return (
    <section className="py-8 px-10">
      <div className="container mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <img
                src={image}
                alt={`Wedding ${index + 1}`}
                className="w-full h-full object-cover shadow-md transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export {Collage};
