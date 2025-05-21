import React, { useEffect, useState } from "react";
import { useTheme } from "next-themes";

const HabilitiesCard = ({ name, description, image }) => {
  const { theme } = useTheme();
  const [mounted, setMounted] = useState();

  useEffect(() => {
    setMounted(true);
  }, []);
  return (
    <div
      className={`relative w-full  p-2 mob:p-4 rounded-lg transition-all ease-out duration-300 group overflow-hidden ${
        mounted && theme === "dark" ? "hover:bg-slate-800" : "hover:bg-slate-50"
      } hover:scale-105 link`}
    >
      <h1 className="text-3xl">{name ? name : "Heading"}</h1>
      <p className="mt-5 opacity-40 text-xl w-[80%]">
        {description
          ? description
          : "Lorem Ipsum is simply dummy text of the printing and typesetting industry."}
      </p>
      {image && (
        <img
          src={image}
          alt={name}
          className="absolute bottom-6 right-[-5rem] w-20 h-20 object-contain opacity-60 transition-all duration-500 ease-out
                group-hover:right-[0rem] group-hover:rotate-[-15deg] group-hover:opacity-100 group-hover:scale-110"
        />
      )}
    </div>
  );
};

export default HabilitiesCard;
