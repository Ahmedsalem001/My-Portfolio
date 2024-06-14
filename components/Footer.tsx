import React from "react";
import { socialMedia } from "./data";
import MagicButton from "./ui/MagicButton";
import { FaLocationArrow } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 bottom-0 min-h-96 overflow-hidden pointer-events-none">
        <img
          src="/footergrid.svg"
          alt="grid"
          className="w-full h-full opacity-50"
        />
      </div>
      <div className="flex flex-col items-center">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your</span> digital
          presence to the next level?
        </h1>
        <p className="text-white-200 text-center mt-10 lg:max-w-[45vw]">
          Reach out to me today and let&apos;s discuss how I can help you
          achieve your goals.
        </p>
        <a href="mailto:ahmedsalem7dev@gmail.coom" className="mt-7">
          <MagicButton
            icon={<FaLocationArrow />}
            position="right"
            title="Let's get in touch"
          />
        </a>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center gap-3">
        <p className="md:text-base text-sm md:font-normal font-light text-gray-200">
          Copyright © 2024 Demo
        </p>
        <p className="md:text-base text-sm md:font-normal font-light text-gray-200">
          mail : ahemdsalem7dev@gmail.com
        </p>
        <p className="md:text-base text-sm md:font-normal font-light text-gray-200">
          phone : +201018988020
        </p>
        <div className="flex items-center md:gap-3 gap-6 mt-3">
          {socialMedia.map((profile) => (
            <a target="_blank" href={profile.link} key={profile.id}>
            <div  className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-100 bg-opacity-75 bg-black-300 rounded-lg border border-black-300 -z">
              <img src={profile.img} alt={profile.img} width={20} height={20}/>
              </div>
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
