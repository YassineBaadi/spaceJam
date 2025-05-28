import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import './crew.css';
import douglas from '../../assets/img/crew/image-douglas-hurley.png'; // adapte le chemin selon ton projet

export default function Crew() {
    return (
        <>
             <Title number={"02"} text="Meet your crew" />
              <Header />
            <div className="containerCrew">
               
                
                <div className="crewContent">
                    <div className="crewLeft">
                       
                        <div className="crewInfo">
                            <h4 className="crewRole">Commander</h4>
                            <h1 className="crewName">Douglas Hurley</h1>
                            <p className="crewBio">
                                Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and 
                                former NASA astronaut. He launched into space for the third time as commander 
                                of Crew Dragon Demo-2.
                            </p>
                        </div>
                        <div className="crewDots">
                            <span className="dot active"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                            <span className="dot"></span>
                        </div>
                    </div>

                    <div className="crewRight">
                        <img src={douglas} alt="Douglas Hurley" className="crewImg" />
                    </div>
                </div>
            </div>
        </>
    );
}
