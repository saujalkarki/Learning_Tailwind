import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
// importing icons from react-icons

function NavBar() {
  const [nav, setNav] = useState(true);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className="flex justify-between items-center text-white">
        <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="hidden md:flex">
          <li className="p-4">Home</li>
          <li className="p-4">Company</li>
          <li className="p-4">Resouces</li>
          <li className="p-4">About</li>
          <li className="p-4">Contact</li>
        </ul>
        <div onClick={handleNav} className="block p-4 md:hidden">
          {!nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
        <div
          className={
            !nav
              ? "fixed pt-2.5 left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500"
              : "fixed left-[-100%]"
          }
        >
          <h1 className="w-full text-3xl font-bold text-[#00df9a]">REACT.</h1>
          <ul className="uppercase p-4 ">
            <li className="p-4 border-b border-gray-600">Home</li>
            <li className="p-4 border-b border-gray-600">Company</li>
            <li className="p-4 border-b border-gray-600">Resouces</li>
            <li className="p-4 border-b border-gray-600">About</li>
            <li className="p-4 border-b border-gray-600">Contact</li>
          </ul>
        </div>
      </div>
    </>
  );
}

export default NavBar;
