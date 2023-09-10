import { useState } from "react";
import { NavLink as Nav } from "react-router-dom";

export default function Navbar() {

  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  }

  return (
    <div className="bg-blue-500 p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-white font-serif text-2xl font-semibold">logo</div>

          {/* Dropdown menu visible for mobile */}
          <div className="md:hidden">
            <button
              onClick={toggleDropdown}
              className="text-white text-xl font-semibold font-serif hover:text-purple-500"
            >
              Menu
            </button>
            {isDropdownOpen && (
              <div className="absolute top-14 right-0 mt-2 bg-blue-500 text-white text-xl shadow-md z-10 w-full flex flex-row-reverse pr-2 font-serif">
                <div className="flex flex-col p-4 space-y-2">
                  <Nav to="/" className="hover:underline underline-offset-2 hover:text-purple-500">Home</Nav>
                  <Nav to="/login" className="hover:underline underline-offset-2 hover:text-purple-500">Login</Nav>
                  <Nav to="/todo" className="hover:underline underline-offset-2 hover:text-purple-500">Todo</Nav>
                </div>
              </div>
            )}
          </div>

          <div className="hidden md:flex space-x-10 text-white text-xl font-semibold font-serif">
            <Nav to="/" className="hover:underline underline-offset-2 hover:text-purple-500">Home</Nav>
            <Nav to="/login" className="hover:underline underline-offset-2 hover:text-purple-500">Login</Nav>
            <Nav to="/todo" className="hover:underline underline-offset-2 hover:text-purple-500">Todo</Nav>
          </div>
        </div>
      </div>
    </div>
  )
}
