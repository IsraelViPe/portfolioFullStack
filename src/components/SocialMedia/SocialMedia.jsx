import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import './SocialMedia.scss'

export default function SocialMedia() {
  return (
    <div className="nav__social">
      <button
        onClick={() => {
          window.open(
            'https://www.linkedin.com/in/israel-pereira-dev/',
            '_blank'
          )
        }}
      >
        <BsLinkedin />
      </button>
      <button
        onClick={() => {
          window.open('https://github.com/IsraelViPe', '_blank')
        }}
      >
        <BsGithub />
      </button>
    </div>
  )
}
