import { APP } from "@/constants/APP";

type PropsType = {
  title: string;
  subtitle?: string;
};

export const PageTitle: React.FC<PropsType> = ({ title, subtitle }) => {
  return (
    <div className="row">
      <div className="col-12">
        <div className="page-title-box d-flex align-items-center justify-content-between">
          <h4 className="mb-0">{title}</h4>

          <div className="page-title-right">
            <ol className="breadcrumb m-0">
              <li className="breadcrumb-item">
                <a href="javascript: void(0);">{APP.name}</a>
              </li>
              <li className="breadcrumb-item active">{subtitle || title}</li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
};
