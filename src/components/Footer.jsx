// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaTwitter, FaFacebook, FaYoutube } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#18446C] text-white">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Kiri: Logo & sosmed */}
        <div className="flex flex-col items-center text-center">
          <img src="/logo.png" alt="Logo Disnaker" className="w-36 h-36 mb-4" />
          <div className="flex gap-5 text-xl">
            <a href="#" className="hover:text-gray-200"><FaTwitter /></a>
            <a href="#" className="hover:text-gray-200"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-200"><FaFacebook /></a>
            <a href="#" className="hover:text-gray-200"><FaYoutube /></a>
          </div>
        </div>

        {/* Tengah: Info */}
        <div className="text-left">
          <h3 className="font-bold uppercase text-lg pb-2 mb-3 border-b border-white/20">
            DINAS KETENAGAKERJAAN KABUPATEN BEKASI
          </h3>
          <p className="text-sm whitespace-pre-line leading-relaxed mb-3">
            Sukamahi, Kec. Cikarang Pusat,
            {"\n"}Kabupaten Bekasi, Jawa Barat 17530
          </p>
          <p className="text-sm mb-2"><span className="font-semibold">Email:</span> disnaker@bekasikab.go.id</p>
          <p className="text-sm mb-1"><span className="font-semibold">Telp:</span> (021) 000000</p>
          <p className="text-sm"><span className="font-semibold">Fax:</span> (021) 000000</p>
        </div>

        {/* Kanan: Map */}
        <div className="flex justify-center">
          <iframe
            src="https://www.google.com/maps?q=Dinas%20Ketenagakerjaan%20Kabupaten%20Bekasi&output=embed"
            width="300"
            height="200"
            style={{ border: 0 }}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Peta Disnaker Kabupaten Bekasi"
            className="rounded-md shadow-md border border-white/10"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto py-4 px-6 text-center text-sm">
          &copy; {new Date().getFullYear()} Dinas Ketenagakerjaan Kabupaten Bekasi.
          <span className="font-semibold"> All rights reserved.</span>
        </div>
      </div>
    </footer>
  );
}
