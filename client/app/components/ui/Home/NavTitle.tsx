"use client";

import { TypewriterEffectSmooth } from "./TextGenerateEffect";

export function NavTitle() {
  const words = [
    {
      text: "Code",
      className: "text-white",
    },
    {
      text: "By",
      className: "text-white",
    },
    {
      text: "Brannon.",
      className: "text-primary dark:text-primary",
    },
  ];
return (
    <div className="absolute left-0 top-0 pl-[50px] items-center justify-center w-fit z-30">
        <TypewriterEffectSmooth
            words={words}
            className="text-2xl lg:text-lg md:text-sm text-white dark:text-white font-bold"
        />
    </div>
);
}
