import { Logo } from "./logo";
import { SidebarToggle } from "./sidebar-toggle";
import { SearchBar } from "./search-bar";
import { LangPicker } from "./lang-picker";
import { AppPicker } from "./app-picker";
import { FullScreenToggle } from "./full-screen-toggle";
import { NotificationsWidget } from "./notifications-widget";
import { UserMenu } from "./user-menu";
import { AsideToggle } from "./aside-toggle";

export const Header: React.FC = () => {
  return (
    <header id="page-topbar">
      <div className="navbar-header">
        <div className="d-flex">
          <Logo />
          <SidebarToggle />
          <SearchBar />
        </div>
        <div className="d-flex">
          <SearchBar mobile />
          <LangPicker />
          <AppPicker />
          <FullScreenToggle />
          <NotificationsWidget />
          <UserMenu />
          <AsideToggle />
        </div>
      </div>
    </header>
  );
};
