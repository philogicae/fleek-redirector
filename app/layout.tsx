import "./globals.css";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

const font = Roboto({
  subsets: ["latin"],
  variable: "--font-local",
  weight: "400",
  preload: true,
});

export const metadata: Metadata = {
  title: "Fleek Redirector",
  description: "Redirect from one Fleek website to another",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={font.variable}>
      <body>{children}</body>
    </html>
  );
}
