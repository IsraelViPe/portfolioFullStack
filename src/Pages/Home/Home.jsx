import images from '../../assets/images'
import './Home.scss'

export default function Home() {
  return (
    <section id="Home" className="cont__home head-text">
      <div>
        <img src={images.isViPe} alt="Foto Israel" />
      </div>
    </section>
  )
}
