// src/pages/VisiMisi.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VisiMisi() {
  return (
    <>
      <Navbar />

      {/* ===== HERO: selalu blur biru ===== */}
      <section
        className="relative h-[280px] sm:h-[340px] text-white"
        style={{
          backgroundImage: "url('/gedung.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* overlay biru blur SELALU aktif */}
        <div className="absolute inset-0 bg-[#18446C]/60 backdrop-blur-sm" />

        {/* teks kiri bawah */}
        <div className="relative z-10 max-w-5xl mx-auto h-full px-4 md:px-6 flex flex-col justify-end items-start pb-8 sm:pb-10">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Visi &amp; Misi
          </h1>
          <p className="text-white/85 text-sm sm:text-base mt-2 max-w-xl">
            Arah dan tujuan pelayanan ketenagakerjaan Kabupaten Bekasi.
          </p>
        </div>
      </section>

      {/* ===== BODY: panel glass modern ===== */}
      <section className="bg-[#F6F7F9] dark:bg-[#0A0F18]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-6 sm:-mt-8 pb-12 space-y-8">
          {/* VISI */}
          <article
            className="backdrop-blur-md rounded-2xl shadow-sm
                       bg-white/80 dark:bg-white/5
                       border border-white/30 dark:border-white/10
                       p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block h-2 w-8 rounded-full bg-[#18446C] dark:bg-white/70" />
              <h2 className="text-lg md:text-xl font-semibold text-[#0F172A] dark:text-white">
                Visi
              </h2>
            </div>
            <p className="text-[15px] md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              “Mewujudkan tenaga kerja Kabupaten Bekasi yang berdaya saing, sejahtera, dan
              terlindungi.”
            </p>
          </article>

          {/* MISI */}
          <article
            className="backdrop-blur-md rounded-2xl shadow-sm
                       bg-white/80 dark:bg-white/5
                       border border-white/30 dark:border-white/10
                       p-6 md:p-8"
          >
            <div className="flex items-center gap-3 mb-3">
              <span className="inline-block h-2 w-8 rounded-full bg-[#18446C] dark:bg-white/70" />
              <h2 className="text-lg md:text-xl font-semibold text-[#0F172A] dark:text-white">
                Misi
              </h2>
            </div>
            <p className="text-[15px] md:text-base leading-relaxed text-slate-700 dark:text-slate-300">
              Meningkatkan kualitas dan kompetensi tenaga kerja melalui pelatihan dan sertifikasi,
              memperluas kesempatan kerja serta memperkuat hubungan dengan dunia industri,
              memberikan perlindungan dan pengawasan ketenagakerjaan yang berkeadilan, dan
              mengembangkan layanan ketenagakerjaan yang transparan serta profesional.
            </p>
          </article>
        </div>
      </section>

      <Footer />
    </>
  );
}
