import { NavLink, Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import crewData from "../../assets/data/dataCrew.json";
import './crew.css';

export default function Crew() {
  return (
    <>
      <Header />
      <Title number="02" text="Meet your crew" />
      <div className="containerCrew">
        <div className="crewNavigation">
          {crewData.map((member) => (
            <NavLink
              key={member.id}
              to={member.slug}
              className={({ isActive }) => isActive ? "dot active" : "dot"}
            />
          ))}
        </div>
        <Outlet />
      </div>
    </>
  );
}
