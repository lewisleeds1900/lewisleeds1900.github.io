import React from 'react'
import './about.css'
import {FiAward} from 'react-icons/fi'
import ME from '../../assets/hoodieFace.jpg'
import {FaUniversity} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'

const About = () => {
  return (
    <section id='about'>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt=""/>
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className='about__card'>
              <FiAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years Industry</small>
            </article>
            <article className='about__card'>
              <FaUniversity className='about__icon'/>
              <h5>University</h5>
              <small>BSc Computing Science</small>
            </article>
            <article className='about__card'>
              <AiOutlineFundProjectionScreen className='about__icon'/>
              <h5>Projects</h5>
              <small>10+ Completed</small>
            </article>
          </div>
          <p>
            Hi, my name is Lewis Leeds. I'm 26 years old from the United Kingdom. I completed my studies at the University of
            East Anglia in 2022, achieving a grade of 2:1. In my free time I enjoy exercising, listening to music,
            playing video games and playing on my guitar. I am, and always have been, fascinated by technology ever since I
            was given my first handheld console when I was a child, and progressed in my understanding of technology from that
            point onward. 
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About