import './IntroductionSection.css'
import 'bootstrap-icons/font/bootstrap-icons.css';
import {motion} from 'framer-motion';
import GreetingsCodeComponent from "./GreetingsCodeComponent.jsx";
import { useInView } from 'react-intersection-observer';

const iconVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      opacity: { duration: 1.2, ease: "easeOut", delay: custom },
      y:       { duration: 1.2, ease: "easeOut", delay: custom },
      scale:   { duration: 0.3, ease: "easeOut" },
    },
  }),
  hover: {
    scale: 1.2,
    transition: { duration: 0.3, ease: "easeOut" },
  },
  tap: {
    scale: 1.2,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function IntroductionSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="introduction-section" className={"introduction-section"} ref={ref}>
            <article className={"introduction-article"}>
                <motion.h3
                    className="introduction"
                    initial={{opacity: 0, x: -30}}
                    animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -30}}
                    transition={{duration: 1.75, ease: "easeOut"}}>
                    Hello 👋<br className="breakline-1"/> this is <span className="name">Lyubomir</span>
                </motion.h3>

                <motion.h3
                    className="introduction-description"
                    initial={{opacity: 0, x: -30}}
                    animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: -30}}
                    transition={{duration: 1.75, ease: "easeOut"}}>
                    I am a <span>full-stack developer</span> from Sofia,<br className="breakline-2"/>Bulgaria
                </motion.h3>

                <div className={"introduction-socials"}>
                    <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={0.2}
                        whileHover="hover"
                        whileTap="tap">
                        <a href="https://www.linkedin.com/in/lyubomir-georgiev-ab9116248/">
                            <i className="bi bi-linkedin icon"></i>
                        </a>
                    </motion.div>

                    <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={0.4}
                        whileHover="hover"
                        whileTap="tap">

                        <a href="https://github.com/lyubomir2712">
                            <i className="bi bi-github icon"></i>
                        </a>
                    </motion.div>

                    <motion.div
                        variants={iconVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}
                        custom={0.6}
                        whileHover="hover"
                        whileTap="tap"
                    >
                        <a href="https://x.com/0xGeorgiev"><i className="bi bi-twitter-x"></i></a>
                    </motion.div>
                </div>

                <motion.a className="flex items-center mt-8 w-46 hover:w-48 h-15 gap-1 hover:gap-3 rounded-full bg-gradient-to-r from-pink-500 to-violet-600 px-3 md:px-8 py-3 md:py-4 text-center text-xs md:text-sm font-medium uppercase tracking-wider text-white no-underline transition-all duration-200 ease-out hover:text-white hover:no-underline md:font-semibold"
                   role="button" target="_blank"
                          href="LyubomirGeorgievGeorgievResume.pdf"
                          download="LyubomirGeorgievResume.pdf"
                          initial={{opacity: 0, y: 20}}
                          animate={inView ? {opacity: 1, y: 0} : {opacity: 0, y: 20}}
                          transition={{duration: 0.8, ease: "easeOut", delay: 0.8}}><span>Get Resume</span>
                    <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 24 24" height="16"
                         width="16" xmlns="http://www.w3.org/2000/svg">
                        <path fill="none" d="M0 0h24v24H0z"></path>
                        <path d="M5 20h14v-2H5v2zM19 9h-4V3H9v6H5l7 7 7-7z"></path>
                    </svg>
                </motion.a>
            </article>

            <article className="tech-stack-article">
                <motion.div
                    initial={{opacity: 0, x: 30}}
                    animate={inView ? {opacity: 1, x: 0} : {opacity: 0, x: 30}}
                    transition={{duration: 1.75, ease: "easeOut"}}
                ><GreetingsCodeComponent/>
                </motion.div>
            </article>
        </section>
    )
}
