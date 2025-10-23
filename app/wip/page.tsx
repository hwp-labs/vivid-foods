import { PageTitle } from "./_ui/page-title";
import { KpiCards } from "./_ui/kpi-cards";
import { SalesAnalyticsChart } from "./_ui/sales-analytics-chart";
import { UpgradeAccountCard } from "./_ui/upgrade-account-card";
import { TopSellingProductsCard } from "./_ui/top-selling-products-card";
import { TopUsersCard } from "./_ui/top-users-card";
import { RecentActivityCard } from "./_ui/recent-activity-card";
import { SocialSourceCard } from "./_ui/social-source-card";
// import { LatestTransactionsTable } from "./_ui/latest-transactions-table";

export default function WipPage() {
  return (
    <>
      <PageTitle title="Dashboard"/>
      <KpiCards />
      <div className="row">
        <div className="col-xl-8">
          <SalesAnalyticsChart />
        </div>
        <div className="col-xl-4">
          <UpgradeAccountCard />
          <TopSellingProductsCard />
        </div>
      </div>
      <div className="row">
        <div className="col-xl-4">
          <TopUsersCard />
        </div>
        <div className="col-xl-4">
          <RecentActivityCard />
        </div>
        <div className="col-xl-4">
          <SocialSourceCard />
        </div>
      </div>
      <div className="row">
        <div className="col-lg-12">
          {/* <LatestTransactionsTable /> */}
        </div>
      </div>
    </>
  );
}
