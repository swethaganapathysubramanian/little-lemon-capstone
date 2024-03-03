/* eslint-disable no-unused-vars */
import './button.css'

const Button = (props) => {
  return (
    <div>
        <button className="primary-button"onClick={props.onClick}>{props.name}</button>
    </div>
  )
}

export default Button