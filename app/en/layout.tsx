import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "FelysNeko",
  description: "A brief introduction to myself",
};

export default function Layout({ children }: LayoutProps<"/en">) {
  return (
    <html lang="en" className="bg-neutral-900 text-neutral-100">
      <body className="antialiased">
        <Navbar locale="en" />
        {children}
      </body>
    </html>
  );
}
