import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';
import LogoMain from '../assets/logo-main.svg'; 
function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <header className="navbar-header">
      <nav className="navbar">
            <div class="logo">
                <img src={LogoMain} alt="logo"></img>
            </div>
        <div className="nav-menu">
          <Link to="/" className={isActive('/')}>Home</Link>
          <Link to="/about" className={isActive('/about')}>About</Link>
          <Link to="/services" className={isActive('/services')}>Services</Link>
          <Link to="/product" className={isActive('/product')}>Product</Link>
          <Link to="/works" className={isActive('/works')}>Works</Link>
          <Link to="/contact" className={isActive('/contact')}>Contact Us</Link>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;