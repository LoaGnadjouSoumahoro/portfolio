import img from '../../../media/svg/hero img.svg';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className='hero-content'>
        <h1>
          Hi, I'm <span>Loa SOUMAHORO</span>
        </h1>
        <h2>Junior Front-End Developer & Aspiring Designer</h2>
        <p>
          As a junior web developer, I specialize in front-end development. My desire to provide outstanding service led
          me to explore Figma, where I've developed design knowledge to complement my front-end development skills.
        </p>
        <a href='#projects' className='hero-content_button'>
          View My Work
        </a>
      </div>
      <div className='hero-content_img'>
        <img src={img} alt='' />
      </div>
    </div>
  );
};
export default Hero;
