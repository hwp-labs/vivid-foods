import { DropDownMenu } from "./drop-down-menu";
import { Avatar } from "./avatar";
import { Hgroup } from "./hgroup";

export const TopUsersCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <DropDownMenu
          data={["All Members", "Locations", "Revenue", "Join Date"]}
          floatRight
        />
        <h4 className="card-title mb-4">Top Users</h4>

        <div data-simplebar style={{ maxHeight: 339 }}>
          <div className="table-responsive">
            <table className="table table-borderless table-centered table-nowrap">
              <tbody>
                <tr>
                  <td style={{ width: 20 }}>
                    <Avatar src="assets/images/users/avatar-4.jpg" />
                  </td>
                  <td>
                    <Hgroup title="Glenn Holden">
                      <i className="mdi mdi-map-marker"></i> Nevada
                    </Hgroup>
                  </td>
                  <td>
                    <span className="badge bg-soft-danger font-size-12">
                      Cancel
                    </span>
                  </td>
                  <td className="text-muted fw-semibold text-end">
                    <i
                      className="icon-xs icon me-2 text-success"
                      data-feather="trending-up"
                    ></i>
                    $250.00
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/users/avatar-5.jpg"
                      className="avatar-xs rounded-circle "
                      alt="..."
                    />
                  </td>
                  <td>
                    <h6 className="font-size-15 mb-1 fw-normal">
                      Lolita Hamill
                    </h6>
                    <p className="text-muted font-size-13 mb-0">
                      <i className="mdi mdi-map-marker"></i> Texas
                    </p>
                  </td>
                  <td>
                    <span className="badge bg-soft-success font-size-12">
                      Success
                    </span>
                  </td>
                  <td className="text-muted fw-semibold text-end">
                    <i
                      className="icon-xs icon me-2 text-danger"
                      data-feather="trending-down"
                    ></i>
                    $110.00
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/users/avatar-6.jpg"
                      className="avatar-xs rounded-circle "
                      alt="..."
                    />
                  </td>
                  <td>
                    <h6 className="font-size-15 mb-1 fw-normal">
                      Robert Mercer
                    </h6>
                    <p className="text-muted font-size-13 mb-0">
                      <i className="mdi mdi-map-marker"></i> California
                    </p>
                  </td>
                  <td>
                    <span className="badge bg-soft-info font-size-12">
                      Active
                    </span>
                  </td>
                  <td className="text-muted fw-semibold text-end">
                    <i
                      className="icon-xs icon me-2 text-success"
                      data-feather="trending-up"
                    ></i>
                    $420.00
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/users/avatar-7.jpg"
                      className="avatar-xs rounded-circle "
                      alt="..."
                    />
                  </td>
                  <td>
                    <h6 className="font-size-15 mb-1 fw-normal">Marie Kim</h6>
                    <p className="text-muted font-size-13 mb-0">
                      <i className="mdi mdi-map-marker"></i> Montana
                    </p>
                  </td>
                  <td>
                    <span className="badge bg-soft-warning font-size-12">
                      Pending
                    </span>
                  </td>
                  <td className="text-muted fw-semibold text-end">
                    <i
                      className="icon-xs icon me-2 text-danger"
                      data-feather="trending-down"
                    ></i>
                    $120.00
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/users/avatar-8.jpg"
                      className="avatar-xs rounded-circle "
                      alt="..."
                    />
                  </td>
                  <td>
                    <h6 className="font-size-15 mb-1 fw-normal">
                      Sonya Henshaw
                    </h6>
                    <p className="text-muted font-size-13 mb-0">
                      <i className="mdi mdi-map-marker"></i> Colorado
                    </p>
                  </td>
                  <td>
                    <span className="badge bg-soft-info font-size-12">
                      Active
                    </span>
                  </td>
                  <td className="text-muted fw-semibold text-end">
                    <i
                      className="icon-xs icon me-2 text-success"
                      data-feather="trending-up"
                    ></i>
                    $112.00
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/users/avatar-2.jpg"
                      className="avatar-xs rounded-circle "
                      alt="..."
                    />
                  </td>
                  <td>
                    <h6 className="font-size-15 mb-1 fw-normal">Marie Kim</h6>
                    <p className="text-muted font-size-13 mb-0">
                      <i className="mdi mdi-map-marker"></i> Australia
                    </p>
                  </td>
                  <td>
                    <span className="badge bg-soft-success font-size-12">
                      Success
                    </span>
                  </td>
                  <td className="text-muted fw-semibold text-end">
                    <i
                      className="icon-xs icon me-2 text-danger"
                      data-feather="trending-down"
                    ></i>
                    $120.00
                  </td>
                </tr>
                <tr>
                  <td>
                    <img
                      src="assets/images/users/avatar-1.jpg"
                      className="avatar-xs rounded-circle "
                      alt="..."
                    />
                  </td>
                  <td>
                    <h6 className="font-size-15 mb-1 fw-normal">
                      Sonya Henshaw
                    </h6>
                    <p className="text-muted font-size-13 mb-0">
                      <i className="mdi mdi-map-marker"></i> India
                    </p>
                  </td>
                  <td>
                    <span className="badge bg-soft-danger font-size-12">
                      Cancel
                    </span>
                  </td>
                  <td className="text-muted fw-semibold text-end">
                    <i
                      className="icon-xs icon me-2 text-success"
                      data-feather="trending-up"
                    ></i>
                    $112.00
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
