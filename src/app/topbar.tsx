import React from 'react';

const Topbar: React.FC = () => {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center">
      <a className="flex items-center justify-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6">
          <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
        </svg>
        <span className="sr-only">Tutoring Experts</span>
      </a>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <a className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out" href="#">Services</a>
        <a className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out" href="#">Tutors</a>
        <a className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out" href="#">Testimonials</a>
        <a className="text-sm font-medium hover:underline underline-offset-4 transition-all duration-300 ease-in-out" href="#">Contact</a>
      </nav>
    </header>
  );
}

export default Topbar;
