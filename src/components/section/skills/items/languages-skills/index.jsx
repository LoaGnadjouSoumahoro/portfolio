import datasProgressBar from './datasProgressBar.js/DatasProgressBar';
import ReviewsBar from './items/ReviewsBar';
import './reviewsBar.css';

const LanguagesSkills = () => {
  return (
    <div className='languagesSkills'>
      <h2>Languages Skills</h2>

      <div className='languagesSkills-container'>
        {datasProgressBar.map((item, index) => (
          <div className='languagesSkills-container_items' key={index}>
            <div className='languagesSkills-container_items-progressBar'>
              <ReviewsBar percentage={item.percentage} />
            </div>
            <div className='languagesSkills-container_items-text'>
              <h3>{item.name}</h3>
              <p>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LanguagesSkills;
