import CardCodingSkills from './card-coding-skills';
import './codingSkills.css';

const CodingSkills = () => {
  return (
    // <div className='codingSkills' id='codingSkills'>
    // //   <h2 className='typography-h2'>Front End Skills</h2>
    // //   <div className='codingSkills-container'>
    // //     <div className='codingSkills-container_item'>
    // //       <div className='codingSkills-container_info'>
    // //         <p>React</p>
    // //         <p>30%</p>
    // //       </div>
    // //       <div className='progress-line' data-percent='30%'>
    // //         <span style={{ width: '30%' }}></span>
    // //       </div>
    // //     </div>
    // //     <div className='codingSkills-container_item'>
    // //       <div className='codingSkills-container_info'>
    // //         <p>HTML</p>
    // //         <p>40%</p>
    // //       </div>
    // //       <div className='progress-line' data-percent='40%'>
    // //         <span style={{ width: '40%' }}></span>
    // //       </div>
    // //     </div>
    // //     <div className='codingSkills-container_item'>
    // //       <div className='codingSkills-container_info'>
    // //         <p>Javascript</p>
    // //         <p>10%</p>
    // //       </div>
    // //       <div className='progress-line' data-percent='10%'>
    // //         <span style={{ width: '10%' }}></span>
    // //       </div>
    // //     </div>
    // //     <div className='codingSkills-container_item'>
    // //       <div className='codingSkills-container_info'>
    // //         <p>CSS</p>
    // //         <p>30%</p>
    // //       </div>
    // //       <div className='progress-line' data-percent='30%'>
    // //         <span style={{ width: '30%' }}></span>
    // //       </div>
    // //     </div>
    // //     <div className='codingSkills-container_item'>
    // //       <div className='codingSkills-container_info'>
    // //         <p>Typescript</p>
    // //         <p>1%</p>
    // //       </div>
    // //       <div className='progress-line' data-percent='1%'>
    // //         <span style={{ width: '1%' }}></span>
    // //       </div>
    // //     </div>
    // //     <div className='codingSkills-container_item'>
    // //       <div className='codingSkills-container_info'>
    // //         <p>Sass</p>
    // //         <p>10%</p>
    // //       </div>
    // //       <div className='progress-line' data-percent='10%'>
    // //         <span style={{ width: '10%' }}></span>
    // //       </div>
    // //     </div>
    // //     <div className='codingSkills-container_item'>
    // //       <div className='codingSkills-container_info'>
    // //         <p>Tailwind css</p>
    // //         <p>40%</p>
    // //       </div>
    // //       <div className='progress-line' data-percent='40%'>
    // //         <span style={{ width: '40%' }}></span>
    // //       </div>
    // //     </div>
    // //   </div>
    // </div>

    <div className='codingSkills' id='codingSkills'>
      <h2 className='typography-h2'>Coding Skills</h2>

      <div className='codingSkills-container'>
        <div className='codingSkills-container_item'>
          <CardCodingSkills />
        </div>
      </div>
    </div>
  );
};
export default CodingSkills;
