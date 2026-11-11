import React, { useState } from "react";
import { GoArrowRight } from "react-icons/go";
import { IoMenu, IoClose } from "react-icons/io5";

export default function NavBar() {
  const [istoggeld, setIstoggeled] = useState(false);
  const handelToggel = () => {
    setIstoggeled(!istoggeld);
  };
  return (
    <header className=" fixed top-0 z-30 w-full bg-primary-foreground border-b border-border">
      <nav className="max-w-7xl container relative flex items-center justify-between mx-auto p-3 ">
        <a href="#hero">
          <img src="" alt="agresense logo" />
        </a>

        <div
          className={`w-75 ${istoggeld ? "flex" : "hidden"} absolute right-1 top-13 flex-col gap-y-3 p-3 bg-background rounded-xl shadow-md border border-border md:hidden`}
        >
          <ul className="flex flex-col gap-y-2 text-secondary-foreground font-mono font-bold text-sm">
            <li>
              <a
                href="#hero"
                className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#features"
                className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
              >
                features
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
              >
                Contact
              </a>
            </li>
          </ul>
          <div className="flex items-center gap-x-5 pt-3 border-t-2 border-primary">
            <a
              href="#login"
              className="text-primary text-sm font-bold font-mono px-6 py-2 border-2 border-primary rounded-xl hover:text-on-surface"
            >
              Log In
            </a>
            <a
              href="#get-started"
              className="text-primary-foreground text-sm bg-primary font-mono font-semibold px-3 py-2 rounded-xl hover:text-on-surface"
            >
              Get Started{" "}
              <GoArrowRight className=" w-5 h-5 inline-block ml-1 stroke-primary-foreground" />
            </a>
          </div>
        </div>

        <ul className="hidden text-secondary-foreground font-mono font-bold text-sm md:flex space-x-6">
          <li>
            <a
              href="#hero"
              className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#features"
              className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
            >
              features
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary"
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="hidden items-center space-x-3 md:flex">
          <a
            href="#login"
            className="text-primary text-sm font-bold font-mono hover:text-on-surface"
          >
            Log In
          </a>
          <a
            href="#get-started"
            className="text-primary-foreground text-sm bg-primary font-mono font-semibold px-3 py-2 rounded-xl hover:text-on-surface"
          >
            Get Started{" "}
            <GoArrowRight className=" w-5 h-5 inline-block ml-1 stroke-primary-foreground" />
          </a>
        </div>
        {istoggeld ? (
          <IoClose
            onClick={handelToggel}
            className="w-6 h-6 stroke-primary inline-block cursor-pointer md:hidden"
          />
        ) : (
          <IoMenu
            onClick={handelToggel}
            className="w-6 h-6 stroke-primary inline-block cursor-pointer md:hidden"
          />
        )}
      </nav>
    </header>
  );
}
