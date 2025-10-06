import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function VisiMisi() {
  return (
    <>
      <Navbar />

      {/* ===== HEADER BIRU = foto jadi background ===== */}
      <section
        className="relative bg-[#18446C] text-white h-[280px] sm:h-[320px]"
        style={{
          backgroundImage: "url('/gedung.png')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-[#18446C]/60" />
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="title-page">VISI & MISI</h1>
        </div>
      </section>

      {/* ===== CONTENT CARD OVERLAP ===== */}
      <section className="-mt-20 relative z-20">
        <div className="max-w-5xl mx-auto px-4">
          <div className="bg-white border border-slate-200 rounded-[22px] shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-[220px,1fr]">
              
              {/* Sidebar kiri */}
              <aside className="bg-[#244563] text-white p-5 md:p-6">
                <nav className="space-y-2">
                  <span className="block font-semibold">Visi & Misi</span>
                </nav>
              </aside>

              {/* Konten kanan */}
              <div className="bg-white p-5 md:p-7">

                {/* Panel rounded besar (TEKS KIRI + GAMBAR KANAN) */}
                <div className="rounded-[22px] bg-slate-50 p-5 md:p-6 border border-slate-100">
                  <div className="grid md:grid-cols-[1fr,120px] gap-4 items-start">
                    <div>
                      <h3 className="font-semibold text-[14px] mb-1">Visi</h3>
                      <p className="text-[12.5px] text-slate-600 leading-relaxed">
                       “Mewujudkan tenaga kerja Kabupaten Bekasi yang berdaya saing, sejahtera, dan terlindungi.”
                      </p>
                    </div>
                    <div className="h-[90px] w-[120px] bg-slate-200 rounded-md justify-self-end" />
                  </div>
                </div>

                {/* Panel rounded besar (GAMBAR KIRI + TEKS KANAN) */}
                <div className="rounded-[22px] bg-slate-50 p-5 md:p-6 border border-slate-100 mt-6">
                  <div className="grid md:grid-cols-[120px,1fr] gap-4 items-start">
                    <div className="h-[90px] w-[120px] bg-slate-200 rounded-md" />
                    <div>
                      <h3 className="font-semibold text-[14px] mb-1">Misi</h3>
                      <p className="text-[12.5px] text-slate-600 leading-relaxed">
                       Meningkatkan kualitas dan kompetensi tenaga kerja melalui pelatihan dan sertifikasi, memperluas kesempatan kerja dan memperkuat hubungan dengan dunia industri, memberikan perlindungan serta pengawasan ketenagakerjaan yang berkeadilan, dan mengembangkan layanan ketenagakerjaan yang transparan serta profesional.
                      </p>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>

          {/* spacer bawah kartu */}
          <div className="h-6" />
        </div>
      </section>

      <Footer />
    </>
  );
}
