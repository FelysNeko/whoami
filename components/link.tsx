import Link from "next/link";

interface Props {
  href: string;
  text: string;
}

const PL = ({ href, text }: Props) => {
  return (
    <Link href={href} className="text-elypink" target="_blank">
      {text}
    </Link>
  );
};

export default PL;
