import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false); // dropdown desktop
  const [menuOpen, setMenuOpen] = useState(false); // sidebar mobile
  const [profileMobileOpen, setProfileMobileOpen] = useState(false); // submenu mobile
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const panelRef = useRef(null);
  const btnRef = useRef(null);

  const PROFILE_ROUTES = [
    "/selayang-pandang",
    "/visi-misi",
    "/structural",
    "/document",
  ];
  const isActive = (p) =>
    location.pathname === p || location.pathname.startsWith(p + "/");
  const profileActive = PROFILE_ROUTES.some(isActive);

  useEffect(() => {
    setOpen(false);
    setMenuOpen(false);
    setProfileMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const onDown = (e) => {
      if (!open) return;
      if (
        panelRef.current &&
        !panelRef.current.contains(e.target) &&
        btnRef.current &&
        !btnRef.current.contains(e.target)
      )
        setOpen(false);
    };
    document.addEventListener("mousedown", onDown);
    return () => document.removeEventListener("mousedown", onDown);
  }, [open]);

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

        {/* Tombol Hamburger */}
        <button
          className="md:hidden text-[#18446C] text-3xl focus:outline-none"
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        {/* Navigasi Desktop */}
        <nav className="hidden md:flex gap-8 font-semibold text-gray-800 items-center">
          <Link to="/" className="hover:text-[#18446C]">
            Beranda
          </Link>

          {/* Dropdown Profile */}
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

            {open && (
              <div
                ref={panelRef}
                className="absolute left-0 mt-3 w-52 bg-white shadow-lg rounded-lg overflow-hidden border border-gray-100 animate-fade-in"
              >
                <Link
                  to="/selayang-pandang"
                  className={`block px-4 py-2 hover:bg-gray-50 ${
                    isActive("/selayang-pandang")
                      ? "text-[#18446C] font-bold"
                      : ""
                  }`}
                >
                  Selayang Pandang
                </Link>
                <Link
                  to="/visi-misi"
                  className={`block px-4 py-2 hover:bg-gray-50 ${
                    isActive("/visi-misi") ? "text-[#18446C] font-bold" : ""
                  }`}
                >
                  Visi & Misi
                </Link>
                <Link
                  to="/structural"
                  className={`block px-4 py-2 hover:bg-gray-50 ${
                    isActive("/structural") ? "text-[#18446C] font-bold" : ""
                  }`}
                >
                  Structural
                </Link>
                <Link
                  to="/document"
                  className={`block px-4 py-2 hover:bg-gray-50 ${
                    isActive("/document") ? "text-[#18446C] font-bold" : ""
                  }`}
                >
                  Document
                </Link>
              </div>
            )}
          </div>

          <Link to="/page" className="hover:text-[#18446C]">
            Berita
          </Link>
          <Link to="/sipkerja" className="hover:text-[#18446C]">
            Hasil Kepuasan Masyarakat
          </Link>
        </nav>
      </div>

      {/* === MOBILE SIDEBAR MENU === */}
      {menuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black/30 z-[59] animate-fade-in"
            onClick={() => setMenuOpen(false)}
          />
          {/* Sidebar */}
          <div className="fixed top-0 right-0 w-64 h-full bg-white z-[60] shadow-lg animate-slide-left flex flex-col p-6 overflow-y-auto">
            <h3 className="text-[#18446C] text-xl font-bold mb-6">Menu</h3>

            <Link
              to="/"
              className="py-2 text-gray-800 font-semibold hover:text-[#18446C]"
            >
              Beranda
            </Link>

            {/* Submenu Profile Klik */}
            <div className="flex flex-col mt-3">
              <button
                onClick={() => setProfileMobileOpen((v) => !v)}
                className="flex justify-between items-center text-gray-700 font-semibold mb-2 w-full"
              >
                <span>Profile</span>
                <svg
                  className={`w-4 h-4 transform transition-transform duration-200 ${
                    profileMobileOpen ? "rotate-180" : ""
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>

              {profileMobileOpen && (
                <div className="flex flex-col ml-3 text-sm text-gray-600 space-y-1 animate-fade-in">
                  <Link to="/selayang-pandang" className="hover:text-[#18446C]">
                    Selayang Pandang
                  </Link>
                  <Link to="/visi-misi" className="hover:text-[#18446C]">
                    Visi & Misi
                  </Link>
                  <Link to="/structural" className="hover:text-[#18446C]">
                    Structural
                  </Link>
                  <Link to="/document" className="hover:text-[#18446C]">
                    Document
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/page"
              className="py-3 text-gray-800 font-semibold hover:text-[#18446C]"
            >
              Berita
            </Link>
            <Link
              to="/sipkerja"
              className="py-3 text-gray-800 font-semibold hover:text-[#18446C]"
            >
              Hasil Kepuasan Masyarakat
            </Link>

            <div className="mt-auto text-sm text-gray-400 pt-6 border-t border-gray-100">
              © {new Date().getFullYear()} Disnaker Bekasi
            </div>
          </div>
        </>
      )}
    </header>
  );
}
