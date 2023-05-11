import React from 'react'
import { BsGithub, BsLinkedin } from 'react-icons/bs'
import './SocialMedia.scss'

export default function SocialMedia() {
  return (
    <div className="nav__social">
      <div>
        <BsLinkedin
          style={{ cursor: 'pointer ' }}
          onClick={() => {
            window.open(
              'https://www.linkedin.com/in/israel-pereira-dev/',
              '_blank'
            )
          }}
        />
      </div>
      <div>
        <BsGithub
          style={{ cursor: 'pointer ' }}
          onClick={() => {
            window.open('https://github.com/IsraelViPe', '_blank')
          }}
        />
      </div>
    </div>
  )
}
