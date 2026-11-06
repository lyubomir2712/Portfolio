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
                    I am a software engineer with experience building scalable products for the iGaming industry. I specialise in distributed systems and microservice-based architectures, with strong proficiency in ASP.NET and React.
                    I enjoy learning new technologies and broadening my technical expertise, and exploring areas such as FinTech and DeFi. I thrive in fast-paced, dynamic environments and take pride in delivering reliable, well-engineered solutions.
                    I’m someone who enjoys growing with technology—continuously learning, adapting, and turning new challenges into practical software solutions.
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