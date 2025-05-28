import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Technology from './pages/technology/Technology';
import PlanetContent from './pages/sous-page/PlanetContent';
import CrewMember from './pages/sous-page/crewContent';
import TechnologyContent from './pages/sous-page/TechnologyContent';

export default function App() {
  return (
    <Routes>
      <Route path="/spaceJam" element={<Layout />}>
        <Route index element={<Home />} />

        <Route path="destination" element={<Destination />}>
          <Route index element={<Navigate to="moon" replace />} />
          <Route path=":planetName" element={<PlanetContent />} />
        </Route>

        <Route path="crew" element={<Crew />}>
          <Route index element={<Navigate to="douglas" replace />} />
          <Route path=":crewName" element={<CrewMember />} />
        </Route>

        <Route path="technology" element={<Technology />}>
          <Route index element={<Navigate to="launchvehicle" />} />
          <Route path=":techName" element={<TechnologyContent />} />
        </Route>
        
      </Route>
    </Routes>
  );
}
