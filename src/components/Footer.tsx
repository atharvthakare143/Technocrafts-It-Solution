import { Link } from 'react-router-dom';

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <Link to="/" className="footer-logo" style={{ textDecoration: 'none' }}>
            <img src="/logo.png" alt="Technocrafts Logo" className="brand-logo" />
            <span>TECHNOCRAFTS <span className="text-gradient">IT SOLUTION</span></span>
          </Link>
          <p className="footer-desc">
            Pioneering digital transformation through innovative software solutions and strategic technology consulting.
          </p>
        </div>
        <div>
          <h4>Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/careers">Careers</Link>
            <Link to="/contact">Contact Us</Link>
            <Link to="/privacy">Privacy Policy</Link>
          </div>
        </div>
        <div>
          <h4>Contact Info</h4>
          <div className="footer-links" style={{ color: 'var(--text-secondary)', fontSize: '0.95rem' }}>
            <p>Email: hello@technocrafts.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Location: Tech District, Innovation City</p>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} TECHNOCRAFTS IT SOLUTION. All rights reserved.</p>
      </div>
    </footer>
  );
}
