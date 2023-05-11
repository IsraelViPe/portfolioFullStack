import images from '../../assets/images'
import SocialMedia from '../SocialMedia/SocialMedia'
import './NavBar.scss'

export default function NavBar() {
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
      <SocialMedia />
    </nav>
  )
}
