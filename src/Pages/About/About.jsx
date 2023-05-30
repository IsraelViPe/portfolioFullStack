import images from '../../assets/images'
import { motion } from 'framer-motion'
import myAgeCalculator from '../../utils/myAgeCalculator'
import './About.scss'
import SkillsList from '../../components/SkillsList/SkillsList'

export default function About() {
  return (
    <section className="cont__about" id="Sobre mim">
      <h2 className="head-text">
        {' '}
        <span>{'</'}</span> sobre mim <span>{'>'}</span>{' '}
      </h2>
      <motion.div
        className="flex_row"
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 0.5, delay: 0.2 }}
      >
        <div className="about__prof-card-image">
          <img src={images.profile} alt="foto israel" />
          <div>
            <p>
              {' '}
              Mineiro de Belo Horizonte, amante de <strong>música</strong>,{' '}
              <strong>culinária</strong> e <strong>tecnologia</strong>.{' '}
            </p>
            <p>
              {' '}
              Realizei a formação Full Stack Web na <strong>Trybe</strong>,
              passando por todos os estágios do ciclo de desenvolvimento de{' '}
              <strong>apps web dinâmicos</strong>.
            </p>
            <p>
              Trabalho com várias tecnologias :{' '}
              <strong>
                JavaScript / TS / NodeJs / MySQL / React / Jest / Express /
                Docker ...
              </strong>
            </p>
            <p>
              Pai da graciosa <strong>Elis</strong>
            </p>
          </div>
        </div>
        <div className="about__prof-card-info">
          <ul>
            <li>
              <span>nome: </span>Israel Vinícius Pereira
            </li>
            <li>
              <span>email: </span>pereira.israel2070@gmail.com
            </li>
            <li>
              <span>idade: </span> {myAgeCalculator()}
            </li>
            <li>
              <span>local: </span>Barueri, São Paulo
            </li>
          </ul>
          <a
            href="https://drive.google.com/file/d/1Q4KXc2E0hOwEOkyLsC5W7wJmzQUia1fy/view?usp=share_link"
            target="blank"
          >
            download CV
          </a>
        </div>
      </motion.div>
      <div className="about__prof-list-skills">
        <h3>
          <span>{'</ '}</span>
          {'principais tecnologias'}
          <span>{' >'}</span>
        </h3>
        <SkillsList />
      </div>
    </section>
  )
}
