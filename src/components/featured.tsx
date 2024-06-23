"use client";
import courseData from "../data/music-courses.json";
import { BackgroundGradient } from "./ui/background-gradient";
interface Courses {
  id: Number;
  title: String;
  slug: String;
  description: String;
  price: Number;
  instructor: String;
  isFeatured: Boolean;
  image: String;
}
const Featured = () => {
  const featuredData = courseData?.courses?.filter(
    (course: Courses) => course?.isFeatured
  );

  return (
    <div className="w-full bg-neutral-900 pb-28 pt-0 flex flex-col justify-center items-center overflow-hidden">
      <h1 className="text-4xl font-light underline underline-offset-8 uppercase text-white pt-10 pb-5">
        {" "}
        Featured Section{" "}
      </h1>
      <h1 className="text-6xl font-extrabold text-white pb-10 mx-auto text-center">
        Learn from the best
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 	gap-4 lg:mx-44 md:mx-32 mx-12 h-full">
        {featuredData.map((course: Courses) => {
          return (
            <div key={course?.id.toString()} className="h-full">
              <BackgroundGradient className="rounded-[22px] h-full w-full p-4 sm:p-10 bg-white dark:bg-zinc-900">
                <p className="text-base sm:text-xl text-black  mb-2 dark:text-neutral-200">
                  {course.title}
                </p>

                <p className="text-sm text-neutral-600 dark:text-neutral-400">
                  {course.description}
                </p>
              </BackgroundGradient>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Featured;
