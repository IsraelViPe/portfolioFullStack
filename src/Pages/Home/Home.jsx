import images from '../../assets/images'
import { motion } from 'framer-motion'
import './Home.scss'

export default function Home() {
  return (
    <section id="Home" className="cont__home">
      <div className="cont_home-profile-img">
        <img src={images.isViPe} alt="Foto Israel" />
      </div>
      <motion.div
        whileInView={{ x: [100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.8 }}
        className="cont__home-info"
      >
        <h1 className="head-text">Oi, eu sou Israel</h1>
        <p className="p-text">Desenvolvedor Web Full Stack</p>
      </motion.div>
    </section>
  )
}
