import React, { useState } from "react";
import { FaArrowLeft, FaArrowRight, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom"; 
import Project2 from "../assets/images/Project2.png"; // image
import Project3 from "../assets/images/Project3.png";
import Project1 from "../assets/images/Project1.png";
const projects = [
  {
    id: 1,
    title: "Ecozomy",
    image:Project1 , 
    techStack: ["React", "Tailwind CSS", "React-Redux"],
    description: "This is a React application that utilizes Redux for state management and interacts with a free API to manage products. It supports creating, deleting, and adding products, making it a useful tool for inventory management or product catalog applications.",
    sourceCode: "https://github.com/MANSI622/ReactShoppingApp/tree/master", 
  },
  {
    id: 2,
    title: "NewsMania",
    image: Project2, 
    techStack: ["React", "TailwindCSS", "NodeJS"],
    description:
      "It is designed for managing and exploring news articles and personal notes. The app features user authentication, a robust notes system, and a user-friendly interface for tracking and managing information efficiently.",
    sourceCode: "https://github.com/MANSI622/NewsNotessApp", 
  },
  {
    id: 3,
    title: "Password Generator",
    image: Project3, 
    techStack: ["JavaScript", "HTML", "CSS"],
    description: "A simple and efficient JavaScript-based password generator that allows users to create strong and secure passwords. This tool offers customizable options such as password length, inclusion of uppercase and lowercase letters, numbers, and special characters to enhance password security. Ideal for developers and users who need a quick and reliable way to generate robust passwords",
    sourceCode: "https://github.com/MANSI622/Passwordgeneratorjs", 
  },
];

const Projects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? projects.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === projects.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="relative px-4 md:px-8 lg:px-16 py-12">
      <h2 className="text-3xl font-semibold text-center mb-8">Projects</h2>
      <div className="relative overflow-hidden">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {projects.map((project) => (
            <div key={project.id} className="flex-shrink-0 w-full">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-64 object-cover" 
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold mb-2">
                    {project.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {project.description}
                  </p>
                  <div className="flex gap-2 flex-wrap mb-4">
                    {project.techStack.map((tech, index) => (
                      <span
                        key={index}
                        className="bg-gray-200 px-2 py-1 rounded-full text-sm"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a
                    href={project.sourceCode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition-colors"
                  >
                    <FaGithub className="mr-2" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-4 transform -translate-y-1/2 text-2xl text-gray-600 hover:text-gray-900 transition-colors
          z-50"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-4   z-50  transform -translate-y-1/2 text-2xl text-gray-600 hover:text-gray-900 transition-colors"
        >
          <FaArrowRight />
        </button>
      </div>
    </div>
  );
};

export default Projects;
