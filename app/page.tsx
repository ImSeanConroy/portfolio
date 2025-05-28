import Header from "@/app/components/header";
import About from "@/app/components/about";
import Experience from "@/app/components/experience";
import Education from "@/app/components/education";
import Projects from "@/app/components/projects";

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 mb-12 md:p-16 font-sans">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white">
        <Header />

        <div className="space-y-10">
          <About />
          <Experience />
          <Education />
          <Projects />
        </div>

        {/* <p className="text-pretty font-mono text-xs leading-none pt-6 text-gray-500">
          * Note: An improved portfolio is currently under developemnt.
        </p> */}
      </section>
    </main>
  );
}
