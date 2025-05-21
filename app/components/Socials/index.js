import React from "react";
import Button from "../Button";
import { useLanguage } from '@/src/context/LanguageContext';

const Socials = ({ className }) => {
  const { data } = useLanguage();

  return (
    <div className={`${className} flex flex-wrap mob:flex-nowrap link`}>
      {data.socials.map((social, index) => (
        <Button key={index} onClick={() => window.open(social.link)}>
          {social.title}
        </Button>
      ))}
    </div>
  );
};

export default Socials;
