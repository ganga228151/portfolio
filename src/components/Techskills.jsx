import { FaJs } from "react-icons/fa6";
import { FaNodeJs } from "react-icons/fa";
import { FaHtml5 } from "react-icons/fa";
import { FaMarkdown } from "react-icons/fa";

export const TechSkills = () => {
  const skillsData = [
    {
      title: "Languages",
      skills: [
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "Html",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaHtml5 className="text-yellow-800" />,
        },
        {
          name: "Markdown",
          level: <span className="text-yellow-600">Beginner</span>,
          icon: <FaMarkdown className="text-black" />,
        },
        {
          name: "Node",
          level: <span className="text-green-600">Expert</span>,
          icon: <FaNodeJs className="text-green-400" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "Node",
          level: <span className="text-green-600">Expert</span>,
          icon: <FaNodeJs className="text-green-400" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "Node",
          level: <span className="text-green-600">Expert</span>,
          icon: <FaNodeJs className="text-green-400" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "Node",
          level: <span className="text-green-600">Expert</span>,
          icon: <FaNodeJs className="text-green-400" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "Node",
          level: <span className="text-green-600">Expert</span>,
          icon: <FaNodeJs className="text-green-400" />,
        },
      ],
    },
    {
      title: "Backend",
      skills: [
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "JavaScript",
          level: <span className="text-yellow-600">Intermediate</span>,
          icon: <FaJs className="text-yellow-300" />,
        },
        {
          name: "Node",
          level: <span className="text-green-600">Expert</span>,
          icon: <FaNodeJs className="text-green-400" />,
        },
      ],
    },
  ];
  return (
    <>
      <div className="my-2" id="Skills">
        <h1 className="text-center font-bold text-4xl mb-5">🚀 Tech Skills</h1>
        <div className="flex flex-wrap items-center justify-center gap-5">
          {skillsData?.map((item) => {
            return (
              <div
                key={item.title}
                className="text-center bg-white shadow-2xl h-60 shadow-gray-400 p-5 px-10 "
              >
                <h3 className="text-bold text-2xl my-1">{item.title}</h3>
                <ul>
                  {item.skills?.map((element) => {
                    return (
                      <li
                        key={element.name}
                        className="flex items-center justify-between gap-5  shadow-2xl shadow-amber-50 my-3 hover:scale-105 transition-all ease-in text-md font-medium"
                      >
                        <div className="text-lg font-medium">{element.icon}</div>
                        <div>{element.name}</div>
                        <div className="">{element.level}</div>
                      </li>
                    );
                  })}
                </ul>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};