import "./AboutMeSection.css"
import { motion } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import profile from "./../../assets/profile.jpeg";
export default function AboutMeSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });
    return (
        <section className="about-me-section w-[70%] left-1/2 transform -translate-x-1/2 origin-left relative" ref={ref}>
            <motion.h1
                className="about-me-header text-2xl mb-4 text-[#16F2B3] text-left"
                initial={{ x: -30, opacity: 0 }}
                animate={inView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                transition={{ duration: 1.75 }}>
                WHO I AM?
            </motion.h1>

            <div className="about-me-container grid grid-cols-1 md:grid-cols-2 gap-1 ">
                <motion.div
                    className="about-me-container text-left text-lg"
                    initial={{ x: -30, opacity: 0 }}
                    animate={inView ? { x: 0, opacity: 1 } : { x: -30, opacity: 0 }}
                    transition={{ duration: 1.75 }}>
                    I am a 21-year-old junior fullstack engineer with expertise in React and .NET, currently in my third year of a Software Engineering degree at the University of Veliko Tarnovo. With two years of experience as a system administrator, I have transitioned over the past few months into software engineering, where I work as a junior fullstack engineer. I am highly proficient in version control systems, Agile methodologies, and CI/CD pipelines. My experience extends to real-world projects, where I’ve developed a strong understanding of software craftsmanship. Additionally, I possess solid knowledge in object-oriented programming (OOP), design patterns, as well as data structures and algorithms. I am always eager to embrace new challenges and opportunities that allow me to grow and contribute to innovative projects.
                </motion.div>

                <div className="about-me-cell2 about-me-profile grid [grid-template-columns:3fr_1fr] gap-4 justify-items-end">
                    <motion.img
                        className="profile-img w-75 h-auto rounded-lg"
                        src={profile}
                        alt="profile"
                        initial={{
                            x: window.innerWidth < 1400 ? -30 : 30,
                            opacity: 0,
                            filter: "grayscale(100%)",
                            scale: 1
                        }}
                        animate={
                            inView
                                ? {
                                    x: 0,
                                    opacity: 1,
                                    transition: { duration: 1.75 }
                                }
                                : {
                                    x: window.innerWidth < 1400 ? -100 : -30,
                                    opacity: 0,
                                    transition: { duration: 1.75 }
                                }
                        }
                        transition={{ duration: 1, ease: "easeOut" }}
                        whileHover={{
                            filter: "grayscale(0%)",
                            scale: 1.05,
                            transition: { duration: 0.6, ease: "easeOut" }
                        }}
                    />

                    <motion.span
                        className="bg-[#1a1443] w-38 h-10 inline-block text-white rotate-90 mt-14 p-2 px-3 text-xl rounded-md about-me-title"
                        initial={{ y: -30, opacity: 0 }}
                        animate={inView ? { y: 0, opacity: 1 } : { y: -30, opacity: 0 }}
                        transition={{ duration: 1.75, delay: 0.5 }}>
                        ABOUT ME
                    </motion.span>
                </div>
            </div>
        </section>
    )
}