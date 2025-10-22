// src/pages/Page.jsx
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";

export default function Page() {
  const [search, setSearch] = useState("");

  // === DATA BERITA ===
  const berita = [
    {
      id: 1,
      title: "Lulusan President University Dipastikan Lulus CPNS",
      date: "10 Januari 2025",
      img: "/news5.png",
      desc: "Bupati Bekasi bersama pihak Disnaker menyampaikan apresiasi kepada lulusan President University yang telah berhasil melalui seleksi CPNS.",
    },
    {
      id: 2,
      title: "Peresmian Gedung Baru Disnaker Kabupaten Bekasi",
      date: "22 Januari 2025",
      img: "/news1.png",
      desc: "Disnaker Kabupaten Bekasi resmi membuka gedung baru di kawasan pemerintahan Cikarang.",
    },
    {
      id: 3,
      title: "Makan Bersama Menteri Pertahanan Prabowo Subianto",
      date: "20 Januari 2025",
      img: "/news2.png",
      desc: "Acara santai makan bersama membahas sinergi dunia kerja dan pembangunan nasional.",
    },
    {
      id: 4,
      title: "Pembukaan Program Magang Paid di Atas UMR",
      date: "18 Januari 2025",
      img: "/news3.png",
      desc: "Program magang baru bagi mahasiswa dengan kompensasi di atas UMR.",
    },
    {
      id: 5,
      title: "Pelatihan Digital Skill untuk Pekerja Muda di Bekasi",
      date: "10 Oktober 2025",
      img: "/news4.png",
      desc: "Disnaker Bekasi menggelar pelatihan keterampilan digital untuk mendukung transformasi ekonomi digital.",
    },
    {
      id: 6,
      title: "Job Fair Bekasi 2025 Resmi Dibuka",
      date: "12 Oktober 2025",
      img: "/news6.png",
      desc: "Ratusan perusahaan berpartisipasi dalam Job Fair 2025 yang dibuka oleh Bupati Bekasi.",
    },
    {
      id: 7,
      title: "Sosialisasi Perlindungan Tenaga Kerja Migran",
      date: "8 Oktober 2025",
      img: "/news7.png",
      desc: "Disnaker Bekasi memberikan edukasi pentingnya perlindungan bagi pekerja migran Indonesia.",
    },
    {
      id: 8,
      title: "Program Magang Bersertifikat Dimulai",
      date: "5 Oktober 2025",
      img: "/news8.png",
      desc: "Mahasiswa Bekasi kini dapat mengikuti program magang bersertifikat dari Disnaker.",
    },
    {
      id: 9,
      title: "Peningkatan Pelayanan Publik Disnaker Bekasi",
      date: "2 Oktober 2025",
      img: "/news9.png",
      desc: "Disnaker terus berinovasi dalam memberikan pelayanan cepat dan transparan kepada masyarakat.",
    },
    {
      id: 10,
      title: "Kenaikan Emas Berkali-kali Lipat",
      date: "20 Oktober 2025",
      img: "/news10.png",
      desc: "Harga emas dunia terus melonjak akibat inflasi global dan ketidakpastian ekonomi.",
    },
    {
      id: 11,
      title: "Pemerintah Resmi Menetapkan Roblox Sebagai Meta Kedua Indonesia",
      date: "19 Oktober 2025",
      img: "/news11.png",
      desc: "Langkah berani ini membuka peluang besar bagi ekonomi digital dan kreator muda.",
    },
    {
      id: 12,
      title: "Pengusaha Muda Inisial Y Sukses di Bidang Crypto dan Saham",
      date: "18 Oktober 2025",
      img: "/news12.png",
      desc: "Kisah inspiratif pengusaha muda asal Bekasi yang sukses membangun portofolio investasi digital.",
    },
    {
      id: 13,
      title: "Rapat Koordinasi Ketenagakerjaan se-Jawa Barat",
      date: "1 Oktober 2025",
      img: "/news13.png",
      desc: "Bekasi menjadi tuan rumah rapat koordinasi yang dihadiri oleh seluruh kepala dinas ketenagakerjaan Jawa Barat.",
    },
  ];

  const filteredNews = berita.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* === HERO SECTION === */}
      <section className="relative flex flex-col items-center justify-center h-[260px] text-white text-center">
        <div className="absolute inset-0 bg-gradient-to-r from-[#18446C] to-[#0F2C4C]" />
        <div className="relative z-10">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-2">
            Berita & Informasi
          </h1>
          <p className="text-gray-200 text-sm md:text-base mb-6">
            Update terkini seputar kegiatan dan program ketenagakerjaan Bekasi
          </p>

          {/* === Search bar di bawah judul === */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative w-[90vw] sm:w-[500px] mx-auto"
          >
            <input
              type="text"
              placeholder="Cari berita..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full rounded-full border border-gray-300 bg-white/95 px-5 py-3 pl-12 text-sm text-gray-700 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#18446C]/40 focus:border-[#18446C] transition"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-4 top-3.5 h-5 w-5 text-[#18446C]/70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </motion.div>
        </div>
      </section>

      {/* === BODY BERITA === */}
      <main className="bg-[#F8FAFC] py-16 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 space-y-12">
          <p className="text-center text-sm text-gray-600">
            Menampilkan {filteredNews.length} dari {berita.length} berita.
          </p>

          {/* === BARIS 1 (geser kiri) === */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: ["0%", `-${filteredNews.length * 300}px`] }}
              transition={{
                repeat: Infinity,
                duration: 80,
                ease: "linear",
              }}
            >
              {[...filteredNews, ...filteredNews].map((item, i) => (
                <motion.div
                  key={`atas-${i}`}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[300px] bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                    <h2 className="text-[15px] font-semibold text-[#18446C] leading-snug line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* === BARIS 2 (geser kanan) === */}
          <div className="overflow-hidden">
            <motion.div
              className="flex gap-6"
              animate={{ x: [`-${filteredNews.length * 300}px`, "0%"] }}
              transition={{
                repeat: Infinity,
                duration: 85,
                ease: "linear",
              }}
            >
              {[...filteredNews, ...filteredNews].map((item, i) => (
                <motion.div
                  key={`bawah-${i}`}
                  whileHover={{ scale: 1.05 }}
                  className="min-w-[300px] bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden cursor-pointer hover:shadow-lg transition"
                >
                  <img
                    src={item.img}
                    alt={item.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">{item.date}</p>
                    <h2 className="text-[15px] font-semibold text-[#18446C] leading-snug line-clamp-2">
                      {item.title}
                    </h2>
                    <p className="text-xs text-gray-600 mt-1 line-clamp-2">
                      {item.desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
