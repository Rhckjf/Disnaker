import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Berita() {
  return (
    <div className="font-sans">
      <Navbar />

      {/* Hero Section */}
      <div className="relative">
        <img
          src="gedung.png"   
          alt="Gedung Disnaker"
          className="w-full h-72 object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <h1 className="text-white text-2xl md:text-3xl font-bold">
            Berita Terkini
          </h1>
        </div>
      </div>

      {/* Konten Utama */}
      <div className="container mx-auto px-4 py-10 grid lg:grid-cols-2 gap-8">
        {/* Berita Utama */}
        <div className="bg-white rounded-xl shadow-md p-5">
          <h2 className="text-lg font-semibold mb-1">
            Disnaker Bekasi Sempat Dipadati Antrean
          </h2>
          <p className="text-sm text-gray-500 mb-4">
            Yogi Ernes – detikNews
          </p>
          <img
            src="berita.jpeg"
            alt="Antrean"
            className="w-full h-64 object-cover rounded-lg mb-4"
          />
          <p className="text-gray-700 leading-relaxed mb-3">
            Bekasi – Sebuah video menunjukkan Kantor Dinas Tenaga Kerja (Disnaker) Kota
            Bekasi dipadati warga yang hendak mengurus pembuatan kartu Antar Kerja (AK-1) 
            atau kartu kuning pagi tadi. Kepadatan tersebut juga membuat timbulan jaga jarak
            tampak terabaikan.
          </p>
          <p className="text-gray-700 leading-relaxed mb-3">
            Excepteur efficient emerging, minim veniam anim aute carefully curated ginza
            conversation exquisite perfect nostrum nisi intricate content. Quid international
            first-class ritual it. Punctual adipisicing, essential lovely queen temper omnis 
            more rural...
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md">
            Lihat lebih banyak
          </button>
        </div>

        {/* Berita Lainnya */}
        <div className="grid sm:grid-cols-2 gap-6">
          {[1, 2, 3, 4].map((item) => (
            <div
              key={item}
              className="bg-white rounded-xl shadow-md p-4 flex flex-col"
            >
              <div className="h-32 bg-gray-200 rounded-md mb-3"></div>
              <h3 className="font-semibold text-base mb-2">Title</h3>
              <p className="text-sm text-gray-600 flex-1">
                Body text for whatever you'd like to say. Add main takeaway
                points, quotes, anecdotes, or even a very short story.
              </p>
              <a
                href="#"
                className="text-blue-600 hover:underline text-sm mt-3"
              >
                Baca selengkapnya gess!!!
              </a>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Berita;
