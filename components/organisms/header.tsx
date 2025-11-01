import { HeartIcon, ShoppingCartIcon } from "lucide-react";
//
import { Logo } from "@/components/atoms/logo";
import { SearchBar } from "./search-bar";
import { UserMenu } from "./user-menu";
import { COLOR } from "@/constants/COLOR";

export const Header: React.FC = () => {
  return (
    <section className="bg-white shadow-sm items-center flex">
      <div className="root-container w-full">
        <div className="flex items-center justify-between gap-8">
          <Logo withName />
          <SearchBar />
          <div className="flex items-center gap-8">
            <div className="flex items-center gap-2 cursor-pointer text-primary">
              <HeartIcon size={24} fill={COLOR.accentPink} stroke="" />
              <p className="font-semibold">Wishlist</p>
            </div>
            <div className="flex items-center gap-2 cursor-pointer text-primary">
              <ShoppingCartIcon size={20} />
              <p className="font-semibold">Cart</p>
            </div>
          </div>
          <UserMenu />
        </div>
      </div>
    </section>
  );
};
