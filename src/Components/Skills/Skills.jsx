import React from 'react'
import './Skills.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'

const Skills = () => {
  return (
    <div className="skills">
        {/* left side */}
        <div className="awesome">
        <span>My Awesome</span>
        <span>Services</span>
        <span>
            This is my greate skill sets. I can do them all. I am soo good and 3d and web development. Hire me.
        </span>
        <button className="button s-button">Download CV</button>
        <div classNAme="blur s-blur" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side  */}
        <div className="cards">
            I am the right side
        </div>
    </div>
  )
}

export default Skills