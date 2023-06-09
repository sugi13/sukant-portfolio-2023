import Navbar from "../components/navbar";
import Footer from "../components/footer";
import { ArrowUpRight } from "akar-icons";
import NewsMockup from '../assets/news-app[mockup].png';
import RockPaperScissor from '../assets/rock-paper-scissor[mockup].png';
import Todo from '../assets/todo-app[mockup].png';
import Weather from '../assets/weather-app[mockup].png';
import Notes from '../assets/notes-app[mockup].png';
import UrlShortener from '../assets/URL-shortener[mockup].png';
import '../App.css';

export default function Home () {
    return (
        <div className="home">
            <Navbar/>
            <div className="home-content animate__animated animate__fadeInUp">
               <div className="hero-tagline">
               <h1>A developer on the front end <br /> who turns  pixels into <br/> your online vision.</h1>
               <p>Click the image to see it live. 👇</p>
               </div>
               <div className="project-mockup">

                <div className="mockup-1">
                <a href="https://news-tidbits.netlify.app/" className="link">
                    <img src= {NewsMockup} alt="news-mockup" />
                </a>
                </div>

                <div className="mockup-2">
                <a href="https://rock-paper-scissor-io-39565.web.app/" className="link">
                    <img src= {RockPaperScissor} alt="RPS-mockup" />
                </a>
                </div>

                <div className="mockup-3">
                <a href="https://task-do.netlify.app/" className="link">
                    <img src= {Todo} alt="todo-mockup" />
                </a>
                </div>

                <div className="mockup-4">
                <a href="https://weather-beaten-forecast.netlify.app/" className="link">
                    <img src= {Weather} alt="todo-mockup" />
                </a>
                </div>

                <div className="mockup-5">
                <a href="https://quickk-notess.netlify.app/" className="link">
                    <img src= {Notes} alt="todo-mockup" />
                </a>
                </div>

                <div className="mockup-6">
                <a href="https://url-shrty.netlify.app/" className="link">
                    <img src= {UrlShortener} alt="todo-mockup" />
                </a>
                </div>
               </div>
            </div>
            <Footer/>
        </div>
    )
}