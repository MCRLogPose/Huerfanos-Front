import jsPDF from "jspdf";
import "jspdf-autotable";

export const generateReceipt = (order) => {
  const doc = new jsPDF();

  // 🔹 Encabezado
  doc.setFontSize(16);
  doc.text("🧾 Panadería Dulce Hogar", 14, 20);
  doc.setFontSize(12);
  doc.text(`Boleta de Venta - ${order.orderCode}`, 14, 30);
  doc.text(`Fecha: ${new Date().toLocaleString()}`, 14, 38);

  // 🔹 Datos del cliente
  doc.text(`Cliente: ${order.user.firstName} ${order.user.lastName}`, 14, 48);
  doc.text(`Correo: ${order.user.email}`, 14, 55);

  // 🔹 Tabla de productos
  const tableColumn = ["Producto", "Cantidad", "Precio Unit.", "Subtotal"];
  const tableRows = [];

  order.items.forEach(item => {
    const subtotal = (item.price * item.quantity).toFixed(2);
    tableRows.push([
      item.product.name,
      item.quantity,
      `S/ ${item.product.price.toFixed(2)}`,
      `S/ ${subtotal}`
    ]);
  });

  doc.autoTable({
    startY: 65,
    head: [tableColumn],
    body: tableRows,
  });

  // 🔹 Total y pie
  const finalY = doc.lastAutoTable.finalY + 10;
  doc.setFontSize(12);
  doc.text(`Total: S/ ${order.total.toFixed(2)}`, 150, finalY);

  doc.text("Método de pago: EFECTIVO", 14, finalY + 10);
  doc.text(`Estado de orden: ${order.orderStatus}`, 14, finalY + 17);
  doc.text("¡Gracias por tu compra!", 14, finalY + 30);

  // 🔹 Descargar PDF
  doc.save(`Boleta_${order.orderCode}.pdf`);
};
