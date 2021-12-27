import Invoices from "./invoices";
import { useParams } from "react-router-dom";
import { getInvoice } from "../data";

export default function Invoice() {
  let params = useParams();
  let invoice = getInvoice(parseInt(params.invoiceId, 10));
  return (
    <div>
      <h2>Total Due: {invoice.amount}</h2>
      <p>
        {invoice.name}: {invoice.amount}
      </p>
      <p>Due Date: {invoice.due}</p>
    </div>
  );
}
