import { NavLink, useParams } from "react-router-dom";
import data from '../../assets/data/technology.json';
import './technologyContent.css';

export default function TechnologyContent() {
  const { techName } = useParams();
  const tech = data.find(t => t.url === techName);


  return (
     <div className="containerTechnology">
            <div className="technologyContent">
                <div className="technologyLeft">
                    

                   <div className="technologyBody">
                    <div className="technologyButtons">
                        {data.map((element) => {
                        
                        return (
                            <NavLink
                            key={element.id}
                            to={`/spaceJam/technology/${element.url}`}
                            className={({ isActive }) => isActive ? "techBtn active" : "techBtn"}
                            >
                            {element.id}
                            </NavLink>
                        );
                        })}
                    </div>
               

                        <div className="technologyText">
                            <h5 className="technologySub">{tech.sub}</h5>
                            <h1 className="technologyTitle">{tech.name}</h1>
                            <p className="technologyDesc">
                               {tech.description}
                            </p>
                        </div>
                    </div>
                </div>

                <div className="technologyRight">
                    <img src={tech.img} alt="Launch vehicle" className="techImg" />
                </div>
            </div>
        </div>
  );
}
