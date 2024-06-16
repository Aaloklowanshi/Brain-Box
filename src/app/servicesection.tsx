import React from 'react';

const ServicesSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate__animated animate__fadeIn">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Our Services</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Tailored Tutoring for Your Success</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Our experienced tutors offer personalized support in a wide range of subjects to help you reach your academic goals.</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12 animate__animated animate__fadeInUp">
          <div className="grid gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-gray-900 dark:text-gray-50">
              <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
              <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
            </svg>
            <h3 className="text-xl font-bold">Academic Tutoring</h3>
            <p className="text-gray-500 dark:text-gray-400">Get personalized support in core academic subjects like math, science, and English.</p>
          </div>
          <div className="grid gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-gray-900 dark:text-gray-50">
              <path d="M17 3a2.85 2.83 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5Z"></path>
              <path d="m15 5 4 4"></path>
            </svg>
            <h3 className="text-xl font-bold">Test Prep</h3>
            <p className="text-gray-500 dark:text-gray-400">Prepare for standardized tests like the SAT, ACT, and GRE with expert guidance.</p>
          </div>
          <div className="grid gap-1">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-12 w-12 text-gray-900 dark:text-gray-50">
              <path d="m17 17 5 5-5-5ZM2 12v7a2 2 0 0 0 2 2h7"></path>
              <path d="M12 2h7a2 2 0 0 1 2 2v7"></path>
              <path d="M12 12 21 3"></path>
              <path d="M3 21 12 12"></path>
            </svg>
            <h3 className="text-xl font-bold">Language Learning</h3>
            <p className="text-gray-500 dark:text-gray-400">Learn a new language or improve your proficiency with our experienced tutors.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesSection;
