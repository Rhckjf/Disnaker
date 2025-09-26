import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Document() {
  // contoh data dummy (nanti bisa ganti dari API/DB)
  const docs = [
    { id: 1, title: "Rencana Kerja Divisi 2025", type: "PDF", size: "1.2 MB", date: "2025-07-01" },
    { id: 2, title: "Notulen Rapat Mingguan", type: "DOCX", size: "320 KB", date: "2025-06-27" },
    { id: 3, title: "Anggaran Program Q3", type: "XLSX", size: "860 KB", date: "2025-06-15" },
    { id: 4, title: "Panduan Operasional", type: "PDF", size: "2.1 MB", date: "2025-05-20" },
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
        <div className="absolute inset-0 bg-[#18446C]/60" />
        <div className="relative z-10 h-full flex items-center justify-center text-center">
          <div>
            <h1 className="title-page">DOCUMENTS</h1>
            <p className="text-white/80 text-sm sm:text-base mt-1">Semua dokumen penting di satu tempat</p>
          </div>
        </div>
      </section>

      {/* ===== CONTENT ===== */}
      <section className="-mt-20 relative z-20">
        <div className="container-tight">
          {/* Toolbar: Search + Filter */}
          <div className="bg-white/95 border border-slate-200/70 rounded-[18px] shadow-soft p-4 sm:p-5 ring-2 ring-[#2F67B2]">
            <div className="flex flex-col sm:flex-row gap-3 sm:items-center">
              <div className="flex-1">
                <label className="sr-only">Search</label>
                <input
                  type="text"
                  placeholder="Cari dokumen..."
                  className="w-full rounded-xl border border-slate-200 px-4 py-2.5 text-sm outline-none focus:border-[#18446C] focus:ring-2 focus:ring-[#18446C]/20 transition"
                />
              </div>
              <div className="flex gap-2">
                <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-[#18446C] focus:ring-2 focus:ring-[#18446C]/20">
                  <option value="">Semua Tipe</option>
                  <option value="PDF">PDF</option>
                  <option value="DOCX">DOCX</option>
                  <option value="XLSX">XLSX</option>
                </select>
                <select className="rounded-xl border border-slate-200 px-3 py-2 text-sm focus:border-[#18446C] focus:ring-2 focus:ring-[#18446C]/20">
                  <option value="new">Terbaru</option>
                  <option value="old">Terlama</option>
                  <option value="az">A → Z</option>
                  <option value="za">Z → A</option>
                </select>
                <button className="rounded-xl bg-[#18446C] text-white px-4 py-2 text-sm hover:opacity-90 transition">
                  Upload
                </button>
              </div>
            </div>
          </div>

          {/* Grid Documents */}
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {docs.map((d) => (
              <div
                key={d.id}
                className="bg-white border border-slate-200/70 rounded-[18px] shadow-soft p-4 flex gap-3"
              >
                <div className="h-10 w-10 rounded-xl bg-slate-100 grid place-items-center text-slate-700 shrink-0">
                  <FileIcon type={d.type} />
                </div>
                <div className="min-w-0">
                  <h3 className="font-semibold text-[14.5px] text-slate-800 truncate">{d.title}</h3>
                  <div className="text-[12px] text-slate-500 mt-0.5">
                    <span className="mr-2">{d.type}</span>• <span className="mx-2">{d.size}</span>•{" "}
                    <span className="ml-2">{formatDate(d.date)}</span>
                  </div>
                  <div className="mt-3 flex gap-2">
                    <button className="rounded-lg border border-slate-200 px-3 py-1.5 text-[12.5px] hover:bg-slate-50">
                      View
                    </button>
                    <button className="rounded-lg bg-[#18446C] text-white px-3 py-1.5 text-[12.5px] hover:opacity-90">
                      Download
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer spacer */}
          <div className="h-8" />
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
        <text x="8" y="17" fontSize="7" fill="white">PDF</text>
      </svg>
    ),
    DOCX: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-80">
        <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <text x="6.5" y="17" fontSize="7" fill="white">DOC</text>
      </svg>
    ),
    XLSX: (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="opacity-80">
        <path d="M6 2h7l5 5v15a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2z" />
        <text x="7" y="17" fontSize="7" fill="white">XLS</text>
      </svg>
    ),
  };
  return map[type] || map.PDF;
}
