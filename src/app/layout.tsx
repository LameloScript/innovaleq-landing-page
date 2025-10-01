import type { Metadata } from "next";
import { Geist, Geist_Mono, Bebas_Neue, Poppins } from "next/font/google";
import "./globals.css";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { footerData } from "../data/footer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "InnovaleQ",
  description: "InnovaleQ – Votre partenaire pour des solutions innovantes et performantes.",
};


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${bebasNeue.variable} ${poppins.variable} antialiased bg-black`}
      >
        <Header />
        <main>
          {children}
        </main>
      <Footer logo={footerData.logo} contact={footerData.contact} description={footerData.description} sections={footerData.sections} bottomLinks={footerData.bottomLinks} />
      </body>
    </html>
  );
}
