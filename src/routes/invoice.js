import Invoices from "./invoices";
import { useParams } from "react-router-dom";

export default function Invoice() {
  let params = useParams();
  return <h2>Invoice: {params.InvoiceId}</h2>;
}
