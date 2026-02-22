import AnnouncementBar from "@/components/AnnouncementBar";
import Hero from "@/components/Hero";
import Stats from "@/components/Stats";
import BookPreview from "@/components/BookPreview";
import Learnings from "@/components/Learnings";
import Bonuses from "@/components/Bonuses";
import Pricing from "@/components/Pricing";
import Author from "@/components/Author";
import Testimonials from "@/components/Testimonials";
import FinalCta from "@/components/FinalCta";
import Guarantee from "@/components/Guarantee";
import FinalDark from "@/components/FinalDark";
import Footer from "@/components/Footer";
import StickyCtaClient from "@/components/StickyCtaClient";

export default function Home() {
  return (
    <>
      <AnnouncementBar />
      <main>
        <Hero />
        <Stats />
        <BookPreview />
        <Learnings />
        <Bonuses />
        <Pricing />
        <Author />
        <Testimonials />
        <FinalCta />
        <Guarantee />
        <FinalDark />
      </main>
      <Footer />
      <StickyCtaClient />
    </>
  );
}
