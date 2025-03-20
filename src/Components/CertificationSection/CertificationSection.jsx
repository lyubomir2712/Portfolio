import './CertificationSection.css'
export default function CertificationSection() {
    return (
        <section id="certification-section" className="certification-section">
            <article className="certificates-article">
                <div className="certificates-container">
                    <div className="certificate-one-container certificate-container">
                        <img className="certificate-one certificate" src="../../../public/certificate.jpg" alt="Certificate One" />
                    </div>
                    <div className="certificate-two-container certificate-container">
                        <img className="certificate-two certificate" src="../../../public/certificate.jpg" alt="Certificate Two" />
                    </div>
                    <div className="certificate-three-container certificate-container">
                        <img className="certificate-three certificate" src="../../../public/certificate.jpg" alt="Certificate Three" />
                    </div>
                </div>

            </article>
            <article className="certificates-description">
                <h3>Software University</h3>
                <h5>.NET Fullstack developer</h5>
                <p>An instense software enineering program from which I acquired invaluable skills to create modern web applications.</p>
            </article>
        </section>
    )
}