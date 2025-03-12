import toast from "react-hot-toast";

const ProjectCard = ({ title, desc, image, live, github }) => {

  function clickHandler() {
    toast.error("Feature coming soon!")
  }


  return (


    <div id="project"
      className="bg-white shadow-lg rounded-xl p-5 border
      border-gray-200 hover:shadow-2xl transition duration-300  mx-auto">
      <img src={image} className="rounded-lg w-full " />
      <h3 className="text-xl font-semibold text-center mt-4">{title}</h3>
      <p>{desc}</p>
      <div className="flex  justify-evenly gap-4 mt-4">
        <a target="/" href={github} className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100">
          GitHub
        </a>
        {live ? (
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Live Demo
          </a>
        ) : (
          <button
            onClick={clickHandler}
            className="border px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
          >
            Live Demo
          </button>
        )}

      </div>
    </div>

  );
};

export default ProjectCard;