import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ConfigProvider } from "@/components/i18n";
import Navbar from "@/components/navbar";
import { EN, ZH, type Config, type Locale } from "@/lib/config";

const LOCALES: Record<Locale, Config> = { en: EN, zh: ZH };

export function generateStaticParams() {
  return [{ locale: EN.root }, { locale: ZH.root }];
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const config = LOCALES[locale as Locale];
  if (!config) {
    notFound();
  }
  return {
    title: config.metadata.title,
    description: config.metadata.description,
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const config = LOCALES[locale as Locale];
  if (!config) {
    notFound();
  }

  return (
    <html lang={config.root} className="bg-neutral-900 text-neutral-100">
      <body className="antialiased">
        <ConfigProvider locale={config.root}>
          <Navbar />
          {children}
        </ConfigProvider>
      </body>
    </html>
  );
}
