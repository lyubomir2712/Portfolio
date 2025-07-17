import './CertificationSection.css';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import DivisionLine from "../DivisionLine/DivisionLine.jsx";
import Title from "../Title/Title.jsx";
import entityFrameworkCertificateImg from './../../assets/EntityFramework certificate.png'
import mvcCertificateImg from './../../assets/MVC certificate.png'
import apiCertificateImg from './../../assets/API certificate.png'

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.5,
        },
    },
};

const childVariants = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 },
};

export default function CertificationSection() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="certification-section" className="certification-section" ref={ref}>
            <DivisionLine/>

            <br/><br/>

            <Title title={"Certifications"} />

            <div className="certification-section-container">
                <article className="certificates-article">
                    <motion.div
                        className="certificates-container"
                        variants={containerVariants}
                        initial="hidden"
                        animate={inView ? "visible" : "hidden"}>

                        <motion.div
                            className="certificate-three-container certificate-container"
                            variants={childVariants}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0, y: [0, -10, 0] } : { opacity: 0, x: -50, y: 0 }}
                            transition={{
                                x: { duration: 1, ease: "easeOut", delay: 0 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                            }
                        }>
                            <img className="certificate-three certificate" src={entityFrameworkCertificateImg} alt="Certificate Three" />
                        </motion.div>

                        <motion.div
                            className="certificate-two-container certificate-container"
                            variants={childVariants}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0, y: [0, -10, 0] } : { opacity: 0, x: -50, y: 0 }}
                            transition={{
                                x: { duration: 1, ease: "easeOut", delay: 0.5 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                            }
                        }>
                            <img className="certificate-two certificate" src={apiCertificateImg} alt="Certificate Two" />
                        </motion.div>

                        <motion.div
                            className="certificate-one-container certificate-container"
                            variants={childVariants}
                            initial={{ opacity: 0, x: -50 }}
                            animate={inView ? { opacity: 1, x: 0, y: [0, -10, 0] } : { opacity: 0, x: -50, y: 0 }}
                            transition={{
                                x: { duration: 1, ease: "easeOut", delay: 1 },
                                y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                            }
                        }>
                            <img className="certificate-one certificate" src={mvcCertificateImg} alt="Certificate One" />
                        </motion.div>
                    </motion.div>
                </article>

                <article className="certificates-description">
                    <motion.div
                        className="certificates-description-container"
                        initial={{ opacity: 0, x: 25 }}
                        animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 25 }}
                        transition={{ duration: 1.5, ease: "easeOut" }}>
                        <h3>Udemy</h3>
                        <h5>.NET Fullstack developer</h5>
                        <p>
                            I’ve earned Udemy certificates in .NET, React and software craftsmanship, strengthening my skills in clean code and best practices for full-stack development.
                        </p>
                    </motion.div>
                </article>
            </div>
        </section>
    );
}