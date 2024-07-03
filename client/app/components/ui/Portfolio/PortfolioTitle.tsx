'use client'

import React from 'react'
import { SparklesCore } from './SparkleCore'

type Props = {
    title: string
}

const PortfolioTitle = (props: Props) => {
  return (
    <div className="h-fit w-full bg-black  dark:bg-white flex flex-col items-center justify-center overflow-hidden rounded-md">
      <h1 className="md:text-7xl text-15xl lg:text-5xl font-bold text-center text-white dark:text-black relative z-20">
        {props.title}
      </h1>
      <div className="w-[40rem] h-40 relative">
        {/* Gradients */}
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-[2px] w-3/4 blur-sm" />
        <div className="absolute inset-x-20 top-0 bg-gradient-to-r from-transparent via-indigo-500 to-transparent h-px w-3/4" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-[5px] w-1/4 blur-sm" />
        <div className="absolute inset-x-60 top-0 bg-gradient-to-r from-transparent via-primary to-transparent h-px w-1/4" />
 
        {/* Core component */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1.5}
          particleDensity={1800}
          className="w-full h-full"
          particleColor="#8D3AE2"
        />
 
        {/* Radial Gradient to prevent sharp edges */}
        <div className="absolute inset-0 w-full h-full bg-black dark:bg-white [mask-image:radial-gradient(350px_200px_at_top,transparent_20%,white)]"></div>
      </div>
    </div>
  )
}

export default PortfolioTitle