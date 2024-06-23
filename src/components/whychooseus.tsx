
"use client";
import React from "react";
import { StickyScroll } from "./ui/sticky-scroll-reveal";

const musicSchoolContent = [
   {
       title: 'Discover Your Unique Musical Voice',
       description:
           'Begin your unique musical adventure with us. Our personalized lessons cater to your specific needs, fostering remarkable growth and creativity. At our music school, your dreams align with our dedicated support, crafting a harmonious journey to musical mastery.',
   },
   {
       title: 'Personalized Path to Music Excellence',
       description:
           'Start your tailored musical journey here. Our customized instruction meets your individual needs, promoting exceptional development and creativity. At our music school, your goals meet our unwavering support, paving a unique path to music excellence.',
   },
   {
       title: 'Your Musical Journey, Perfectly Tailored',
       description:
           'Embark on a music journey designed just for you. Our specialized instruction adapts to your personal requirements, encouraging unmatched growth and creativity. At our music school, your aspirations are met with our committed support, creating a seamless path to mastery.',
   },
   {
       title: 'Live Feedback & Real-Time Engagement',
       description:
           'Dive into an interactive learning environment where feedback is instantaneous, mirroring real-time adjustments in a collaborative setting. This method boosts your understanding and mastery of musical concepts and performance techniques.',
   },
   {
       title: 'Innovative Music Curriculum',
       description:
           'Our curriculum is constantly refreshed to incorporate the latest trends and technologies in music education, ensuring you always learn with the most current and effective techniques. Say farewell to outdated materials and embrace an education that evolves with the industry.',
   },
   {
       title: 'Endless Learning Possibilities',
       description:
           'With our vast resource library and diverse course offerings, there’s always something new to discover. Our platform offers continuous growth opportunities, ensuring your musical abilities are in a constant state of advancement.',
   },
];


function WhyChooseUs() {
  return (
    <div className="text-white ">
         <h1 className="text-center text-5xl mb-5 font-light">WHY CHOOSE US ? 🤔</h1>
        <StickyScroll content={musicSchoolContent} />
    </div>
  )
}

export default WhyChooseUs