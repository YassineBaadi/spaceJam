import { useParams } from "react-router-dom";
import data from '../../assets/data/data.json';
import './sousPage.css';


export default function PlanetContent() {
  const { planetName } = useParams();
  const planet = data.find(p => p.name.toLowerCase() === planetName?.toLowerCase());


  return (
    <div className="planetContent">
      <div className="planetLeft">
        <img src={planet.img} alt={planet.name} className="planetImage" />
      </div>
      <div className="planetRight">
        <h1 className="planetName">{planet.name}</h1>
        <p className="planetDesc">{planet.description}</p>
        <hr />
        <div className="planetStats">
          <div>
            <h5>EST. TRAVEL TIME</h5>
            <p>{planet.stats}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
