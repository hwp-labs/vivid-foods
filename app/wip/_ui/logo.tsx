export const Logo: React.FC = () => {
  return (
    <div className="navbar-brand-box">
      <a href="index.html" className="logo logo-dark">
        <span className="logo-sm">
          <img src="assets/images/logo-sm.png" alt="" height="22" />
        </span>
        <span className="logo-lg">
          <img src="assets/images/logo-dark.png" alt="" height="20" />
        </span>
      </a>

      <a href="index.html" className="logo logo-light">
        <span className="logo-sm">
          <img src="assets/images/logo-sm.png" alt="" height="22" />
        </span>
        <span className="logo-lg">
          <img src="assets/images/logo-light.png" alt="" height="20" />
        </span>
      </a>
    </div>
  );
};
