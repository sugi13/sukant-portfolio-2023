import { Link } from "react-router-dom";
import '../App.css';

export default function Navbar() {
return (
    <div className="nav">
        <ul>
            <li>
                <Link to= '/' className="nav-link">Home</Link>
            </li>
            <li>
                <Link to= '/profile' className="nav-link">Profile</Link>
            </li>
            <li>
                <Link to= '/contact' className="nav-link">Contact</Link>
            </li>
        </ul>
    </div>
)
}