import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Huddle landing page with a single introductory section",
  description:
    "A perfect challenge for beginners, this project will get you working with a two column layout.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
