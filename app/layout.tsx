import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Rami Daood - Software Developer Portfolio",
  description: "Versatile and ambitious Information Systems student with strong foundations in software engineering, artificial intelligence, and mobile/web development.",
  keywords: ["Software Developer", "Full Stack Developer", "AI Engineer", "Web Development", "Mobile Development"],
  authors: [{ name: "Rami Daood" }],
  openGraph: {
    title: "Rami Daood - Software Developer Portfolio",
    description: "Versatile and ambitious Information Systems student with strong foundations in software engineering, artificial intelligence, and mobile/web development.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body className={inter.className} suppressHydrationWarning>{children}</body>
    </html>
  );
}
