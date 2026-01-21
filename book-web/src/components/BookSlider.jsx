import React, { useRef } from 'react';

const sliderBooks = [
  { id: 1, title: 'The Midnight Library', category: 'Fantasy', cover: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?auto=format&fit=crop&q=80&w=600' },
  { id: 2, title: 'Project Hail Mary', category: 'Sci-Fi', cover: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600' },
  { id: 3, title: 'The Alchemist', category: 'Adventure', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=600' },
  { id: 4, title: 'Circe', category: 'Mythology', cover: 'https://images.unsplash.com/photo-1467951591042-f388365db261?auto=format&fit=crop&q=80&w=600' },
  { id: 5, title: 'Dune', category: 'Sci-Fi', cover: 'https://images.unsplash.com/photo-1506466010722-395aa2bef877?auto=format&fit=crop&q=80&w=600' },
];

const BookSlider = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (direction === 'left') {
      current.scrollBy({ left: -300, behavior: 'smooth' });
    } else {
      current.scrollBy({ left: 300, behavior: 'smooth' });
    }
  };

  return (
    <section className="slider-section">
      <div className="slider-header">
        <h2>Section 2: Staff Favorites</h2>
        <div className="slider-btns">
          <button onClick={() => scroll('left')}>&#8592;</button>
          <button onClick={() => scroll('right')}>&#8594;</button>
        </div>
      </div>

      <div className="slider-container" ref={scrollRef}>
        {sliderBooks.map((book) => (
          <div key={book.id} className="slider-item">
            <div className="img-wrapper">
              <img src={book.cover} alt={book.title} />
              <div className="overlay">
                <span>{book.category}</span>
              </div>
            </div>
            <h3>{book.title}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookSlider;