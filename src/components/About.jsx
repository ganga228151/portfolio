import profilePic from "../assets/Ganga photo.jpg";
import { FaFacebook } from "react-icons/fa";
import { BsLinkedin } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
// import react from "../assets/react.svg";
import { FaReact } from "react-icons/fa";
import { SiMongodb } from "react-icons/si";
import { SiExpress } from "react-icons/si";
// import { SiNodejs } from "react-icons/si";
import { SiMysql } from "react-icons/si";

import { motion } from "framer-motion";
import React from "react";

const socialMedia = [
  {
    id: 1,
    icon: <FaFacebook className="text-white text-3xl hover:text-blue-500" />,
    url: "https://www.facebook.com",
  },
  {
    id: 1,
    icon: <BsLinkedin className="text-white text-3xl hover:text-blue-500" />,
    url: "https://www.linkedin.com",
  },
  {
    id: 1,
    icon: <FaGithub className="text-white text-3xl hover:text-blue-300" />,
    url: "https://www.facebook.com",
  },
  {
    id: 1,
    icon: (
      <AiFillInstagram className="text-white text-4xl hover:text-pink-700" />
    ),
    url: "https://www.facebook.com",
  },
];

const skills = [
  {
    id: 1,
    name: "MomgoDB",
    icon: <SiMongodb className="text-green-500 text-2xl" />,
  },
  {
    id: 2,
    name: "ExpressJs",
    icon: <SiExpress className="text-yellow-500 text-2xl" />,
  },
  {
    id: 3,
    name: "React",
    icon: <FaReact className="text-blue-500 text-2xl" />,
  },
  {
    id: 4,
    name: "React",
    icon: <FaReact className="text-blue-500 text-2xl" />,
  },
  {
    id: 1,
    name: "React",
    icon: <FaReact className="text-blue-500 text-2xl" />,
  },
];
export const About = () => {
  const style = {
    FontFace: "Times New Roman",
  };
  return (
    <>
      <div className="flex  flex-col items-center justify-center mx-auto" id="About">
        <div>
          <motion.div
            className="flex items-center justify-center mx-auto hover:scale-110"
            initial={{ opacity: 0, x: -10, y: -10 }}
            animate={{ opacity: 10, x: 10, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <img
              src={profilePic}
              alt="profile picture"
              className="w-48 h-48 rounded-full"
            />
          </motion.div>
          <motion.div
            className=" py-2"
            initial={{ opacity: 0, x: -10, y: 30 }}
            animate={{ opacity: 1, x: 0, y: 0 }}
            transition={{ duration: 0.9 }}
            style={style}
          >
            <h1 className="font-bold text-4xl:sm text-green-600 text-center">
              👋 Hi, I'm Ganga Prasad Yadav
            </h1>
            <h2 className="text-white text-center font-medium text-xl:sm py-2">
              🔍 Analytical, self-motivated, and confident.
            </h2>
            <h2 className="text-yellow-600 text-center  text-2xl:sm font-semibold">
              🌍 MERN | Full-Stack Web Developer
            </h2>
          </motion.div>

          <motion.div className="flex items-center justify-center gap-2">
            {socialMedia?.map((item) => (
              <motion.a
                key={item.id}
                href={item.url}
                initial={{
                  opacity: 0,
                  x: 30,
                  y: -10,
                }}
                animate={{
                    opacity: 1,
                    x: 0,
                    y: 0,

                }}
                transition={{
                    duration: 0.9,
                }}
                className="hover:scale-110"
              >
                {item.icon}
              </motion.a>
            ))}
          </motion.div>

          <div className="text-white flex flex-wrap items-center justify-center gap-2 my-3">
            {skills.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-center gap-2 bg-gray-950 py-3 px-5 shadow-md shadow-green-300 rounded-2xl hover:scale-110"
              >
                <div>{item.icon}</div>
                <div>{item.name}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default About;
