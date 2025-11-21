import { Link } from "react-router-dom";
import { courses } from "../data/courses";

const Courses = () => {
  return (
    <div className="max-w-6xl mx-auto py-12 px-5">
      <h1 className="text-3xl font-bold text-center">Our Courses</h1>
      <p className="text-gray-500 text-center mt-2">
        Explore high-quality courses to boost your skills.
      </p>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition"
          >
            <img
              src={course.image}
              alt={course.title}
              className="w-full h-40 object-cover"
            />

            <div className="p-4">
              <h3 className="text-xl font-semibold">{course.title}</h3>
              <p className="text-gray-700 mt-1 font-bold">{course.price}</p>

              <Link to={`/course/${course._id}`}>
                <button className="mt-4 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition">
                  View Details
                </button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Courses;
