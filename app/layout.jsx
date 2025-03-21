import { JetBrains_Mono } from "next/font/google";
import "./globals.css";

// components
import Header from "@/components/Header";
import PageTransition from "@/components/PageTransition";
import StairTransition from "@/components/StairTransition";


const jetbrains_mono = JetBrains_Mono({
  variable: "--font-jetbrain_mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${jetbrains_mono.variable} ${jetbrains_mono.variable} antialiased`}>

          <Header/>
          <StairTransition />
          <PageTransition>{children}</PageTransition>
        
      </body>
    </html>
  );
}
