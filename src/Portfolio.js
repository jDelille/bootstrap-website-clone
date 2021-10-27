import React from 'react'
import image_1 from './images/1.jpg'
import image_2 from './images/2.jpg'
import image_3 from './images/3.jpg'
import image_4 from './images/4.jpg'
import image_5 from './images/5.jpg'
import image_6 from './images/6.jpg'


function Portfolio() {
    return (
        <section class="portfolio" id="portfolio">
        <div class="title-row">
            <h1> Portfolio </h1>
            <p> Lorem ipsum dolor sit amet consectetur. </p>
        </div>
        <div class="row-1">
            <div class="project-box">
                <div class="img-container">
                    <img src={image_1} alt="" />
                </div>
                <div class="project-box-name">
                    <h1> Threads </h1>
                    <p> Illustration </p>
                </div>
            </div>
            <div class="project-box">
                <div class="img-container">
                <img src={image_2} alt="" />
                </div>
                <div class="project-box-name">
                    <h1> Explore </h1>
                    <p> Graphic Design </p>
                </div>
            </div>
            <div class="project-box">
                <div class="img-container">
                    <img src={image_3} alt="" />
                </div>
                <div class="project-box-name">
                    <h1> Finish </h1>
                    <p> Branding </p>
                </div>
            </div>
        </div>
        <div class="row-2">
            <div class="project-box">
                <div class="img-container">
                    <img src={image_4} alt="" />
                </div>
                <div class="project-box-name">
                    <h1> Threads </h1>
                    <p> Illustration </p>
                </div>
            </div>
            <div class="project-box">
                <div class="img-container">
                    <img src={image_5} alt="" />
                </div>
                <div class="project-box-name">
                    <h1> Explore </h1>
                    <p> Graphic Design </p>
                </div>
            </div>
            <div class="project-box">
                <div class="img-container">
                    <img src={image_6} alt="" />
                </div>
                <div class="project-box-name">
                    <h1> Finish </h1>
                    <p> Branding </p>
                </div>
            </div>
        </div>
    </section>
    )
}

export default Portfolio
