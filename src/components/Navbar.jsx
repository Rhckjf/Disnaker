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

  // tutup panel saat pindah halaman
  useEffect(() => setOpen(false), [location]);

  // tutup jika klik di luar & tombol Esc
  useEffect(() => {
    const onDown = (e) => {
      if (!open) return;
      if (
        panelRef.current && !panelRef.current.contains(e.target) &&
        btnRef.current && !btnRef.current.contains(e.target)
      ) setOpen(false);
    };
    const onEsc = (e) => e.key === "Escape" && setOpen(false);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onEsc);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onEsc);
    };
  }, [open]);

  // shadow lembut saat scroll (kecuali panel open)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const itemBase =
    "mega-item flex items-center gap-3 px-6 py-3 rounded-lg hover:bg-gray-50 transition text-gray-800";

  return (
    <header
      className={`sticky top-0 z-[60] relative animate-navbar ${
        open ? "bg-white shadow-none" : scrolled ? "bg-white shadow" : "bg-white shadow-sm"
      }`}
    >
      {/* BAR ATAS */}
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src="/logorev.png" alt="Logo" className="h-12 animate-fade-in" />
        </div>

        <nav className="flex gap-8 font-semibold text-gray-800 items-center">
          <Link to="/" className="nav-link no-underline">Beranda</Link>

          {/* Profile: klik untuk buka */}
          <button
            ref={btnRef}
            type="button"
            onClick={() => setOpen((v) => !v)}
            className={`nav-link no-underline flex items-center gap-2 ${profileActive ? "text-[#18446C] font-bold" : ""}`}
            aria-haspopup="true"
            aria-expanded={open}
          >
            Profile
            <svg className={`caret ${open ? "open" : ""}`} width="14" height="14" viewBox="0 0 24 24">
              <path d="M6 9l6 6 6-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </button>

          <Link to="/page" className="nav-link no-underline">Berita</Link>
          <Link to="/sipkerja" className="nav-link no-underline">Hasil Kepuasan Masyarakat</Link>
        </nav>
      </div>

      {/* PANEL OVERLAY: menindih konten, warna sama, tanpa garis pemisah */}
      <div
        ref={panelRef}
        className={`absolute left-0 right-0 top-full z-[80] pointer-events-none ${
          open ? "panel-open" : "panel-closed"
        }`}
      >
        <div
          className="
            pointer-events-auto mx-auto max-w-7xl px-4 py-5
            bg-white shadow-xl rounded-b-2xl
            mt-[-1px]   /* overlap 1px: hilangkan garis sambungan */
          "
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-2">
            {/* Selayang Pandang */}
            <Link to="/selayang-pandang" onClick={() => setOpen(false)} className={itemBase}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#18446C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
              </svg>
              <span className={isActive("/selayang-pandang") ? "font-bold text-[#18446C]" : ""}>Selayang Pandang</span>
            </Link>

            {/* Visi & Misi */}
            <Link to="/visi-misi" onClick={() => setOpen(false)} className={itemBase}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#18446C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="8"/><circle cx="12" cy="12" r="3"/><line x1="22" y1="12" x2="18" y2="12"/><line x1="6" y1="12" x2="2" y2="12"/>
              </svg>
              <span className={isActive("/visi-misi") ? "font-bold text-[#18446C]" : ""}>Visi & Misi</span>
            </Link>

            {/* Structural */}
            <Link to="/structural" onClick={() => setOpen(false)} className={itemBase}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#18446C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="10" y="3" width="4" height="4" rx="1"/><rect x="3" y="17" width="4" height="4" rx="1"/>
                <rect x="17" y="17" width="4" height="4" rx="1"/><path d="M12 7v4M12 11H7.5a1.5 1.5 0 0 0-1.5 1.5V17M12 11h4.5a1.5 1.5 0 0 1 1.5 1.5V17"/>
              </svg>
              <span className={isActive("/structural") ? "font-bold text-[#18446C]" : ""}>Structural</span>
            </Link>

            {/* Document */}
            <Link to="/document" onClick={() => setOpen(false)} className={itemBase}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#18446C" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><path d="M14 2v6h6"/>
              </svg>
              <span className={isActive("/document") ? "font-bold text-[#18446C]" : ""}>Document</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
