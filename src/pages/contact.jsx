import Navbar from "../components/navbar";
import '../App.css';

export default function Contact() {
    return (
        <div className="contact">
        <Navbar/>       
        <div className="contact-content">
        <div className="contact-tagline">
        <p>Lets work together</p>
        <a href="mailto:sukantsivaraja2002@gmail.com">Get in touch</a>
        </div>
        <div className="social-platform-link">
            <div className="copyright">
            <p>© Sukant 2023</p>
            </div>
            <div className="social-platform">
            <a href="https://www.linkedin.com/in/sukant-s/">LinkedIn</a>
                <a href="mailto:sukantsivaraja2002@gmail.com">Mail</a>
            </div>
        </div>
        </div>
        </div>
    )
}