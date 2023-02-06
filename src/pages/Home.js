import React from 'react'
import Nav from '../components/nav/Nav';
import Ellipse_1238 from '../assest/Ellipse 1238.png';
import vector_735 from '../assest/Vector 735.png';
import path3671 from '../assest/path3671.png';
import path3675 from '../assest/path3675.png';
import path3679 from '../assest/path3679.png';
import path3683 from '../assest/path3683.png';
import vector750 from '../assest/Vector 750.png';

const Home = () => {
  return (
    <section className='main-container'>

      {/* navber */}

      <div className='nav-container'>
        <Nav />
      </div>

      {/* navbar */}

      {/* progfile content end*/}

      <div className="profile-container">
        <div className='profile-content'>
          <img src={Ellipse_1238} width="92" height="92" alt="" />
          <h2>Diane Cooper</h2>
          <p>diane.cooper@example.com</p>
          <div className='appointment-box'>
            <div className='inner-box'>
              <h4>15</h4>
              <p>Past</p>
            </div>
            <img src={vector_735} height="34" alt="" />
            <div className='inner-box'>
              <h4>02</h4>
              <p>Upcoming</p>
            </div>
          </div>
          <div className='btn'>
            <p>Send Message</p>
          </div>
        </div>
        <div className='files-container'>
          <h2>Files / Documents</h2>
          <div className='files-wrapper'>
            <div className='file'>
              <div className='file-icon'>
                <img src={path3683} alt="" />
                <img src={path3671} alt="" />
                <img src={path3675} alt="" />
                <img src={path3679} alt="" />
              </div>
              <div>
                <p>Check Up Results.pdf</p>
              </div>
            </div>
            <div className='file'>
              <div className='file-icon'>
                <img src={path3683} alt="" />
                <img src={path3671} alt="" />
                <img src={path3675} alt="" />
                <img src={path3679} alt="" />
              </div>
              <div>
                <p>Check Up Results.pdf</p>
              </div>
            </div>
            <div className='file'>
              <div className='file-icon'>
                <img src={path3683} alt="" />
                <img src={path3671} alt="" />
                <img src={path3675} alt="" />
                <img src={path3679} alt="" />
              </div>
              <div>
                <p>Medical Prescription.pdf</p>
              </div>
            </div>
            <div className='file'>
              <div className='file-icon'>
                <img src={path3683} alt="" />
                <img src={path3671} alt="" />
                <img src={path3675} alt="" />
                <img src={path3679} alt="" />
              </div>
              <div>
                <p>Dental X-Ray Result.pdf</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* profile content end*/}

      {/* patient details wrapper */}

      <div className='details-container'>
        <div className='info-wrapper'>
          <div className='box'>
            <p>Gender</p>
            <h4>Female</h4>
            <hr className='line' />
          </div>
          <div className='box'>
            <p>Birthday</p>
            <h4>Feb 24th, 1997</h4>
            <hr className='line' />
          </div>
          <div className='box'>
            <p>Phone Number</p>
            <h4>(239) 555 -0108</h4>
            <hr className='line' />
          </div>
          <div className='box'>
            <p>Registered Date</p>
            <h4>Feb 24th, 1997</h4>
            <hr className='line' />
          </div>
        </div>
        <div className='address-wrapper'>
          <div className='box'>
            <p>Street Address</p>
            <h4>JL. Diponegoro No. 21</h4>
            <hr className='line' />
          </div>
          <div className='box'>
            <p>City</p>
            <h4>Cilacap</h4>
            <hr className='line' />
          </div>
          <div className='box'>
            <p>Zip Code</p>
            <h4>655849</h4>
            <hr className='line' />
          </div>
          <div className='box'>
            <p>Member Status</p>
            <h4>Active Member</h4>
            <hr className='line' />
          </div>
        </div>
        <div className='appointment-wrapper'>
          <ul>
            <li>Upcoming Appointments</li>
            <li>Past Appointments</li>
            <li>Medical Records</li>
          </ul>
        </div>
        <div className='treatment-details-wrapper'>
          <div className='head-wrapper'>
            <p>Root Canal Treatment</p>
            <p>Show Previous Treatments</p>
          </div>
          <hr className='line' />
          <div className='treatment-content'>
            <div className='treatment'>
              <div>
                <h2>26 Nov ‘19</h2>
                <p>09.00 - 10.00</p>
              </div>
              <img src={vector750} height="34" alt="line" />
              <div>
                <p>Treatment</p>
                <h4>Open Access</h4>
              </div>
              <img src={vector750} height="34" alt="line" />
              <div>
                <p>Dentist</p>
                <h4>Drg. Adam H.</h4>
              </div>
              <div>
                <p>Nurse</p>
                <h4>Jessicamila</h4>
              </div>
              <div className='note-wrapper'>
                <div className='note-icon'>
                  <img src={path3683} alt="" />
                  <img src={path3671} alt="" />
                  <img src={path3675} alt="" />
                  <img src={path3679} alt="" />
                </div>
                <div className='note'>
                  <p>Note</p>
                </div>
              </div>
            </div>
            <div className='treatment'>
            <div>
                <h2>12 Nov ‘19</h2>
                <p>09.00 - 10.00</p>
              </div>
              <img src={vector750} height="34" alt="line" />
              <div>
                <p>Treatment</p>
                <h4>Root Canal</h4>
              </div>
              <img src={vector750} height="34" alt="line" />
              <div>
                <p>Dentist</p>
                <h4>Drg. Adam H.</h4>
              </div>
              <div>
                <p>Nurse</p>
                <h4>Jessicamila</h4>
              </div>
              <div className='note-wrapper'>
                <div className='note-icon'>
                  <img src={path3683} alt="" />
                  <img src={path3671} alt="" />
                  <img src={path3675} alt="" />
                  <img src={path3679} alt="" />
                </div>
                <div className='note'>
                  <p>Note</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* patient details wrapper */}
    </section >
  )
}

export default Home