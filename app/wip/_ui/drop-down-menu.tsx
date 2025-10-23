import { ListType, OptionType } from "@/types/common.type";

type PropsType = {
  label?: string;
  value?: string;
  data?: ListType;
  floatRight?: boolean;
};

export const DropDownMenu: React.FC<PropsType> = ({
  label,
  value,
  data = [],
  floatRight,
}) => {
  return (
    <div className={floatRight ? "float-end" : ""}>
      <div className="dropdown">
        <a
          className=" dropdown-toggle"
          href="#"
          id="dropdownMenuButton2"
          data-bs-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          {label ? <span className="fw-semibold">{label}: </span> : null}
          <span className="text-muted">
            {value || data[0]}
            <i className="mdi mdi-chevron-down ms-1"></i>
          </span>
        </a>

        <div
          className="dropdown-menu dropdown-menu-end"
          aria-labelledby="dropdownMenuButton2"
        >
          {data.map((item, i) => (
            <a className="dropdown-item" href="#" key={i}>
              {item}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};
