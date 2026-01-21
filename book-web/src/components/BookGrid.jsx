import React from 'react';

const books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', cover: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?auto=format&fit=crop&q=80&w=500' },
  { id: 2, title: '1984', author: 'George Orwell', cover: 'https://images.unsplash.com/photo-1541963463532-d68292c34b19?w=500' },
  { id: 3, title: 'Brave New World', author: 'Aldous Huxley', cover:"https://static.toiimg.com/thumb/msid-125913511,width-1280,height-720,resizemode-4/125913511.jpg" },
  { id: 4, title: 'Moby Dick', author: 'Herman Melville', cover: 'https://images.unsplash.com/photo-1531988042231-d39a9cc12a9a?w=500' },
];

const BookGrid = () => {
  return (
    <section className="book-section">
      <h2 style={{marginBottom: '3rem'}}>Popular Now</h2>
      <div className="grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <img src={book.cover} alt={book.title} />
            <h3 style={{fontSize: '1.2rem'}}>{book.title}</h3>
            <p style={{fontSize: '0.9rem', opacity: 0.6}}>{book.author}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BookGrid;