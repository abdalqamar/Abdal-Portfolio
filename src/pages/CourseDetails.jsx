import { useParams } from "react-router-dom";
import { courses } from "../data/courses";
import toast from "react-hot-toast";

const CourseDetails = () => {
  const { id } = useParams();
  const course = courses.find((c) => c._id === id);

  if (!course) {
    return <h2 className="text-center text-red-500">Course not found</h2>;
  }

  return (
    <div className="max-w-5xl mx-auto py-25 px-5">
      <img
        src={course.image}
        alt={course.title}
        className="w-full h-72 object-cover rounded-xl shadow"
      />

      <div className="mt-6 flex justify-between items-center">
        <h1 className="text-4xl font-bold">{course.title}</h1>
        <p className="text-2xl font-extrabold text-blue-600">{course.price}</p>
      </div>

      <p className="mt-4 text-gray-700 leading-relaxed">
        {course.description ||
          "This course is designed to take you from beginner to professional. Learn step-by-step with real-world projects, hands-on practice, and expert guidance."}
      </p>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-3">What you'll learn</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-gray-700">
          {(
            course.skills || [
              "Build real-world projects",
              "Master fundamentals step-by-step",
              "Work with modern tools",
              "Improve your problem solving",
              "Learn industry best practices",
              "Become job-ready",
            ]
          ).map((skill, index) => (
            <li key={index} className="p-3 bg-gray-100 rounded-lg border">
              • {skill}
            </li>
          ))}
        </ul>
      </div>

      {/* Checkout Button */}
      <div className="mt-10">
        <button
          onClick={() =>
            toast.error("We have not integrated the payment gateway yet.")
          }
          className="w-full bg-blue-600 text-white py-3 rounded-xl text-lg font-semibold hover:bg-blue-700 transition"
        >
          Checkout Now
        </button>
      </div>
    </div>
  );
};

export default CourseDetails;
