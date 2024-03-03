/* eslint-disable react/prop-types */
import './testimonials.css'
import { FaStar } from "react-icons/fa";

const ReviewCard = ({review}) => {
  return (
    <div className='r-card'>
        <div className='r-card-image'>
        <img src={`https://robohash.org/${review.image}.png?set=set4`} alt={review.name} />
        </div>
        <div className='r-card-title'>
         {review.name}
        </div>
        <div>{[...Array(review.star)].map((e, i) => <FaStar key={i} style={{color:'#f4ce14'}}/>)}</div>
        <div className='r-card-desc'>{review.review}</div>
    </div>
  )
}

export default ReviewCard