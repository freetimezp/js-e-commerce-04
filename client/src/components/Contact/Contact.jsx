import React from 'react';

import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import GoogleIcon from '@mui/icons-material/Google';
import PinterestIcon from '@mui/icons-material/Pinterest';

import './Contact.scss';

const Contact = () => {
    return (
        <div className='contact'>
            <div className="wrapper">
                <span>Be in touch with us</span>
                <div className="mail">
                    <input type="text" placeholder='Enter your email' />
                    <button>Join Us</button>
                </div>
                <div className="icons">
                    <FacebookIcon className='icon' />
                    <InstagramIcon className='icon' />
                    <TwitterIcon className='icon' />
                    <GoogleIcon className='icon' />
                    <PinterestIcon className='icon' />
                </div>
            </div>
        </div>
    );
}

export default Contact;
