import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Frame1 from './components/Frame1';
import Frame2 from './components/Frame2';
import Frame3 from './components/Frame3';
import Frame4 from './components/Frame4';
import Frame5 from './components/Frame5';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Frame1 />} />
        <Route path="/frame2" element={<Frame2 />} />
        <Route path="/frame3" element={<Frame3 />} />
        <Route path="/frame4" element={<Frame4 />} />
        <Route path="/frame5" element={<Frame5 />} />
      </Routes>
    </Router>
  );
};

export default App;

