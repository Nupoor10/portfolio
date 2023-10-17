import React from 'react'
import { BsGithub, BsLinkedin } from "react-icons/bs"
import { AiTwotoneMail } from "react-icons/ai"
import { Element } from 'react-scroll'
import "./Contact.css"

const Contact = () => {
  return (
    <Element name='contact'>
      <div className='contact__container'>
        <h1>Get in Touch</h1>
        <p>I am always looking to collaborate and meet like minded people. I am also actively looking for internships and job opportunities. You can find the links to my socials below. Please feel free to get in touch!</p>
        <div>
            <a target='_blank' rel="noreferrer noopener" href='https://github.com/Nupoor10'><BsGithub /></a>
            <a target='_blank' rel="noreferrer noopener" href='https://www.linkedin.com/in/nupoor-shetye-8452111a7/'><BsLinkedin /></a>
            <a rel="noreferrer noopener" href="mailto:shetyenupoor10@gmail.com"><AiTwotoneMail /></a>
        </div>
      </div>
    </Element> 
  )
}

export default Contact