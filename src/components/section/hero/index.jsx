import img from '../../../media/svg/hero img.svg';
import './hero.css';

const Hero = () => {
  return (
    <div className='hero' id='hero'>
      <div className='hero-text'></div>
      <div className='hero-img'>
        <img src={img} alt='' />
      </div>
    </div>
  );
};
export default Hero;
