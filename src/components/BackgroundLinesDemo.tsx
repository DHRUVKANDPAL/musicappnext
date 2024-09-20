import React from "react";
import { BackgroundLines } from "@/components/ui/background-lines";
import { TextHoverEffect } from "./ui/text-hover-effect";
import { Button } from "./ui/moving-border";
import { FlipWords } from "./ui/flip-words";
import { Cover } from "./ui/Cover";
import Image from "next/image";

export function BackgroundLinesDemo() {
  const words = [
    "Why so serious?",
    "I used to think that my life was a tragedy, but now I realize, it's a comedy.",
    "The worst part of having a mental illness is people expect you to behave as if you don’t.",
    "Introduce a little anarchy, upset the established order, and everything becomes chaos.",
    "It's not about the money, it's about sending a message. Everything burns!",
    "I believe whatever doesn’t kill you simply makes you... stranger.",
    "You see, in their last moments, people show you who they really are.",
    "All it takes is one bad day to reduce the sanest man alive to lunacy.",
  ];

  return (
    <BackgroundLines className="flex items-center justify-center w-full bg-zinc-950 flex-col px-4  bg-opacity-30">
      
      <div className="h-[20rem] flex items-center justify-center text-center">
        <TextHoverEffect text="JOKER" />
        <Cover>
        <Image
          src="https://i.ibb.co/n8CjzK9/joker.png"
          width={420}
          height={420}
          alt="Picture of the author"
        ></Image>
      </Cover>
      </div>
      
      <div className="w-5/6  flex flex-col justify-center items-center mx-6 text-center">
        <div className="font-extrabold flex justify-center items-center text-center text-2xl sm:text-7xl uppercase z-10 text-neutral-100">
          <FlipWords words={words} />
        </div>
      </div>
    </BackgroundLines>
  );
}
