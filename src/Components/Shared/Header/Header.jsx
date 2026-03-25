import React from "react";
import { Link } from "react-router";
import logo from "../../../assets/logo.png";
import gitLogo from "../../../assets/fi_2111432.svg";

const Links = (
  <>
    <Link to={"/"}>Home</Link>
    <Link to={"/apps"}>Apps</Link>
    <Link to={"/installation"}>Installation</Link>
  </>
);

const Header = () => {
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {Links}
            </ul>
          </div>
          <Link to={"/"} className="btn btn-ghost text-xl text-purple-600">
            <img src={logo} className="w-10 h-10 object-contain " alt="Logo" />
            HERO.IO
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 space-x-2.5 cursor-pointer [&_a]:hover:text-purple-600 [&_a]:hover:underline font-bold">
            {Links}
          </ul>
        </div>
        <div className="navbar-end">
          <a
            href="https://github.com/sohananazneen"
            target="_blank"
            className="btn bg-purple-600 text-white"
          >
            <img src={gitLogo} alt="Git Link" />
            Contribution
          </a>
        </div>
      </div>
    </>
  );
};

export default Header;
