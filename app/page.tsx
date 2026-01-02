import Navigation from "./components/navigation";
import Hero from "./components/hero";
import Showcase from "./components/showcase";
import About from "./components/about";
import Footer from "./components/footer";

export default function Home() {
  return (
    <main className="relative mx-auto scroll-my-12 overflow-auto p-3 mb-2 font-sans">
      <Navigation />
      <Hero />
      <Showcase />
      <About />
      <div className="w-full h-px bg-zinc-200 dark:bg-zinc-800 my-6" />
      <Footer />
    </main>
  );
}
