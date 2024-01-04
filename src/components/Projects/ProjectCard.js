import React from 'react'
import { FiExternalLink } from "react-icons/fi";
import { BsGithub } from "react-icons/bs";
import "./ProjectCard.css";

const ProjectCard = ({img, name, description, github1, github2, demo}) => {
  return (
    <div className='section__wrapper'>
      <div className='projects__card__wrapper'>
        <div className='project__img'>
          <img alt='project__img' src={img} />
        </div>
        <div className='projects__card__container'>
          <img alt='project__img' className='project__mobile__img' src={img} />
          <h1>{name}</h1>
          <p>{description}</p>
          <div className='project__links'>
            {github1 && <a style={{color: 'white'}} rel="noreferrer noopener" href={github1} target='_blank'><BsGithub /></a>}
            {github2 && <a style={{color: 'white'}} rel="noreferrer noopener" href={github2} target='_blank'><BsGithub /></a>}
            {demo && <a style={{color: 'white'}} rel="noreferrer noopener" href={demo} target='_blank'><FiExternalLink /></a>}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard