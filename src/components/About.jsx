import { motion } from "framer-motion";
import { assets } from "../assets/assets";


const About = () => {
    return (

        <motion.div

            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}

            id="about" className="max-w-7xl mx-auto text-center px-[12%] py-10 mt-10">
            
            <motion.h2
                initial={{ opacity: 0, y: -20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="text-center text-5xl font-ovo">About Me</motion.h2>
            <motion.h1
                initial={{ opacity: 0}}
                whileInView={{ opacity: 1}}
                transition={{ duration: 0.6 , delay:0.8}}

                className="w-full font-ovo mt-5 lg:text-2xl md:text-[18px]">
                Hi! I'm Abdal Qamar, a passionate Frontend Developer skilled in HTML, CSS, JavaScript, and React. I specialize in building responsive, user-friendly, and interactive web applications with a focus on seamless UI/UX.
                With experience in React.js, Tailwind CSS, and Git, I create efficient and scalable web solutions. Always eager to learn new technologies, I strive to develop visually appealing and high-performance websites that make an impact.

            </motion.h1>
        </motion.div>

    )
}
export default About;


