import { Plus_Jakarta_Sans } from "next/font/google";
const plus_jakarta_sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});
import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/app/_components/navbar/Navbar";
import Footer from "@/app/_components/Footer/Footer";

export const metadata: Metadata = {
  title: "MORENT | Car Rental Agency",
  description:
    "Experience the best in car rentals with MORENT. Explore our wide range of vehicles, enjoy unbeatable rates, and exceptional service for all your rental needs.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${plus_jakarta_sans.className} bg-primary-50 antialiased`}
      >
        <nav>
          <Navbar />
        </nav>
        {children}
        <Footer />
      </body>
    </html>
  );
}
