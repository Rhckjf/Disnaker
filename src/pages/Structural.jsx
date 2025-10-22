// src/pages/Structural.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Structural() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Structural";

  // === Animasi Ketikan Tulisan ===
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[280px] sm:h-[340px] text-white overflow-hidden">
        {/* Background animasi blur → jelas */}
        <motion.div
          className="absolute inset-0"
          initial={{ filter: "blur(20px)", opacity: 0 }}
          animate={{ filter: "blur(0px)", opacity: 1 }}
          transition={{ duration: 2 }}
          style={{
            backgroundImage: "url('/col3.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-[#18446C]/60 backdrop-blur-sm" />

        {/* Tulisan hero */}
        <div className="relative z-10 max-w-5xl mx-auto h-full px-4 md:px-6 flex flex-col justify-end items-start pb-8 sm:pb-10">
          <motion.h1
            className="text-3xl sm:text-5xl font-bold tracking-tight"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            {typedText}
            <span className="animate-pulse">|</span>
          </motion.h1>

          <motion.p
            className="text-white/85 text-sm sm:text-base mt-2 max-w-xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 1 }}
          >
            Struktur organisasi pemerintah daerah yang menggambarkan hubungan kerja antar bagian.
          </motion.p>
        </div>
      </section>

      {/* ===== BODY SECTION ===== */}
      <section className="bg-[#F6F7F9] dark:bg-[#0A0F18]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-6 sm:-mt-8 pb-12">
          <motion.article
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
            className="backdrop-blur-md rounded-2xl shadow-sm
                       bg-white/80 dark:bg-white/5
                       border border-white/30 dark:border-white/10
                       p-6 md:p-8"
          >
            {/* Heading gaya “Daftar Dokumen” */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-3 w-10 rounded-full bg-[#18446C]" />
              <h2 className="text-lg sm:text-xl font-semibold text-[#0A0F18] dark:text-white">
                Struktur Organisasi
              </h2>
            </div>

            <motion.p
              className="text-[14px] md:text-base leading-relaxed text-slate-700 dark:text-slate-300 mb-6"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              Berikut adalah struktur organisasi pemerintah daerah yang menggambarkan hubungan kerja antar bagian.
            </motion.p>

            {/* Gambar Struktur */}
            <motion.div
              className="rounded-[20px] bg-slate-50 border border-slate-200 shadow-sm overflow-hidden dark:bg-white/5 dark:border-white/10"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <img
                src="/structur.png"
                alt="Structural"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.outerHTML =
                    '<div class="h-[220px] grid place-items-center text-slate-500">Placeholder Struktur (unggah /public/structural.png)</div>';
                }}
              />
            </motion.div>

            {/* Tombol Unduh (opsional) */}
            {/*
            <div className="mt-6">
              <a
                href="/struktur.pdf"
                download
                className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#18446C] text-white text-sm font-medium hover:bg-[#12324d] transition"
              >
                Unduh Struktur (PDF)
              </a>
            </div>
            */}
          </motion.article>
        </div>
      </section>

      <Footer />
    </>
  );
}
