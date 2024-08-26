import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FelysNeko",
  description: "A brief introduction to myself",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="bg-vpgray text-white">
      <body>{children}</body>
    </html>
  );
}
