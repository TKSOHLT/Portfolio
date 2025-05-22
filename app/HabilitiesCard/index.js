import React, { useEffect, useState, useRef } from "react";
import { useTheme } from "next-themes";
import { motion } from "framer-motion";


const HabilitiesCard = ({ name, description, image }) => {
  const { theme } = useTheme();
  const [isHoverable, setIsHoverable] = useState(false);
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const mediaQuery = window.matchMedia("(hover: hover)");
      setIsHoverable(mediaQuery.matches);
    }
  }, []);

  const imgVariants = {
    rest: { right: "-5rem", opacity: 0.6, rotate: 0, scale: 1 },
    hover: { right: 0, opacity: 1, rotate: -15, scale: 1.1 },
  };

  return (
    <motion.div
      className={`relative w-full  p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 group overflow-hidden ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
      initial="rest"
      animate="rest"
      whileHover={isHoverable ? "hover" : "rest"}
      whileInView={!isHoverable ? "hover" : "rest"}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <h1 className="text-3xl">{name || "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl w-[80%]">
        {description ||
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      </p>

      {image && (
        <motion.img
          src={image}
          alt={name}
          className="absolute bottom-6 w-20 h-20 object-contain"
          variants={imgVariants}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        />
      )}
    </motion.div>
  );
};

export default HabilitiesCard;
