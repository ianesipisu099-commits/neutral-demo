import "./globals.css";
import { Inter } from "next/font/google";
import SiteHeader from "../components/siteheader";
import SiteFooter from "../components/sitefooter";
import WhatsAppFloat from "../components/whatsapp-float";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen bg-white text-gray-900 antialiased`}>
        <SiteHeader />
        <main className="min-h-[70vh]">{children}</main>
        <SiteFooter />
        <WhatsAppFloat />
      </body>
    </html>
  );
}