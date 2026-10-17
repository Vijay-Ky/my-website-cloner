import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Best Eye Hospital in Bangalore, Karnataka | Shekar Eye Hospital",
  description:
    "Shekar Eye Hospital in Bangalore, Jayanagar / J.P. Nagar offering comprehensive eye care services, robotic cataract surgery, LASIK, and experienced ophthalmologists.",
  keywords: [
    "eye hospital in bangalore",
    "best eye care hospital in Bangalore",
    "cataract surgery bangalore",
    "lasik surgery cost in bangalore",
    "shekar eye hospital",
    "ophthalmologist bangalore"
  ],
  icons: {
    icon: "/sites/shekareyehospital/01_clipart2478763-1.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
