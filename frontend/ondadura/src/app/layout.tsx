import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";
import Head from "next/head";
import Header from "./components/Header";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

const ralewayMono = Raleway({
  variable: "--font-raleway-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hope Europa",
  description: "Este é o site principal do projeto Hope Europa.",
};

export default function RootLayout({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ralewaySans.variable} ${ralewayMono.variable} antialiased`}>
        <Head><title>Onda Dura</title></Head>
        <Header />
        {children}
      </body>
    </html>
  );
}
