import { HashLink as Link } from 'react-router-hash-link';
import logo from '../../media/svg/logo portfolio.svg';
import Container from '../layout/container/Container';
import './header.css';

const Header = () => {
  return (
    <Container>
      <div className='header'>
        <div className='header-logo'>
          <div className='header-logo_img'>
            <img src={logo} alt='logo portfolio' />
          </div>
          <div className='header-logo_text montserrat'>
            <p>Loa</p>
          </div>
        </div>
        <div className='header-nav'>
          <nav className='header-nav_items'>
            <Link className='header-nav_item' to='/#hero'>
              Home
            </Link>
            <Link className='header-nav_item' to='/#aboutme'>
              About Me
            </Link>
            <Link className='header-nav_item' to='/#skills'>
              Skills
            </Link>
            <Link className='header-nav_item' to='/#projet'>
              Projet
            </Link>
            <Link className='header-nav_item' to='/#contact'>
              Contact
            </Link>
          </nav>
        </div>
      </div>
    </Container>
  );
};
export default Header;
