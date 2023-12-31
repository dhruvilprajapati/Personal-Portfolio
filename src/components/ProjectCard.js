import React from 'react'
import { NavLink } from 'react-router-dom';
import "./CardStyles.css"

const ProjectCard = (props) => {
    return (
        <div className='project-card'>
            <img src={props.imgUrl} alt="portfolio-img" />
            <h2 className='project-title'>{props.title}</h2>
            <div className='project-details'>
                <p>{props.description}</p>
            </div>
            <div className='project-btn'>
                <NavLink to={props.view} className="btn" target="_blank">View</NavLink>
                <NavLink to={props.source} className="btn" target="_blank">Source</NavLink>
            </div>
        </div>
    )
}

export default ProjectCard
