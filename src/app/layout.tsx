import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Header, Footer } from "@/components/layout";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://calenhad.io"),
  title: {
    default: "Calenhad - Mesh Network Infrastructure",
    template: "%s | Calenhad",
  },
  description:
    "From product development to deployment, we help startups harness the power of mesh network technology. Expert consulting services for mesh network infrastructure.",
  keywords: [
    "mesh network",
    "mesh network consulting",
    "IoT networks",
    "wireless mesh",
    "network infrastructure",
    "Waypoint",
  ],
  authors: [{ name: "Calenhad" }],
  icons: {
    icon: "/icon.svg",
    apple: "/icon.svg",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://calenhad.io",
    siteName: "Calenhad",
    title: "Calenhad - Mesh Network Infrastructure",
    description:
      "Expert mesh network consulting for startups and businesses. We built Waypoint, now we can help you build yours.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Calenhad - Mesh Network Infrastructure",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Calenhad - Mesh Network Infrastructure",
    description:
      "Expert mesh network consulting for startups and businesses.",
    images: ["/og-image.png"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="antialiased flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
