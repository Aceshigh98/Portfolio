"use client";

import React from "react";

// Components
import { FaGithub } from "react-icons/fa";
import { CgWebsite } from "react-icons/cg";

type CardProps = {
    title: string;
    description: string;
    icon: React.ReactNode;
    image: string;
    link: string;
    github: string;
};

function Card({ title, description, image, link, github, icon }: CardProps) {
    return (
        <div className="flex flex-col h-full w-full p-10 border border-primary backdrop-filter backdrop-blur-lg bg-opacity-10 bg-slate-100 rounded-2xl shadow-md mx-auto justify-center text-center z-20">
            <div className="flex h-fit w-full mb-4 justify-center">
                
                {icon ? (
                    <div className="flex items-center justify-center h-[100%] w-[80%] rounded-full mr-2">
                        {icon}
                    </div>
                ):<img
                    src={image}
                    alt={title}
                    className="rounded-lg object-cover h-[100%] w-[80%] shadow-md"
                />
                }

            </div>
            <h3 className="text-4xl font-bold mb-2">{title}</h3>
            <p className="mb-4 text-lg">{description}</p>
            <div className="flex justify-center space-x-4">
                {link && (
                    <a href={link} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-[125px] bg-primary rounded-3xl hover:bg-white hover:text-primary">
                        <CgWebsite className="mr-2"/>
                        <strong>Visit</strong>
                    </a>
                )}
                {github && (
                    <a href={github} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center h-10 w-[125px] bg-primary rounded-3xl hover:bg-white hover:text-primary">
                        <FaGithub className="mr-2"/>
                        <strong>Github</strong>
                    </a>
                )}
            </div>
        </div>
    );
}

export default Card;

