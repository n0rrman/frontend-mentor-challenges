import type { Metadata } from "next";
import { Josefin_Sans } from "next/font/google";
import "./globals.css";

const josefin = Josefin_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "600"],
});

export const metadata: Metadata = {
  title: "Base Apparel coming soon page",
  description:
    "This layout looks simple enough, but there are some interesting details to it that will test your CSS skills. You'll also get to practice basic form validation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={josefin.className}>{children}</body>
    </html>
  );
}
