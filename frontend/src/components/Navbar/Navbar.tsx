"use client";

import { useState, useRef, useEffect } from "react";
import { useRouter, usePathname } from "next/navigation";

interface NavbarProps {
  onSearch: (term: string) => void;
}

export default function Navbar({ onSearch }: NavbarProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [searchTerm, setSearchTerm] = useState("");
  const [isSearchVisible, setIsSearchVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isSearchVisible") === "true";
    }
    return false;
  });
  const [isDarkMode, setIsDarkMode] = useState(() => {
    if (typeof window !== "undefined") {
      const theme = localStorage.getItem("theme");
      document.documentElement.setAttribute("data-theme", theme || "light");
      return theme === "dark";
    }
    return false;
  });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileSearchVisible, setIsMobileSearchVisible] = useState(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("isMobileSearchVisible") === "true";
    }
    return false;
  });
  const searchContainerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);

  // Efecto para mantener el estado de visibilidad en localStorage
  useEffect(() => {
    localStorage.setItem("isSearchVisible", isSearchVisible.toString());
    localStorage.setItem(
      "isMobileSearchVisible",
      isMobileSearchVisible.toString()
    );
  }, [isSearchVisible, isMobileSearchVisible]);

  // Efecto para mantener la barra visible después de la navegación
  useEffect(() => {
    if (pathname === "/" && (isSearchVisible || isMobileSearchVisible)) {
      const searchInput = document.querySelector('input[type="text"]');
      if (searchInput) {
        (searchInput as HTMLInputElement).focus();
      }
    }
  }, [pathname, isSearchVisible, isMobileSearchVisible]);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        searchContainerRef.current &&
        !searchContainerRef.current.contains(event.target as Node) &&
        !(event.target as Element)?.closest(".modal-overlay") &&
        !(event.target as Element)?.closest(".product-card") &&
        !(event.target as Element)?.closest(".menu-button") &&
        !(event.target as Element)?.closest("input")
      ) {
        setIsSearchVisible(false);
        setIsMobileSearchVisible(false);
        setSearchTerm("");
        onSearch("");
        localStorage.removeItem("isSearchVisible");
        localStorage.removeItem("isMobileSearchVisible");
      }

      if (
        menuRef.current &&
        !(event.target as Element)?.closest(".menu-button") &&
        !menuRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onSearch]);

  const handleSearchChange = (value: string) => {
    setSearchTerm(value);
    onSearch(value);
  };

  const handleSearchClick = async () => {
    setIsSearchVisible(true);
    if (pathname !== "/") {
      await router.push("/");
    }
  };

  const handleMobileSearchClick = async () => {
    setIsMobileSearchVisible(true);
    setIsMenuOpen(false);
    if (pathname !== "/") {
      await router.push("/");
    }
  };

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    document.documentElement.setAttribute(
      "data-theme",
      newTheme ? "dark" : "light"
    );
    localStorage.setItem("theme", newTheme ? "dark" : "light");
  };

  return (
    <nav
      className={`py-4 px-4 md:px-8 shadow-md ${
        isDarkMode ? "bg-gray-800" : "bg-gray-100"
      }`}
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center relative">
        <div className="w-full md:w-auto flex justify-between items-center h-10">
          <button
            className="menu-button md:hidden p-2 hover:bg-gray-200 rounded-lg"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
          </button>

          <div
            className="theme-switch md:hidden"
            data-theme={isDarkMode ? "dark" : "light"}
            onClick={toggleTheme}
            role="button"
            tabIndex={0}
          >
            <div className="theme-switch-handle"></div>
          </div>
        </div>

        {/* Barra de búsqueda móvil */}
        {isMobileSearchVisible && (
          <div className="absolute top-full left-0 right-0 bg-inherit py-2 px-4 shadow-md mt-1">
            <input
              type="text"
              placeholder="Buscar productos..."
              value={searchTerm}
              onChange={(e) => handleSearchChange(e.target.value)}
              className={`w-full px-4 py-2 rounded-lg border-2 focus:border-blue-500 focus:outline-none ${
                isDarkMode
                  ? "bg-gray-700 border-gray-600 text-white"
                  : "bg-white border-gray-300 text-black"
              }`}
              autoFocus
            />
          </div>
        )}

        {/* Menú desktop */}
        <div className="hidden md:flex flex-1 items-center justify-center gap-16 h-10">
          <button
            onClick={() => router.push("/")}
            className={`text-xl font-bold hover:text-blue-500 transition-colors ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Productos
          </button>
          <button
            onClick={() => router.push("/crear-producto")}
            className={`text-xl font-bold hover:text-blue-500 transition-colors ${
              isDarkMode ? "text-white" : "text-black"
            }`}
          >
            Crear Producto
          </button>
          <div ref={searchContainerRef} className="flex items-center">
            {isSearchVisible ? (
              <div className="flex items-center gap-2 animate-slide-in">
                <input
                  type="text"
                  placeholder="Buscar productos..."
                  value={searchTerm}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className={`w-64 px-4 py-2 rounded-lg border-2 focus:border-blue-500 focus:outline-none ${
                    isDarkMode
                      ? "bg-gray-700 border-gray-600 text-white"
                      : "bg-white border-gray-300 text-black"
                  }`}
                  autoFocus
                />
              </div>
            ) : (
              <button
                onClick={handleSearchClick}
                className={`text-xl font-bold hover:text-blue-500 transition-colors ${
                  isDarkMode ? "text-white" : "text-black"
                }`}
              >
                Buscar
              </button>
            )}
          </div>
        </div>

        <div className="hidden md:flex items-center h-10">
          <div
            className="theme-switch"
            data-theme={isDarkMode ? "dark" : "light"}
            onClick={toggleTheme}
            role="button"
            tabIndex={0}
          >
            <div className="theme-switch-handle"></div>
          </div>
        </div>

        {/* Menú móvil */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className={`md:hidden absolute top-full left-0 mt-2 w-64 rounded-lg shadow-lg py-2 z-50 mobile-menu ${
              isDarkMode ? "bg-gray-800 text-white" : "bg-white text-black"
            }`}
          >
            <button
              onClick={() => {
                router.push("/");
                setIsMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              Productos
            </button>
            <button
              onClick={() => {
                router.push("/crear-producto");
                setIsMenuOpen(false);
              }}
              className={`w-full text-left px-4 py-2 ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              Crear Producto
            </button>
            <button
              onClick={handleMobileSearchClick}
              className={`w-full text-left px-4 py-2 ${
                isDarkMode ? "hover:bg-gray-700" : "hover:bg-gray-100"
              }`}
            >
              Buscar
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}
