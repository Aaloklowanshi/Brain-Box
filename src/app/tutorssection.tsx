import React from 'react';

const TutorsSection: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center animate__animated animate__fadeIn">
          <div className="space-y-2">
            <div className="inline-block rounded-lg bg-gray-100 px-3 py-1 text-sm dark:bg-gray-800">Meet Our Tutors</div>
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">Experienced and Dedicated Tutors</h2>
            <p className="max-w-[900px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed dark:text-gray-400">Our team of tutors is highly qualified and dedicated to providing the best possible learning experience for you.</p>
          </div>
        </div>
        <div className="mx-auto grid max-w-5xl items-start gap-6 py-12 lg:grid-cols-3 lg:gap-12 animate__animated animate__fadeInUp">
          <div className="grid gap-1">
            <img src="/placeholder-profile.jpg" alt="Tutor 1" className="h-48 w-48 rounded-full mx-auto"/>
            <h3 className="text-xl font-bold">John Doe</h3>
            <p className="text-gray-500 dark:text-gray-400">Math Tutor with 10 years of experience helping students excel.</p>
          </div>
          <div className="grid gap-1">
            <img src="/placeholder-profile.jpg" alt="Tutor 2" className="h-48 w-48 rounded-full mx-auto"/>
            <h3 className="text-xl font-bold">Jane Smith</h3>
            <p className="text-gray-500 dark:text-gray-400">Science Tutor passionate about making complex concepts easy to understand.</p>
          </div>
          <div className="grid gap-1">
            <img src="/placeholder-profile.jpg" alt="Tutor 3" className="h-48 w-48 rounded-full mx-auto"/>
            <h3 className="text-xl font-bold">Alex Johnson</h3>
            <p className="text-gray-500 dark:text-gray-400">Language Tutor specializing in Spanish and French.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default TutorsSection;
