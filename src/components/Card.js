import React from 'react'
import "./CardStyles.css"
import ProjectCard from './ProjectCard';
import ProjectCardData from './ProjectData';

const Card = () => {
    return (
        <div className='container'>
            <h1 className='project-heading'>Work Experience</h1>
            <div className='project-container'>
                {ProjectCardData.map((value, index) => {
                    return (
                        <ProjectCard
                            key={index}
                            imgUrl={value.imgUrl}
                            title={value.title}
                            description={value.description}
                            view={value.view}
                            source={value.source}
                        />
                    )
                })}
            </div>

        </div>
    )
}

export default Card
