import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Showcase from "./components/showcase";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="relative mx-auto scroll-my-12 overflow-auto mb-2 py-3 font-sans">
      <Navigation />
      <Hero />
      <Showcase />
      <About />
      <Footer />
    </main>
  );
}
