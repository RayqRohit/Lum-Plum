import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lum-Plum | I design & build products that inspire",
  description: "Personal portfolio inspired by Axel & Lum-Plum",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`dark ${inter.variable} h-full overflow-hidden`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Style+Script&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-sans bg-[#141414] text-[#fafafa] h-screen w-screen overflow-hidden antialiased selection:bg-white/20 selection:text-white">
        {children}
      </body>
    </html>
  );
}
