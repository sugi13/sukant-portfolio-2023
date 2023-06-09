import Navbar from "../components/navbar";
import Footer from "../components/footer";
import profileOfMe from '../assets/me.jpg';
import Illustration from '../assets/Website Creator-bro.png';
import ReactIcon from '../assets/icon-react.png';
import JsIcon from '../assets/icon-js.png';
import CssIcon from '../assets/icon-css.png';
import HtmlIcon from '../assets/icon-html.png';
import ResumePDF from '../assets/sukant_resume_2023-1.pdf';

export default function Profile () {
    return (
        <div className="profile">
        <Navbar/>
        <div className="profile-content animate__animated animate__fadeInUp">
            <div className="profile-intro animate__animated animate__slideInUp">
                <h1>Hey👋🏻 I'm Sukant .</h1>
                <p>Frontend Developer</p>
                <a href= {ResumePDF} download>Download Resume</a>
            </div>
            <div className="profile-img">
                <img src= {profileOfMe} alt="me" />
                <img src= {Illustration} alt="website-illustrator" id = 'illustrator' />
            </div>
            <div className="profile-about">
                <p id = 'header'>About</p>
                <p id = 'tagline'>A dedicated front-end developer that has <br /> self-taught training  and is working on websites  and <br /> other web-related projects. I like the innovative work <br /> that has been done on the websites. I've been <br />  producing content on the web since 2020.</p>
            </div>
            <div className="profile-know-about">
                <div className="header">
                    <p>What I really know</p>
                </div>
                <div className="lang-img">
                    <img src= {HtmlIcon}  alt = "html" />
                    <img src= {CssIcon} alt = "css" />
                    <img src= {JsIcon} alt = "js" />
                    <img src= {ReactIcon} alt = "react" />
                </div>
            </div>
        </div>
        <div className="profile-footer">
        <Footer/>
        </div>
        </div>
    )
}