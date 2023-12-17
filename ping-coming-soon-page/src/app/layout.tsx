import type { Metadata } from "next";
import { Libre_Franklin } from "next/font/google";
import "./globals.css";

const libre = Libre_Franklin({
  subsets: ["latin"],
  weight: ["300", "400", "700"],
});

export const metadata: Metadata = {
  title: "Ping single column coming soon page",
  description:
    "This challenge is great for beginners and offers a chance to practice basic client-side form validation.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={libre.className}>{children}</body>
    </html>
  );
}
