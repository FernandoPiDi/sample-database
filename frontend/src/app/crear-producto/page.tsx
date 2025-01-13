"use client";

import Navbar from "@/components/Navbar/Navbar";
import CrearProducto from "@/components/CrearProducto/CrearProducto";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function CrearProductoPage() {
  const router = useRouter();

  useEffect(() => {
    // Asegurarse de que el tema se mantenga al cargar la página
    const theme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", theme);
  }, []);

  const handleClose = () => {
    router.push("/");
  };

  return (
    <main className="min-h-screen bg-inherit">
      <Navbar onSearch={() => {}} />
      <div className="p-8">
        <CrearProducto onClose={handleClose} />
      </div>
    </main>
  );
}
