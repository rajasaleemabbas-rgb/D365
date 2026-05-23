import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "B2Cloud International | Enterprise ERP, AI & Managed IT Solutions",
  description:
    "B2Cloud International delivers enterprise-grade ERP implementation, AI workflow automation, managed IT services, and medical billing solutions. Microsoft Dynamics 365, QuickBooks, Salesforce specialists.",
  keywords:
    "Microsoft Dynamics 365, ERP implementation, AI automation, managed IT services, medical billing, digital transformation, Power BI, Salesforce",
  openGraph: {
    title: "B2Cloud International | Enterprise Technology Solutions",
    description:
      "Transform your business with enterprise ERP, AI automation, and managed IT services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-white text-slate-900">
        <Navigation />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
