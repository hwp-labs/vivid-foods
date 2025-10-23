type PropsType = {
  id: string;
  label: string;
  value?: number;
  valuePrefix?: string;
  valueSuffix?: string;
  rate?: number;
  rateLabel?: string;
  success?: boolean;
};

export const KpiCard: React.FC<PropsType> = ({
  id,
  label,
  value = 0,
  valuePrefix,
  valueSuffix,
  rate = 0,
  rateLabel = "since last week",
  success,
}) => {
  const rateTypeIcon = success
    ? "mdi mdi-arrow-up-bold"
    : "mdi mdi-arrow-down-bold";

  return (
    <div className="card">
      <div className="card-body">
        <div className="float-end mt-2">
          <div id={id}></div>
        </div>
        <div>
          <h4 className="mb-1 mt-1">
            {valuePrefix}
            <span data-plugin="counterup">{value.toLocaleString()}</span>
            {valueSuffix}
          </h4>
          <p className="text-muted mb-0">{label}</p>
        </div>
        <p className="text-muted mt-3 mb-0">
          <span className={`text-${success ? "success" : "danger"} me-1`}>
            <i className={`${rateTypeIcon} me-1`}></i>
            {rate.toFixed(2)}%
          </span>{" "}
          {rateLabel}
        </p>
      </div>
    </div>
  );
};
