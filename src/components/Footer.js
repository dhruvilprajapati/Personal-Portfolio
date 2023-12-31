import React from 'react'
import "./FooterStyles.css";
import { Link } from "react-router-dom";
import { FaHome, FaPhone, FaFacebook, FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { FiMail } from "react-icons/fi";

const Footer = () => {
    return (
        <div className='footer'>
            <div className='footer-container'>
                <div className='left-content'>

                    <div className='location'>
                        <h4><FaHome size={20} style={{ color: 'white', marginRight: "2rem" }} />
                            Ahemadabad, India</h4>
                    </div>
                    <div className='phone'>
                        <h4><FaPhone size={20} style={{ color: 'white', marginRight: "2rem" }} /> +91-9099270401</h4>
                    </div>
                    <div className='email-info'>
                        <h4>
                            <FiMail size={20} style={{ color: 'white', marginRight: "2rem" }} /> prajapatidhruvil.a@gmail.com
                        </h4>
                    </div>
                </div>
                <div className='right-content'>
                    <h4>&copy; {(new Date().getFullYear())} &nbsp;| &nbsp; Dhruvil Prajapati</h4>
                    <div className='social-icons'>
                        <Link to="https://www.facebook.com/people/Prajapati-Dhruvil/pfbid02tPMm4ewCa7xfeVLMbzuiE81QgeQD8VxHmZqrCffsGWVNGWsvdKyLeKBBKXVi2aAil/" target="_blank">
                            <FaFacebook size={30} style={{ color: 'white', marginRight: "1rem" }} />
                        </Link>
                        <Link to="https://www.linkedin.com/in/dhruvil-prajapati-98b803214" target="_blank">
                            <FaLinkedin size={30} style={{ color: 'white', marginRight: "1rem" }} />
                        </Link>
                        <Link to="https://twitter.com/Prajapati_DP_?t=m-WeiL0bxUSxRtE3_aI00g&s=09" target="_blank">
                            <FaTwitter size={30} style={{ color: 'white', marginRight: "1rem" }} />
                        </Link>
                        <Link to="https://github.com/dhruvilprajapati" target="_blank">
                            <FaGithub size={30} style={{ color: 'white', marginRight: "1rem" }} />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer
