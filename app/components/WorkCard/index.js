import React, {useState, useEffect} from "react";
import { motion } from "framer-motion";

const WorkCard = ({ images, name, description, onClick, bullets }) => {
  const [isHoverable, setIsHoverable] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(hover: hover)");
      setIsHoverable(mediaQuery.matches);
    }
  }, []);

  const generateImgVariants = (index, translateX, translateY, rotate) => ({
    rest: {
      bottom: "-10rem",
      opacity: 0.85,
      scale: 1,
      x: `${translateX}rem`,
      y: `-${translateY}rem`,
      rotate,
    },
    hover: {
      bottom: "0rem",
      opacity: 1,
      scale: 1.1,
      x: `${translateX}rem`,
      y: `-${translateY}rem`,
      rotate,
      transition: {
        delay: index * 0.1,
        duration: 0.7,
        ease: "easeOut",
      },
    },
  });

  return (
    <motion.div
      className="relative overflow-hidden rounded-lg p-2 laptop:p-4 first:ml-0 link transition-all duration-300 hover:scale-[1.01] hover:shadow-2xl hover:z-10 hover:pb-[5rem] group"
      onClick={onClick}
      initial="rest"
      animate="rest"
      whileHover={isHoverable ? "hover" : "rest"}
      whileInView={!isHoverable ? "hover" : "rest"}
      viewport={{ once: true, amount: 0.4 }}
    >
      {/* Texto e información del proyecto */}
      <div className="relative z-10">
        <h1 className="mt-5 text-3xl font-medium">
          {name || "Project Name"}
        </h1>
        <h2 className="text-xl opacity-50 py-2">
          {description || "Description"}
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

          return (
            <motion.img
              key={index}
              src={image}
              alt={`Tech ${index}`}
              className="absolute left-1/2 w-20 h-20 object-contain"
              style={{ zIndex }}
              variants={generateImgVariants(index, translateX, offsetY, rotate)}
            />
          );
        })}
      </div>
    </motion.div>
  );
};

export default WorkCard;
