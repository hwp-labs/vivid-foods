import Link from "next/link";
import { TriangleIcon } from "lucide-react";
import { APP } from "@/constants/APP";

interface Props {
  href?: string;
  size?: "sm" | "lg";
  withName?: boolean;
}

export const Logo: React.FC<Props> = ({ href = "", size = "sm", withName }) => {
  const [borderRadius, containerSize, iconSize] =
    size === "sm" ? [5, 32, 18]:[48, 48, 24];

  return (
    <Link href={href} className="flex items-center gap-2 font-medium">
      <div
        className="bg-primary flex items-center justify-center"
        style={{
          borderRadius: borderRadius,
          width: containerSize,
          height: containerSize,
        }}
      >
        <TriangleIcon
          className="rotate-180"
          fill="white"
          stroke=""
          style={{ width: iconSize, height: iconSize }}
        />
      </div>
      {withName && APP.name}
    </Link>
  );
};
