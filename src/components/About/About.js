import React from 'react';
import { Element } from "react-scroll"
import Tags from '../Tags/Tags';
import skillArray from '../../data/skills';
import "./About.css";

const About = () => {
  return (
    <div className='section__wrapper'>
      <Element name="about">
      <div className='about__container'>
        <h1>About Me</h1>
        <div>
          <p>I'm a computer science undergrad with a passion for software development. Coding is my canvas, and I love bringing ideas to life through technology</p>
          <p>My journey involves constant learning, mastering various programming languages, and tackling challenging projects. Whether it's diving into open-source contributions or participating in hackathons, I'm always eager to expand my skill set</p>
          <p>Beyond coding, I'm a tech enthusiast who stays updated with industry trends and enjoys experimenting with side projects. I believe technology can change the world, and I'm excited to be part of that change. Let's connect and create together!</p>
          <div className='skills__tags__container'>
            {skillArray.map((item, index) => {
              return <Tags key={index} text={item}/>
            })}
          </div>
        </div>
      </div>
      </Element>
    </div>
  )
}

export default About