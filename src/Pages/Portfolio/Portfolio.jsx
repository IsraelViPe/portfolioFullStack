import './Portfolio.scss'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { AiFillEye, AiFillGithub } from 'react-icons/ai'
import data from '../../data/projects'

export default function Portfolio() {
  const [projects, setProjects] = useState([])
  const [screenWidth, setScreenWidth] = useState(window.innerWidth)

  console.log(screenWidth)

  useEffect(() => {
    setProjects(data)

    function handleResize() {
      setScreenWidth(window.innerWidth)
    }

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <section className="cont__portfolio" id="Portfolio">
      <h2 className="head-text">
        {' '}
        <span>{'</'}</span> portfolio <span>{'>'}</span>{' '}
      </h2>
      <div>
        {projects.map((project, index) => (
          <div key={index + project} className="portfolio__card">
            <div className="portfolio__card-img">
              <img src={project.img} alt={project.name} />
              <motion.div
                className="portfolio__hover"
                whileHover={screenWidth >= 900 ? { opacity: [0, 0.9] } : {}}
                whileInView={screenWidth < 900 ? { opacity: [0, 0.9] } : {}}
                transition={
                  screenWidth >= 900
                    ? {
                        duration: 0.25,
                        ease: 'easeInOut',
                        staggerChildren: 0.5
                      }
                    : { duration: 2 }
                }
              >
                <div className="portfolio__hover-info">
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                </div>
                <div className="portfolio__hover-links">
                  <a
                    href={project.projectLink}
                    target="_blank"
                    rel="noreferrer"
                    style={
                      project.projectLink === '' ? { display: 'none' } : null
                    }
                  >
                    <motion.div
                      whileHover={{ scale: [0, 0.9] }}
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                    >
                      <AiFillEye />
                    </motion.div>
                  </a>
                  <a
                    href={project.codeLink}
                    target="_black"
                    rel="noreferrer"
                    style={project.codeLink === '' ? { display: 'none' } : null}
                  >
                    <motion.div
                      whileHover={{ scale: [0, 0.9] }}
                      whileInView={{ scale: [0, 1] }}
                      transition={{ duration: 0.25 }}
                    >
                      <AiFillGithub />
                    </motion.div>
                  </a>
                </div>
                <div className="portfolio__hover-tags">
                  <ul>
                    {project.tags.map((tag, index) => (
                      <motion.li
                        whileHover={{ scale: [0, 0.9] }}
                        whileInView={{ scale: [0, 1] }}
                        transition={{ duration: 0.3 }}
                        key={index}
                      >
                        {tag}
                      </motion.li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
