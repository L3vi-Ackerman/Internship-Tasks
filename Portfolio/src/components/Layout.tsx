import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
const Layout = () => {
  return (
    <>
      <section className="bg-cyan-900 min-h-screen flex flex-col">
        <Navbar />
        <Outlet />
      </section>
    </>
  );
};

export default Layout;
