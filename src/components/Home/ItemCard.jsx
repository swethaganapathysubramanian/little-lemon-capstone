/* eslint-disable react/prop-types */
import './home.css'
import { RiTakeawayFill } from "react-icons/ri";

const ItemCard = ({item}) => {
  return (
    <div className='card'>
        <div className='card-image'>
        <img src={item.image} alt={item.name} />
        </div>
        <div className='card-content'>
        <div className='card-title'>
          <span>{item.name}</span>
          <span style={{float:'right'}}>{item.price}</span>
        </div>
        <div className='card-desc'>{item.description}</div>
        <a href="#" className='order'>Order now <RiTakeawayFill /></a>
        </div>
    </div>
  )
}

export default ItemCard