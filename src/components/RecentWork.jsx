
import todoImage from "../assets/react.svg";
const projects = [
  {
    id: 1,
    name: "ToDoList App",
    description:
      "Built a dynamic and user-friendly To-Do List application using React, Node.js, Express, and MongoDB. This app allows users to efficiently manage tasks with features such as task creation, real-time updates, deletion, and retrieval. With a clean and responsive UI, users can mark tasks as completed, edit existing tasks, and organize their workflow seamlessly. The backend ensures smooth data storage and retrieval, making task management hassle-free.",
    image: todoImage,
    technologies: [
      "HTML",
      "Tailwind/CSS",
      "JavaScript",
      "React",
      "ExpressJs ",
      "MongoDB",
      "NodeJs",
    ],
    github: "https://github.com/username/project1",
    live: "https://project1.com",
  },
  {
    id: 2,
    name: "Personal portfolio website",
    description:
      "Built a dynamic and user-friendly To-Do List application using React, Node.js, Express, and MongoDB. This app allows users to efficiently manage tasks with features such as task creation, real-time updates, deletion, and retrieval. With a clean and responsive UI, users can mark tasks as completed, edit existing tasks, and organize their workflow seamlessly. The backend ensures smooth data storage and retrieval, making task management hassle-free.",
    image: todoImage,
    technologies: [
      "HTML",
      "Tailwind/CSS",
      "JavaScript",
      "React",
      "ExpressJs ",
      "MongoDB",
      "NodeJs",
    ],
    github: "https://github.com/username/project1",
    live: "https://project1.com",
  },
];
export const RecentWork = () => {
  return (
    <>
      <div className="my-10" id="Projects">
        <h1 className="text-center font-bold text-3xl text-gray-800 my-3">
          🚀 Recent Works
        </h1>
        <ul className="flex flex-wrap items-center justify-center gap-5 mt-5">
          {projects.length > 0 &&
            projects.map((project) => {
              return (
                <li key={project.id} className="w-1/3 shadow-2xl shadow-gray-500 p-5 rounded-md hover:scale-105 transition-all ease-in">
                  <img src={project.image} alt={project.name} className="w-full h-auto"/>
                  <h2 className="text-xl font-bold py-3 text-gray-950">{project.name}</h2>
                  <p>{project.description}</p>
                  <ul className="flex flex-wrap items-center justify-start my-5 gap-3">
                    {project.technologies.length > 0 &&
                      project.technologies.map((technology, index) => {
                        return (
                          <li
                            key={index}
                            className="py-2 px-5 shadow-2xl shadow-gray-400/50 rounded-md bg-gray-100"
                          >
                            {technology}
                          </li>
                        );
                      })}
                  </ul>
                  <a href="https://www.github.com/Arvindkumar20" className="py-3 px-5 rounded-lg bg-blue-800 cursor-pointer flex items-center justify-center text-white font-medium">source code</a>
                </li>
              );
            })}
        </ul>
      </div>
    </>
  );
};