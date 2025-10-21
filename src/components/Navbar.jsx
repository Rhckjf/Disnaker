import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  const PROFILE_ROUTES = ["/selayang-pandang", "/visi-misi", "/structural", "/document"];
  const isActive = (p) => location.pathname === p || location.pathname.startsWith(p + "/");
  const profileActive = PROFILE_ROUTES.some(isActive);

  // Tutup panel saat pindah halaman
  useEffect(() => setOpen(false), [location]);

  // Tutup jika klik di luar
  useEffect(() => {
    const onDown = (e) => {
      if (!open) return;
      if (
        panelRef.current && !panelRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

  // Efek shadow lembut saat scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-[60] bg-white transition-shadow ${
        scrolled ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logorev.png" alt="Logo" className="h-12" />
        </div>

        {/* Navigasi */}
        <nav className="flex gap-8 font-semibold text-gray-800 items-center">
          <Link to="/" className="hover:text-[#18446C]">Beranda</Link>

          {/* Tombol Profile */}
          <div className="relative">
            <button
              ref={btnRef}
              onClick={() => setOpen((v) => !v)}
              className={`flex items-center gap-1 hover:text-[#18446C] ${
                profileActive ? "text-[#18446C] font-bold" : ""
              }`}
            >
              Profile
              <svg
                className={`transition-transform ${open ? "rotate-180" : ""}`}
                width="14"
                height="14"
                viewBox="0 0 24 24"
              >
                <path
                  d="M6 9l6 6 6-6"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {open && (
              <div
                ref={panelRef}
                className="absolute left-0 mt-3 w-52 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 animate-fade-in"
              >
                <Link
                  to="/selayang-pandang"
                  className={`block px-4 py-2 hover:bg-gray-50 ${
                    isActive("/selayang-pandang") ? "text-[#18446C] font-bold" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Selayang Pandang
                </Link>
                <Link
                  to="/visi-misi"
                  className={`block px-4 py-2 hover:bg-gray-50 ${
                    isActive("/visi-misi") ? "text-[#18446C] font-bold" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Visi & Misi
                </Link>
                <Link
                  to="/structural"
                  className={`block px-4 py-2 hover:bg-gray-50 ${
                    isActive("/structural") ? "text-[#18446C] font-bold" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Structural
                </Link>
                <Link
                  to="/document"
                  className={`block px-4 py-2 hover:bg-gray-50 ${
                    isActive("/document") ? "text-[#18446C] font-bold" : ""
                  }`}
                  onClick={() => setOpen(false)}
                >
                  Document
                </Link>
              </div>
            )}
          </div>

          <Link to="/page" className="hover:text-[#18446C]">Berita</Link>
          <Link to="/sipkerja" className="hover:text-[#18446C]">Hasil Kepuasan Masyarakat</Link>
        </nav>
      </div>
    </header>
  );
}
