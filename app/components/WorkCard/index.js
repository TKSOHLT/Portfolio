import React from "react";

const WorkCard = ({ images, name, description, onClick, bullets }) => {
  return (
    <div
      className="relative overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:z-10 hover:pb-[5rem] group"
      onClick={onClick}
    >
      {/* Texto e información del proyecto */}
      <div className="relative z-10">
        <h1 className="mt-5 text-3xl font-medium">
          {name ? name : "Project Name"}
        </h1>
        <h2 className="text-xl opacity-50 py-2">
          {description ? description : "Description"}
        </h2>

        <ul className="list-disc py-2">
          {bullets.map((bullet, index) => (
            <li key={index} className="text-sm my-1 ms-5 opacity-70">
              {bullet}
            </li>
          ))}
        </ul>
      </div>

      {/* Imágenes decorativas */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {images.map((image, index) => {
          const offsetX = 6 * Math.floor((index + 1) / 2);
          const offsetY = 2 * Math.abs(index - Math.floor(images.length / 2));
          const translateX = index === 0 ? 0 : (index % 2 === 1 ? -offsetX : offsetX);
          const rotate = (index % 2 === 0 ? 1 : -1) * (5 + index);
          const zIndex = 1;
          const delay = index * 100;

          return (
            <img
              key={index}
              src={image}
              alt={`Tech ${index}`}
              style={{
                transform: `translateX(${translateX}rem) translateY(-${offsetY}rem) rotate(${rotate}deg)`,
                zIndex,
                transitionDelay: `${delay}ms`,
              }}
              className="
                absolute bottom-[-10rem] left-1/2
                w-20 h-20 object-contain opacity-85
                transition-all duration-700 ease-out
                group-hover:bottom-[0rem]
                group-hover:scale-110
              "
            />
          );
        })}
      </div>
    </div>
  );
};

export default WorkCard;
