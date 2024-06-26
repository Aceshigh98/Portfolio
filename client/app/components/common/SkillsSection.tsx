import React from 'react';

// Components
import TextGenerateEffect from '../ui/Skills/TextGenerateEffect';
import SkillCard from '../ui/Skills/SkillCard';
import { RiNextjsFill} from 'react-icons/ri';
import { FaNode, FaDocker, FaReact, FaJava, FaHtml5} from 'react-icons/fa';
import { SiMongodb, SiNginx, SiTailwindcss, SiTypescript, SiExpress, SiJavascript } from 'react-icons/si';

const SkillsSection = ({ id }: { id: string }) => {
  const words =
    'I am a Full Stack Developer with a passion for creating beautiful and functional web applications. I have experience with a variety of technologies and frameworks, including Next.js, Node.js, Express, Docker, Nginx, and MongoDB. I am always eager to learn new things and improve my skills.';

  const icons = [
    { icon: <SiTypescript />, label: 'TypeScript', color: 'text-blue-500'},
    { icon: <SiJavascript />, label: 'JavaScript', color: 'text-yellow-500'},
    { icon: <FaJava />, label: 'Java', color: 'text-red-500'},
    { icon: <FaHtml5 />, label: 'HTML5', color: 'text-yellow-500'},
    { icon: <RiNextjsFill />, label: 'Next.js', color: 'text-white'},
    { icon: <FaNode />, label: 'Node.js', color: 'text-green-500'},
    { icon: <FaDocker />, label: 'Docker', color: 'text-blue-500'},
    { icon: <FaReact />, label: 'React', color: 'text-blue-500'},
    { icon: <SiMongodb />, label: 'MongoDB', color: 'text-green-500'},
    { icon: <SiNginx />, label: 'Nginx', color: 'text-emerald-500'},
    { icon: <SiTailwindcss />, label: 'Tailwind CSS', color: 'text-cyan-500'},
    { icon: <SiExpress />, label: 'Express', color: 'text-green-500'},
    
  ];

  return (
    <section id={id} className="h-fit flex flex-col justify-center text-center mx-auto pt-40">
      <h1 className="text-primary">Skills and Technologies</h1>
      <div className="ml-[20%] mr-[20%]">
        <TextGenerateEffect words={words} />
      </div>
      <div className="grid grid-cols-4 md:grid-cols-2 gap-4">
        {icons.map((item, index) => (
          <SkillCard key={index} icon={item.icon} label={item.label} color={item.color} />
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
