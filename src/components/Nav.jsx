import { Link, useLocation } from 'react-router-dom';
import Navbar from './UI/Navbar';

export default function Nav() {
  // Get the current location
  const location = useLocation();
  console.log(location)

  // Determine if the location matches the path
  const isActive = (path) => {
    return location.pathname === path;
  };

  // The Navbar UI component will render each of the Link elements in the links prop
  return (
    <Navbar
      links={[
        <Link key={1} className={`nav-link ${isActive('/') ? 'text-black' : 'text-light'}`} to="/">
          About Me
        </Link>,
        <Link key={2} className={`nav-link ${isActive('/portfolio') ? 'text-black' : 'text-light'}`} to="/portfolio">
          Portfolio
        </Link>,
        <Link key={3} className={`nav-link ${isActive('/contact') ? 'text-black' : 'text-light'}`} to="/contact">
          Contact Me
        </Link>,
        <Link key={4} className={`nav-link ${isActive('/resume') ? 'text-black' : 'text-light'}`} to="/resume">
          Resume
        </Link>,
      ]}
    />
  );
}