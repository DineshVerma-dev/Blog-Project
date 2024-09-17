import React from 'react'
import {Link , NavLink} from 'react-router-dom'

export default function Header() {
  return (
      <header className="shadow sticky border-b-2 border-blue-200  z-50 top-0">
          <nav className=" bg-white border-gray-400 px-4 lg:px-6 py-2.5">
              <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
                  <Link to="/" className="flex items-center">
                      <img
                         // src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                          src="../src/assets/blog-writing-svgrepo-com.svg"
                          className="mr-3 h-12"
                          alt="Logo"
                      />
                  </Link>
                  <div className="flex items-center lg:order-2">
                      {/* <Link
                          to="#"
                          className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Log in
                      </Link> */}
                      <Link
                          to="login"
                          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
                      >
                          Log in
                      </Link>
                  </div>
                  <div
                      className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
                      id="mobile-menu-2"
                  >
                      <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                          <li>
                              <NavLink
                                to="/"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200
                                      ${isActive ? "text-purple-700" :
                                      "text-gray-700"} 
                                      border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-purple-700 lg:p-0`
                                  }
                              >
                                  Home
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                to="blogs"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200
                                      ${isActive ? "text-orange-700" :
                                      "text-gray-700"} 
                                      border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
                                  }
                              >
                                  Blog
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                to="articles"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200
                                      ${isActive ? "text-blue-700" :
                                      "text-gray-700"} 
                                      border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-blue-700 lg:p-0`
                                  }
                              >
                                  Article
                              </NavLink>
                          </li>
                          <li>
                              <NavLink
                                to="wikis"
                                  className={({isActive}) =>
                                      `block py-2 pr-4 pl-3 duration-200
                                      ${isActive ? "text-green-700" :
                                      "text-gray-700"} 
                                      border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-green-700 lg:p-0`
                                  }
                              >
                                  Wiki
                              </NavLink>
                          </li>
                      </ul>
                  </div>
              </div>
          </nav>
      </header>
  );
}

