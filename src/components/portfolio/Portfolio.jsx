import React from 'react'
import './portfolio.css'
//import IMG1 from '../../assets/portfolio1.png'
//import IMG2 from '../../assets/portfolio2.png'
//import IMG3 from '../../assets/portfolio3.png'
//import IMG4 from '../../assets/portfolio4.png'
//import IMG5 from '../../assets/portfolio5.png'
//import IMG6 from '../../assets/portfolio6.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="" alt="Item 1"/>
          </div>
            <h3>AI-based Mental Health Chatbot</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="" alt="Item 2"/>
          </div>
            <h3>Ubiquitous Computing Audio Processing</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="" alt="Item 3"/>
          </div>
            <h3>Coming soon...</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="" alt="Item 4"/>
          </div>
            <h3>Coming soon...</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="" alt="Item 5"/>
          </div>
            <h3>Coming soon...</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
        <article className='portfolio__item'>
          <div className="portfolio__item-image">
            <img src="" alt="Item 6"/>
          </div>
            <h3>Coming soon...</h3>
            <div className="portfolio__item-cta">
              <a href="https://github.com" className='btn' target='_blank' rel="noreferrer">Github</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio