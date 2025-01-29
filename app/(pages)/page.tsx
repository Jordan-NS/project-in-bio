import Image from "next/image";
import Hero from "../components/landing-page/hero";
import Header from "../components/landing-page/header";
import VideoExplanation from "../components/landing-page/VideoExplanation";
import Pricing from "../components/landing-page/Pricing";
import Faq from "../components/landing-page/Faq";

export default function Home() {
  return (
    <div className="max-w-7xl mx-auto">
      <Header />
      <Hero />
      <VideoExplanation />
      <Pricing />
      <Faq />
    </div>
  );
}
