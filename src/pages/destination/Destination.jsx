import Header from "../../components/header/Header";
import Title from "../../components/title/Title";
import { Outlet, NavLink } from "react-router-dom";
import './destination.css';
import data from '../../assets/data/data.json';

export default function Destination() {
  return (
    <>
      <Header />
      <Title number="01" text="Pick your destination" />
      <div className="containerDestination">
        <div className="destinationContent">
          <div className="destinationBody">
            <div className="destinationLeft">
              <nav className="destinationTabs">
                {data.map((element) => (
                  <NavLink
                    key={element.id}
                    to={element.name.toLowerCase()}
                    className={({ isActive }) => isActive ? "tab active" : "tab"}
                  >
                    {element.name}
                  </NavLink>
                ))}
              </nav>
              <Outlet />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
