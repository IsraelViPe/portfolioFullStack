import images from '../../assets/images'
import SocialMedia from '../SocialMedia/SocialMedia'
import { CgMenuRound, CgCloseO } from 'react-icons/cg'
import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import './NavBar.scss'
import { useState } from 'react'

export default function NavBar() {
  const [toggle, setToggle] = useState(false)
  const [showNav, setShowNav] = useState(false)

  const { scrollY } = useScroll()

  useMotionValueEvent(scrollY, 'change', (x) => {
    if (x > 20) setShowNav(true)
    if (x < 20) setShowNav(false)
  })

  return (
    <>
      {showNav && (
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

          <div className="cont__navbar-hamburger">
            <CgMenuRound onClick={() => setToggle(true)} />

            {toggle && (
              <motion.div transition={{ duration: 0.85, ease: 'easeOut' }}>
                <CgCloseO onClick={() => setToggle(false)} />
                <ul>
                  {['Home', 'Sobre mim', 'Portfolio', 'Contacto'].map(
                    (item) => (
                      <li key={item}>
                        <a href={`#${item}`} onClick={() => setToggle(false)}>
                          {item}
                        </a>
                      </li>
                    )
                  )}
                </ul>
              </motion.div>
            )}
          </div>

          <SocialMedia />
        </nav>
      )}
    </>
  )
}
