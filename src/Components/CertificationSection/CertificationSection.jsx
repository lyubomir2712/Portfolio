import './CertificationSection.css'
import {motion} from "framer-motion";
export default function CertificationSection() {
    return (
        <section id="certification-section" className="certification-section">
            <article className="certificates-article">
                <div className="certificates-container">
                    <motion.div
                        className="certificate-one-container certificate-container"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <img className="certificate-one certificate" src="../../../public/certificate.jpg" alt="Certificate One" />
                    </motion.div>

                    <motion.div
                        className="certificate-two-container certificate-container"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <img className="certificate-two certificate" src="../../../public/certificate.jpg" alt="Certificate Two" />
                    </motion.div>

                    <motion.div
                        className="certificate-three-container certificate-container"
                        animate={{ y: [0, -10, 0] }}
                        transition={{
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    >
                        <img className="certificate-three certificate" src="../../../public/certificate.jpg" alt="Certificate Three" />
                    </motion.div>
                </div>
            </article>
            <article className="certificates-description">
                <h3>Udemy</h3>
                <h5>.NET Fullstack developer</h5>
                <p>I’ve earned Udemy certificates in .NET, React and software craftsmanship, strengthening my skills in clean code and best practices for full-stack development.</p>
            </article>
        </section>
    )
}