import { Button, Navbar, TextInput } from "flowbite-react";
import { Link, useLocation } from "react-router-dom";
import { AiOutlineSearch } from "react-icons/ai";
import { FaMoon } from "react-icons/fa";

export default function Header() {
  const path = useLocation().pathname;
  return (
    <Navbar className="border-b-2">
      <Link
        to="/"
        className="self-center whitespace-nowrap text-sm sm:text-xl font-semibold dark:text-white"
      >
        <span className="px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-white">
          TaskZenith
        </span>
      </Link>
      {/* <form>
        <TextInput
          type="text"
          placeholder="Search..."
          rightIcon={AiOutlineSearch}
          className="hidden lg:inline"
        />
      </form>
      <Button className="w-12 h-10 lg:hidden" color="gray" pill>
        <AiOutlineSearch />
      </Button> */}
      <div className="flex gap-2 md:order-2">
        <Button className="w-12 h-10 hidden sm:inline" color="gray" pill>
          <FaMoon />
        </Button>
        <Link to="/sign-in">
          <Button gradientDuoTone="purpleToBlue">Sign In</Button>
        </Link>
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Navbar.Link active={path === "/home"} as={"div"}>
          <Link to="/home">Home</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/about"} as={"div"}>
          <Link to="/about">About</Link>
        </Navbar.Link>
        <Navbar.Link active={path === "/projects"} as={"div"}>
          <Link to="/projects">Projects</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/challenges"} as={"div"}>
          <Link to="/challenges">Challenge</Link>
        </Navbar.Link>


        <Navbar.Link active={path === "/notes"} as={"div"}>
          <Link to="/notes">Notes</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/quiz"} as={"div"}>
          <Link to="/quiz">Quiz</Link>
        </Navbar.Link>

        <Navbar.Link active={path === "/contact"} as={"div"}>
          <Link to="/contact">Contact</Link>
        </Navbar.Link>

      </Navbar.Collapse>
    </Navbar>
  );
}

// OLD LEGACY CODE OF MY PREVIOUS VERSION

// import React from 'react'
// import { Link, NavLink } from 'react-router-dom';
// import icon from "../../assets/icon.png"
// import logomark from "../../assets/logomark.svg"
// export default function Header() {
//     return (
//         <header className="shadow sticky z-50 top-0 w-full">
//             <nav className="bg-white border-gray-200 px-4 lg:px-6 py-2.5">
//                 <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
//                     <Link to="/" className="flex items-center">
//                         <img
//                             // src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
//                             // src="https://www.acadease.com/img/icon/f-03.png"
//                             // src={icon}
//                             src={logomark}
//                             className="mr-3 h-12" // bg-yellow-500
//                             alt="Logo"
//                         />
//                     </Link>
//                     <div className="flex items-center lg:order-2">
//                         <Link
//                             to="#"
//                             className="text-gray-800 hover:bg-gray-50 focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Log in
//                         </Link>
//                         <Link
//                             to="#"
//                             className="text-white bg-orange-700 hover:bg-orange-800 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-4 lg:px-5 py-2 lg:py-2.5 mr-2 focus:outline-none"
//                         >
//                             Get started
//                         </Link>
//                     </div>
//                     <div
//                         className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
//                         id="mobile-menu-2"
//                     >
//                         <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
//                             <li>
//                                 <NavLink to="/"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Home
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/notes"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Notes
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/projects"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Projects
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/task"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Task
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/investment"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Invest
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/quiz"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Quiz
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/about"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     About
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/contact"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Contact
//                                 </NavLink>
//                             </li>

//                             <li>
//                                 <NavLink to="/github"
//                                     className={({isActive}) =>
//                                         `block py-2 pr-4 pl-3 duration-200 ${isActive ? "text-orange-700" : "text-gray-700" } border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 hover:text-orange-700 lg:p-0`
//                                     }
//                                 >
//                                     Github
//                                 </NavLink>
//                             </li>
//                         </ul>
//                     </div>
//                 </div>
//             </nav>
//         </header>
//     );
// }
