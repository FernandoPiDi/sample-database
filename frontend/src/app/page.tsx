"use client";

import Navbar from "@/components/Navbar/Navbar";
import Listar from "@/components/Listar/Listar";
import { useState } from "react";

export default function Home() {
  const [searchTerm, setSearchTerm] = useState("");

  return (
    <main className="min-h-screen">
      <Navbar onSearch={setSearchTerm} />
      <div className="p-8">
        <Listar searchTerm={searchTerm} />
      </div>
    </main>
  );
}
