import type { Metadata } from "next";
import { Instrument_Serif, Work_Sans } from "next/font/google";
import "./globals.css";

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const workSans = Work_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Kean Kariuki — Developer Portfolio",
  description:
    "Kean Kariuki (@KeanKariuki) — developer portfolio: what I build, the tools I use, and how to reach me.",
  authors: [{ name: "Kean Kariuki" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${instrumentSerif.variable} ${workSans.variable}`}>
      <body>{children}</body>
    </html>
  );
}
