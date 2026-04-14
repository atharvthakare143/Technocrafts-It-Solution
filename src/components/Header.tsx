import { Link } from 'react-router-dom';

export function Header() {
  return (
    <header className="header">
      <Link to="/" className="logo cursor-pointer" style={{ textDecoration: 'none' }}>
        <img src="/logo.png" alt="Technocrafts Logo" className="brand-logo" />
        <span>TECHNOCRAFTS <span className="text-gradient">IT SOLUTION</span></span>
      </Link>
      <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/careers">Careers</Link>
        <Link to="/contact">Client Project</Link>
      </nav>
    </header>
  );
}
