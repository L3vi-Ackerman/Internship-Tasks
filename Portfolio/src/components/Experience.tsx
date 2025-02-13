const Experience = () => {
  return (
    <>
      <section className="flex flex-col items-center ">
        <div className="p-6  flex w-[70%] border-zinc-400 border-b-1">
          <div className="date-div w-1/3 p-6 text-white text-1xl">
            <p>2025-02-03 - Present</p>
          </div>
          <div className="details w-2/3 p-6">
            <h3 className="mb-5 text-white text-2xl">Web Developer Intern</h3>
            <p className="text-zinc-400">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Saepe
              sapiente cum distinctio voluptatum, sint odio? Pariatur quis rerum
              earum error fugiat? Enim tempora omnis at id adipisci laudantium
              et aut eius odit.
            </p>

            <div className="flex mt-5">
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
          </div>
        </div>
      </section>
    </>
  );
};

export default Experience;
