// src/pages/Document.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function Document() {
  const docs = [
    { id: 1, title: "Rencana Kerja Divisi 2025", type: "PDF", size: "1.2 MB", date: "2025-07-01" },
    { id: 2, title: "Notulen Rapat Mingguan", type: "DOCX", size: "320 KB", date: "2025-06-27" },
    { id: 3, title: "Anggaran Program Q3", type: "XLSX", size: "860 KB", date: "2025-06-15" },
    { id: 4, title: "Panduan Operasional", type: "PDF", size: "2.1 MB", date: "2025-05-20" },
  ];

  const [search, setSearch] = useState("");
  const filteredDocs = docs.filter((d) =>
    d.title.toLowerCase().includes(search.toLowerCase())
  );

  // === Animasi ketikan di hero ===
  const [typedText, setTypedText] = useState("");
  const fullText = "Documents";

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
            Semua dokumen penting di satu tempat.
          </motion.p>
        </div>
      </section>

      {/* ===== BODY SECTION ===== */}
      <section className="bg-[#F6F7F9] dark:bg-[#0A0F18]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-6 sm:-mt-8 pb-12 space-y-8">
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
            {/* Heading bergaya “Daftar Dokumen” */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-3 w-10 rounded-full bg-[#18446C]" />
              <h2 className="text-lg md:text-xl font-semibold text-[#0F172A] dark:text-white">
                Daftar Dokumen
              </h2>
            </div>

            {/* Search bar + button */}
            <motion.div
              className="mb-6 flex gap-2"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
            >
              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Cari dokumen..."
                className="flex-1 rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#18446C] focus:ring-2 focus:ring-[#18446C]/20 transition"
              />
              <button
                className="rounded-xl bg-[#18446C] text-white px-5 py-2.5 text-sm hover:opacity-90 transition"
              >
                Search
              </button>
            </motion.div>

            {/* Grid Documents */}
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.15,
                  },
                },
              }}
            >
              {filteredDocs.length > 0 ? (
                filteredDocs.map((d) => (
                  <motion.div
                    key={d.id}
                    className="backdrop-blur-md rounded-2xl shadow-sm
                               bg-white/80 dark:bg-white/5
                               border border-white/30 dark:border-white/10
                               p-4 flex gap-3"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                  >
                    <div className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center text-slate-700 shrink-0 dark:bg-white/10 dark:text-white/80">
                      <FileIcon type={d.type} />
                    </div>
                    <div className="min-w-0">
                      <h3 className="font-semibold text-[14.5px] text-slate-800 truncate dark:text-white">
                        {d.title}
                      </h3>
                      <div className="text-[12px] text-slate-500 mt-0.5 dark:text-slate-400">
                        <span className="mr-2">{d.type}</span>•{" "}
                        <span className="mx-2">{d.size}</span>•{" "}
                        <span className="ml-2">{formatDate(d.date)}</span>
                      </div>
                      <div className="mt-3 flex gap-2">
                        <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-[12.5px] hover:bg-slate-50 dark:border-white/20 dark:hover:bg-white/10">
                          View
                        </button>
                        <button className="rounded-lg bg-[#18446C] text-white px-3 py-1.5 text-[12.5px] hover:opacity-90">
                          Download
                        </button>
                      </div>
                    </div>
                  </motion.div>
                ))
              ) : (
                <p className="text-sm text-slate-500 dark:text-slate-400 col-span-full">
                  Tidak ada dokumen yang cocok.
                </p>
              )}
            </motion.div>
          </motion.article>
        </div>
      </section>

      <Footer />
    </>
  );
}

/* ===== Helpers ===== */
function formatDate(iso) {
  try {
    const d = new Date(iso);
    return d.toLocaleDateString("id-ID", { day: "2-digit", month: "short", year: "numeric" });
  } catch {
    return iso;
  }
}

function FileIcon({ type }) {
  const map = {
    PDF: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-80">
        <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <text x="8" y="17" fontSize="7" fill="white">
          PDF
        </text>
      </svg>
    ),
    DOCX: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-80">
        <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <text x="6.5" y="17" fontSize="7" fill="white">
          DOC
        </text>
      </svg>
    ),
    XLSX: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-80">
        <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <text x="7" y="17" fontSize="7" fill="white">
          XLS
        </text>
      </svg>
    ),
  };
  return map[type] || map.PDF;
}
