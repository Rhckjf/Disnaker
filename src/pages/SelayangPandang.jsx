import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function SelayangPandang() {
  const tugas = [
    { title: "Pengembangan\nStrategi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
    { title: "Koordinasi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
    { title: "Evaluasi", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
    { title: "Monitoring", desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit," },
  ];

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
        <div className="absolute inset-0 bg-[#18446C]/65" />
        <div className="relative z-10 flex items-center justify-center h-full text-center">
          <h1 className="title-page">SELAYANG PANDANG</h1>
        </div>
      </section>

      {/* ===== KONTEN DIPERKECIL (MAX 880PX) ===== */}
      <section className="-mt-20 relative z-20">
        {/* kotak utama */}
        <div className="container-tight">
          <div className="bg-white border border-slate-200/70 rounded-[22px] shadow-xl p-6 sm:p-8 min-h-[300px]">
            <span className="pill mb-3 inline-flex">Title</span>
            <p className="text-[13.5px] leading-relaxed text-slate-600 max-w-[60ch]">
              Body text for whatever you'd like to say. Add main takeaway points, quotes, anecdotes,
              or even a very very short story.
            </p>
          </div>
        </div>

        {/* Tugas Pokok */}
        <div className="container-tight mt-14">
          <div className="pill mb-3 inline-flex">Tugas Pokok</div>
        </div>
        <div className="container-tight pb-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {tugas.map((t, i) => (
              <div
                key={i}
                className="bg-white border border-slate-200/70 rounded-[18px] shadow-soft px-5 pt-5 pb-6"
              >
                <div className="h-9 w-9 rounded-full bg-slate-100 grid place-items-center text-slate-700 mb-3">
                  <DotIcon />
                </div>
                <h3 className="font-semibold whitespace-pre-line leading-tight text-[14px]">
                  {t.title}
                </h3>
                <p className="text-[12.5px] text-slate-600 leading-relaxed mt-2">{t.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Sambutan Ketua Divisi */}
        <div className="container-tight mt-14">
          <div className="pill mb-3 inline-flex">Sambutan Ketua Divisi</div>
        </div>
        <div className="container-tight pb-12">
          <div className="bg-white/95 border border-slate-200/70 rounded-[22px] shadow-soft p-6 sm:p-8 flex items-start gap-6">
            <div className="h-[60px] w-[60px] rounded-full bg-slate-200 shrink-0" />
            <div>
              <h4 className="font-semibold text-slate-800 mb-2 text-[16px]">Nama Ketua Divisi</h4>
              <p className="text-[13.5px] text-slate-600 leading-relaxed max-w-[60ch]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis ipsum suspendisse ultrices gravida.
              </p>
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
