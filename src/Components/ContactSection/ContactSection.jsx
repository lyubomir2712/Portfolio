import './ContactSection.css'

export default function ContactSection() {
    return (
        <section className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <form className="contact-form">
                <div className="contact-form-content">
                    <input className="username-input" type="text" placeholder="Username*" />
                    <input className="email-input" type="email" placeholder="Email*" />
                    <input className="message-input" type="text" placeholder="Message*"/>
                </div>
                <button className="contact-btn" type="submit">Send</button>
            </form>
        </section>
    )
}