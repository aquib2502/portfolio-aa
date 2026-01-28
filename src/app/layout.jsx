import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScrollProvider from "./SmoothScrollProvider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://yourdomain.com"), // replace with real domain
  title: {
    default: "A&A Technologies",
    template: "%s | A&A Technologies",
  },
  description: "Where Technology Meets Imagination",
  keywords: [
    "Web Development",
    "Full Stack Development",
    "React",
    "Next.js",
    "Digital Transformation",
    "Software Solutions",
  ],
  authors: [{ name: "A&A Technologies" }],
  creator: "A&A Technologies",
  openGraph: {
    title: "A&A Technologies",
    description: "Where Technology Meets Imagination",
    url: "https://yourdomain.com",
    siteName: "A&A Technologies",
    images: [
      {
        url: "/ana-logo.png",
        width: 1200,
        height: 630,
        alt: "A&A Technologies",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "A&A Technologies",
    description: "Where Technology Meets Imagination",
    images: ["/ana-logo.png"],
  },
  icons: {
    icon: "/ana-logo.png",
    shortcut: "/ana-logo.png",
    apple: "/ana-logo.png",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-950 text-white`}
      >
        <SmoothScrollProvider>
          {children}
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
