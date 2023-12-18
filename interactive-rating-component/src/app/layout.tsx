import type { Metadata } from "next";
import { Overpass } from "next/font/google";
import "./globals.css";

const overpass = Overpass({ subsets: ["latin"], weight: ["400", "700"] });

export const metadata: Metadata = {
  title: "Interactive rating component",
  description:
    "This is a nice, small project to practice handling user interactions and updating the DOM. Perfect for anyone who has learned the basics of JavaScript!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={overpass.className}>{children}</body>
    </html>
  );
}
