import { NavLink } from "react-router-dom"
import './Navbar.css'

export default function Navbar(){
    return (
        <nav className="containerNav">
            <ul className="containerList">
                <li><NavLink to="/spaceJam" end className={({ isActive }) => isActive ? 'active' : ''}>00 Home</NavLink></li>
                <li><NavLink to="/spaceJam/destination" className={({ isActive }) => isActive ? 'active' : ''}>01 Destination</NavLink></li>
                <li><NavLink to="/spaceJam/crew" className={({ isActive }) => isActive ? 'active' : ''}>02 Crew</NavLink></li>
                <li><NavLink to="/spaceJam/technology" className={({ isActive }) => isActive ? 'active' : ''}>03 Technology</NavLink></li>
            </ul>
        </nav>
    )
}
