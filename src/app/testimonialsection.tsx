import React from 'react';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate__animated animate__fadeIn">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Testimonials</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Students Say</h2>
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
