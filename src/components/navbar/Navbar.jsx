import { Link } from "react-router-dom"
import './navbar.css'

export default function Navbar(){


    return(

        <>
            <nav className="containerNav">
                <ul className="containerList">
                    <li><Link to={'/home'}>Home</Link> </li>
                    <li><Link to={'/destination'}>Destination</Link> </li>
                    <li><Link to={'/crew'}>Crew</Link> </li>
                    <li><Link to={'/technology'}>Technology</Link> </li>

                </ul>
            </nav>
        
        </>
    )
}