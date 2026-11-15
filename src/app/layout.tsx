import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";

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
    <html lang="en" className={`${inter.variable} min-h-screen dark`}>
      <body className="font-sans min-h-screen w-full antialiased bg-[#fdfdfc] dark:bg-[#141414]">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
