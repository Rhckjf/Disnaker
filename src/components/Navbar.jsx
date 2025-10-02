// src/components/Navbar.jsx
import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const popRef = useRef(null);
  const btnRef = useRef(null);
  const location = useLocation();

  // active state untuk grup "Profile" (tambahkan /document)
  const PROFILE_ROUTES = ["/selayang-pandang", "/visi-misi", "/structural", "/document"];
  const profileActive = PROFILE_ROUTES.some(
    (p) => location.pathname === p || location.pathname.startsWith(p + "/")
  );

  // Tutup dropdown saat rute berubah
  useEffect(() => setOpen(false), [location]);

  // Klik di luar & Esc untuk menutup
  useEffect(() => {
    function onClickOutside(e) {
      if (!open) return;
      if (
        popRef.current &&
        !popRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      ) {
        setOpen(false);
      }
    }
    function onEsc(e) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  // helper untuk item aktif di dropdown
  const itemBase =
    "block px-4 py-2 hover:bg-gray-100";
  const isActive = (path) =>
    location.pathname === path || location.pathname.startsWith(path + "/");

  return (
    <header className="flex justify-between items-center px-6 py-4 bg-white shadow relative">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/logorev.png" alt="Logo" className="h-12" />
      </div>

      {/* Menu */}
      <nav className="flex gap-6 font-semibold text-gray-700 items-center">
        <Link to="/" className="hover:text-blue-900">
          Beranda
        </Link>

        {/* Profile: klik untuk toggle, TANPA panah */}
        <div className="relative">
          <button
            ref={btnRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`focus:outline-none ${
              profileActive ? "text-blue-900" : "hover:text-blue-900"
            }`}
            aria-haspopup="menu"
            aria-expanded={open}
          >
            Profile
          </button>

          {open && (
            <ul
              ref={popRef}
              role="menu"
              className="absolute left-0 mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden animate-slide-down z-50"
            >
              <li role="none">
                <Link
                  role="menuitem"
                  to="/selayang-pandang"
                  onClick={() => setOpen(false)}
                  className={`${itemBase} ${isActive("/selayang-pandang") ? "bg-gray-100" : ""}`}
                >
                  Selayang Pandang
                </Link>
              </li>
              <li role="none">
                <Link
                  role="menuitem"
                  to="/visi-misi"
                  onClick={() => setOpen(false)}
                  className={`${itemBase} ${isActive("/visi-misi") ? "bg-gray-100" : ""}`}
                >
                  Visi & Misi
                </Link>
              </li>
              <li role="none">
                <Link
                  role="menuitem"
                  to="/structural"
                  onClick={() => setOpen(false)}
                  className={`${itemBase} ${isActive("/structural") ? "bg-gray-100" : ""}`}
                >
                  Structural
                </Link>
              </li>
              <li role="none">
                <Link
                  role="menuitem"
                  to="/document"
                  onClick={() => setOpen(false)}
                  className={`${itemBase} ${isActive("/document") ? "bg-gray-100" : ""}`}
                >
                  Document
                </Link>
              </li>
            </ul>
          )}
        </div>

        <Link to="/page" className="hover:text-blue-900">
          Berita
        </Link>
        <Link to="/sipkerja" className="hover:text-blue-900">
          Hasil Kepuasan Masyarakat 
        </Link>
      </nav>
    </header>
  );
}
