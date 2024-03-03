import './about.css'
import image1 from '../../icons_assets/Mario and Adrian b.jpg'
import image2 from '../../icons_assets/restaurant chef B.jpg'
const About = () => {
  return (
    <div className='about-section'>
        <div>
        <div className='about-title'>Little Lemon</div>
        <div className='about-subtitle'>Chicago</div>
            <div className='about-content'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed non, nisi ut odit ex neque reprehenderit accusantium optio ratione eius temporibus veritatis maiores, architecto fugiat saepe suscipit totam cupiditate ullam beatae accusamus soluta libero quas! Itaque vel aut laborum aliquid ullam iste omnis beatae, incidunt quis! Nihil nobis eaque officia minus iure soluta eum, voluptate odio tenetur ratione molestias illo quasi harum blanditiis, vero, autem excepturi totam unde perferendis odit optio neque. Eligendi nam aliquid quos vitae eveniet aliquam accusantium.
            </div>
        </div>
        <div className='about-images'>
            <img className='image1' src={image1} alt='rest'/>
            <img className='image2' src={image2} alt='chef'/>
        </div>
    </div>
  )
}

export default About