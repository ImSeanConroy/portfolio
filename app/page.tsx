import { Metadata } from "next";

export const metadata: Metadata = {
  title: `Sean Conroy - Portfolio`,
};

export default function Home() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 font-sans">
      Hello, World!
    </main>
  );
}
