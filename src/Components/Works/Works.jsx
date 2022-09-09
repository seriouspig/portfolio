import React from 'react'
import './Works.css'
import Upwork from "../../img/Upwork.png"
import Fiverr from "../../img/fiverr.png"
import Amazon from "../../img/amazon.png"
import Shopify from "../../img/Shopify.png"
import Facebook from "../../img/Facebook.png"

const Works = () => {
  return (
    <div className="works">
        {/* left side */}
        
        <div className="awesome">
        <span>Works for All these</span>
        <span>Brands & Clients</span>
        <span>
            This is my greate skill sets. I can do them all. I am soo good and 3d and web development. Hire me. I worked for so many companies. They weres so great. I am such a good programmer. 
        </span>

            <button className="button s-button">Hire Me</button>

        <div className="blur s-blur1" style={{background: "var(--purple"}}></div>
        </div>
        <div className="w-right">
            <div className="w-mainCircle">
                <div className="w-secCircle">
                    <img src={Upwork} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Fiverr} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Amazon} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Shopify} alt="" />
                </div>
                <div className="w-secCircle">
                    <img src={Facebook} alt="" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Works