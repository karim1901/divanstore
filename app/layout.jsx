import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "./_components/navbar";
import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "DivanStore",
  manifest: '/manifest.json',
};

export default function RootLayout({ children }) {


  return (
    <html lang="en" dir="rtl">
      <head>
        <link rel="icon" type="image/svg+xml" href="/icons/asc192.png" />

        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"  />
        <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400..700&family=Noto+Sans+Arabic:wght@100..900&display=swap" rel="stylesheet" />
        
      </head>
      <body className={`${inter.className} select-none`  }>
        <Navbar/>
        {children}
        <Toaster/>
      </body>
    </html>
  );
}
