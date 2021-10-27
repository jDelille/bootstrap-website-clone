import React from 'react'
import about_1 from './images/about-1.jpg'

function About() {
    return (
       <section className="about" id="about">
           <div className="title-row">
                <h1> About </h1>
                <p> Lorem ipsum dolor sit amet consectetur. </p>
            </div>
            <div className='about-1 about-box'>
                <div className="about-text">
                    <h1 className="about-left-text">2009-2011
                    <br />
                    Our Humble Beginnings</h1>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                <div className='about-circle'>
                    <img src={about_1} />
                </div>
            </div>
            

           
            <div className='about-2 about-box'>
                <h1>March 2011 <br />
                An Agency is Born</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                <div className=' left-circle'></div>
            </div>
            <div className='about-3 about-box'>
                <h1>December 2015 <br />
                Transition to Full Service</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                <div className='about-circle'></div>
            </div>
            <div className='about-4 about-box'>
                <h1>July 2020 <br />
                Phase Two Expansion</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!</p>
                <div className=' left-circle'></div>
            </div>
            <div className='about-5'>
                <div className='about-circle'></div>
            </div>
       </section>
    )
}

export default About
