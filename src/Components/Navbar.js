import React from "react";
import { CiMenuBurger } from "react-icons/ci";

const Navbar = () => {
  return (
    <>
      <div className="w-full bg-violet-900">
        <div className="max-w-[1200px] mx-auto flex justify-between text-white items-center py-4 px-8">
          <h1 className="text-2xl font-bold ">myTunes</h1>

          <div className="hidden  sm:block">
            <ul className="flex gap-8 font-semibold ">
              <li>Overview</li>
              <li>Music</li>
              <li>Video</li>
              <li>Gift Cards</li>
            </ul>
          </div>
          <CiMenuBurger size={30} className="block sm:hidden text-white" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
