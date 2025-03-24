import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export const Footer = () => {
  return (
    <>
      <div className="sm:flex items-center sm:justify-evenly bg-gray-800 text-white p-5">
        <div>
          <h3 className="text-green-500 font-bold text-3xl text-center py-2">
            {" "}
            Ganga Prasad Yadav
          </h3>
          <p className="text-center">🚀 Full Stack Developer | MERN Stack</p>
        </div>
        <div>
          <h3 className="text-yellow-600 font-bold text-xl text-center py-2">
            Quick Links
          </h3>
          <ul className="text-center">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/#Projects">Projects</a>
            </li>
            <li>
              <a href={`mailto:ganga228151@gmail.com?subject=${encodeURIComponent("subject"
              )}&body=${encodeURIComponent("body")}`}
              className="cursor-pointer">
                Contact us
              </a>
            </li>
            <li>
              <a href="/#About">About</a>
            </li>
            <li>
              <a href="/#Skills">Skills</a>
            </li>
            <li>
              <a href="/#Education">Education</a>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="text-yellow-600 font-bold text-xl text-center py-2">
            Follow me
          </h3>
          <ul className="flex flex-col items-center justify-center">
            <li>
              <a href="https://www.linkedin.com/in/arvind-kumar-7https://www.linkedin.com/in/ganga-prasad-yadav-b57684213?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
                <FaLinkedin className="text-2xl text-blue-400 hover:text-blue-600" />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_gan.ga_1/?igsh=d3FvMG9tbjhnc3dr#">
                <FaInstagramSquare className="text-2xl text-pink-500 hover:text-pink-600" />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/arvind-kumar-7"
                className="text-2xl text-blue-400 hover:text-blue-600"
              >
                <FaGithubSquare />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};