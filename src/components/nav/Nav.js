import React from 'react'
import image_897 from '../../assest/image 897.png';
import image_898 from '../../assest/image 898.png';
import image_899 from '../../assest/image 899.png';
import image_900 from '../../assest/image 900.png';
import image_901 from '../../assest/image 901.png';
import image_902 from '../../assest/image 902.png';
import add from '../../assest/+.png';
import Vector_771 from '../../assest/Vector 771 (Stroke).png';

const Nav = () => {
    return (
        <nav className='nav'>
            <div className="graph-container">
                <div className='rectangle'>
                    <img src={Vector_771} alt="" />
                </div>
            </div>
            <div className="nav-list">
                <div className='nav-item'>
                    <img src={add} width="19" alt="" />
                    <p>NEW</p>
                </div>
                <div className='nav-item'>
                    <img src={image_897} width="18" height="18" alt="" />
                    <p>
                        PATIENT
                    </p>
                </div>
                <div className='nav-item'>
                    <img src={image_898} width="24" height="24" alt="" />
                    <p>
                        FOLDER
                    </p>
                </div>
                <div className='nav-item'>
                    <img src={image_899} width="28" height="28" alt="" />                 
                    <p>
                        UPLOAD
                    </p>
                </div>
                <div className='nav-item'>
                    <img src={image_900} width="23" height="23" alt="" />
                    <p>
                        REPORT
                    </p>
                </div>
                <div className='nav-item'>
                    <img src={image_901} width="27" height="27" alt="" />
                    <p>
                        SETTING
                    </p>
                </div>
                <div className='nav-item'>
                    <img src={image_902} width="24" height="24" alt="" />
                    <p>
                        LOGOUT
                    </p>
                </div>
            </div>
        </nav>
    )
}

export default Nav