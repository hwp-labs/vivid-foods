import { BsBgColorType } from "@/types/bootstrap.type";

type PropsType = {
  label: string;
  rate?: number;
  fill?: BsBgColorType;
  height?: number;
};

export const LabelledProgressBar: React.FC<PropsType> = ({
  label,
  rate = 0,
  fill = "primary",
  height = 6,
}) => {
  return (
    <div className="row align-items-center g-0 mt-3">
      <div className="col-sm-3">
        <p className="text-truncate mt-1 mb-0">
          <i className={`mdi mdi-circle-medium text-${fill} me-2`}></i>
          {label}
        </p>
      </div>

      <div className="col-sm-9">
        <div className="progress mt-1" style={{ height }}>
          <div
            role="progressbar"
            aria-valuenow={rate}
            aria-valuemin={0}
            aria-valuemax={rate}
            className={`progress-bar bg-${fill}`}
            style={{ width: `${rate}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};
