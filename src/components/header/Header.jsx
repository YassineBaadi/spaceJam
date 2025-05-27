import logo from '../../assets/img/shared/logo.svg'
import Navbar from '../navbar/Navbar'
import './header.css'

export default function Header(){
    return(
        <header className="containerHeader">
            <div className="logoContainer">
                <img src={logo} alt="logo" />
            </div>
            <div className="separatorLine"></div>
            <Navbar />
        </header>
    )
}
