import type { Metadata } from "next";
import Navbar from "@/components/navbar";

export const metadata: Metadata = {
  title: "银河猫猫侠",
  description: "一份简短的自我介绍。",
};

export default function Layout({ children }: LayoutProps<"/zh">) {
  return (
    <html lang="zh" className="bg-neutral-900 text-neutral-100">
      <body className="antialiased">
        <Navbar locale="zh" />
        {children}
      </body>
    </html>
  );
}
