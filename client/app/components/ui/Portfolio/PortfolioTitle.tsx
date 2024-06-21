import React from 'react'

type Props = {
    title: string
}

const PortfolioTitle = (props: Props) => {
  return (
    <div className='flex mx-auto justify-center'>
        <h1>{props.title}</h1>
    </div>
  )
}

export default PortfolioTitle