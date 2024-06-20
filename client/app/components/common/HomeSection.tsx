import React from 'react'
import HomeModel from '../ui/HomeModel'

const HomeSection = ({id}: {id:string}) => {
  return (
    <section id={id} className='h-lvh'>HomeSection
      <HomeModel />
    </section>
  )
}

export default HomeSection