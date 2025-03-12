import { assets } from "../assets/assets";
import { motion } from "framer-motion";

const Hero = () => {
    return (


        <div id="home" className="w-full max-w-3xl text-center mx-auto 
         flex flex-col items-center justify-center gap-4 pt-25 md:pt-30 px-2">

            < motion.div
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.8, type: "spring", stiffness: 100 }}
            >
                <img src={assets.profileImg} className=" rounded-full w-32 md:w-40" />
            </motion.div>

            <motion.h3
                initial={{y:-20, opacity: 0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:0.6, delay:0.3}}
                className="text-xl md:text-2xl font-ovo mb-3">
                Hi! I'm Abdal Qamar</motion.h3 >

            <motion.h1
            initial={{y:-30, opacity: 0}}
            whileInView={{y:0, opacity:1}}
            transition={{duration:0.6, delay:0.3}}

             className="text-3xl font-ovo sm:text-6xl lg:text-[66px]">
                Frontend Web Developer</motion.h1>
            <motion.p 
            initial={{opacity: 0}}
            whileInView={{opacity:1}}
            transition={{duration:0.7, delay:0.7}}
            className="max-w-2xl mx-auto font-ovo lg:text-2xl">
                Passionate about crafting beautiful, responsive, and interactive web experiences with modern frontend technologies, creating seamless digital experiences.

            </motion.p>
            <div className="flex flex-col sm:flex-row items-center gap-4 mt-4">
                <motion.a 
                initial={{y:30, opacity: 0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:0.6, delay:1}}
                href="#contact"
                    className="px-10 py-3 border border-white rounded-full bg-black
                text-white flex items-center gap-2"
                >Contact Me <img src={assets.right_arrow} className="w-4" /></motion.a>

                <motion.a
                initial={{y:30, opacity: 0}}
                whileInView={{y:0, opacity:1}}
                transition={{duration:0.6, delay:1}}
                    href="https://drive.google.com/file/d/1Kzp9g77Fh6DM5rR0hARrhsf0DBs0hz2L/view?usp=drive_link" download="my-resume.pdf"
                    className="px-10 py-3 border border-gray-500 rounded-full
                text-black flex items-center gap-2">
                    Download CV<img src={assets.download_icon} className="w-4" /></motion.a>
            </div>
        </div>
    )
}
export default Hero






