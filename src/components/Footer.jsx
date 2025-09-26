// src/components/Footer.jsx
import React from "react";
import { FaInstagram, FaTwitter, FaCommentDots } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B2C4D] text-white py-6 px-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-6">
        
        {/* Kiri - Logo & Alamat */}
        <div className="flex-1 text-left">
          <div className="flex items-start gap-3">
            <img
              src="/logo.png" // ganti sesuai logo instansi
              alt="Logo"
              className="w-16 h-16"
            />
            <div>
              <h3 className="font-bold">DINAS KETENAGAKERJAAN</h3>
              <p className="text-sm leading-relaxed">
                Sukamahi, Kec. Cikarang Pusat, <br />
                Kabupaten Bekasi, Jawa Barat 17530
              </p>
            </div>
          </div>
        </div>

        {/* Tengah - Kontak & Sosmed */}
        <div className="flex-1 text-center">
          <div>
            <p className="font-semibold">
              EMAIL: <span className="font-normal">example@gmail.com</span>
            </p>
            <p className="font-semibold">
              TELPON: <span className="font-normal">+62 8432 2324</span>
            </p>
          </div>
          <div className="flex justify-center gap-6 mt-3 text-2xl">
            <a href="#" className="hover:text-gray-300">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-gray-300">
              <FaCommentDots />
            </a>
          </div>
        </div>

       {/* Bagian kanan: Google Maps */}
    <div className="w-full md:w-1/3 flex justify-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.2194212325617!2d107.1746316!3d-6.3656432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e699be0e723f74b%3A0xa6c7b6a84003a947!2sDinas%20Kependudukan%20dan%20Catatan%20Sipil%20Kabupaten%20Bekasi!5e0!3m2!1sid!2sid!4v1758783836904!5m2!1sid!2sid"
        width="300"
        height="200"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
        </div>
      </div>
    </footer>
  );
}
