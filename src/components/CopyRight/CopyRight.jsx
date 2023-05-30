import images from '../../assets/images'
import './CopyRight.scss'

export default function CopyRight() {
  return (
    <div className="copyright">
      <div>
        <p>Copyright © 2023</p>
        <img src={images.logo} alt="logo" />
      </div>
      <p>Todos os Direitos Reservados.</p>
    </div>
  )
}
