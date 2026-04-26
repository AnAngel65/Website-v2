import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Operational Dashboard",
  description: "Operational Dashboard – Command Center",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col text-text" style={{
        backgroundImage: "url('/assets/pexels-ian-panelo-20737557.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}>
        <div className="absolute inset-0 bg-black/60 z-0" />
        <div className="relative z-10 flex-1">
          {children}
        </div>
      </body>
    </html>
  );
}
