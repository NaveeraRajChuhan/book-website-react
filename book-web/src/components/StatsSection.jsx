import React from 'react';

const stats = [
  { id: 1, label: 'Books Read', value: '12K+' },
  { id: 2, label: 'Active Readers', value: '50K+' },
  { id: 3, label: 'Author Interviews', value: '150+' },
  { id: 4, label: 'Countries', value: '30+' },
];

const StatsSection = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">
        <div className="stats-header">
          <h2>Join Our Global Community</h2>
          <p>Connecting bibliophiles through the power of storytelling.</p>
        </div>
        
        <div className="stats-grid">
          {stats.map(stat => (
            <div key={stat.id} className="stat-card">
              <h3 className="stat-number">{stat.value}</h3>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>

        <div className="testimonial-box">
          <blockquote>
            "This platform changed how I discover new literature. The community recommendations are always spot on."
          </blockquote>
          <cite>— Elena Richardson, Literary Critic</cite>
        </div>
      </div>
    </section>
  );
};

export default StatsSection;