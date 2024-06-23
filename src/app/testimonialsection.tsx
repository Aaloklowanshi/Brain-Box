import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    
    <section className="w-full py-12 md:py-24 lg:py-28  dark:bg-gray-800">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#22423A" fill-opacity="1" d="M0,96L60,122.7C120,149,240,203,360,213.3C480,224,600,192,720,176C840,160,960,160,1080,181.3C1200,203,1320,245,1380,266.7L1440,288L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"></path></svg>
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate__animated animate__fadeIn">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">What Our Students Say</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Hear from our students and their success stories.</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-2 lg:gap-12 animate__animated animate__fadeInUp">
          <div className="grid gap-1">
            <p className="text-gray-500 dark:text-gray-400">"I improved my math grades significantly with the help of my tutor. Highly recommend!"</p>
            <h3 className="text-xl font-bold">- Sarah K.</h3>
          </div>
          <div className="grid gap-1">
            <p className="text-gray-500 dark:text-gray-400">"The test prep sessions were very helpful and I scored higher than I expected on the SAT."</p>
            <h3 className="text-xl font-bold">- Michael L.</h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TestimonialsSection;
