import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Page() {
  const [search, setSearch] = useState("");

  const berita = [
    {
      id: 1,
      title: "EXTENSION OF SUBMISSION DEADLINE FOR INDIVIDUAL CONSULTANT",
      date: "5 Oktober 2025",
      image: "/Trending.jpeg",
    },
    {
      id: 2,
      title: "PENGUMUMAN WAKTU PENGUMUMAN PENGADAAN JASA KONSULTAN",
      date: "4 Oktober 2025",
      image: "/berita.jpeg",
    },
    {
      id: 3,
      title: "ANNOUNCEMENT OF INDIVIDUAL CONSULTANCY SERVICES PROCURE...",
      date: "3 Oktober 2025",
      image: "/Trending.jpeg",
    },
    {
      id: 4,
      title: "PENGUMUMAN PENGADAAN JASA KONSULTAN PERDAGANGAN PROGRAM",
      date: "3 Oktober 2025",
      image: "/berita.jpeg",
    },
    {
      id: 5,
      title: "PENGUMUMAN PENGADAAN JASA KONSULTAN FIRMA PROGRAM LIS...",
      date: "2 Oktober 2025",
      image: "/Trending.jpeg",
    },
    {
      id: 6,
      title: "PENETAPAN ALOKASI KEBUTUHAN PEGAWAI PEMERINTAH DENGAN P...",
      date: "1 Oktober 2025",
      image: "/berita.jpeg",
    },
  ];

  const filteredNews = berita.filter((b) =>
    b.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Navbar />

      {/* ===== CONTENT WRAPPER ===== */}
      <main className="min-h-screen bg-white pt-6 pb-16">
        <div className="max-w-6xl mx-auto px-4 md:px-6">
          {/* Title */}
          <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 mb-4">
            Berita dan Informasi
          </h1>

          {/* Search bar */}
          <div className="relative w-full mb-6">
            <input
              type="text"
              placeholder="Cari berita"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-300 rounded-xl px-4 py-2.5 text-sm focus:ring-2 focus:ring-[#18446C]/30 focus:border-[#18446C] outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-3 top-2.5 h-5 w-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-4.35-4.35M17 10a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>

          {/* Info jumlah */}
          <p className="text-sm text-gray-500 mb-6">
            Menampilkan {filteredNews.length} dari {berita.length} berita.
          </p>

          {/* ===== GRID BERITA ===== */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredNews.length > 0 ? (
              filteredNews.map((item) => (
                <div
                  key={item.id}
                  className="bg-white border border-gray-200 rounded-xl shadow-sm hover:shadow-md transition overflow-hidden"
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-44 object-cover"
                  />
                  <div className="p-4">
                    <p className="text-xs text-gray-500 mb-1">
                      {item.date}
                    </p>
                    <h2 className="text-[15px] font-semibold text-gray-800 leading-snug line-clamp-2">
                      {item.title}
                    </h2>
                  </div>
                </div>
              ))
            ) : (
              <p className="col-span-full text-gray-500 text-sm text-center">
                Tidak ada berita yang cocok dengan pencarian.
              </p>
            )}
          </div>

          {/* ===== PAGINATION (Dummy) ===== */}
          <div className="flex justify-center items-center gap-2 mt-10">
            <button className="px-3 py-1.5 border rounded-lg text-sm text-gray-600 hover:bg-gray-100">
              &lt;
            </button>
            {[1, 2, 3, 4, 5].map((n) => (
              <button
                key={n}
                className={`px-3 py-1.5 border rounded-lg text-sm ${
                  n === 1
                    ? "bg-[#18446C] text-white border-[#18446C]"
                    : "text-gray-600 hover:bg-gray-100"
                }`}
              >
                {n}
              </button>
            ))}
            <button className="px-3 py-1.5 border rounded-lg text-sm text-gray-600 hover:bg-gray-100">
              &gt;
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}