import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function PL({ href, text }: Props) {
  return (
    <Link href={href} className="text-elysia" target="_blank">
      {text}
    </Link>
  );
}
