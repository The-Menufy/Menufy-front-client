import { QRCodeCanvas } from "qrcode.react";
import { FRONTEND_URL } from "../config";
import PropTypes from "prop-types";

export default function QRCodeGenerator({ menuId }) {
  if (!menuId) {
    return <p className="text-red-500">Menu ID is missing</p>;
  }
  const qrUrl = `${FRONTEND_URL}/public/menu/${menuId}`;
  return (
    <div className="bg-white p-2 rounded-lg">
      <QRCodeCanvas value={qrUrl} size={120} />
    </div>
  );
}

QRCodeGenerator.propTypes = {
  menuId: PropTypes.string,
};
