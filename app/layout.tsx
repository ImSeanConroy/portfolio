import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "./components/theme-provider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Software Engineer at Cisco — Sean Conroy",
  description:
    "Software Engineer at Cisco, Committed to designing and implementing robust, efficient, and scalable software solutions. Explore portfolio to learn more.",
  keywords: [
    "ImSeanConroy",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "Cisco",
  ],
  openGraph: {
    title: "Software Engineer at Cisco — Sean Conroy",
    description:
      "Software Engineer at Cisco, Committed to designing and implementing robust, efficient, and scalable software solutions. Explore portfolio to learn more.",
    url: "https://www.imseanconroy.co.uk",
    images: [
      {
        url: "https://www.imseanconroy.co.uk/socials.png",
        width: 1200,
        height: 630,
        alt: "Sean Conroy Portfolio Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Software Engineer at Cisco — Sean Conroy",
    description:
      "Software Engineer at Cisco, Committed to designing and implementing robust, efficient, and scalable software solutions. Explore portfolio to learn more.",
    images: "https://www.imseanconroy.co.uk/socials.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="bg-white dark:bg-zinc-900">
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
