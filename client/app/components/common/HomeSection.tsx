import React from 'react'

//Components
import {NavTitle} from '../ui/Home/NavTitle';
import HomeModel from '../ui/Home/HomeModel'
import HomeTextLeft from '../ui/Home/HomeTextLeft';
import HomeTextRight from '../ui/Home/HomeTextRight';


const HomeSection = ({id}: {id:string}) => {
  return (
    <section id={id} className='h-fit'>

      <div className='flex flex-row w-full h-fit justify-around pt-[250px] lg:flex-col lg:flex lg:mx-auto lg:justify-center lg:gap-10'>
        <NavTitle/>
        <HomeTextLeft/>
        <HomeTextRight/>
      </div>
      <HomeModel/>
    </section>
  )
}

export default HomeSection