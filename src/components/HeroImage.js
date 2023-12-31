import React from 'react'
import "./HeroImageStyles.css"
import IntroImg from "../images/intro-img.jpg";
import { Link } from 'react-router-dom';

const HeroImage = () => {
    return (
        <div className='hero'>
            <div className='mask'>
                <img className="intro-img" src={IntroImg} alt="IntroImg" />
            </div>
            <div className='content'>
                <h1>I'm Dhruvil Prajapati</h1>
                <p>Software Developer</p>
                <div>
                    <Link to="/project" className='btn'>Projects</Link>
                    <Link to="/contact" className='btn btn-light'>Contact</Link>
                </div>
            </div>
        </div>
    )
}

export default HeroImage
