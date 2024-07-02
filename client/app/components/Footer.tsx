import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className='h-fit border-t-2'>
      <div className='flex flex-row justify-between border-top p-8'>
        <div>
          <p className='text-center text-white dark:text-slate-900'>© 2024 Code By Brannon</p>
        </div>
        <div className='text-white dark:text-slate-900 flex items-center gap-10'>
          <a href="https://github.com/Aceshigh98" target="_blank" rel="noopener noreferrer">
            <FaGithub cursor="pointer" className='h-10 w-10'/>
          </a>
          <a href="https://www.linkedin.com/in/brannon-cotherman" target="_blank" rel="noopener noreferrer">
            <FaLinkedin cursor="pointer" className='h-10 w-10'/>
          </a>
        </div>
      </div>
    </footer>
  )
}

export default Footer;
