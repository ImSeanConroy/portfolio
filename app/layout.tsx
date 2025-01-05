import { Inter } from "next/font/google";
import { Metadata } from "next";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Junior Software Engineer at Cisco — Sean Conroy",
  description:
    "Junior Software Engineer at Cisco, Committed to designing and implementing robust, efficient, and scalable software solutions. Explore portfolio to learn more.",
  keywords: [
    "ImSeanConroy",
    "Software Engineer",
    "Portfolio",
    "Web Development",
    "Cisco",
  ],
  openGraph: {
    title: "Junior Software Engineer at Cisco — Sean Conroy",
    description:
      "Junior Software Engineer at Cisco, Committed to designing and implementing robust, efficient, and scalable software solutions. Explore portfolio to learn more.",
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
    title: "Junior Software Engineer at Cisco — Sean Conroy",
    description:
      "Junior Software Engineer at Cisco, Committed to designing and implementing robust, efficient, and scalable software solutions. Explore portfolio to learn more.",
    images: "https://www.imseanconroy.co.uk/socials.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.className}>
      <body>{children}</body>
    </html>
  );
}
