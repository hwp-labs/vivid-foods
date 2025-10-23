import { PropsWithChildren } from "react";
import Link from "next/link";
import { BsBgColorType } from "@/types/bootstrap.type";

type MenuListProps = PropsWithChildren<{
  title: string;
  icon?: React.ReactNode;
}>;

export const MenuList: React.FC<MenuListProps> = ({
  children,
  title,
  icon,
}) => {
  return (
    <li>
      <a href="javascript: void(0);" className="has-arrow waves-effect">
        {icon}
        <span>{title}</span>
      </a>
      <ul className="sub-menu" aria-expanded="false">
        {children}
        {/* <li>
          <a href="ecommerce-product-detail.html">Product Detail</a>
        </li> */}
      </ul>
    </li>
  );
};

type MenuItemProps = {
  title: string;
  href?: string;
  icon?: React.ReactNode;
  badge?: number | string;
  badgeFill?: BsBgColorType;
};

export const MenuItem: React.FC<MenuItemProps> = ({
  title,
  href = "#",
  icon,
  badge,
  badgeFill = "primary",
}) => {
  return (
    <li>
      <Link href={href} className="waves-effect">
        {icon}

        {badge ? (
          <span className={`badge rounded-pill bg-${badgeFill} float-end`}>
            {badge}
          </span>
        ) : null}

        <span>{title}</span>
      </Link>
    </li>
  );
};
