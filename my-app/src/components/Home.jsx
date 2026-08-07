import { Footer } from "./public/Footer/Footer";
import { CTABanner } from "./public/HomeUI/CTABanner";
import { Features } from "./public/HomeUI/Features";
import { Hero } from "./public/HomeUI/Hero";
import { HowItWorks } from "./public/HomeUI/HowItWorks";
import { Navbar } from "./public/Navbar/Navbar";

export default function Home() {
  return (
    <>
      {/* Navbar */}
      <Navbar />
      {/* hero component  */}
      <Hero />
      {/* features component  */}
      <Features />
      {/* CTA Banner  */}
      <CTABanner />
      {/* How it works component  */}
      {/* <HowItWorks /> */}
      {/* Footer component  */}
      <Footer />
    </>
  );
}
