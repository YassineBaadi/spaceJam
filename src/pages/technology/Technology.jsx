import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import "./technology.css";
import launchVehicle from '../../assets/img/technology/image-launch-vehicle-portrait.jpg'; // adapte le chemin si besoin

export default function Technology() {
    return (

        <>
        <Title number="03" text="Space launch 101" />
                    <Header />

        <div className="containerTechnology">
            <div className="technologyContent">
                <div className="technologyLeft">
                    

                    <div className="technologyBody">
                        <div className="technologyButtons">
                            <button className="techBtn active">1</button>
                            <button className="techBtn">2</button>
                            <button className="techBtn">3</button>
                        </div>

                        <div className="technologyText">
                            <h5 className="technologySub">The terminology...</h5>
                            <h1 className="technologyTitle">Launch vehicle</h1>
                            <p className="technologyDesc">
                                A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload
                                from Earth’s surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket 
                                is the most powerful in operation. Standing 150 metres tall, it’s quite an awe-inspiring 
                                sight on the launch pad!
                            </p>
                        </div>
                    </div>
                </div>

                <div className="technologyRight">
                    <img src={launchVehicle} alt="Launch vehicle" className="techImg" />
                </div>
            </div>
        </div>
        </>
    );

}
