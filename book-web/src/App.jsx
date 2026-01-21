import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookHero from './components/BookHero';
import BookSlider from './components/BookSlider'; // New Section 2

import BookGrid from './components/BookGrid';
import StatsSection from './components/StatsSection';


function App() {
  return (
    <div className="App">
      <Navbar />
      <BookHero />
      <BookSlider /> {/* Section 2 Inserted Here */}

      <BookGrid />
      <StatsSection /> 

      <footer style={{padding: '4rem', textAlign: 'center', opacity: 0.4}}>
        <p>Built with React & Pure CSS Animations</p>
        <p>&copy; 2026 LIBRO. Built with React & Pure CSS</p>

      </footer>
    </div>
  );
}

export default App;