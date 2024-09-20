import Hero from "@/components/herosection";
import Image from "next/image";
import Featured from "@/components/featured";
import WhyChooseUs from "@/components/whychooseus";
import Testimonial from "@/components/testimonial";
import { GlobePage } from "@/components/globepage";
import { BackgroundLinesDemo } from "@/components/BackgroundLinesDemo";
import { BentoGridThirdDemo } from "@/components/BentoGrid";
export default function Home() {
  return (
    <>
      <main className="min-h-screen bg-black/[0.92] antialiased bg-grid-white/[0.02]">
        {/* <Hero></Hero>
        <Featured></Featured>
        <WhyChooseUs/>
        <Testimonial/> */}
        {/* <Hero></Hero> */}
        <BackgroundLinesDemo></BackgroundLinesDemo>
        <div className="p-10">
          <BentoGridThirdDemo></BentoGridThirdDemo>
        </div>
        <Testimonial></Testimonial>
      </main>
    </>
  );
}
