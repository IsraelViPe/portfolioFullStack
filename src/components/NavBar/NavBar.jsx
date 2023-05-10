import images from '../../assets/images'
import './NavBar.scss'

export default function NavBar() {
  return (
    <nav className="cont__navbar">
      <div className="cont__navbar-logo">
        <img src={images.logo} alt="logo" />
      </div>
      <ul>
        {['Home', 'Sobre mim', 'Portfolio', 'Contato'].map((item) => (
          <li key={item}>
            <a href={`#${item}`}>{item}</a>
          </li>
        ))}
      </ul>
    </nav>
  )
}
