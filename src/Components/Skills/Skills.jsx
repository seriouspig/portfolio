import React from 'react'
import './Skills.css'
import HeartEmoji from '../../img/heartemoji.png'
import Glasses from '../../img/glasses.png'
import Humble from '../../img/humble.png'
import Card from '../Card/Card'
import Resume from './Piotr Gryko_CV.pdf'

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
        <a href={Resume} download>
            <button className="button s-button">Download CV</button>
        </a>
        <div classNAme="blur s-blur" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* right side  */}
        <div className="cards">
            <div style={{left: '14rem' }}>

                <Card 
                    emoji = {HeartEmoji}
                    heading = {'Design'}
                    detail = {"Figma, Sketch, Photoshop, Adobe, Adobe xd"}
                />
            </div>
            <div style={{top:"12rem", left: "-4rem"}}>
                <Card 
                    emoji = {Glasses}
                    heading = {'Developer'}
                    detail = {"Html, Css, Javascript, React"}
                />
            </div>
            <div style={{top:"19rem", left: "12rem"}}>
                <Card 
                    emoji = {Humble}
                    heading = {'3D modelling'}
                    detail = {"Blender 3D, Sketchup"}
                />
            </div>
        </div>
    </div>
  )
}

export default Skills