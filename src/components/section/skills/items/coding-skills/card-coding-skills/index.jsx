import dataCodingSkills from './dataCodingSkills.js';
import './cardCodingSkills.css';

const CardCodingSkills = () => {
  return (
    <div className='cardCodingSkills'>
      {dataCodingSkills.map((item, index) => (
        <div key={index} className='cardCodingSkills-item'>
          <img src={item.icon} alt={item.title} />
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <h4>{item.technosTitle}</h4>
          <p>{item.myTools}</p>
        </div>
      ))}
    </div>
  );
};
export default CardCodingSkills;
