"use client";
import { TypewriterEffectSmooth } from "./TextGenerateEffect";
export function NavTitle() {
  const words = [
    {
      text: "Code",
    },
    {
      text: "By",
    },
    {
      text: "Brannon.",
      className: "text-primary dark:text-primary",
    },
  ];
return (
    <div className="fixed left-0 top-0 ml-[50px] items-center justify-center w-fit z-30">
        <TypewriterEffectSmooth
            words={words}
            className="text-2xl lg:text-lg md:text-sm dark:text-white text-black font-bold"
        />
    </div>
);
}
