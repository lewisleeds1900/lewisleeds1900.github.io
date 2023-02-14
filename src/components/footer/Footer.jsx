import React from 'react'
import './footer.css'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'
import {MdOutlineEmail} from 'react-icons/md'


const Footer = () => {
  return (
    <footer>
      <a href="/" className='footer__logo'>Lewis</a>

      <ul className='permalinks'>
        <li><a href="/">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.linkedin.com/in/lewis-leeds-224343104/" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/lewisleeds1900" target="_blank" rel="noreferrer"><FiGithub/></a>
        <a href="mailto:lewisleeds1900@gmail.com" target="_blank" rel="noreferrer"><MdOutlineEmail/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; Lewis Leeds. All rights reserved
        </small>
      </div>
    </footer>
  )
}

export default Footer