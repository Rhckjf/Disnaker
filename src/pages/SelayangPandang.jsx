// src/pages/SelayangPandang.jsx
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SelayangPandang() {
  const tugas = [
    { title: "Pengembangan\nStrategi", desc: "coming soon ," },
    { title: "Koordinasi", desc: "coming soon ," },
    { title: "Evaluasi", desc: "coming soon ," },
    { title: "Monitoring", desc: "coming soon ," },
  ];

  return (
    <>
      <Navbar />

      {/* ===== HERO: blur biru ===== */}
      <section
        className="relative h-[280px] sm:h-[340px] text-white"
        style={{
          backgroundImage: "url('/col3.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#18446C]/60 backdrop-blur-sm" />
        <div className="relative z-10 max-w-5xl mx-auto h-full px-4 md:px-6 flex flex-col justify-end items-start pb-8 sm:pb-10">
          <h1 className="text-3xl sm:text-5xl font-semibold tracking-tight">
            Selayang Pandang
          </h1>
          <p className="text-white/85 text-sm sm:text-base mt-2 max-w-xl">
            Sekilas informasi tentang Dinas Tenaga Kerja Kabupaten Bekasi.
          </p>
        </div>
      </section>

      {/* ===== BODY: panel glass modern ===== */}
      <section className="bg-[#F6F7F9] dark:bg-[#0A0F18]">
        <div className="max-w-5xl mx-auto px-4 md:px-6 -mt-6 sm:-mt-8 pb-12 space-y-12">
          {/* Panel Sekilas */}
          <article
            className="backdrop-blur-md rounded-2xl shadow-sm
                       bg-white/80 dark:bg-white/5
                       border border-white/30 dark:border-white/10
                       p-6 md:p-8"
          >
            <span className="pill mb-3 inline-flex">Sekilas Disnaker</span>
            <p className="text-[13.5px] md:text-base leading-relaxed text-slate-700 dark:text-slate-300 max-w-[65ch]">
              Selamat datang di situs Dinas Tenaga Kerja Kabupaten Bekasi. Melalui media ini kami berupaya memberikan informasi ketenagakerjaan yang cepat, transparan, dan bermanfaat bagi masyarakat. Semoga layanan ini membantu dan mendukung peningkatan kualitas tenaga kerja serta kesejahteraan bersama.
            </p>
          </article>

          {/* Tugas Pokok */}
          <div>
            <div className="pill mb-3 inline-flex">Tugas Pokok...</div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {tugas.map((t, i) => (
                <div
                  key={i}
                  className="backdrop-blur-md rounded-2xl shadow-sm
                             bg-white/80 dark:bg-white/5
                             border border-white/30 dark:border-white/10
                             px-5 pt-5 pb-6"
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
                </div>
              ))}
            </div>
          </div>

          {/* Sambutan Ketua Divisi */}
          <div>
            <div className="pill mb-3 inline-flex">Sambutan Ketua Divisi</div>
            <div className="backdrop-blur-md rounded-2xl shadow-sm
                            bg-white/80 dark:bg-white/5
                            border border-white/30 dark:border-white/10
                            p-6 sm:p-8 flex items-start gap-6">
              <div className="h-[60px] w-[60px] rounded-full bg-slate-200 shrink-0 dark:bg-white/10" />
              <div>
                <h4 className="font-semibold text-slate-800 mb-2 text-[16px] dark:text-white">
                  Nama Ketua Divisi
                </h4>
                <p className="text-[13.5px] text-slate-600 leading-relaxed max-w-[60ch] dark:text-slate-300">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

function DotIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor" className="opacity-70">
      <circle cx="12" cy="12" r="7" />
    </svg>
  );
}
