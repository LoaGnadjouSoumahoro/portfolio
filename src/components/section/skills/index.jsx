import { useState } from 'react';
import './skills.css';
import CodingSkills from './items/coding-skills';
import LanguageSkills from './items/languages-skills';
import Education from './items/education';

const Skills = () => {
  const [isSelected, setIsSelected] = useState('coding');

  const handledIsSelected = (skills) => {
    setIsSelected(skills);
  };

  return (
    <div id='skills' className='skills layout-bigScreen  '>
      <div className='skills-container '>
        <h2>SKILLS</h2>
        <div className='skills-container_title'>
          <div
            className={`skills-container_title-item ${isSelected === 'coding' && 'isSelected-bg'}`}
            onClick={() => handledIsSelected('coding')}>
            <h3>Coding Skills</h3>
          </div>
          <div
            className={`skills-container_title-item ${isSelected === 'language' && 'isSelected-bg'}`}
            onClick={() => handledIsSelected('language')}>
            <h3>Language Skills</h3>
          </div>
          <div
            className={`skills-container_title-item ${isSelected === 'education' && 'isSelected-bg'}`}
            onClick={() => handledIsSelected('education')}>
            <h3>Education</h3>
          </div>
        </div>

        <div className='skills-container_content'>
          <div className={`skills-container_content-display ${isSelected == 'coding' ? 'active' : 'inActive'} `}>
            <CodingSkills />
          </div>
          <div className={`skills-container_content-display ${isSelected == 'language' ? 'active' : 'inActive'} `}>
            <LanguageSkills />
          </div>
          <div className={`skills-container_content-display ${isSelected == 'education' ? 'active' : 'inActive'} `}>
            <Education />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Skills;
