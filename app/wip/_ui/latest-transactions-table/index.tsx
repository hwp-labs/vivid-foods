import { Badge } from "../badge";
import { TableBuilder } from "../table-builder";
import data from "./data.json";

interface ITransaction {
  id: number;
  orderId: string;
  customerName: string;
  transactionDate: string;
  amount: number;
  paymentStatus: string;
  paymentMethod: string;
}

export const LatestTransactionsTable: React.FC = () => {
  return (
    <TableBuilder.Card caption="Latest Transaction">
      <thead className="table-light">
        <tr>
          <th style={{ width: 20 }}>
            <TableBuilder.Checkbox name="customCheck0" />
          </th>
          <th>Order ID</th>
          <th>Billing Name</th>
          <th>Date</th>
          <th>Total</th>
          <th>Payment Status</th>
          <th>Payment Method</th>
          <th>View Details</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item, i) => {
          const sn = i + 1;
          //
          return (
            <tr key={item.id}>
              <td>
                <TableBuilder.Checkbox name={`customCheck${sn}`} />
              </td>
              <td>
                <a href="javascript: void(0);" className="text-body fw-bold">
                  {item.orderId}
                </a>
              </td>
              <td>{item.customerName}</td>
              {/* 04 Oct, 2019 */}
              <td>{item.transactionDate}</td>
              <td>${item.amount.toLocaleString()}</td>
              <td>
                <Badge text={item.paymentStatus} variant="success" />
              </td>
              <td>
                {
                  {
                    Mastercard: <i className="fab fa-cc-mastercard me-1"></i>,
                    Visa: <i className="fab fa-cc-visa me-1"></i>,
                    Paypal: <i className="fab fa-cc-paypal me-1"></i>,
                  }[item.paymentMethod]
                }

                {item.paymentMethod}
              </td>
              <td>
                <TableBuilder.Action>View Details</TableBuilder.Action>
              </td>
            </tr>
          );
        })}
      </tbody>
    </TableBuilder.Card>
  );
};
