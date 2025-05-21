import React from "react";

const ProjectResume = ({ dates, type, position, sections }) => {

  return (
    <div className="mt-5 w-full flex mob:flex-col desktop:flex-row justify-between">
      <div className="text-lg w-2/5">
        <h2>{dates}</h2>
        <h3 className="text-sm opacity-50">{type}</h3>
      </div>
      <div className="w-3/5">

        <h2 className="text-lg font-bold">{position}</h2>
        {sections.map(({ id, title, description, bullets }) => (
          <ul className="list-disc py-2" key={id}>
            <h3 className="text-lg">{title}</h3>
            {description &&(
                <h2 className="text-md opacity-85 py-2">{description}</h2>
            )}
            {bullets.map((bullet, index) => (
              <li key={index} className="text-sm my-1 ms-5 opacity-70">
                {bullet}
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  );
};

export default ProjectResume;
