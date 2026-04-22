import type { Metadata } from "next";
import { Exo, } from "next/font/google";
import "./globals.css";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Offcanvas from "@/components/Offcanvas";
import ProvidersWrapper from "@/providers/ProvidersWrapper";
import HeaderStrip from "@/components/HeaderStrip";
import FooterStrip from "@/components/FooterStrip";

const exo = Exo({
  variable: "--font-exo",
  // fallback: ["sans-serif"],
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });


export const metadata: Metadata = {
  title: "FreshCart: The Ultimate Marketplace for Quality Products",
  description: "FreshCart is your one-stop destination for quality products. From fashion to electronics, we bring you the best brands at competitive prices with a seamless shopping experience.",
  icons:{
    icon: "/icon.png",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${exo.className}  h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        {<HeaderStrip />}
        <ProvidersWrapper>
          {<Navbar />}
          {<Offcanvas />}
        </ProvidersWrapper>
        {children}
        {<FooterStrip />}
        {<Footer />}
      </body>
    </html>
  );
}

