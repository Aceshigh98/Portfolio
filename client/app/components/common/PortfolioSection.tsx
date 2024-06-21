import React from 'react'
import PortfolioTitle from '../ui/Portfolio/PortfolioTitle'
import GlareCardStack from '../ui/Portfolio/GlareCardStack'

const PortfolioSection = ({id}: {id:string}) => {
  return (
    <section id={id} className='h-lvh'>PortfolioSection
      <PortfolioTitle title='My Projects'/>
      <div className='w-full flex flex-row'>
        <GlareCardStack/>
      </div>
     
    </section>
  )
}

export default PortfolioSection