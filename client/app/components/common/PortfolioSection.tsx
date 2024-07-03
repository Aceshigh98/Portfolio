import React from 'react';

// Components
import PortfolioTitle from '../ui/Portfolio/PortfolioTitle';
import Card from '../ui/Portfolio/Card';
import PortfolioModel from '../ui/Portfolio/PortfolioModel';
import { MdConstruction } from "react-icons/md";

const PortfolioSection = ({ id }: { id: string }) => {
  // Card Object
  const obj = {
    card1: {
      title: 'Dashboard',
      description: 'This is a Dashboard that displays real time data of Bitcoin using a public REST-API that I built.',
      image: '/dashboard.png', 
      icon: null,
      link: 'https://www.aceshighbitcoin.com',
      github: 'https://github.com/Aceshigh98/Bitcoin-Dashboard'
    },
    card2: {
      title: 'Hashview',
      description: 'This application allows you to monitor Bitcoin mining hardware using Luxor\'s API. I have created a dummy account for you to test the application. Username: "demo" Password: "demo1234"',
      image: '/hashview.png',  
      icon: null,
      link: 'https://www.hash-view.com',
      github: 'https://github.com/Aceshigh98/Hashview'
    },
    card3: {
      title: 'Workout Application',
      description: 'This Application is currently under development! ',
      icon: <MdConstruction className='h-[50%] w-full'/>,  
      image: '',
      link: '',
      github: ''
    },
    card4: {
      title: 'Ecommerce Site',
      description: 'This Application will be under development soon. Stay tuned!',
      image: '',
      icon: <MdConstruction className='h-[50%] w-full'/>, 
      link: '',
      github: ''
    }
  };

  return (
    <section id={id} className="h-fit pt-40 lg:pt-20">
      <PortfolioModel />
      <PortfolioTitle title="My Projects" />
      <div className="grid grid-cols-2 gap-[40px] justify-items-center pb-60 pl-40 pr-40 lg:grid-cols-1 lg:gap-10 lg:pb-20 lg:pl-10 lg:pr-10">
        {Object.values(obj).map((card, key) => {
          return (
            <Card 
              key={key} 
              title={card.title} 
              description={card.description} 
              icon={card.icon}
              image={card.image} 
              link={card.link} 
              github={card.github} 
            />
          );
        })}
      </div>
    </section>
  );
};

export default PortfolioSection;
