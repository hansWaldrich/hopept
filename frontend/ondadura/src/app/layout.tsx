import type { Metadata } from "next";
import { Raleway } from "next/font/google";
import "./globals.css";

const ralewaySans = Raleway({
  variable: "--font-raleway-sans",
  subsets: ["latin"],
});

const ralewayMono = Raleway({
  variable: "--font-raleway-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Onda Dura Europa",
  description: "Este é o site principal do projeto Onda Dura Europa.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${ralewaySans.variable} ${ralewayMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
