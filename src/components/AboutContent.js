import React from 'react'
import { Link } from 'react-router-dom'
import "./AboutContentStyles.css"
import frontphoto from "../images/bg-1.jpg"
import backphoto from "../images/bg-2.jpg"

const AboutContent = () => {
    return (
        <div className='about-info'>
            <div className='left'>
                <h1>
                    Who Am I ?
                </h1>
                <p>
                    Hi, I'm Dhruvil Prajapati, currently pursuing bachelor in the field of Computer Engineering  from Silveroak university.
                    I am passionate about <span style={{ color: "#f2e030" }}>Software Developer</span> and I am eager to begin my career.
                    I have a strong foundation in ReactJS, MongoDB,Express,NodeJs and also have kmowledge of Python and Java.
                </p>
                <Link to="/contact" className='btn'>Contact</Link>
            </div>
            <div className='right'>
                <div className='img-container'>
                    <div className='img-stack-top'>
                        <img src={frontphoto} alt="Webdeveloper" className='about-img' />
                    </div>
                    <div className='img-stack-bottom'>
                        <img src={backphoto} alt="coding" className='about-img' />
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutContent
