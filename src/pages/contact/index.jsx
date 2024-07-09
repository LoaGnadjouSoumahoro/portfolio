import React from 'react';
import { PERSONNEL_DATA } from '../../data/personnelData.js';
import './contact.css';

const Contact = () => {
  return (
    <div id='contact' className='contact layout-bigScreen'>
      <h2>Get in Touch</h2>
      <div className='contact-content '>
        <div className='contact-content_address'>
          <h3>Would like to hear from you!</h3>

          <div className='contact-content_infos'>
            <div className='contact-content_data'>
              {/* Start contact */}
              <div className='contact-content_data-item'>
                <img src={PERSONNEL_DATA.icon_contact} alt={`Icon ${PERSONNEL_DATA.title_contact}`} />
                <h4>{PERSONNEL_DATA.title}</h4>
              </div>
              <p>{PERSONNEL_DATA.contact}</p>
            </div>
            {/* Start contact */}
            <div className='contact-content_data-item'>
              <img src={PERSONNEL_DATA.icon_phone} alt={`Icon ${PERSONNEL_DATA.title_phone}`} />
              <h4>{PERSONNEL_DATA.title}</h4>
            </div>
            <p>{PERSONNEL_DATA.contact}</p>
          </div>
        </div>
      </div>
      <form className='contact-content_form'>
        <div>
          <input type='text' placeholder='Name' />
          <input type='text' placeholder='Email' />
          <input type='text' placeholder='Phone' />
          <input type='text' placeholder='Subject' />
          <textarea type='text' placeholder='Enter your message ...' />
        </div>
      </form>
    </div>
  );
};

export default Contact;
