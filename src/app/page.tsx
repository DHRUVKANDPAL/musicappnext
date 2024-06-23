import Hero from "@/components/herosection";
import Image from "next/image";
import Featured from "@/components/featured";
import WhyChooseUs from "@/components/whychooseus";
import Testimonial from "@/components/testimonial";
export default function Home() {
  return (
    <>
    <main className="min-h-screen bg-black/[0.92] antialiased bg-grid-white/[0.02]">
        <Hero></Hero>
        <Featured></Featured>
        <WhyChooseUs/>
        <Testimonial/>

    </main>
    </>
  );
}
