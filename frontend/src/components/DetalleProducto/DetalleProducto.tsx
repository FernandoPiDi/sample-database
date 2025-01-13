import React from "react";
import "./DetalleProducto.css";
import { Product } from "@/types/product";

interface DetalleProductoProps {
  product: Product | null;
  onClose: () => void;
}

const DetalleProducto: React.FC<DetalleProductoProps> = ({
  product,
  onClose,
}) => {
  if (!product) return null;

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          &times;
        </button>
        <div className="product-detail">
          <h2>{product.name}</h2>
          <p className="product-id">ID: {product.id}</p>
          <div className="product-dates">
            <p>Creado: {new Date(product.createdAt).toLocaleDateString()}</p>
            <p>
              Actualizado: {new Date(product.updatedAt).toLocaleDateString()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetalleProducto;
