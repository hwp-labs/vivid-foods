export const SocialSourceCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="float-end">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              id="dropdownMenuButton4"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="text-muted">
                Monthly<i className="mdi mdi-chevron-down ms-1"></i>
              </span>
            </a>

            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton4"
            >
              <a className="dropdown-item" href="#">
                Yearly
              </a>
              <a className="dropdown-item" href="#">
                Monthly
              </a>
              <a className="dropdown-item" href="#">
                Weekly
              </a>
            </div>
          </div>
        </div>

        <h4 className="card-title">Social Source</h4>

        <div className="text-center">
          <div className="avatar-sm mx-auto mb-4">
            <span className="avatar-title rounded-circle bg-soft-primary font-size-24">
              <i className="mdi mdi-facebook text-primary"></i>
            </span>
          </div>
          <p className="font-16 text-muted mb-2"></p>
          <h5>
            <a href="#" className="text-dark">
              Facebook - <span className="text-muted font-16">125 sales</span>{" "}
            </a>
          </h5>
          <p className="text-muted">
            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut
            libero venenatis faucibus tincidunt.
          </p>
          <a href="#" className="text-reset font-16">
            Learn more <i className="mdi mdi-chevron-right"></i>
          </a>
        </div>
        <div className="row mt-4">
          <div className="col-4">
            <div className="social-source text-center mt-3">
              <div className="avatar-xs mx-auto mb-3">
                <span className="avatar-title rounded-circle bg-primary font-size-16">
                  <i className="mdi mdi-facebook text-white"></i>
                </span>
              </div>
              <h5 className="font-size-15">Facebook</h5>
              <p className="text-muted mb-0">125 sales</p>
            </div>
          </div>
          <div className="col-4">
            <div className="social-source text-center mt-3">
              <div className="avatar-xs mx-auto mb-3">
                <span className="avatar-title rounded-circle bg-info font-size-16">
                  <i className="mdi mdi-twitter text-white"></i>
                </span>
              </div>
              <h5 className="font-size-15">Twitter</h5>
              <p className="text-muted mb-0">112 sales</p>
            </div>
          </div>
          <div className="col-4">
            <div className="social-source text-center mt-3">
              <div className="avatar-xs mx-auto mb-3">
                <span className="avatar-title rounded-circle bg-pink font-size-16">
                  <i className="mdi mdi-instagram text-white"></i>
                </span>
              </div>
              <h5 className="font-size-15">Instagram</h5>
              <p className="text-muted mb-0">104 sales</p>
            </div>
          </div>
        </div>

        <div className="mt-3 text-center">
          <a href="#" className="text-primary font-size-14 fw-medium">
            View All Sources <i className="mdi mdi-chevron-right"></i>
          </a>
        </div>
      </div>
    </div>
  );
};
