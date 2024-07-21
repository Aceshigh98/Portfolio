'use client'
import React from 'react'

// Components
import { Button } from '../Home/BorderButton'

const ResumeButton = () => {
  
  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/Resume.pdf';
    link.download = '/Resume.pdf';
    link.click();
  }
  
  return (
    <div>
        <Button
            borderRadius="1rem"
            className="bg-slate-900/[0.8] border border-slate-800 backdrop-blur-xl text-white dark:text-white dark:bg-slate-900 flex items-center justify-center w-full h-full text-sm antialiased"
            borderClassName="h-20 w-20 opacity-[0.8] bg-[radial-gradient(var(--primary)_40%,transparent_60%)]"
            containerClassName="bg-transparent relative text-lg h-[65px] w-60 p-[2px] overflow-hidden mt-4"
            onClick={handleDownload}
          >
            Download Here
          </Button>
    </div>
  )
}

export default ResumeButton