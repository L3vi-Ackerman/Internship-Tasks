import React from "react";
import Experience from "./Experience";
const About = () => {
  return (
    <>
      <section className="flex flex-col items-center ">
        <div className="p-6  flex w-[70%] border-zinc-400 border-b-1">
          <div className="date-div w-1/3 text-white text-3xl">
            <p>About Me</p>
          </div>
          <div className="details w-2/3 p-6">
            <h3 className="mb-5 text-white text-3xl">Biplav Raj Chitrakar</h3>
            <h1 className="mb-5 text-zinc-400 text-2xl">
              Full Stack Developer
            </h1>

            <p className="text-zinc-200 leading-8">
              I am a passionate full stack web developer with expertise in the{" "}
              <strong>MERN stack (MongoDB, Express.js, React, Node.js)</strong>
              and experience building full-stack applications. Currently, I am a{" "}
              <strong>
                final-year Electronics and Information Technology student at
                I.O.E. Thapathali Campus
              </strong>
              , continuously expanding my skills in web and mobile development.
              I have worked on multiple projects, integrating APIs, managing
              databases, and implementing real-time features using Socket.IO.
            </p>

            <h3 className="mb-5 text-white text-3xl mt-5">Skills</h3>
            <h1 className="mb-5 text-zinc-400 text-2xl">Front-End</h1>
            <div className="flex mt-5 mb-5">
              <p className="p-2 text-green-400  bg-opacity-50 mr-3 border-solid border-1 rounded-3xl">
                HTML/CSS
              </p>
              <p className="p-2 text-green-400  bg-opacity-50 mr-3 border-solid border-1 rounded-3xl">
                JavaScript
              </p>
              <p className="p-2 text-green-400  bg-opacity-50 mr-3 border-solid border-1 rounded-3xl">
                React
              </p>
              <p className="p-2 text-green-400  bg-opacity-50 mr-3 border-solid border-1 rounded-3xl">
                TypeScript
              </p>
            </div>
            <h1 className="mb-5 text-zinc-400 text-2xl">Back-End</h1>
            <div className="flex mt-5">
              <p className="p-2 text-green-400  bg-opacity-50 mr-3 border-solid border-1 rounded-3xl">
                NodeJS
              </p>
              <p className="p-2 text-green-400  bg-opacity-50 mr-3 border-solid border-1 rounded-3xl">
                Python
              </p>
            </div>
          </div>
        </div>
      </section>
      <Experience />
    </>
  );
};

export default About;
