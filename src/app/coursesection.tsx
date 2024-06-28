import React, { useState } from 'react';

interface Course {
  title: string;
  description: string;
  color: string;
}

const CoursesSection: React.FC = () => {
  const [showDetails, setShowDetails] = useState(false);
  const [selectedCourse, setSelectedCourse] = useState<Course | null>(null);

  const handleCourseClick = (course: Course) => {
    setSelectedCourse(course);
    setShowDetails(true);
  };

  const handleCloseDetails = () => {
    setShowDetails(false);
    setSelectedCourse(null);
  };

  return (
    <div className="max-w-6xl mx-auto p-8">
      <h1 className="text-3xl font-bold text-center mb-8">
        Discover Available <span className="text-orange-500">Courses</span>
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {[
          {
            title: 'Language',
            description:
              'Learn a foreign language by online native teacher and increase your employability.',
            color: 'yellow',
          },
          {
            title: 'IIT-JEE',
            description:
              'Learn from best teachers from home at anytime at affordable prices.',
            color: 'orange',
          },
          {
            title: 'Coding / Programming',
            description:
              'Find the best tutor for coding and programming classes at affordable prices.',
            color: 'green',
          },
          {
            title: 'Curricular Activities',
            description:
              'Get online interactive extra curricular classes with best trainer.',
            color: 'blue',
          },
          {
            title: 'Math',
            description:
              'Improve your math skills with personalized online tutoring.',
            color: 'purple',
          },
          {
            title: 'Science',
            description:
              'Explore the wonders of science with interactive online classes.',
            color: 'pink',
          },
        ].map((course) => (
          <div
            key={course.title}
            className={`p-6 bg-${course.color}-100 rounded-lg relative cursor-pointer`}
            onClick={() => handleCourseClick(course)}
          >
            <div className="relative z-10">
              <h2 className={`text-lg font-semibold text-${course.color}-600`}>
                Basic to advance
              </h2>
              <h3 className="text-2xl font-bold text-gray-800">{course.title}</h3>
              <p className="text-gray-700 mt-2">{course.description}</p>
              <button
                className={`mt-4 px-4 py-2 bg-${course.color}-500 text-white rounded`}
              >
                Explore Now
              </button>
            </div>
            <div className="absolute top-6 right-6 z-0 flex flex-wrap gap-1">
              {Array(6)
                .fill(null)
                .map((_, index) => (
                  <div
                    key={index}
                    className={`w-2 h-2 rounded-full bg-${course.color}-600 opacity-50`}
                  ></div>
                ))}
            </div>
          </div>
        ))}
      </div>
      {showDetails && selectedCourse && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div
            className={`bg-white p-8 border-blue-100 rounded-lg shadow-lg w-full max-w-md border-4 border-${selectedCourse.color}-500`}
          >
            <h2 className="text-2xl font-bold mb-4">{selectedCourse.title}</h2>
            <p className="text-gray-700">{selectedCourse.description}</p>
            <button
              className={`mt-4 px-4 py-2 text-white rounded bg-${selectedCourse.color}-500 hover:bg-${selectedCourse.color}-600`}
              onClick={handleCloseDetails}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursesSection;
