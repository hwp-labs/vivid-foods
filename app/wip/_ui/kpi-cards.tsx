import { KpiCard } from "./kpi-card";

export const KpiCards: React.FC = () => {
  return (
    <div className="row">
      <div className="col-md-6 col-xl-3">
        <KpiCard
          id="total-revenue-chart"
          label="Total Revenue"
          value={34152}
          valuePrefix="$"
          rate={2.655}
          success
        />
      </div>
      <div className="col-md-6 col-xl-3">
        <KpiCard id="orders-chart" label="Orders" value={5643} rate={0.825} />
      </div>
      <div className="col-md-6 col-xl-3">
        <KpiCard
          id="customers-chart"
          label="Customers"
          value={45254}
          rate={6.245}
        />
      </div>
      <div className="col-md-6 col-xl-3">
        <KpiCard
          id="growth-chart"
          label="Growth"
          value={12.58}
          valuePrefix="+"
          valueSuffix="%"
          rate={10.515}
          success
        />
      </div>
    </div>
  );
};
