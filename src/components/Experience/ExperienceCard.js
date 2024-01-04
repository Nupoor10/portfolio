import React from 'react'
import {FaLocationDot} from "react-icons/fa6"
import Tags from '../Tags/Tags'
import "./ExperienceCard.css"

const ExperienceCard = ({duration, position, company, location, description, skills}) => {
  return (
    <div className='section__wrapper'>
      <div className='experience__card__container'>
        <h2>{position} {"  "} @ {"  "} <span className='company'>{company}</span></h2>
        <h3>{duration} {"  "} | {"  "} <FaLocationDot />{"  "}{location}</h3>
        <div>{description?.map((item, index) => {
            return (
              <p className="custom-bullet" key={index}>{item}</p>
            )
          })}
        </div>
        <div className='experience__skills__div'>{skills?.map((item, index) => {
            return <Tags key={index} text={item}/>
          })}
        </div>
      </div>
    </div>
  )
}

export default ExperienceCard