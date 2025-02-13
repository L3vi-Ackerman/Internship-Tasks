import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons"; // Co
const HeroSection = () => {
  return (
    <div className="flex items-center m-50">
      <div className="p-6 flex w-[70%]">
        <div className="content">
          <p className="m-3 text-green-400 ">Hi, my name is</p>
          <h1 className="scroll-m-20 font-extrabold tracking-tight lg:text-7xl text-white mt-4 mb-4">
            Biplav Chitrakar .
          </h1>
          <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-7xl text-slate-400 text-3xl">
            Full Stack Developer.
          </h1>

          <p className="leading-7 m-3 text-gray-500">
            I'm a software developer specializing in building(and occassionally
            designing) <br />
            exceptional digital experiences. Currently, I'm focused on building
            accessible web products at
            <br />
            <span className="text-green-400 text-lg">Cloco Nepal</span>
          </p>
          <div className="mt-10">
            <Button
              variant="outline"
              className="text-green-400 p-6 cursor-pointer"
            >
              <Link to="/projects"> Check out my Projects!</Link>
            </Button>
          </div>
          <div className="icons text-white text-3xl">
            <FontAwesomeIcon icon={faLinkedin} className="m-3" />
            <FontAwesomeIcon icon={faGithub} className="m-3" />
            <FontAwesomeIcon icon={faEnvelope} className="m-3" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
