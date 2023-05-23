import { motion, useMotionValueEvent, useScroll } from 'framer-motion'
import { useState } from 'react'
import './Home.scss'

export default function Home() {
  const [showEmo, setShowEmo] = useState(false)
  const { scrollY } = useScroll()

  const heroText = ['oi, eu sou o', '</', 'isreal', '>']

  useMotionValueEvent(scrollY, 'change', (x) => {
    if (x > 20) setShowEmo(true)
  })
  return (
    <section id="Home" className="cont__home">
      <div className="home__hero-title">
        {heroText.map((text) => {
          const fullText = (
            <motion.div
              style={
                (text === '</' || text === '>') && {
                  color: 'var(--emphasis-color)'
                }
              }
              whileInView={{ y: [-100, 0], opacity: [0, 0.5, 0.8, 1] }}
              transition={{
                duration: 0.8,
                delay: text === '</' || text === '>' || text === '/' ? 0.8 : 0.1
              }}
            >
              <h1>{text}</h1>
            </motion.div>
          )
          return fullText
        })}
      </div>
      <div className="home__hero-sub-title">
        <motion.div
          className="secondary"
          whileInView={{
            x: [100, 0],
            opacity: [0, 0.5, 0.8, 1],
            transition: {
              duration: 0.8,
              delay: 0.8
            }
          }}
        >
          <p>
            Desenvolvedor Web <br /> Full Stack <br />
          </p>
        </motion.div>
        {showEmo && (
          <motion.div
            whileInView={{
              opacity: [0, 1],
              rotate: [0, 90]
            }}
          >
            <span>{';)'}</span>
          </motion.div>
        )}
      </div>
    </section>
  )
}
