import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

export default function PinkLink({ href, text }: Props) {
  return (
    <Link href={href} className="text-pink" target="_blank">
      {text}
    </Link>
  );
}
