import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Recipe page",
  description:
    "This challenge will help you focus on writing semantic HTML. Ensure you think through what HTML elements are most appropriate for each piece of content.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-eggshell">{children}</body>
    </html>
  );
}
