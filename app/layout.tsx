import "./globals.css";
import { Roboto } from "next/font/google";

import { Navbar, Footer } from "@/components"

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={
          "text-gray-900 dark:text-neutral-100 dark:bg-neutral-900 " +
          roboto.className
        }
      >
        <div className="mx-auto max-w-screen-xl">
          <Navbar />
          <main>{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
