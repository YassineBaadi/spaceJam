import { Link } from "react-router-dom"
import './Navbar.css' // Assure-toi d'avoir ce fichier relié

export default function Navbar(){
    return (
        <nav className="containerNav">
            <ul className="containerList">
                <li><Link to="/spaceJam" className={({ isActive }) => isActive ? 'active' : ''}>00 Home</Link></li>
                <li><Link to="/spaceJam/destination" className={({ isActive }) => isActive ? 'active' : ''}>01 Destination</Link></li>
                <li><Link to="/spaceJam/crew" className={({ isActive }) => isActive ? 'active' : ''}>02 Crew</Link></li>
                <li><Link to="/spaceJam/technology" className={({ isActive }) => isActive ? 'active' : ''}>03 Technology</Link></li>
            </ul>
        </nav>
    )
}
