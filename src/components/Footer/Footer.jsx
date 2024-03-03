import './footer.css'
import logo from '../../icons_assets/footer-logo.png'

import { TiSocialInstagram, TiSocialYoutube, TiSocialTwitter, TiSocialFacebookCircular, TiSocialLinkedin, TiLocationOutline, TiPhone, TiMail } from "react-icons/ti";
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div  className='footer-logo'>
          <img src={logo} alt="footer-logo" />
        </div>
        <div className="home-links">
          <h3>Site Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/">About</a></li>
            <li><a href="/">Menu</a></li>
            <li><a href="/reservation">Reservation</a></li>
            <li><a href="/">Login</a></li>
            </ul>
        </div>
        <div className="contact-links">
          <h3>Contact</h3>
          <p><TiLocationOutline/> Chicago</p>
          <p><TiPhone/> (+1) (000)000-0000</p>
          <p><TiMail /> contact@littlelemon.com</p>
        </div>
        <div className="social-links">
        <h3>Social</h3>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
          <TiSocialInstagram/> Instagram
        </a>
        <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer">
          <TiSocialYoutube/> YouTube
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <TiSocialFacebookCircular/> Facebook
        </a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
          <TiSocialTwitter/> X (Formerly Twitter)
        </a>
        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
          <TiSocialLinkedin /> LinkedIn
        </a>
        </div>
      </div>
    </div>
  )
}

export default Footer