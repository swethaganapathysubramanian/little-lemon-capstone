/* eslint-disable no-unused-vars */
import logo from "../../icons_assets/Logo.svg"
import "./nav.css"
const Nav = () => {
  return (
    <>
    <nav>
      <img src={logo} alt="logo" className="logo"/>
      <ul className="navigation">
        <li><a href="/">Home</a></li>
        <li><a href="/">About</a></li>
        <li><a href="/">Menu</a></li>
        <li><a href="/reservations">Reservation</a></li>
        <li><a href="/">Order online</a></li>
        <li><a href="/">Login</a></li>
      </ul>
    </nav>
    </>
  )
}

export default Nav