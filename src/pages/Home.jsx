// src/pages/Home.jsx
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import "./Home.css";

import {
  FaBullhorn,
  FaCalendarAlt,
  FaComments,
  FaSearch,
  FaClipboardList,
  FaChartPie,
  FaUserTie,
  FaFolderOpen,
  FaGlobe,
  FaBriefcase,
  FaHandsHelping,
  FaInfoCircle,
} from "react-icons/fa";

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeServiceSlide, setActiveServiceSlide] = useState(0);
  const [activeNewsIndex, setActiveNewsIndex] = useState(0);

  // === Data Berita ===
  const newsItems = [
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
  ];

  // === Auto slide berita ===
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveNewsIndex((prev) => (prev + 1) % newsItems.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [newsItems.length]);

  // === Layanan ===
  const services = [
    { icon: <FaBullhorn />, title: "Pusat Karir" },
    { icon: <FaCalendarAlt />, title: "Job Fair" },
    { icon: <FaComments />, title: "Pengaduan" },
    { icon: <FaSearch />, title: "Lacak Aduan" },
    { icon: <FaClipboardList />, title: "SOP Pelayanan" },
    { icon: <FaChartPie />, title: "Survei Kepuasan" },
    { icon: <FaUserTie />, title: "Lapor TKA" },
    { icon: <FaFolderOpen />, title: "Dokumen Publik" },
    { icon: <FaGlobe />, title: "Kemnaker RI" },
    { icon: <FaBriefcase />, title: "Program Magang" },
    { icon: <FaHandsHelping />, title: "Lapor Go.Id" },
    { icon: <FaInfoCircle />, title: "PPID Disnaker" },
  ];

  const servicesPerSlide = 6;
  const totalSlides = Math.ceil(services.length / servicesPerSlide);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveServiceSlide((prev) => (prev + 1) % totalSlides);
    }, 7000);
    return () => clearInterval(interval);
  }, [totalSlides]);

  const handleSearch = (e) => {
    e.preventDefault();
    if (!searchQuery.trim()) return;
    alert(`Mencari: ${searchQuery}`);
  };

  // === Variants Animasi Smooth ===
  const fadeUpSmooth = {
    hidden: { opacity: 0, y: 35 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 1.3, ease: "easeInOut" },
    },
  };

  const parentSmooth = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
  };

  return (
    <>
      <Navbar />

      {/* === HERO SECTION === */}
      <section className="relative flex items-center justify-center min-h-[70vh] text-white overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-[#18446C] to-[#0F2C4C]" />

        <motion.div
          className="relative z-10 max-w-4xl mx-auto text-center px-6"
          initial="hidden"
          animate="visible"
          variants={parentSmooth}
        >
          <motion.h1
            className="text-4xl md:text-5xl font-extrabold leading-tight mb-3"
            variants={fadeUpSmooth}
          >
            Layanan Publik Disnaker
          </motion.h1>

          <motion.h2
            className="text-4xl md:text-6xl font-extrabold mb-6"
            variants={fadeUpSmooth}
          >
            Kabupaten Bekasi
          </motion.h2>

          <motion.p
            className="text-lg md:text-xl text-gray-200 mb-10"
            variants={fadeUpSmooth}
          >
            Akses layanan ketenagakerjaan dengan mudah, cepat, dan transparan
          </motion.p>

          <motion.form
            onSubmit={handleSearch}
            className="w-full max-w-2xl mx-auto flex bg-white rounded-full overflow-hidden shadow-lg border border-gray-200"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari layanan, lowongan, atau informasi..."
              className="flex-1 px-6 py-3 text-gray-700 text-base focus:outline-none focus:ring-2 focus:ring-[#18446C]"
            />
            <button
              type="submit"
              className="bg-[#18446C] hover:bg-[#133a5a] px-6 flex items-center justify-center transition-colors"
            >
              <FaSearch className="text-white text-xl" />
            </button>
          </motion.form>
        </motion.div>
      </section>

      {/* === LAYANAN UTAMA === */}
      <section className="bg-white py-16">
        <motion.div
          className="max-w-7xl mx-auto px-6 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={parentSmooth}
        >
          <motion.h2
            className="text-2xl md:text-3xl font-bold text-[#18446C] mb-10"
            variants={fadeUpSmooth}
          >
            Layanan Utama
          </motion.h2>

          <motion.div
            className="overflow-hidden relative"
            variants={fadeUpSmooth}
            transition={{ duration: 1 }}
          >
            <div
              className="flex transition-transform duration-[1200ms] ease-[cubic-bezier(0.77,0,0.175,1)] w-[200%]"
              style={{ transform: `translateX(-${activeServiceSlide * 50}%)` }}
            >
              {[0, 1].map((slide) => (
                <div
                  key={slide}
                  className="w-1/2 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-6 justify-items-center flex-shrink-0"
                >
                  {services
                    .slice(slide * 6, slide * 6 + 6)
                    .map((s, i) => (
                      <motion.div
                        key={i}
                        className="service-card group w-[120px] h-[120px] sm:w-[110px] sm:h-[110px] md:w-[130px] md:h-[130px]"
                        variants={fadeUpSmooth}
                        transition={{ duration: 1, delay: i * 0.05 }}
                      >
                        <div className="text-[#18446C] text-2xl mb-2 group-hover:scale-110 transition-transform duration-500 ease-in-out">
                          {s.icon}
                        </div>
                        <h3 className="font-semibold text-[13px] text-[#18446C] leading-tight">
                          {s.title}
                        </h3>
                      </motion.div>
                    ))}
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>

      {/* === BERITA === */}
      <section id="berita" className="bg-white py-20">
        <motion.div
          className="max-w-7xl mx-auto px-6"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={parentSmooth}
        >
          <motion.div
            className="flex flex-col md:flex-row justify-between items-center mb-10 text-center md:text-left"
            variants={fadeUpSmooth}
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-extrabold text-[#18446C] tracking-tight mb-2">
                Berita & Update Terbaru
              </h2>
              <p className="text-gray-600 text-base md:text-lg font-medium">
                Dapatkan informasi terkini seputar kegiatan dan program Disnaker Kabupaten Bekasi
              </p>
            </div>

            <Link
              to="/page"
              className="mt-6 md:mt-0 inline-block bg-[#18446C] text-white px-6 py-2.5 rounded-full shadow-md hover:bg-[#133a5a] hover:shadow-lg transition-all duration-500"
            >
              Lihat Semua Berita →
            </Link>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8 items-stretch">
            <motion.div
              className="relative rounded-2xl overflow-hidden shadow-lg h-full min-h-[420px]"
              variants={fadeUpSmooth}
            >
              {newsItems.map((news, index) => (
                <div
                  key={news.id}
                  className={`absolute inset-0 transition-opacity duration-[1600ms] ease-in-out ${
                    activeNewsIndex === index
                      ? "opacity-100 z-10"
                      : "opacity-0 z-0"
                  }`}
                >
                  <img
                    src={news.img}
                    alt={news.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#18446C]/90 via-[#18446C]/60 to-transparent p-8 flex flex-col justify-end">
                    <h3 className="text-2xl font-bold text-white mb-3">
                      {news.title}
                    </h3>
                    <p className="text-sm text-gray-100">{news.date}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            <motion.div
              className="flex flex-col justify-between gap-5"
              variants={parentSmooth}
            >
              {newsItems.slice(1, 4).map((news) => (
                <motion.div
                  key={news.id}
                  className="bg-white border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all p-4 flex gap-4 items-center h-[120px]"
                  variants={fadeUpSmooth}
                >
                  <div className="bg-gray-100 rounded-lg overflow-hidden w-32 h-20 flex-shrink-0 shadow-sm">
                    <img
                      src={news.img}
                      alt={news.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex flex-col justify-between flex-1">
                    <div>
                      <h4 className="font-semibold text-[#18446C] text-[14px] mb-1 line-clamp-2">
                        {news.title}
                      </h4>
                      <p className="text-xs text-gray-500 mb-1">{news.date}</p>
                      <p className="text-xs text-gray-600 line-clamp-2">
                        {news.desc}
                      </p>
                    </div>
                    <button className="text-[#18446C] font-semibold text-xs mt-1 hover:text-[#0F2C4C] transition-colors">
                      Baca Selengkapnya →
                    </button>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </section>

      <Footer />
    </>
  );
}
