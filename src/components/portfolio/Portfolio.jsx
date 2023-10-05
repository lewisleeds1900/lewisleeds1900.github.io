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

            <h3>Warhammer 40,000</h3>
            <div className="portfolio__item-cta">
              <a href="https://warhammer40000.com" className='btn' target='_blank' rel="noreferrer">View Here</a>
            </div>
        </article>
        <article className='portfolio__item'>
            <h3>Warhammer Underworlds</h3>
            <div className="portfolio__item-cta">
              <a href="https://warhammerunderworlds.com" className='btn' target='_blank' rel="noreferrer">View Here</a>
            </div>
        </article>
        <article className='portfolio__item'>
            <h3>Data Visualisation Calendar (In Progress)</h3>
            <div className="portfolio__item-cta">
              <a href="https://fantastic-parfait-79f448.netlify.app/#/" className='btn' target='_blank' rel="noreferrer">View Here</a>
            </div>
        </article>
        <article className='portfolio__item'>
            <h3>Citadel Colour</h3>
            <div className="portfolio__item-cta">
              <a href="https://citadelcolour.com" className='btn' target='_blank' rel="noreferrer">View Here</a>
            </div>
        </article>
        <article className='portfolio__item'>
            <h3>Gravity</h3>
            <div className="portfolio__item-cta">
              <a href="https://gravity-global.com" className='btn' target='_blank' rel="noreferrer">View Here</a>
            </div>
        </article>
        <article className='portfolio__item'>
            <h3>Warhammer Community</h3>
            <div className="portfolio__item-cta">
              <a href="https://www.warhammer-community.com" className='btn' target='_blank' rel="noreferrer">View Here</a>
            </div>
        </article>
      </div>
    </section>
  )
}

export default Portfolio