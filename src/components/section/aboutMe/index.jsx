import Container from '../../layout/container/Container';
import loa from '../../../media/svg/foto loa.svg';
import './aboutMe.css';
import Button from '../../button';

const AboutMe = () => {
  return (
    <Container>
      <div className='aboutMe' id='aboutMe'>
        <div className='aboutMe-img'>
          <img src={loa} alt='Photo Loa' />
        </div>
        <div className='aboutMe-text'>
          <h2>About Me</h2>
          <p>
            As a junior front-end web developer, I completed a training program with BeCode to become a front-end
            developer. I am passionate about coding and continuously improve my skills through regular learning.
          </p>
          <p>
            My constant desire for growth drives me to explore new technologies and deepen my knowledge in design and
            web development.
          </p>
          <Button />
        </div>
      </div>
    </Container>
  );
};
export default AboutMe;
