import img from '../../../media/svg/hero img.svg';
import Button from '../../button';
import Container from '../../layout/container/Container';
import downloadBlue from '../../../media/svg/download blue.svg';
import './hero.css';
import cv from '../../../cv/LoaSOUMAHORO_CV.pdf';

const Hero = () => {
  return (
    <div className='hero-container'>
      <Container>
        <div className='hero' id='hero'>
          <div className='hero-content'>
            <h1>
              Hi, I'm <span>Loa SOUMAHORO</span>
            </h1>
            <h2>Junior Front-End Developer & Aspiring Designer</h2>
            <p>
              As a junior web developer, I specialize in front-end development. My desire to provide outstanding service
              led me to explore Figma, where I've developed design knowledge to complement my front-end development
              skills.
            </p>
            <div className='hero-content_buttons'>
              <div>
                <Button />
              </div>
              <div>
                <a href={cv} download='LoaSOUMAHORO_CV' className='hero-content_button' target='_blank'>
                  <span>Download CV</span>
                  <img src={downloadBlue} alt='' />
                </a>
              </div>
            </div>
          </div>
          <div className='hero-content_img'>
            <img src={img} alt='' />
          </div>
        </div>
      </Container>
    </div>
  );
};
export default Hero;
