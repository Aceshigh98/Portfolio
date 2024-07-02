import React from 'react';

// Components
import { CardBody, CardContainer, CardItem } from './3DCardEffect';

type CardProps = {
  icon: React.ReactNode;
  label: string;
  color: string;
};

const SkillCard = ({ icon, label, color }: CardProps) => {
  return (
    <CardContainer className=" relative h-full w-full">
      <CardBody className=" relative group/card dark:hover:shadow-2xl dark:bg-slate-900 border-white/[0.2] w-[250px] h-auto rounded-xl p-8 border">
        <CardItem translateZ="100" className={`w-full h-full flex justify-center items-center text-8xl ${color}`}>
          {icon}
        </CardItem>
        <CardItem
          translateZ="60"
          className="relative group/card dark:hover:shadow-2xl  w-auto h-auto rounded-xl font-bold text-3xl lg:text-lg mt-5 text-center text-white dark:text-white"
        >
          {label}
        </CardItem>
      </CardBody>
    </CardContainer>
  );
};

export default SkillCard;



