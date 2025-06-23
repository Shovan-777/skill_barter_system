import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/component/Header";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Skill Bartering",
  description: "A platform for skill bartering",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning className="
         bg-white
         text-black
         dark:bg-gray-900
         dark:text-white
         transition-colors duration-300 min-h-screen">
      <body
        className={`
          ${geistSans.variable} ${geistMono.variable} antialiased
         
        `}
      >
        <Header />
        <div className=" bg-white text-black
         dark:bg-gray-900 dark:text-white
        transition-colors duration-300
         min-h-screen mt-32 px-4">
          {children}
        </div>
      </body>
    </html>
  );
}
