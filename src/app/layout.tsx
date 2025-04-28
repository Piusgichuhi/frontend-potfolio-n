import type { Metadata } from "next";
import {Inter, Calistoga} from "next/font/google";
import "./globals.css";
import {twMerge} from "tailwind-merge";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/app-sidebar";
import Footer from "@/sections/Footer";


const inter = Inter ({ subsets: ["latin"], variable: "--font-sans"});
const calistoga = Calistoga ({ 
  subsets: ["latin"],
   variable: "--font-serif",
  weight: ["400"]});

export const metadata: Metadata = {
  title: "My Portfolio",
  description: "Created with the help of Frontend Tribe",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">

      <body className={twMerge(inter.variable, calistoga.variable, "bg-gray-900 text-white antialiased font-sans")}>
      <SidebarProvider>
        <AppSidebar />
        <div className="mx-auto">
        <main className="P-4 mx-auto">
          <SidebarTrigger />
          {children}
        </main>
      <Footer/>
        </div>


      </SidebarProvider>


        </body>
    </html>
  );
}
