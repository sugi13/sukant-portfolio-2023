import { Link } from "react-router-dom";
import Contact from '../pages/contact';
import '../App.css';
import { LinkedinFill, Envelope} from "akar-icons";

export default function Footer() {
    return(
        <div className="footer">
           <div className="footer-tagline animate__animated animate__slideInUp">
           <h1>Let's work together</h1>
           <a href = 'mailto:sukantsivaraja2002@gmail.com' id = 'contact-link'>Get in touch</a>
           </div>
           
           <div className="soc-platform-link">
             <p>© Sukant 2023</p>
             <div className="link">
                <a href="https://www.linkedin.com/in/sukant-s/">LinkedIn</a>
                <a href="mailto:sukantsivaraja2002@gmail.com">Mail</a>
             </div>
           </div>
        </div>
        
    )
}