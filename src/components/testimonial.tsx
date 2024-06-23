import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

const musicSchoolTestimonials = [
   {
     quote:
       'Joining the music school transformed my understanding of music and helped me to truly discover my own sound. The instructors are world-class!',
     name: 'Alex Johnson',
     title: 'Guitar Student',
   },
   {
     quote:
       "The community and support at this school are unmatched. I've grown not just as a pianist, but also as a performer, thanks to their comprehensive approach.",
     name: 'Samantha Lee',
     title: 'Piano Student',
   },
   {
     quote:
       "This school offered me the tools and confidence to take my singing to the next level. I'm endlessly grateful for the personalized coaching.",
     name: 'Michael Chen',
     title: 'Vocal Student',
   },
   {
     quote:
       'As a violinist, finding the right mentor can be challenging, but this school matched me with a teacher who truly understands my goals and challenges.',
     name: 'Emily Taylor',
     title: 'Violin Student',
   },
   {
     quote:
       'The production courses here opened my eyes to the intricacies of music production. Highly recommend for any aspiring producers!',
     name: 'Chris Morales',
     title: 'Music Production Student',
   },
 ];



const Testimonial = () => {
  return (
    <div className="h-[35rem] w-full dark:bg-black bg-black  bg-grid-white/[0.2]  relative flex flex-col items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <p className="text-4xl  sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent  bg-gradient-to-b from-neutral-200 to-neutral-500 py-8">
        Hear our Harmony: Voice of Success
      </p>
      <InfiniteMovingCards
        items={musicSchoolTestimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
};

export default Testimonial;
