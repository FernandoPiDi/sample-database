import React, { useEffect } from "react";
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
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "unset";
    };
  }, []);

  if (!product) return null;

  const handleModalClick = (e: React.MouseEvent) => {
    e.stopPropagation();
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={handleModalClick}>
        <button className="close-button" onClick={onClose} aria-label="Cerrar">
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
