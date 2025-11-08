// src/features/orders/components/ReceiptPDF.jsx
import React from "react";
import { Document, Page, Text, View, Image, StyleSheet } from "@react-pdf/renderer";
import Logo from "@/assets/Huerfanos.jpg";

// 🧾 Estilos del PDF
const styles = StyleSheet.create({
  page: {
    padding: 40,
    fontSize: 11,
    fontFamily: "Helvetica",
  },
  header: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottom: "1px solid #999",
    paddingBottom: 10,
    marginBottom: 20,
  },
  logo: {
    width: 60,
    height: 60,
    marginRight: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  section: {
    marginBottom: 10,
  },
  table: {
    display: "table",
    width: "auto",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#999",
    marginBottom: 10,
  },
  tableRow: {
    flexDirection: "row",
  },
  tableColHeader: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#999",
    backgroundColor: "#f0f0f0",
    padding: 5,
    fontWeight: "bold",
  },
  tableCol: {
    width: "25%",
    borderStyle: "solid",
    borderWidth: 1,
    borderColor: "#999",
    padding: 5,
  },
  footer: {
    borderTop: "1px solid #999",
    paddingTop: 10,
    textAlign: "center",
    fontSize: 10,
    marginTop: 20,
  },
});

const ReceiptPDF = ({ order }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      {/* 🔹 Encabezado */}
      <View style={styles.header}>
        <Image src={Logo} style={styles.logo} />
        <View>
          <Text style={styles.title}>Panadería Huérfanos</Text>
          <Text>RUC: 12345678910</Text>
          <Text>Av. Principal 123 - Lima</Text>
          <Text>Tel: (01) 123-4567</Text>
        </View>
      </View>

      {/* 🔹 Datos de orden */}
      <View style={styles.section}>
        <Text>Boleta de Venta: {order.orderCode}</Text>
        <Text>Cliente: {order.user.firstName} {order.user.lastName}</Text>
        <Text>Correo: {order.user.email}</Text>
        <Text>Fecha: {new Date().toLocaleString()}</Text>
        <Text>Estado: {order.orderStatus}</Text>
      </View>

      {/* 🔹 Tabla de productos */}
      <View style={styles.table}>
        {/* Encabezado */}
        <View style={styles.tableRow}>
          <Text style={styles.tableColHeader}>Producto</Text>
          <Text style={styles.tableColHeader}>Cantidad</Text>
          <Text style={styles.tableColHeader}>P. Unitario</Text>
          <Text style={styles.tableColHeader}>Subtotal</Text>
        </View>

        {/* Filas */}
        {order.items.map((item, index) => (
          <View style={styles.tableRow} key={index}>
            <Text style={styles.tableCol}>{item.product.name}</Text>
            <Text style={styles.tableCol}>{item.quantity}</Text>
            <Text style={styles.tableCol}>S/ {item.product.price.toFixed(2)}</Text>
            <Text style={styles.tableCol}>S/ {(item.quantity * item.product.price).toFixed(2)}</Text>
          </View>
        ))}
      </View>

      {/* 🔹 Totales */}
      <View style={styles.section}>
        <Text>Método de pago: EFECTIVO</Text>
        <Text>Total: S/ {order.total.toFixed(2)}</Text>
      </View>

      {/* 🔹 Pie */}
      <View style={styles.footer}>
        <Text>Gracias por su compra 🍞</Text>
        <Text>“Pan recién horneado cada día.”</Text>
      </View>
    </Page>
  </Document>
);

export default ReceiptPDF;
