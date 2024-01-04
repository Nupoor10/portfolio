import React from 'react';
import { Element } from 'react-scroll'
import "./Header.css";

const Header = () => {
  return (
    <div className='section__wrapper'>
      <Element name='header'>
        <div className='header__container'>
          <img alt='profile__img' src='https://res.cloudinary.com/du9wkwhju/image/upload/v1704358576/nupoor_pkmpri.jpg' />
          <h1>Hello 👋, I'm Nupoor Shetye</h1>
          <p>
            I excel in creating applications and products that prioritize user experience. With a robust web development background, I channel my enthusiasm for software development and my fascination with artificial intelligence to innovate and produce valuable solutions.
          </p>
        </div>
      </Element>   
      </div>  
  )
}

export default Header