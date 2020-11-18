import React from 'react';
import { Spring } from 'react-spring/renderprops';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';
import Scroll from './Scroll'
import Scroll2 from './Scroll2'
import Scroll3 from './Scroll3'
import '../components/HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container" id="Home">
            {/* <h1>Souad Ali</h1> */}
            {/* <p>Designer, Creator, Mentor</p> */}
            {/* <div className="hero-btn">
                <Button className="btn" buttonStyle='btn--outline' buttonSize='btn--large'>Contact Me</Button>
            </div> */}
            <Scroll2 />
            <Scroll />
            <Scroll3 />
        </div>
    )
}

export default HeroSection
