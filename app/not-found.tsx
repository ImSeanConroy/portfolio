import Link from "next/link";

export default function NotFoundPage() {
  return (
    <main className="container relative mx-auto overflow-hidden px-4 md:px-16 font-sans">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-white">
        <div className="flex flex-col gap-2 justify-center w-full h-screen pb-14">
          <h1 className="text-2xl font-bold">404 — Page not found</h1>
          <p className="max-w-md text-pretty font-mono text-sm leading-relaxed antialiased text-foreground/80 mb-2">
            The page you&#39;re looking for doesn&#39;t seem to exist. It might
            have been moved, deleted, or never existed in the first place.
          </p>

          <button className="h-8 w-28 border border-input bg-background hover:bg-zinc-100 hover:text-accent-foreground inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
            <Link href="/">Return Home</Link>
          </button>
        </div>
      </section>
    </main>
  );
}
