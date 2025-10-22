import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer
      className="text-white"
      style={{
        background: "linear-gradient(to bottom, #1f3b5b, #18446C)",
      }}
    >
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
        {/* === Kiri: Logo & Sosial Media === */}
        <div className="flex flex-col items-center md:items-center text-center md:text-center">
          <img
            src="/logo.png"
            alt="Logo Disnaker"
            className="w-40 h-40 md:w-44 md:h-44 mb-5 object-contain"
          />
          <div className="flex gap-5 text-2xl">
            <a
              href="#"
              className="hover:text-gray-200 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="hover:text-gray-200 transition-colors"
              aria-label="YouTube"
            >
              <FaYoutube />
            </a>
          </div>
        </div>

        {/* === Tengah: Info Kontak === */}
        <div className="text-center md:text-left">
          <h3 className="font-bold uppercase text-lg pb-2 mb-3 border-b border-white/30">
            DINAS KETENAGAKERJAAN <br /> KABUPATEN BEKASI
          </h3>
          <p className="text-sm leading-relaxed mb-3">
            Sukamahi, Kec. Cikarang Pusat,
            <br />
            Kabupaten Bekasi, Jawa Barat 17530
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Email:</span> disnaker@bekasikab.go.id
          </p>
          <p className="text-sm mb-1">
            <span className="font-semibold">Telp:</span> (021) 000000
          </p>
          <p className="text-sm">
            <span className="font-semibold">Fax:</span> (021) 000000
          </p>
        </div>

        {/* === Kanan: Google Map === */}
        <div className="flex justify-center md:justify-end">
          <iframe
            src="https://www.google.com/maps?q=Dinas%20Ketenagakerjaan%20Kabupaten%20Bekasi&output=embed"
            width="100%"
            height="220"
            style={{ border: 0, maxWidth: "320px", borderRadius: "10px" }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Disnaker Kabupaten Bekasi"
            className="shadow-md"
          />
        </div>
      </div>

      {/* === COPYRIGHT === */}
      <div className="border-t border-white/20 mt-6">
        <div className="max-w-7xl mx-auto py-4 px-6 text-center text-sm text-gray-100">
          © {new Date().getFullYear()}{" "}
          <span className="font-semibold">
            Dinas Ketenagakerjaan Kabupaten Bekasi
          </span>
          . All rights reserved.
        </div>
      </div>
    </footer>
  );
}
