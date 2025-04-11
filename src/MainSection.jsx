import { Routes, Route } from 'react-router-dom';
import Home from './Home';
import Blue from './Blue';
import Red from './Red';
import Grey from './Grey';
import Purple from './Purple';

function MainSection() {
  return (
    <div id="main-section">
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/blue" element={<Blue />} />
        <Route path="/red" element={<Red />} />
        <Route path="/grey" element={<Grey />} />
        <Route path="/purple" element={<Purple />} />
      </Routes>
    </div>
  );
}

export default MainSection;
