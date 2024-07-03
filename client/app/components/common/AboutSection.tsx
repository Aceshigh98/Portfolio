import React from 'react'

//Components
import ResumeButton from '../ui/About/ResumeButton'
import {FaGithub, FaLinkedin} from 'react-icons/fa'

const AboutSection = ({id}: {id:string}) => {
return (
    <section id={id} className=' h-fit flex flex-col gap-10 text-center justify-center justify-items-center pt-40'>
        <h1>Who Am I?</h1>
        <p className='text-primary w-[50%] mx-auto text-wrap text-2xl font-bold '> I am a Software Engineer and full-stack developer who has been working with code for 6+ years. I have experience with frontend technologies, NoSQL Databases, and backend services.</p>
        <h1>Need My Resume?</h1>
        <div className='text-white dark:text-black flex items-center gap-10 mx-auto'>
          <a href="https://github.com/Aceshigh98" target="_blank" rel="noopener noreferrer">
            <FaGithub cursor="pointer" className='h-10 w-10 hover:text-primary'/>
          </a>
          <a href="https://www.linkedin.com/in/brannon-cotherman" target="_blank" rel="noopener noreferrer">
            <FaLinkedin cursor="pointer" className='h-10 w-10 hover:text-primary'/>
          </a>
        </div>
        <ResumeButton />
        <div className='grid grid-cols-2 gap-10 mt-20 ml-5 mr-5'>
            <div className='border rounded-lg p-4 dark:bg-slate-100 dark:shadow-lg'>
                <h1>Business Oriented</h1>
                <p className='text-primary w-[50%] lg:w-fit mx-auto text-wrap text-2xl font-bold lg:text-sm'> Building web applications and data interfaces that allow businessses to view and streamline business processes to enhance productivity. </p>
            </div>
            <div className='border rounded-lg p-4 dark:bg-slate-100 dark:shadow-lg'>
                <h1>Software built to perform</h1>
                <p className='text-primary w-[50%] lg:w-fit mx-auto text-wrap text-2xl font-bold lg:text-sm'> Software that is built to perform and follow best practices to enhance SEO and a clean user experience.</p>
            </div>
            <div className='border rounded-lg p-4 dark:bg-slate-100 dark:shadow-lg'>
                <h1>Custom Software</h1>
                <p className='text-primary w-[50%] lg:w-fit mx-auto text-wrap text-2xl font-bold lg:text-sm'> Tailored solutions that include building out Saas. </p>
            </div>
            <div className='border rounded-lg p-4 dark:bg-slate-100 dark:shadow-lg'>
                <h1>User-Friendly Interfaces</h1>
                <p className='text-primary w-[50%] lg:w-fit mx-auto text-wrap text-2xl font-bold lg:text-sm'> Informative and intuitive data dashboards that allow users to forsee actionable insights. </p>
            </div>
        </div> 
    </section>
)
}

export default AboutSection