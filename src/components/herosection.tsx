import { Spotlight } from "./ui/Spotlight";
import { FlipWords } from "./ui/flip-words";
import { Button } from "./ui/moving-border";

export default function Hero() {
   const words=["rhythm","timing","scales"]
  return (
    <>
      <div className="min-h-screen md:min-h-[47rem] flex justify-center items-center   py-10 pt-16 text-center">
        <Spotlight
          className="-top-10 left-0 md:left-60 md:-top-20"
          fill="white"
        />
        <div className="w-full h-full flex flex-col justify-center items-center mx-6 ">
          <h1 className="font-bold text-5xl sm:text-7xl uppercase z-10 text-neutral-100">
            Master the art of <FlipWords words={words} /> 
          </h1>
          <p className="mt-4 text-base sm:text-xl max-w-[30rem] text-neutral-200">
            Dive into our comprehensive music courses and transform your musical
            journey today. Whether you&apos;re a beginner or looking to refine your
            skills, join us to unlock your true potential.
          </p>
          <div className="mt-8">
          <Button
            borderRadius="1.75rem"
            className="bg-neutral-200 border-4 dark:bg-zinc-800 text-black dark:text-white border-zinc-800 dark:border-zinc-800 " 
          >
            Explore Courses
          </Button>
          </div>
        </div>
      </div>
    </>
  );
}
