import { education, experience } from './education.js';

import './education.css';

const Education = () => {
  return (
    <div className='education'>
      <div className='education-container'>
        <h2>Education</h2>
        <div className='education-container_items'>
          {education.map((item1, index) => (
            <div key={index}>
              <p className='education-container_items-date'>{item1.date}</p>
              <div className='education-container_items-infos'>
                <h5>{item1.title}</h5>
                <p className='education-container_items-location' id='location'>
                  {item1.location}
                </p>
                <p className='education-container_items-description'>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Explicabo officiis consequatur hic culpa
                  corporis! Officia modi cumque dolor sapiente! nam.
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className='education-container'>
        <h2>Experience</h2>
        <div className='education-container_items'>
          {experience.map((item2, index) => (
            <div key={index}>
              <p className='education-container_items-date'>{item2.date}</p>
              <div className='education-container_items-infos' id='location'>
                <h5>{item2.title}</h5>
                <p className='education-container_items-location'>{item2.location}</p>
                <p className='education-container_items-description'>{item2.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Education;
