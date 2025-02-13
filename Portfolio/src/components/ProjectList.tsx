// import projects from './projects.js'

const ProjectsList = () => {
  // projects.js
  const projects = [
    {
      title: "Blog Website",
      languages: ["JavaScript", "Node.js", "MongoDB", "Express"],
      description:
        "A backend API-driven blog platform built with Node.js and MongoDB, allowing users to create, edit, and delete blog posts.",
    },
    {
      title: "Human Activity Recognition with Smartphones",
      languages: ["Python", "Machine Learning"],
      description:
        "A project for recognizing human activities using sensor data from smartphones, implemented with KNN and weighted KNN algorithms.",
    },
    {
      title: "MERN Stack Applications",
      languages: ["JavaScript", "React", "Node.js", "MongoDB", "Express"],
      description:
        "A collection of full-stack applications built with the MERN stack to enhance web development skills.",
    },
    {
      title: "AR Navigation System",
      languages: ["Unity3D", "C#", "Agisoft"],
      description:
        "An augmented reality navigation system for a college building, using Unity3D to create real-time navigation with 3D models.",
    },
  ];

  return (
    <>
      <section id="projects">
        <div className="flex flex-col items-center">
          <div className="p-6  flex w-[70%]">
            <div className="date-div w-1/3 mb-5 text-white text-3xl">
              <p>Projects</p>
            </div>
            <div className="details w-2/3 p-6">
              <ul className="space-y-4">
                {projects.map((project, index) => (
                  <li
                    key={index}
                    className="p-4 pb-10 border-zinc-400 border-b-1"
                  >
                    <h3 className="mb-5 text-white text-2xl">
                      {project.title}
                    </h3>
                    <p className="text-zinc-400 mt-5">{project.description}</p>
                    <div className="flex mt-5">
                      {project.languages.map((language, index) => (
                        <p
                          key={index}
                          className="p-2 text-green-400 bg-opacity-50 mr-3 border-solid border-1 rounded-3xl"
                        >
                          {language}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>{" "}
              *
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProjectsList;
