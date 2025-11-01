import { PropsWithChildren } from "react";
import Link from "next/link";

interface Props extends PropsWithChildren {
  href?: string;
}

export const Hyperlink: React.FC<Props> = ({ children, href = "" }) => {
  return (
    <Link
      href={href}
      className="ml-auto text-sm underline-offset-4 hover:underline text-primary"
    >
      {children}
    </Link>
  );
};
