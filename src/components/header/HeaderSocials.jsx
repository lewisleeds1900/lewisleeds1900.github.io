import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FiGithub} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/lewis-leeds-224343104/" target="_blank"><BsLinkedin/></a>
        <a href="https://github.com/lewisleeds1900" target="_blank"><FiGithub/></a>
    </div>
  )
}

export default HeaderSocials