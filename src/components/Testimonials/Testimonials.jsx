import ReviewCard from "./ReviewCard"

const Testimonials = () => {
    const reviews = [
        {
          name: 'Greg',
          image: '122142',
          star: 4,
          review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
        name: 'Amanda',
        image: 'taestsg',
        star: 2,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
        name: 'Karan',
        image: 'etetew',
        star: 2,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
        {
        name: 'Nikita',
        image: 'teawtwa',
        star: 5,
        review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. '
        },
    ]
  return (
    <div className="section">
    <div className='review'>
      <h4 className='review-title'>Testimonials</h4>
      <div className="wrapper">
      <div className='reviews-display'>
      {reviews.map((review, index)=> (
          <ReviewCard key={review.id || index} review={review} />
        ))}
      </div>
      </div>
    </div>
    </div>
  )
}

export default Testimonials