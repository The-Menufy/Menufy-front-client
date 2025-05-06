////npm install html2pdf.js
import React from "react";
import { QRCodeCanvas } from "qrcode.react";
import { FRONTEND_HOST, FRONTEND_PORT } from "../config";

const QRCodeGenerator = ({ menuId }) => {
  if (!menuId) {
    console.warn("⚠️ QRCodeGenerator: menuId is undefined");
    return <p style={{ color: "red" }}>Menu ID is missing</p>;
  }

  const qrUrl = `http://${FRONTEND_HOST}:${FRONTEND_PORT}/public/menu/${menuId}`;

  return (
    <div style={{ backgroundColor: "white", padding: 10, borderRadius: 8 }}>
      <QRCodeCanvas value={qrUrl} size={100} />
    </div>
  );
};

export default QRCodeGenerator;
