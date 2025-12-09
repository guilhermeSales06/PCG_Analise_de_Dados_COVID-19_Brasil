import type { Metadata } from "next";
import {  Poppins, Afacad } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";


const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

const afacad = Afacad({
  variable: "--font-afacad",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "PCG — Análise da Educação na Baixada Santista durante a Pandemia de COVID-19",
  description:
    "Esta é uma análise abrangente dos dados relacionados à pandemia de COVID-19 no Brasil sobre a educação na baixada santista.",
  icons: {
    icon: [
      { url: '/favicon.png' },
      { url: '/favicon.png', sizes: '32x32', type: 'image/png' },
    ],
    shortcut: '/favicon.png',
    apple: '/favicon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className={` ${poppins.variable} ${afacad.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}
