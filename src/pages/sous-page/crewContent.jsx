import { useParams } from "react-router-dom";
import data from '../../assets/data/dataCrew.json';
import './crewContent.css';

export default function CrewMember() {
  const { crewName } = useParams();
  const member = data.find(m => m.slug === crewName);

 

  return (
    <div className="crewContent">
      <div className="crewText">
        <h4 className="crewRole">{member.role}</h4>
        <h2 className="crewName">{member.name}</h2>
        <p className="crewBio">{member.bio}</p>
      </div>
      <div className="crewImage">
        <img src={member.img} />
      </div>
    </div>
  );
}
