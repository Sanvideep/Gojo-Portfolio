import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import About from "@/components/About";
import Raechal from "@/components/Raechal";
import Experience from "@/components/Experience";
import Stack from "@/components/Stack";
import Projects from "@/components/Projects";
import Terminal from "@/components/Terminal";
import Anime from "@/components/Anime";
import Sports from "@/components/Sports";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Nav />
      <Hero />
      <Marquee />
      <About />
      <Raechal />
      <Experience />
      <Stack />
      <Projects />
      <Terminal />
      <Anime />
      <Sports />
      <Contact />
      <Footer />
    </main>
  );
}
