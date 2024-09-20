import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const jokerTestimonials = [
  {
    quote: "The chaos of the music school taught me that life is a joke, and I learned to embrace the punchlines.",
    name: "Arthur Fleck",
    title: "Joker Enthusiast",
  },
  {
    quote: "In a world full of masks, this school helped me find my true voice amidst the laughter and madness.",
    name: "Harley Quinn",
    title: "Performance Artist",
  },
  {
    quote: "The instructors here are like the best comedians—they know how to bring out the wild side in you.",
    name: "Jack Napier",
    title: "Musical Jester",
  },
  {
    quote: "My time at this school was like a grand performance—unexpected, thrilling, and always entertaining!",
    name: "Bane",
    title: "Dramatic Performer",
  },
  {
    quote: "Learning to create chaos through music is an art form in itself. This school opened my eyes to that freedom!",
    name: "Riddler",
    title: "Creative Mind",
  },
];

const Testimonial = () => {
  return (
    <div className="h-[35rem] w-full dark:bg-black bg-black bg-grid-white/[0.2] relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] w-full"></div>
      <p className="text-4xl sm:text-7xl text-center font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-500 py-8 px-4">
        Hear Our Laughter: Voices of the Unconventional
      </p>
      <InfiniteMovingCards
        items={jokerTestimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Testimonial;
