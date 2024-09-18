import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'; // Heroicons v2
import logo from '../assets/blog-writing-svgrepo-com.png';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="shadow sticky border-b-2 border-blue-200 z-50 top-0">
      <nav className="bg-white border-gray-400 px-4 lg:px-6 py-2.5">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <Link to="/" className="flex items-center">
            <img src={logo} className="mr-3 h-12" alt="Logo" />
          </Link>

          {/* Hamburger Icon for mobile */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-800 focus:outline-none"
            >
              {isMenuOpen ? (
                <XMarkIcon className="h-7 w-7" aria-hidden="true" />
              ) : (
                <Bars3Icon className="h-7 w-7" aria-hidden="true" />
              )}
            </button>
          </div>

          <div className="hidden lg:flex items-center lg:order-2">
            <Link
              to="login"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
            >
              Log in
            </Link>
          </div>

          {/* Menu links for large screens */}
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="desktop-menu"
          >
            <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
                <NavLink
                  to="/"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-purple-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                  }
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blogs"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-orange-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                  }
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="articles"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-blue-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                  }
                >
                  Article
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="wikis"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-green-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                  }
                >
                  Wiki
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="createpost"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-green-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                  }
                >
                  Create Post
                </NavLink>
              </li>
            </ul>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden w-full" id="mobile-menu">
            <ul className="flex flex-col mt-4 font-medium space-y-2">
              <li>
                <NavLink
                  to="/"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-purple-700"
                  onClick={toggleMenu}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="blogs"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-orange-700"
                  onClick={toggleMenu}
                >
                  Blog
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="articles"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-blue-700"
                  onClick={toggleMenu}
                >
                  Article
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="wikis"
                  className="block py-2 px-4 text-gray-700 hover:bg-gray-50 hover:text-green-700"
                  onClick={toggleMenu}
                >
                  Wiki
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="createpost"
                  className={({ isActive }) =>
                    `block py-2 pr-4 pl-3 duration-200 ${
                      isActive ? 'text-green-700' : 'text-gray-700'
                    } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                  }
                >
                  Create Post
                </NavLink>
              </li>
              
             
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}

