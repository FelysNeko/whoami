import Navbar from "@/components/navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <Navbar lang="zh" />
      {children}
    </div>
  );
}
