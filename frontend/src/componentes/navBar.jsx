import React from 'react'
import { GoArrowRight } from "react-icons/go";

export default function NavBar() {
  return (
    <header className=" fixed top-0 z-30 w-full bg-primary-foreground border-b border-border">
      <nav className="max-w-7xl container relative flex items-center justify-between mx-auto p-3 ">
          <div>
            <img src="" alt="agresense logo" />
          </div>

          <ul className="hidden text-secondary-foreground font-mono font-bold text-sm md:flex space-x-6">
            <li>
              <a href="#hero" className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary">
                Home
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary">
                features
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-on-surface hover:underline hover:-mt-1 decoration-primary">
                Contact
              </a>
            </li>
          </ul>
          <div className='flex items-center space-x-3'>
            <a href="#login" className="text-primary text-sm font-bold font-mono hover:text-on-surface">
              Log In
            </a>
            <a href="#get-started" className="text-primary-foreground text-sm bg-primary font-mono font-semibold px-3 py-2 rounded-xl hover:text-on-surface">
              Get Started <GoArrowRight className=' w-5 h-5 inline-block ml-1 stroke-primary-foreground' />
            </a>
          </div>
      </nav>
    </header>
  )
}
