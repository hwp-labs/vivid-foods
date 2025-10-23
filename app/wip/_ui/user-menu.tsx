export const UserMenu: React.FC = () => {
  return (
    <div className="dropdown d-inline-block">
      <button
        type="button"
        className="btn header-item waves-effect"
        id="page-header-user-dropdown"
        data-bs-toggle="dropdown"
        aria-haspopup="true"
        aria-expanded="false"
      >
        <img
          className="rounded-circle header-profile-user"
          src="assets/images/users/avatar-4.jpg"
          alt="Header Avatar"
        />
        <span className="d-none d-xl-inline-block ms-1 fw-medium font-size-15">
          Marcus
        </span>
        <i className="uil-angle-down d-none d-xl-inline-block font-size-15"></i>
      </button>
      <div className="dropdown-menu dropdown-menu-end">
        <a className="dropdown-item" href="#">
          <i className="uil uil-user-circle font-size-18 align-middle text-muted me-1"></i>{" "}
          <span className="align-middle">View Profile</span>
        </a>
        <a className="dropdown-item" href="#">
          <i className="uil uil-wallet font-size-18 align-middle me-1 text-muted"></i>{" "}
          <span className="align-middle">My Wallet</span>
        </a>
        <a className="dropdown-item d-block" href="#">
          <i className="uil uil-cog font-size-18 align-middle me-1 text-muted"></i>{" "}
          <span className="align-middle">Settings</span>{" "}
          <span className="badge bg-soft-success rounded-pill mt-1 ms-2">
            03
          </span>
        </a>
        <a className="dropdown-item" href="#">
          <i className="uil uil-lock-alt font-size-18 align-middle me-1 text-muted"></i>{" "}
          <span className="align-middle">Lock screen</span>
        </a>
        <a className="dropdown-item" href="#">
          <i className="uil uil-sign-out-alt font-size-18 align-middle me-1 text-muted"></i>{" "}
          <span className="align-middle">Sign out</span>
        </a>
      </div>
    </div>
  );
};
