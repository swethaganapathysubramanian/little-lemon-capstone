import bruchetta from '../../icons_assets/bruchetta.svg'
import greekSalad from '../../icons_assets/greek salad.jpg'
import lemoncake from '../../icons_assets/lemon dessert.jpg'
import About from '../About/About'
import Nav from '../NavigationMenu/Nav'
import Testimonials from '../Testimonials/Testimonials'
import Button from '../common/Button'
import ItemCard from './ItemCard'
import './home.css'


const Home = () => {
  const items = [
    {
      name: 'Greek Salad',
      image: greekSalad,
      price: '$7',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis vitae dignissimos totam voluptate tenetur illo sed itaque, quos magnam voluptatibus, optio sequi dicta sapiente? Quos, voluptatum sunt. Expedita, quaerat?'
    },
    {
      name: 'Bruchetta',
      image: bruchetta,
      price: '$9',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis vitae dignissimos totam voluptate tenetur illo sed itaque, quos magnam voluptatibus, optio sequi dicta sapiente? Quos, voluptatum sunt. Expedita, quaerat?'
    },
    {
      name: 'Lemon Cake',
      image: lemoncake,
      price: '$14',
      description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis veritatis vitae dignissimos totam voluptate tenetur illo sed itaque, quos magnam voluptatibus, optio sequi dicta sapiente? Quos, voluptatum sunt. Expedita, quaerat?'
    }
]
  return (
    <>
    <div className='main'>
      <div className='main-section'>
      <h4 className='main-title'>This week specials..</h4>
      <Button className='main-button' name="Online Menu" />
      </div>
      <div className='wrapper'>
      <div className='items-display'>
      {items.map((item, index)=> (
          <ItemCard key={item.id || index} item={item} />
        ))}
      </div>
      </div>
    </div>
    <Testimonials/>
    <About/>
    </>
  )
}

export default Home