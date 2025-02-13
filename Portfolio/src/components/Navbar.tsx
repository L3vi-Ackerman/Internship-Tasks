import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import "./Navbar.css";
const Navbar = () => {
  return (
    <div className="nav flex justify-between items-center text-white h-20 text-base">
      <div className="logo w-1/3">
        <img src="" alt="" />
      </div>
      <div className="nav-links w-1/2 p-8">
        <ul className="flex items-center justify-between w-2/3">
          <li className="w-full">
            <Link to="/">Home</Link>
          </li>
          <li className="w-full">
            <Link to="/projects">Projects</Link>
          </li>
          <li className="w-full">
            <Link to="/about">About</Link>
          </li>

          <li className="w-full">
            <Button
              variant="outline"
              size="default"
              className="text-green-400 p-5 cursor-pointer"
            >
              Resume
            </Button>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
