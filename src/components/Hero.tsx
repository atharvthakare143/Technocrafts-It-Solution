
import { ChevronRight } from 'lucide-react';

import { Link } from 'react-router-dom';

export function Hero() {
  return (
    <section className="hero animate-fade-in">
      <div className="hero-content">
        <div className="badge">
          {/* <span className="badge-icon">✨</span> Innovating the Future of Business */}
        </div>
        <h1>
          Empowering Businesses with Next-Gen <span className="text-gradient">IT Solutions</span>
        </h1>
        <p>
          We craft robust, scalable, and cutting-edge technology solutions tailored to drive your enterprise forward in the digital era.
        </p>
        <div className="hero-actions">
          <Link to="/contact" className="btn btn-primary">
            Start a Project <ChevronRight size={18} />
          </Link>
          <Link to="/careers" className="btn btn-secondary">
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  );
}
