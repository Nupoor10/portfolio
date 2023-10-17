import React from 'react'
import { Element } from "react-scroll"
import ExperienceCard from "./ExperienceCard";
import experienceArray from '../../data/experience';
import "./Experience.css"

const Experience = () => {
  return (
    <Element name='experience'>
      <div className='experience__container'>
      <h1>Work Experience</h1>
      {experienceArray.map((item, index) => {
        return <ExperienceCard key={index} duration={item.duration} position={item.position} company={item.company} location={item.location} description={item.description} skills={item.skills}/>
      })}
    </div>
    </Element>
  )
}

export default Experience