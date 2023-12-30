import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], weight: ["500", "700"] });

export const metadata: Metadata = {
  title: "Article preview component",
  description:
    "Practice your layout skills with this article preview component. There's lots of fun to be had playing around with animations for the sharing icons as well.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
