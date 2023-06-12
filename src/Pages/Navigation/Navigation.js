import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="">
      <div className="">
        <nav className="ah-bg-secondary">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
            <div className="flex items-center justify-between h-16">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <h1 className="ah-color-third text-xl">Ankan Halder</h1>
                </div>
              </div>
              <div className="hidden md:block">
                <div className="ml-4 flex items-center md:ml-6">
                  <a
                    href="#home"
                    className="text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Home
                  </a>
                  <a
                    href="#service"
                    className="text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Services
                  </a>
                  <a
                    href="#skills"
                    className="text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Skills
                  </a>
                  <a
                    href="#about"
                    className="text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#review"
                    className="text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Review
                  </a>
                  <a
                    href="#projects"
                    className="text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Projects
                  </a>
                  <a
                    href="#contact"
                    className="text-white px-3 py-2 rounded-md text-md font-medium"
                  >
                    Contact
                  </a>
                </div>
              </div>
              <div className="-mr-2 flex md:hidden">
                <button
                  type="button"
                  className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-150 ease-in-out"
                  onClick={toggleNavbar}
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
          {isOpen && (
            <div className="md:hidden">
              <div className="px-2 pt-2 pb-3 sm:px-3">
                <a
                  href="#home"
                  className="text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </a>
                <a
                  href="#service"
                  className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </a>
                <a
                  href="#skills"
                  className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Skills
                </a>
                <a
                  href="#about"
                  className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#review"
                  className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Review
                </a>
                <a
                  href="#projects"
                  className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-white mt-1 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
