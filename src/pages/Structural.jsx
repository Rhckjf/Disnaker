// src/pages/Structural.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Structural() {
  return (
    <>
      <Navbar />

      {/* ===== HERO: blur biru ===== */}
      <section
        className="relative h-[280px] sm:h-[340px] text-white"
        style={{
          backgroundImage: "url('/gedung.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#18446C]/60 backdrop-blur-sm" />
        <div className="relative z-10 max-w-5xl mx-auto h-full px-4 md:px-6 flex flex-col justify-end items-start pb-8 sm:pb-10">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Structural
          </h1>
          <p className="text-white/85 text-sm sm:text-base mt-2 max-w-xl">
            Struktur organisasi pemerintah daerah yang menggambarkan hubungan kerja antar bagian.
          </p>
        </div>
      </section>

      {/* ===== BODY: panel glass modern ===== */}
      <section className="bg-[#F6F7F9] dark:bg-[#0A0F18]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-6 sm:-mt-8 pb-12">
          <article
            className="backdrop-blur-md rounded-2xl shadow-sm
                       bg-white/80 dark:bg-white/5
                       border border-white/30 dark:border-white/10
                       p-6 md:p-8"
          >
            <div className="mb-6">
              <p className="text-[14px] md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
                Berikut adalah struktur organisasi pemerintah daerah yang menggambarkan hubungan kerja antar bagian.
              </p>
            </div>

            <div className="rounded-[20px] bg-slate-50 border border-slate-200 shadow-sm overflow-hidden dark:bg-white/5 dark:border-white/10">
              <img
                src="/structural.png"
                alt="Structural"
                className="w-full h-auto object-contain"
                onError={(e) => {
                  e.currentTarget.outerHTML =
                    '<div class="h-[220px] grid place-items-center text-slate-500">Placeholder Struktur (unggah /public/structural.png)</div>';
                }}
              />
            </div>

            {/* tombol unduh PDF opsional */}
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
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
