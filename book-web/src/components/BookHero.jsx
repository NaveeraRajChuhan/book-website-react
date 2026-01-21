import React from 'react';

const BookHero = () => {
  return (
    <section className="hero">
      <div className="hero-text">
        <h1>Read Something <br/> <span style={{color: '#818cf8'}}>Atmospheric.</span></h1>
        <p style={{opacity: 0.7, marginBottom: '2rem'}}>Dive into curated collections of world-class literature.</p>
        <button style={{
          padding: '1rem 2.5rem',
          borderRadius: '50px',
          border: 'none',
          backgroundColor: '#6366f1',
          color: 'white',
          fontWeight: 'bold',
          cursor: 'pointer'
        }}>Start Reading</button>
      </div>
      <div className="hero-image">
        <img src="https://images.unsplash.com/photo-1544947950-fa07a98d237f?q=80&w=800" alt="Featured Book" />
      </div>
    </section>
  );
};

export default BookHero;