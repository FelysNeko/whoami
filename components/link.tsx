import Link from "next/link";

interface PinkLinkProps {
  href: string;
  text: string;
}

export default function PinkLink({ href, text }: PinkLinkProps) {
  return (
    <Link href={href} className="text-pink" target="_blank">
      {text}
    </Link>
  );
}
