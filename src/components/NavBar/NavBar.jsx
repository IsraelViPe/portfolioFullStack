import images from '../../assets/images'
import SocialMedia from '../SocialMedia/SocialMedia'
import { HiMenuAlt4, HiX } from 'react-icons/hi'
import { motion } from 'framer-motion'
import './NavBar.scss'
import { useState } from 'react'

export default function NavBar() {
  const [toggle, setToggle] = useState(false)

  return (
    <nav className="cont__navbar">
      <div className="cont__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul className="cont__nav-links">
        {['Home', 'Sobre mim', 'Portfolio', 'Contato'].map((item) => (
          <li key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>

      <div style={{ backgroundColor:"white"}}>
        <HiMenuAlt4 onClick={() => setToggle(true)} />

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: 'easeOut' }}
          >
            <HiX onClick={() => setToggle(false)} />
            <ul>
              {['Home', 'Sobre mim', 'Portfolio', 'Contacto'].map((item) => (
                <li key={item}>
                  <a href={`#${item}`} onClick={() => setToggle(false)}>
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>

      <SocialMedia />
    </nav>
  )
}
