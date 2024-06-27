import React from 'react'

//Components
import AboutModel from '../ui/About/AboutModel'
import ResumeButton from '../ui/About/ResumeButton'

const AboutSection = ({id}: {id:string}) => {
return (
    <section id={id} className=' h-fit flex flex-col gap-10 text-center justify-center justify-items-center pt-40'>
        <h1>WHO AM I?</h1>
        <p className='text-primary w-[50%] mx-auto text-wrap text-2xl font-bold '> I am a Software Engineer and full-stack developer who has been working with code for 6+ years. I have experience with frontend technologies, NoSQL Databases, and backend services.</p>
        <h1>Need My Resume?</h1>
        <ResumeButton />
        <div className='grid grid-cols-2 gap-10 mt-20 ml-5 mr-5'>
            <div className='border rounded-lg p-4'>
                <h1>Business Oriented</h1>
                <p className='text-primary w-[50%] lg:w-fit mx-auto text-wrap text-2xl font-bold lg:text-sm'> Building web applications and data interfaces that allow businessses to view and streamline business processes to enhance productivity. </p>
            </div>
            <div className='border rounded-lg p-4'>
                <h1>Software built to perform</h1>
                <p className='text-primary w-[50%] lg:w-fit mx-auto text-wrap text-2xl font-bold lg:text-sm'> Software that is built to perform and follow best practices to enhance SEO and a clean user experience.</p>
            </div>
            <div className='border rounded-lg p-4'>
                <h1>Custom Software</h1>
                <p className='text-primary w-[50%] lg:w-fit mx-auto text-wrap text-2xl font-bold lg:text-sm'> Tailored solutions that include building out Saas. </p>
            </div>
            <div className='border rounded-lg p-4'>
                <h1>User-Friendly Interfaces</h1>
                <p className='text-primary w-[50%] lg:w-fit mx-auto text-wrap text-2xl font-bold lg:text-sm'> Informative and intuitive data dashboards that allow users to forsee actionable insights. </p>
            </div>
        </div>
        <AboutModel />
    </section>
)
}

export default AboutSection