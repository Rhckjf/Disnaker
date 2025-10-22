// src/pages/SelayangPandang.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function SelayangPandang() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Selayang Pandang";

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

  const tugas = [
    { title: "Pengembangan\nStrategi", desc: "coming soon" },
    { title: "Koordinasi", desc: "coming soon" },
    { title: "Evaluasi", desc: "coming soon" },
    { title: "Monitoring", desc: "coming soon" },
  ];

  return (
    <>
      <Navbar />

      {/* ===== HERO SECTION ===== */}
      <section className="relative h-[280px] sm:h-[340px] text-white overflow-hidden">
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
            Sekilas informasi tentang Dinas Tenaga Kerja Kabupaten Bekasi.
          </motion.p>
        </div>
      </section>

      {/* ===== BODY SECTION ===== */}
      <section className="bg-[#F6F7F9] dark:bg-[#0A0F18]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-6 sm:-mt-8 pb-16 space-y-14">

          {/* === SEKILAS DISNAKER === */}
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
            {/* Heading bergaya Daftar Dokumen */}
            <div className="flex items-center gap-3 mb-4">
              <div className="h-3 w-10 rounded-full bg-[#18446C]" />
              <h2 className="text-lg sm:text-xl font-semibold text-[#0A0F18] dark:text-white">
                Sekilas Disnaker
              </h2>
            </div>

            <p className="text-[13.5px] md:text-base leading-relaxed text-slate-700 dark:text-slate-300 max-w-[65ch]">
              Selamat datang di situs Dinas Tenaga Kerja Kabupaten Bekasi.
              Melalui media ini kami berupaya memberikan informasi
              ketenagakerjaan yang cepat, transparan, dan bermanfaat bagi
              masyarakat. Semoga layanan ini membantu dan mendukung peningkatan
              kualitas tenaga kerja serta kesejahteraan bersama.
            </p>
          </motion.article>

          {/* === TUGAS POKOK === */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-3 w-10 rounded-full bg-[#18446C]" />
              <h2 className="text-lg sm:text-xl font-semibold text-[#0A0F18] dark:text-white">
                Tugas Pokok
              </h2>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tugas.map((t, i) => (
                <motion.div
                  key={i}
                  className="backdrop-blur-md rounded-2xl shadow-sm
                             bg-white/80 dark:bg-white/5
                             border border-white/30 dark:border-white/10
                             px-5 pt-5 pb-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: i * 0.2 }}
                  viewport={{ once: true }}
                >
                  <div className="h-9 w-9 rounded-full bg-slate-100 grid place-items-center text-slate-700 mb-3 dark:bg-white/10 dark:text-white/70">
                    <DotIcon />
                  </div>
                  <h3 className="font-semibold whitespace-pre-line leading-tight text-[14px] dark:text-white">
                    {t.title}
                  </h3>
                  <p className="text-[12.5px] text-slate-600 leading-relaxed mt-2 dark:text-slate-300">
                    {t.desc}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* === SAMBUTAN KETUA DIVISI === */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="h-3 w-10 rounded-full bg-[#18446C]" />
              <h2 className="text-lg sm:text-xl font-semibold text-[#0A0F18] dark:text-white">
                Sambutan Ketua Divisi
              </h2>
            </div>

            <div
              className="backdrop-blur-md rounded-2xl shadow-sm
                          bg-white/80 dark:bg-white/5
                          border border-white/30 dark:border-white/10
                          p-8 sm:p-10 flex flex-col sm:flex-row items-center sm:items-start gap-8 sm:gap-10"
            >
              {/* Foto Ketua */}
              <motion.div
                className="h-[150px] w-[150px] rounded-full overflow-hidden bg-slate-200 dark:bg-white/10 shrink-0"
                initial={{ scale: 0.8, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
              >
                <img
                  src="/ketua.png"
                  alt="Foto Ketua Divisi"
                  className="object-cover w-full h-full"
                />
              </motion.div>

              {/* Teks Sambutan */}
              <div className="text-center sm:text-left">
                <motion.h4
                  className="font-semibold text-slate-800 mb-3 text-xl dark:text-white"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.3 }}
                  viewport={{ once: true }}
                >
                  Ir. Muhammad Ridwan, S.Kom., M.IT
                </motion.h4>
                <motion.p
                  className="text-[15px] text-slate-600 leading-relaxed max-w-[70ch] dark:text-slate-300"
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  Selamat datang di halaman kami. Dengan semangat kolaborasi dan
                  inovasi, kami berkomitmen untuk menghadirkan pelayanan terbaik
                  bagi masyarakat serta mendukung pengembangan tenaga kerja di
                  Kabupaten Bekasi.
                </motion.p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </>
  );
}

// === ICON ===
function DotIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="opacity-70"
    >
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
