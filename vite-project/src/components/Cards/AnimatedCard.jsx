import React from 'react'
import Photo1 from '../../assets/images/Photo1.jpg'
import Photo2 from '../../assets/images/Photo2.jpg'
import Photo3 from '../../assets/images/Photo3.jpg'
import Photo4 from '../../assets/images/Photo4.jpg'
import Photo5 from '../../assets/images/Photo5.jpg'
import Photo6 from '../../assets/images/Photo6.jpg'
import Photo7 from '../../assets/images/Photo7.jpg'
import Photo8 from '../../assets/images/Photo8.jpg'
import Photo9 from '../../assets/images/Photo9.jpg'
import Photo10 from '../../assets/images/Photo10.jpg'
import {Fade, Slide} from 'react-awesome-reveal'
const CardsData = [
  {
    id: 1,
    img: Photo1,
    title: 'Card 1',
    desc: 'This is card 1',

  },
  {
    id: 2,
    img: Photo2,
    title: 'Card 2',
    desc: 'This is card 2',

  },
  {
    id: 3,
    img: Photo3,
    title: 'Card 3',
    desc: 'This is card 3',
  },
  {
    id: 4,
    img: Photo4,
    title: 'Card 4',
    desc: 'This is card 4',
  },
  {
    id: 5,
    img: Photo5,
    title: 'Card 4',
    desc: 'This is card 4',
  },
  {
    id: 6,
    img: Photo6,
    title: 'Card 4',
    desc: 'This is card 4',
  },
  {
    id: 7,
    img: Photo7,
    title: 'Card 4',
    desc: 'This is card 4',
  },
  {
    id: 8,
    img: Photo8,
    title: 'Card 4',
    desc: 'This is card 4',
  },
  {
    id: 9,
    img: Photo9,
    title: 'Card 4',
    desc: 'This is card 4',
  },
  {
    id: 10,
    img: Photo10,
    title: 'Card 4',
    desc: 'This is card 4',
  },

]

const AnimatedCard = () => {
  return (
    <div className='container mx-auto'>
<h1 className='text-center text-white font-bold text-3xl mb-14 mt-5 sm:mt-0'>responsev Animated Card </h1>

<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 place-items-center gap-4">
  {
CardsData.map(({id,img,title,desc}) => {
      return (
    <div key={id} className='text-white shadow-md rounded-lg overflow-hidden relative group'>
          <img src={img} alt=''
          className='w-full max-w-[300px] h-[350px] rounded-lg'
          />
  <div className='absolute left-0 top-[-100%] opacity-0 group-hover:opacity-100 group-hover:top-[0] p-4 w-full h-full bg-black/65 group-hover:backdrop-blur-sm duration-500'>
        <div className='space-y-4'>
              <Slide cascade>
          <h1 className='text-3xl font-bold'>{title}</h1>
          <Fade cascade damping={0.05}>
            {desc}
          </Fade>
          <div>
<button className='border border-white px-4 py-2 rounded-lg hover:bg-black/20 duration-300'>
              View
            </button>
          </div>
              </Slide>
              

              
            </div>
          </div>
        </div>
      )
    })
  }
</div>
      </div>
  )
}

export default AnimatedCard