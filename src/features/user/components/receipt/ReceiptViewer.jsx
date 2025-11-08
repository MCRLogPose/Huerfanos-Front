// src/features/orders/components/ReceiptViewer.jsx
import React from "react";
import { PDFViewer, PDFDownloadLink } from "@react-pdf/renderer";
import ReceiptPDF from "./ReceiptPDF";

const ReceiptViewer = ({ order }) => {
  if (!order) return null;

  return (
    <div className="flex flex-col items-center gap-4 mt-6">
      <PDFViewer width="100%" height="600" className="border rounded-lg">
        <ReceiptPDF order={order} />
      </PDFViewer>

      <PDFDownloadLink
        document={<ReceiptPDF order={order} />}
        fileName={`Boleta_${order.orderCode}.pdf`}
        className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
      >
        Descargar Boleta PDF
      </PDFDownloadLink>
    </div>
  );
};

export default ReceiptViewer;
