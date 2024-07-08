import Container from '../layout/container/Container';
import './footer.css';
const currentYear = new Date().getFullYear();

const Footer = () => {
  return (
    <footer>
      <Container>
        <div className='footer-content'>
          <p>&copy; {currentYear} Loa. All rights reserved.</p>
          <p>Developed by: Loa SOUMAHORO</p>
        </div>
      </Container>
    </footer>
  );
};
export default Footer;
