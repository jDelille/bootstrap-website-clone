import React from 'react'
import Header from './Header'


function Hero() {
    return (
        <section className='hero' id="hero">
        <Header />
            <div className="hero-text">
                <h1 className="hero-text-1"> Welcome To Our Studio! </h1>
                <h1 className="hero-text-2"> IT'S NICE TO MEET YOU </h1>
                <button className="hero-btn"> TELL ME MORE </button>
            </div> 
        </section>
    )
}

export default Hero
