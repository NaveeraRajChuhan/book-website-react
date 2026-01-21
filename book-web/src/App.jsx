import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import BookHero from './components/BookHero';
import BookGrid from './components/BookGrid';

function App() {
  return (
    <div className="App">
      <Navbar />
      <BookHero />
      <BookGrid />
      <footer style={{padding: '4rem', textAlign: 'center', opacity: 0.4}}>
        <p>Built with React & Pure CSS Animations</p>
      </footer>
    </div>
  );
}

export default App;