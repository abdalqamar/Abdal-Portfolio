import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import Portfolio from '../assets/Portfolio.png'
import SpicyBites from '../assets/SpicyBites.png'
import Supercar from '../assets/Supercar.png'
import Webelite from '../assets/Webelite.png'
import VirtualR from '../assets/virtualR_img1.png'

const Projects = () => {

  const projectJson = [
    {
      title: 'Portfolio',
      desc: 'Webelite Builders did an amazing job on our website. Their professionalism and dedication to our project were outstanding.',
      image: Portfolio,
      live: "#",
      github: "https://github.com/abdalqamar/"
    },
    {
      title: 'Virtual R Sage',
      desc: 'The team at Webelite Builders exceeded our expectations with their digital marketing expertise. Highly recommend!',
      image: VirtualR,
      live: "https://virtualr-sage-two.vercel.app/",
      github: "https://github.com/abdalqamar/Virtual-Project"
    },

    {
      title: 'Super Car',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Supercar,
      github: "#"
    },
    {
      title: 'Webelite builder',
      desc: 'Working with Webelite Builders was a seamless experience. They brought our vision to life with a modern, responsive website.',
      image: Webelite,
      github: "#"
    }
  ];

  return (
    <section id='mywork' className="py-20 bg-gray-200 text-center">
      <h2 className="text-4xl font-bold mb-10">Projects</h2>
      <motion.div
         initial={{ opacity: 0, y: -20 }}
         whileInView={{ opacity: 1, y: 0 }}
         transition={{ duration: 0.5, delay: 0.8 }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-6 xl:px-[4%]">

        <ProjectCard title={projectJson[0].title}
          desc={projectJson[0].desc}
          live={projectJson[0].live}
          github={projectJson[0].github}
          image={projectJson[0].image}
        />
        <ProjectCard title={projectJson[1].title}
          desc={projectJson[1].desc}
          live={projectJson[1].live}
          github={projectJson[1].github}
          image={projectJson[1].image}
        />
        <ProjectCard title={projectJson[2].title}
          desc={projectJson[2].desc}
          live={projectJson[2].live}
          github={projectJson[2].github}
          image={projectJson[2].image}
        />
        <ProjectCard title={projectJson[3].title}
          desc={projectJson[3].desc}
          live={projectJson[3].live}
          github={projectJson[3].github}
          image={projectJson[3].image}
        />



      </motion.div>
    </section>
  );
};

export default Projects;