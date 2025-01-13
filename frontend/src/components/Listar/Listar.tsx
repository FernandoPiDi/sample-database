"use client";

import { useQuery } from "@tanstack/react-query";
import { getProducts } from "@/lib/api";
import { Product } from "@/types/product";
import "./Listar.css";
import { useState } from "react";
import DetalleProducto from "../DetalleProducto/DetalleProducto";

interface ListarProps {
  searchTerm: string;
}

export default function Listar({ searchTerm }: ListarProps) {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

  const {
    data: products,
    isLoading,
    error,
  } = useQuery<Product[]>({
    queryKey: ["products"],
    queryFn: getProducts,
  });

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
  };

  const filteredProducts = products?.filter((product) =>
    searchTerm
      ? product.name.toLowerCase().includes(searchTerm.toLowerCase())
      : true
  );

  if (isLoading) {
    return (
      <div className="loading-container">
        <div className="loading-spinner"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="error-container">
        Error loading products: {error.message}
      </div>
    );
  }

  return (
    <>
      <div className="products-grid">
        {filteredProducts?.length === 0 ? (
          <p className="no-results">No se encontraron productos</p>
        ) : (
          filteredProducts?.map((product) => (
            <div
              key={product.id}
              className="product-card"
              onClick={() => handleProductClick(product)}
              role="button"
              tabIndex={0}
              style={{ cursor: "pointer" }}
            >
              <h2 className="product-title">{product.name}</h2>
              {/* <div className="product-dates">
                <p>Created: {new Date(product.createdAt).toLocaleString()}</p>
                {product.updatedAt && (
                  <p>Updated: {new Date(product.updatedAt).toLocaleString()}</p>
                )}
              </div> */}
            </div>
          ))
        )}
      </div>
      {selectedProduct && (
        <DetalleProducto
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </>
  );
}
