import { PATH } from "@/constants/PATH";
import { Logo } from "../logo";
import { MenuList, MenuItem } from "./builder";

export const Sidebar: React.FC = () => {
  return (
    <div className="vertical-menu">
      <Logo />

      <button
        type="button"
        className="btn btn-sm px-3 font-size-16 header-item waves-effect vertical-menu-btn"
      >
        <i className="fa fa-fw fa-bars"></i>
      </button>

      <div data-simplebar className="sidebar-menu-scroll">
        <div id="sidebar-menu">
          <ul className="metismenu list-unstyled" id="side-menu">
            <li className="menu-title">Menu</li>

            <MenuItem
              title="Dashboard"
              href={PATH.dashboard}
              icon={<i className="uil-home-alt"></i>}
              badge="01"
            />

            <MenuList title="Transactions" icon={<i className="uil-store"></i>}>
              <MenuItem
                title="Manage Transactions"
                icon={<i className="uil-calendar"></i>}
              />
              <MenuItem title="Add Transaction" badge="01" />
              <MenuItem title="View Reports" />
            </MenuList>

            <li className="menu-title">Apps</li>

            <MenuItem
              title="Settings"
              icon={<i className="uil-calendar"></i>}
            />

            <MenuItem
              title="Log in"
              icon={<i className="uil-comments-alt"></i>}
              badge="New"
              badgeFill="warning"
            />
          </ul>
        </div>
      </div>
    </div>
  );
};
