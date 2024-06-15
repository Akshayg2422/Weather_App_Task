import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Home from './routes/Home';
import EventPlanner from './routes/EventPlanner';
import Farmer from './routes/Farmer';

const App: React.FC = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/event-planner" element={<EventPlanner />} />
        <Route path="/farmer" element={<Farmer />} />
        <Route path="/*" element={<h1>No data found</h1>} />
      </Routes>
    </Router>
  );
};

export default App;
