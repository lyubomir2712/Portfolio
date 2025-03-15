import './ContactSection.css'

export default function ContactSection() {
    // const [isFocused, setIsFocused] = useState(false);
    return (
        <section className="contact-section">
            <h2 className="contact-title">Contact Me</h2>
            <form className="contact-form">
                <div className="contact-form-content">

                    <div className="input-container">
                        <input className="username-input" type="text" placeholder="Username*" />
                    </div>

                    <div className="input-container">
                        <input className="email-input" type="email" placeholder="Email*" />
                    </div>

                    <div className="input-container">
                        <input className="message-input" type="text" placeholder="Message*"/>
                    </div>

                </div>
                <button className="contact-btn" type="submit">Send</button>
            </form>
        </section>
    )
}