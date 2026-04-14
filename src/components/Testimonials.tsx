import { Quote, Star } from 'lucide-react';

const reviews = [
  {
    name: "Rajesh S.",
    role: "CEO, TechNova Inc.",
    content: "Technocrafts IT Solution transformed our legacy systems into a modern, scalable cloud infrastructure. Their expertise and dedication are truly unmatched.",
    stars: 5
  },
  {
    name: "Priya M.",
    role: "Founder, StyleApp",
    content: "The mobile application they designed for us doubled our user engagement within a month! Outstanding UI/UX and smooth performance.",
    stars: 5
  },
  {
    name: "Amit D.",
    role: "Operations Head, Logistics Pro",
    content: "Their custom software development team understood our complex warehouse requirements perfectly and delivered a flawless product on time.",
    stars: 5
  }
];

export function Testimonials() {
  return (
    <section className="section">
      <div className="section-header">
        <h2>What Our Clients Say</h2>
        <p>Trusted by industry leaders to deliver exceptional technology solutions.</p>
      </div>

      <div className="services-grid">
        {reviews.map((review, i) => (
          <div key={i} className="service-card" style={{ display: 'flex', flexDirection: 'column' }}>
            <Quote size={32} color="var(--accent-blue)" style={{ opacity: 0.5, marginBottom: '1rem' }} />
            <p style={{ fontStyle: 'italic', marginBottom: '1.5rem', flexGrow: 1 }}>"{review.content}"</p>
            <div>
              <div style={{ display: 'flex', gap: '4px', marginBottom: '8px' }}>
                {[...Array(review.stars)].map((_, j) => (
                  <Star key={j} size={16} fill="var(--accent-blue)" color="var(--accent-blue)" />
                ))}
              </div>
              <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{review.name}</h4>
              <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{review.role}</span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
