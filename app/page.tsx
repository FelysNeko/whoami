import { Suspense } from "react";
import { headers } from "next/headers";
import { redirect } from "next/navigation";

async function LocaleRedirect() {
  const headersList = await headers();
  const acceptLanguage = headersList.get("accept-language") ?? "";
  const primary = acceptLanguage.split(",")[0]?.trim().toLowerCase() ?? "";
  const locale = primary.startsWith("zh") ? "zh" : "en";
  redirect(`/${locale}`);
  return null;
}

export default function Root() {
  return (
    <Suspense fallback={null}>
      <LocaleRedirect />
    </Suspense>
  );
}
