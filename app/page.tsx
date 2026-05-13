import CurrentlyStrip from "@/components/sections/home/CurrentlyStrip";
import FeaturedNote from "@/components/sections/home/FeaturedNote";
import FourPillars from "@/components/sections/home/FourPillars";
import Hero from "@/components/sections/home/Hero";
import NewsletterSection from "@/components/sections/home/NewsletterSection";
import PhilosophyBand from "@/components/sections/home/PhilosophyBand";

export default function HomePage() {
  return (
    <>
      <Hero />
      <CurrentlyStrip />
      <PhilosophyBand />
      <FourPillars />
      <FeaturedNote />
      <NewsletterSection />
    </>
  );
}
