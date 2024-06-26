import React from "react";
const ExtraSection: React.FC = () => {
  return (
    <section className="bg-[#f3eada4d] w-full py-12 md:py-24 lg:py-34  dark:bg-gray-800">
      <div className="flex flex-col items-center justify-center min-h-screen w-[90%] mx-auto">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold text-[#1a202c]">
            Online Learning With{" "}
            <span className="text-[#ff6347]">e-Tuitions</span>
          </h1>
          <p className="text-lg text-[#4a5568] mt-4">
            We will connect you to your teachers &amp; peers. Let us tell you
            what makes us one of the Best Online Tuition website.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <img
                src="/background.png"
                alt="Classes for School &amp; College Students"
                className="w-16 h-16 mb-4"
                width="60"
                height="60"
                style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold text-[#1a202c]">
                Classes for School &amp; College Students
              </h2>
              <p className="text-[#4a5568] mt-2">
                We offer online classes for students in school &amp; college.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <img
                src="/placeholder.svg"
                alt="Book Demo Class"
                className="w-16 h-16 mb-4"
                width="60"
                height="60"
                style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold text-[#1a202c]">
                Book Demo Class
              </h2>
              <p className="text-[#4a5568] mt-2">
                Just choose your subject/course &amp; take a free trial class.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <img
                src="/placeholder.svg"
                alt="Classes in Regional Language"
                className="w-16 h-16 mb-4"
                width="60"
                height="60"
                style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold text-[#1a202c]">
                Classes in Regional Language
              </h2>
              <p className="text-[#4a5568] mt-2">
                Find teachers who will teach you in your mother tongue.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <img
                src="/placeholder.svg"
                alt="Diverse Courses"
                className="w-16 h-16 mb-4"
                width="60"
                height="60"
                style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold text-[#1a202c]">
                Diverse Courses
              </h2>
              <p className="text-[#4a5568] mt-2">
                Coding, Foreign languages, Dance, Music. Take online classes for
                all.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <img
                src="/placeholder.svg"
                alt="Experienced Teachers"
                className="w-16 h-16 mb-4"
                width="60"
                height="60"
                style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold text-[#1a202c]">
                Experienced Teachers
              </h2>
              <p className="text-[#4a5568] mt-2">
                Take lessons from the Best Teachers in India.
              </p>
            </div>
          </div>
          <div
            className="rounded-lg border bg-card text-card-foreground shadow-sm"
            data-v0-t="card"
          >
            <div className="p-6">
              <img
                src="/placeholder.svg"
                alt="Student's Results"
                className="w-16 h-16 mb-4"
                width="60"
                height="60"
                style={{ aspectRatio: "60 / 60", objectFit: "cover" }}
              />
              <h2 className="text-xl font-semibold text-[#1a202c]">
                Student's Results
              </h2>
              <p className="text-[#4a5568] mt-2">
                Every student's results &amp; reviews are important to us.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExtraSection;
