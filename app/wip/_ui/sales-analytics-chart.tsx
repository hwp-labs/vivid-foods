export const SalesAnalyticsChart: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <div className="float-end">
          <div className="dropdown">
            <a
              className="dropdown-toggle text-reset"
              href="#"
              id="dropdownMenuButton5"
              data-bs-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="fw-semibold">Sort By:</span>{" "}
              <span className="text-muted">
                Yearly<i className="mdi mdi-chevron-down ms-1"></i>
              </span>
            </a>

            <div
              className="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenuButton5"
            >
              <a className="dropdown-item" href="#">
                Monthly
              </a>
              <a className="dropdown-item" href="#">
                Yearly
              </a>
              <a className="dropdown-item" href="#">
                Weekly
              </a>
            </div>
          </div>
        </div>
        <h4 className="card-title mb-4">Sales Analytics</h4>

        <div className="mt-1">
          <ul className="list-inline main-chart mb-0">
            <li className="list-inline-item chart-border-left me-0 border-0">
              <h3 className="text-primary">
                $<span data-plugin="counterup">2,371</span>
                <span className="text-muted d-inline-block font-size-15 ms-3">
                  Income
                </span>
              </h3>
            </li>
            <li className="list-inline-item chart-border-left me-0">
              <h3>
                <span data-plugin="counterup">258</span>
                <span className="text-muted d-inline-block font-size-15 ms-3">
                  Sales
                </span>
              </h3>
            </li>
            <li className="list-inline-item chart-border-left me-0">
              <h3>
                <span data-plugin="counterup">3.6</span>%
                <span className="text-muted d-inline-block font-size-15 ms-3">
                  Conversation Ratio
                </span>
              </h3>
            </li>
          </ul>
        </div>

        <div className="mt-3">
          <div
            id="sales-analytics-chart"
            className="apex-charts"
            dir="ltr"
          ></div>
        </div>
      </div>
    </div>
  );
};
