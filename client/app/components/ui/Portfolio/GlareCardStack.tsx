"use client";

import { GlareCard } from "./GlareCard";

function GlareCardStack() {
    return (
        <div className="grid grid-cols-2 gap-20 mx-auto mt-10">
            <GlareCard className="flex flex-col items-center justify-end py-8 px-6">
                <img
                    className="h-[50%] w-fit absolute object-cover"
                    src="/Capture.png"
                />
                <p className="font-bold text-white text-lg z-10">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4 z-10">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-center justify-center">
                <img
                    className="h-fit w-fit absolute"
                    src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                />
            </GlareCard>
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <p className="font-bold text-white text-lg">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
            </GlareCard>
            <GlareCard className="flex flex-col items-start justify-end py-8 px-6">
                <p className="font-bold text-white text-lg">The greatest trick</p>
                <p className="font-normal text-base text-neutral-200 mt-4">
                    The greatest trick the devil ever pulled was to convince the world
                    that he didn&apos;t exist.
                </p>
            </GlareCard>
        </div>
    );
}

export default GlareCardStack;
