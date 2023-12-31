import React, { useState } from 'react'
import "./NavbarStyles.css";
import { Link } from "react-router-dom";
import { FaTimes } from "react-icons/fa";
import user from "../images/usericon.jpg"
const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = useState(false);
    const changeColor = () => {
        if (window.scrollY >= 100) {
            setColor(true);
        }
        else {
            setColor(false);
        }
    }
    window.addEventListener("scroll", changeColor);
    return (
        <div className={color ? "header header-bg" : "header"}>
            <Link to="/"> <h1>Portfolio</h1></Link>
            <ul className={click ? "nav-menu active" : "nav-menu "}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
            <div className='hamburger' onClick={handleClick}>
                {click ?
                    <FaTimes size={20} style={{ color: "#fff" }} />
                    :
                    <img src={user} alt="menu-icon" />
                }
            </div>
        </div>
    )
}

export default Navbar