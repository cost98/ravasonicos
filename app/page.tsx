
import Bio from "@/components/Bio";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Music from "@/components/Music";
import Tour from "@/components/Tour";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Bio />
      <Tour />
      <Music />
      <Contact />
      <Footer />
    </>
  );
}

