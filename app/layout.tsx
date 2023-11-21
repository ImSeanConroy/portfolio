import "./globals.css";
import { Roboto } from "next/font/google";

import { Navbar, Footer } from "@/components";
import { ThemeProvider } from "@/components/provider/theme-provider";

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
      <body className={roboto.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem={false}
          storageKey="imseanconroy-theme"
        >
          <div className="text-gray-900 dark:text-neutral-100 dark:bg-neutral-900 ">
            <div className="mx-auto max-w-screen-xl">
              <Navbar />
              <main>{children}</main>
              <Footer />
            </div>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
