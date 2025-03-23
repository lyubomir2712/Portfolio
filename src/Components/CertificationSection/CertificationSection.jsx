import './CertificationSection.css';
import { motion } from 'framer-motion';

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
    return (
        <section id="certification-section" className="certification-section">
            <article className="certificates-article">
                <motion.div
                    className="certificates-container"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >

                    <motion.div
                        className="certificate-three-container certificate-container"
                        variants={childVariants}
                        animate={{
                            x: 0,
                            y: [0, -10, 0],
                        }}
                        transition={{
                            x: { duration: 1, ease: "easeOut", delay: 0 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        }}
                    >
                        <img className="certificate-three certificate" src="../../../public/certificate.jpg" alt="Certificate Three" />
                    </motion.div>

                    <motion.div
                        className="certificate-two-container certificate-container"
                        variants={childVariants}
                        animate={{
                            x: 0,
                            y: [0, -10, 0],
                        }}
                        transition={{
                            x: { duration: 1, ease: "easeOut", delay: 0.5 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        }}
                    >
                        <img className="certificate-two certificate" src="../../../public/certificate.jpg" alt="Certificate Two" />
                    </motion.div>

                    <motion.div
                        className="certificate-one-container certificate-container"
                        variants={childVariants}
                        animate={{
                            x: 0,
                            y: [0, -10, 0],
                        }}
                        transition={{
                            x: { duration: 1, ease: "easeOut", delay: 1 },
                            y: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
                        }}
                    >
                        <img className="certificate-one certificate" src="../../../public/certificate.jpg" alt="Certificate One" />
                    </motion.div>
                </motion.div>
            </article>
            <article className="certificates-description">
                <motion.div
                    className="certificates-description-container"
                    initial={{ opacity: 0, x: 25 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                >
                    <h3>Udemy</h3>
                    <h5>.NET Fullstack developer</h5>
                    <p>
                        I’ve earned Udemy certificates in .NET, React and software craftsmanship, strengthening my skills in clean code and best practices for full-stack development.
                    </p>
                </motion.div>
            </article>
        </section>
    );
}