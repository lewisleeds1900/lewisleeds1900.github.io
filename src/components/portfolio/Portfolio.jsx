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
      <h4 style={{textAlign: 'center', paddingBottom: '50px', width: '33%', justifyContent: 'center', margin: 'auto'}}>
        The following projects are those which I have either solely lead, or been a core member of the development team.
      </h4>
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
      </div>
    </section>
  )
}

export default Portfolio