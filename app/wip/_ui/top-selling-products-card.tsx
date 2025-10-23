import { DropDownMenu } from "./drop-down-menu";
import { LabelledProgressBar } from "./labelled-progress-bar";

export const TopSellingProductsCard: React.FC = () => {
  return (
    <div className="card">
      <div className="card-body">
        <DropDownMenu
          label="Sort By"
          value="Monthly"
          data={["Weekly", "Monthly", "Yearly"]}
          floatRight
        />
        
        <h4 className="card-title mb-4">Top Selling Products</h4>

        <LabelledProgressBar label="Desktops" rate={52} />
        <LabelledProgressBar label="iPhones" rate={45} fill="info" />
        <LabelledProgressBar label="Android" rate={48} fill="success" />
        <LabelledProgressBar label="Tablets" rate={78} fill="warning" />
        <LabelledProgressBar label="Cables" rate={63} fill="danger" />
      </div>
    </div>
  );
};
