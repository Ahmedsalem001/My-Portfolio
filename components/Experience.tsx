import React from "react";
import { workExperience } from "./data";
import { Button } from "./ui/MovingBorder";

const Experience = () => {
  return (
    <div className="pb-20">
      <h1 className="heading">
        My{" "}
        <span className="text-purple"> Work Experience</span>
      </h1>
      <div className="w-full mt-12 grid sm:grid-cols-4 grid-cols-1 gap-10">
        {workExperience.map((card) => (
          <Button
            key={Math.random()}
            borderRadius="1.75rem"
            className="flex-1 text-white border-neutral-200 dark:border-slate-800"
            duration={Math.floor(Math.random() * 10000) + 10000}
          >
            <div className="flex lg:flex-row flex-col items-center  p-3 py-6 md:p-5 lg:p-10 gap-2">
              <img src={card.thumbnail} alt={card.thumbnail} className="lg:w-32 md:w-20 w-16 mb-2"/>
              <div className="lg:ms-5">
                <h1 className="sm:text-start text-xl md:text-2xl font-bold ">
                  {card.title}
                </h1>
                <p className="sm:text-start text-center text-white-100 mt-3 font=semibold ">
                  {card.desc}
                </p>
              </div>
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Experience;
