import React from 'react';
import '../App.css';
import './HeroSection.css';
import Scroll from './Scroll'
import Scroll2 from './Scroll2'
import Scroll3 from './Scroll3'
import '../components/HeroSection.css';

function HeroSection() {
    return (
        <div className="hero-container" id="Home">
            <Scroll2 />
            <Scroll />
            <Scroll3 />
        </div>
    )
}

export default HeroSection
