import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Structural() {
  return (
    <>
      <Navbar />

      {/* ===== HEADER BIRU = foto jadi background ===== */}
      <section
        className="relative bg-[#18446C] text-white h-[280px] sm:h-[320px]"
        style={{
          backgroundImage: "url('/gedung.png')", // pastikan ada di /public
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#18446C]/65" />
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="title-page">STRUCTURAL</h1>
        </div>
      </section>

      {/* ===== CONTENT CARD OVERLAP ===== */}
      <section className="-mt-20 relative z-20 pb-12">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white border border-slate-200 rounded-[22px] shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-[220px,1fr]">
              {/* Sidebar kiri */}
              <aside className="bg-[#244563] text-white p-5 md:p-6">
                <nav className="space-y-2">
                  {/* sebelumnya ada bg-white/10 → dihapus */}
                  <span className="block font-semibold">Structural</span>
                </nav>
              </aside>

              {/* Konten kanan */}
              <div className="bg-white p-6 sm:p-8">
                <p className="text-[13px] text-slate-600 mb-5">
                  Berikut adalah struktur organisasi pemerintah daerah yang
                  menggambarkan hubungan kerja antar bagian.
                </p>

                {/* Panel gambar struktur */}
                <div className="rounded-[20px] bg-slate-50 border border-slate-200 shadow-sm overflow-hidden">
                  <img
                    src="/struktur.png" // letakkan gambar di /public/struktur.png
                    alt="Struktur Organisasi"
                    className="w-full h-auto object-contain"
                    onError={(e) => {
                      e.currentTarget.outerHTML =
                        '<div class="h-[220px] grid place-items-center text-slate-500">Placeholder Struktur (unggah /public/struktur.png)</div>';
                    }}
                  />
                </div>

                {/* tombol unduh PDF (opsional) */}
                {/* <div className="mt-6">
                  <a
                    href="/struktur.pdf"
                    download
                    className="inline-flex items-center gap-2 px-5 py-2 rounded-lg bg-[#18446C] text-white text-sm font-medium hover:bg-[#12324d] transition"
                  >
                    Unduh Struktur (PDF)
                  </a>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
