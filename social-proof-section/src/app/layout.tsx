import type { Metadata } from "next";
import { League_Spartan } from "next/font/google";
import "./globals.css";

const league = League_Spartan({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Social proof section",
  description:
    "This project will test your layout skills. If you're starting to get confident with Flexbox or Grid, this will provide a nice challenge!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={league.className}>{children}</body>
    </html>
  );
}
