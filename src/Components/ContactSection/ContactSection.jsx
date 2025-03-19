import './ContactSection.css'

export default function ContactSection() {
    return (
        <section id="contact-section" className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <form className="contact-form">
                <div className="contact-form-content">

                    <div className="input-container">
                            <input className="username-input" type="text" placeholder=" " />
                            <div className="label-line">Username *</div>
                    </div>

                    <div className="input-container">
                            <input className="email-input" type="email" placeholder=" " />
                            <div className="label-line">Email *</div>
                    </div>

                    <div className="textarea-container">
                        <textarea className="message-input" placeholder=" " />
                        <div className="label-line">Message *</div>
                    </div>

                </div>
                <button className="contact-btn" type="submit">Send</button>
            </form>
        </section>
    )
}