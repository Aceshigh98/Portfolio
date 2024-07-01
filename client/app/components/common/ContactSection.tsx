import React from 'react'

//Components
import LeftText from '../ui/Contact/LeftText'
import ContactForm from '../ui/Contact/ContactForm'

const ContactSection = ({id}: {id:string}) => {
  return (
    <section id={id} className='h-fit mb-[250px] grid grid-cols-2 lg:grid-cols-1'>
      <LeftText />
      <ContactForm />
    </section>
  )
}

export default ContactSection