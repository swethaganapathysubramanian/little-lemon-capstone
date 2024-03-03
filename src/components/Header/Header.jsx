import './header.css'
import hero from '../../icons_assets/restauranfood.jpg'
import Button from '../common/Button'

const Header = () => {
  return (
   <header>
      <div className='header-left'>
        <div className='header-left-content'>
        <div className='header-title'>Little Lemon</div>
        <div className='header-subtitle'>Chicago</div>
        <div className='header-content'>
          We are a family owned Mediterranean restaurant focused on serving traditional
          recipies with a modern twist.
        </div>
        <div className='left-button'>
          <Button onClick="#" name={"Reserve a table"} />
        </div>
        </div>
      </div>
      <div className='header-right'>
        <img className="hero" src={hero} alt="hero"/>
      </div>
   </header>
  )
}

export default Header