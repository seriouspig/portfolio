import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className="n-left">
            <div className="n-name">
                SERIOUSPIG
            </div>
            {/* <span>toggle</span> */}
        </div>
        <div className="n-right">
            <div className="n-list">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonies</li>
                </ul>
            </div>
            <div className="button-container">
                <button className="button">
                    Contact
                </button>
            </div>

        </div>
    </div>
  )
}

export default Navbar