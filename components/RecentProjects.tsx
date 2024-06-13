import React from "react";
import { projects } from "./data";
import { PinContainer } from "./ui/3d-pin";
import { FaLocationArrow } from "react-icons/fa";
import Image from "next/image";
const RecentProjects = () => {
  return (
    <div className="py-20" id="projects">
      <h1 className="heading">
        A small Selection of{" "}
        <span className="text-purple"> Recent Projects</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-x-24 gap-y-10 mt-20 sm:mt-32">
        {projects.map(({ id, title, des, img, iconLists, link }) => (
          <a key={id} href={link} target="_blank">
            <div
            
            className=" h-[32rem] felx items-center justify-center sm:w-[570px] w-[80vw]"
          >
            
              <PinContainer title={link} href={link}>
                <div className="relative flex items-center justify-center sm:w-[570px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]">
                  <div className="relative w-full h-full overflow-hidden lg:rounded-3xl bg-[#13162d]">
                    <img src="/bg.png" alt="" />
                  </div>
                  <Image
                    src={img}
                    alt={title}
                    width={432}
                    height={432}
                    className="z-10 absolute -bottom-4 w-[27rem]"
                  />
                </div>
                <h1 className="font-bold  md:text-xl text-base line-clamp-1 mt-6">
                  {title}
                </h1>
                <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 mt-4">
                  {des}
                </p>
                <div className="flex items-center justify-between mt-7 mb-3">
                  <div className="flex items-center">
                    {iconLists.map((icon, index) => (
                      <div
                        key={icon}
                        className="border border-white/[0.2] rounded-full bg-black lg:w-10  lg:h-10 w-8 h-8 flex justify-center items-center"
                        style={{
                          transform: `translateX(-${5 * index * 2}px)`,
                        }}
                      >
                        <img src={icon} alt={icon} className="p-2" />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-center items-center">
                    <p className="flex lg:text-xl md:text-xs text-sm text-purple">
                      Check Live Site
                    </p>
                    <FaLocationArrow className="ms-3" color="#CBACF9" />
                  </div>
                </div>
              </PinContainer>
            
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default RecentProjects;
