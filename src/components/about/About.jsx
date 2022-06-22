import React from 'react'
import './about.css'
import {FiAward} from 'react-icons/fi'
import ME from '../../assets/face.jpg'
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
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum architecto assumenda molestias praesentium minima quae blanditiis eaque autem! Optio libero, quod ad obcaecati nisi et culpa ea ab nihil vel?
          </p>

          <a href="#contact" className='btn btn-primary'>Contact Me</a>
        </div>
      </div>
    </section>
  )
}

export default About