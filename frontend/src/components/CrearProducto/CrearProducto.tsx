import { useState } from "react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import "./CrearProducto.css";
import { Product } from "@/types/product";
import { api } from "@/lib/api";

interface CrearProductoProps {
  onClose: () => void;
}

export default function CrearProducto({ onClose }: CrearProductoProps) {
  const [nombre, setNombre] = useState("");
  const queryClient = useQueryClient();

  const createProductMutation = useMutation({
    mutationFn: async (nombre: string) => {
      const { data } = await api.post<Product>("/products", {
        name: nombre,
      });
      return data;
    },
    onSuccess: (newProduct: Product) => {
      queryClient.setQueryData<Product[]>(["products"], (oldProducts = []) => {
        return [...oldProducts, newProduct];
      });

      queryClient.invalidateQueries({ queryKey: ["products"] });
      onClose();
    },
    onError: (error) => {
      console.error("Error al crear el producto:", error);
    },
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (nombre.trim()) {
      try {
        await createProductMutation.mutateAsync(nombre);
      } catch (error) {
        console.error("Error al crear el producto:", error);
      }
    }
  };

  return (
    <div className="crear-producto-container">
      <h2 className="text-2xl font-bold mb-6 text-center">
        Crear Nuevo Producto
      </h2>
      <form onSubmit={handleSubmit} className="crear-producto-form">
        <div className="mb-4">
          <input
            type="text"
            id="nombre"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            className="w-full px-4 py-2 rounded-lg border-2 focus:border-blue-500 focus:outline-none"
            placeholder="Ingrese el nombre del producto"
            required
          />
        </div>
        <div className="flex justify-center gap-4">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600 transition-colors text-black dark:text-white"
          >
            Cancelar
          </button>
          <button
            type="submit"
            className="px-6 py-2 rounded-lg bg-blue-500 text-white hover:bg-blue-600 transition-colors"
            disabled={createProductMutation.isPending}
          >
            {createProductMutation.isPending ? "Creando..." : "Crear Producto"}
          </button>
        </div>
      </form>
    </div>
  );
}
