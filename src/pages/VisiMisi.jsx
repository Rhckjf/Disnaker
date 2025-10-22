// src/pages/VisiMisi.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function VisiMisi() {
  const [typedText, setTypedText] = useState("");
  const fullText = "Visi & Misi";

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
            Arah dan tujuan pelayanan ketenagakerjaan Kabupaten Bekasi.
          </motion.p>
        </div>
      </section>

      {/* ===== BODY SECTION ===== */}
      <section className="bg-[#F6F7F9] dark:bg-[#0A0F18]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-6 sm:-mt-8 pb-12 space-y-8">

          {/* === VISI === */}
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
            <div className="flex items-center gap-3 mb-3">
              <div className="h-3 w-10 rounded-full bg-[#18446C]" />
              <h2 className="text-lg md:text-xl font-semibold text-[#0F172A] dark:text-white">
                Visi
              </h2>
            </div>

            <motion.p
              className="text-[15px] md:text-base leading-relaxed text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              “Mewujudkan tenaga kerja Kabupaten Bekasi yang berdaya saing,
              sejahtera, dan terlindungi.”
            </motion.p>
          </motion.article>

          {/* === MISI === */}
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
            <div className="flex items-center gap-3 mb-3">
              <div className="h-3 w-10 rounded-full bg-[#18446C]" />
              <h2 className="text-lg md:text-xl font-semibold text-[#0F172A] dark:text-white">
                Misi
              </h2>
            </div>

            <motion.ul
              className="list-decimal list-inside space-y-2 text-[15px] md:text-base leading-relaxed text-slate-700 dark:text-slate-300"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <li>
                Meningkatkan kualitas dan kompetensi tenaga kerja melalui
                pelatihan dan sertifikasi.
              </li>
              <li>
                Memperluas kesempatan kerja serta memperkuat hubungan dengan
                dunia industri.
              </li>
              <li>
                Memberikan perlindungan dan pengawasan ketenagakerjaan yang
                berkeadilan.
              </li>
              <li>
                Mengembangkan layanan ketenagakerjaan yang transparan serta
                profesional.
              </li>
            </motion.ul>
          </motion.article>
        </div>
      </section>

      <Footer />
    </>
  );
}
