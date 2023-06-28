import Logo from '../images/Logo.jpg';
import {NavBarLinks} from '../data';
import { SocialLinks } from '../data';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <div className='logo-container'>
        <img src={Logo} alt='Logo' className='logo' />
      </div>
      <ul className='navbar-links'>
        {NavBarLinks.map(({ id, href, text }) => (
          <li key={id}>
            <a href={href} className='navbar-link'>
              {text}
            </a>
          </li>
        ))}
      </ul>
      <ul className='navbar-links'>
        {SocialLinks.map(({ id, href, icon }) => (
          <li key={id}>
            <a href={href} className='navbar-link'>
              {icon}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
