import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from './pages/Layout';
import Home from './pages/home/Home';
import Destination from './pages/destination/Destination';
import Crew from './pages/crew/Crew';
import Technology from './pages/technology/Technology';
import PlanetContent from './pages/sous-page/PlanetContent';

export default function App() {
  return (
    <Routes>
      <Route path="/spaceJam/" element={<Layout />}>
        <Route index element={<Home />} />
        
        <Route path="/spaceJam/destination" element={<Destination />}>
          <Route index element={<Navigate to="moon" replace />} />
          <Route path=":planetName" element={<PlanetContent />} />
        </Route>

        <Route path="/spaceJam/crew" element={<Crew />} />
        <Route path="/spaceJam/technology" element={<Technology />} />
      </Route>
    </Routes>
  );
}
