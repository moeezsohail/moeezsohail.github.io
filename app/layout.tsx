import type { Metadata, Viewport } from "next";
import { AmbientBackground } from "@/components/ambient-background";
import { Geist, Geist_Mono, Syne } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f4f2f0" },
    { media: "(prefers-color-scheme: dark)", color: "#0f0e0d" },
  ],
};

export const metadata: Metadata = {
  title: "Moeez Sohail — Software Engineer",
  description:
    "Software engineer at Cvent. Backend, distributed systems, Java, AWS, React, and GraphQL.",
  metadataBase: new URL("https://moeezsohail.github.io"),
  openGraph: {
    title: "Moeez Sohail",
    description: "Software engineer — booking systems, microservices, AWS.",
    url: "https://moeezsohail.github.io",
    siteName: "Moeez Sohail",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${syne.variable} ${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="relative min-h-full font-sans">
        <AmbientBackground />
        <div className="relative z-10 flex min-h-full flex-col">{children}</div>
      </body>
    </html>
  );
}
