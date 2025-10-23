export const RecentActivityCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="float-end">
          <div className="dropdown">
            <a
              className="dropdown-toggle"
              href="#"
              id="dropdownMenuButton3"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="text-muted">
                Recent<i className="mdi mdi-chevron-down ms-1"></i>
              </span>
            </a>

            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton3"
            >
              <a className="dropdown-item" href="#">
                Recent
              </a>
              <a className="dropdown-item" href="#">
                By Users
              </a>
            </div>
          </div>
        </div>

        <h4 className="card-title mb-4">Recent Activity</h4>

        <ol
          className="activity-feed mb-0 ps-2"
          data-simplebar
          style={{ maxHeight: 339 }}
        >
          <li className="feed-item">
            <div className="feed-item-list">
              <p className="text-muted mb-1 font-size-13">
                Today<small className="d-inline-block ms-1">12:20 pm</small>
              </p>
              <p className="mb-0">
                Andrei Coman magna sed porta finibus, risus posted a new
                article: <span className="text-primary">Forget UX Rowland</span>
              </p>
            </div>
          </li>
          <li className="feed-item">
            <p className="text-muted mb-1 font-size-13">
              22 Jul, 2020{" "}
              <small className="d-inline-block ms-1">12:36 pm</small>
            </p>
            <p className="mb-0">
              Andrei Coman posted a new article:{" "}
              <span className="text-primary">Designer Alex</span>
            </p>
          </li>
          <li className="feed-item">
            <p className="text-muted mb-1 font-size-13">
              18 Jul, 2020{" "}
              <small className="d-inline-block ms-1">07:56 am</small>
            </p>
            <p className="mb-0">
              Zack Wetass, sed porta finibus, risus Chris Wallace Commented{" "}
              <span className="text-primary"> Developer Moreno</span>
            </p>
          </li>
          <li className="feed-item">
            <p className="text-muted mb-1 font-size-13">
              10 Jul, 2020{" "}
              <small className="d-inline-block ms-1">08:42 pm</small>
            </p>
            <p className="mb-0">
              Zack Wetass, Chris combined Commented{" "}
              <span className="text-primary">UX Murphy</span>
            </p>
          </li>

          <li className="feed-item">
            <p className="text-muted mb-1 font-size-13">
              23 Jun, 2020{" "}
              <small className="d-inline-block ms-1">12:22 am</small>
            </p>
            <p className="mb-0">
              Zack Wetass, sed porta finibus, risus Chris Wallace Commented{" "}
              <span className="text-primary"> Developer Moreno</span>
            </p>
          </li>
          <li className="feed-item pb-1">
            <p className="text-muted mb-1 font-size-13">
              20 Jun, 2020{" "}
              <small className="d-inline-block ms-1">09:48 pm</small>
            </p>
            <p className="mb-0">
              Zack Wetass, Chris combined Commented{" "}
              <span className="text-primary">UX Murphy</span>
            </p>
          </li>
        </ol>
      </div>
    </div>
  );
};
