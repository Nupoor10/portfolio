import React from 'react';
import { Element } from "react-scroll"
import ProjectCard from "./ProjectCard";
import projectsArray from "../../data/projects";
import "./Projects.css";

const Projects = () => {
  return (
    <Element name='projects'>
       <div className='projects__container'>
      <h1>Projects</h1>
      {projectsArray.map((item, index) => {
        return <ProjectCard key={index} img={item.img} name={item.name} description={item.description} github1={item.github1} github2={item.github2} demo={item.demo}/>
      })}
    </div>
    </Element>
  )
}

export default Projects