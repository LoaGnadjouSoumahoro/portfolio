import React from 'react';
import { PERSONNEL_DATA } from '../../data/personnelData.js';
import './contact.css';
import Container from '../../components/layout/container/Container.jsx';
// import './App.css';

const Contact = () => {
  return (
    <div id='contact' className='contact '>
      <Container>
        <h2>Get in Touch</h2>
        <div className='contact-content '>
          <div className='contact-content_address'>
            <h3>Would like to hear from you!</h3>

            <div className='contact-content_infos'>
              {/* Start Contact */}
              <div className='contact-content_data-items'>
                <div className='contact-content_data-item'>
                  <img src={PERSONNEL_DATA.icon_contact} alt={`Icon ${PERSONNEL_DATA.title_contact}`} />
                  <h4>{PERSONNEL_DATA.title_contact}</h4>
                </div>
                <p>{PERSONNEL_DATA.contact}</p>
              </div>

              {/* Start Phone */}
              <div className='contact-content_data-items'>
                <div className='contact-content_data-item'>
                  <img src={PERSONNEL_DATA.icon_phone} alt={`Icon ${PERSONNEL_DATA.phone}`} />
                  <h4>{PERSONNEL_DATA.title_phone}</h4>
                </div>
                <p>{PERSONNEL_DATA.phone}</p>
              </div>

              {/* Start Email*/}
              <div className='contact-content_data-items'>
                <div className='contact-content_data-item'>
                  <img src={PERSONNEL_DATA.icon_email} alt={`Icon ${PERSONNEL_DATA.email}`} />
                  <h4>{PERSONNEL_DATA.title_email}</h4>
                </div>
                <p>{PERSONNEL_DATA.email}</p>
              </div>
            </div>
          </div>
          <div>
            <form className='contact-content_form'>
              <input type='text' placeholder='Name' className='name' />
              <input type='text' placeholder='Email' className='email' />
              <input type='text' placeholder='Phone' className='phone' />
              <input type='text' placeholder='Subject' className='subject' />
              <textarea type='text' placeholder='Enter your message ...' className='textarea' cols='700' rows='35' />

              <input type='submit' value='Send Your Message' className='btn-submit' />
            </form>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
