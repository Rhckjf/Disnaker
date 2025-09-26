import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// Data untuk slider
const sliderData = [
  {
    id: 1,
    img: "/carousel2.png",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
  },
  {
    id: 2,
    img: "/gedung.png",
    content: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.",
  },
  {
    id: 3,
    img: "/Trending.jpeg",
    content: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
  },
];

// Data untuk section berita
const beritaData = [
  {
    id: 1,
    title: "Berita Utama: Teknologi AI Menguasai Dunia",
    content: "AI semakin berkembang pesat, membawa dampak pada kehidupan manusia sehari-hari.",
    img: "/Trending.jpeg",
  },
  {
    id: 2,
    title: "Ekonomi Global Mengalami Perubahan",
    content: "Perubahan besar dalam ekonomi global berdampak pada berbagai sektor.",
    img: "/berita.jpeg",
  },
  {
    id: 3,
    title: "Olahraga: Timnas Menang Lagi",
    content: "Kemenangan telak membawa semangat baru bagi penggemar sepak bola.",
    img: "/berita.jpeg",
  },
  {
    id: 4,
    title: "Hiburan: Film Baru Rilis",
    content: "Film terbaru berhasil menarik perhatian banyak penonton.",
    img: "/berita.jpeg",
  },
  {
    id: 5,
    title: "Kesehatan: Tips Hidup Sehat",
    content: "Gaya hidup sehat sangat penting untuk menjaga kebugaran tubuh.",
    img: "/berita.jpeg",
  },
];

// Data untuk section layanan
const layananItems = [
  { id: 1, title: "Sistem Pelayanan Publik Nasional" },
  { id: 2, title: "Produk Hukum & Pengaduan" },
  { id: 3, title: "Hasil Kepuasan Masyarakat" },
];

const Home = () => {
  const [showMore, setShowMore] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);

  // Efek untuk perpindahan slide otomatis
  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % sliderData.length);
    }, 3000); // DURASI DIUBAH MENJADI 3 DETIK (3000 ms)

    // Membersihkan interval saat komponen di-unmount
    return () => clearInterval(slideInterval);
  }, []);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      <Navbar />

      {/* Section Berita */}
      <div className="max-w-7xl mx-auto px-6 py-6">
        <h2 className="text-center text-3xl font-bold mb-8 relative">
          <span className="px-6 py-2 bg-white shadow-xl rounded-lg">Trending Topik</span>
        </h2>

        <div className="grid gap-6 md:grid-cols-3 transition-all duration-500">
          <div className={`transition-all duration-500 ${showMore ? "md:col-span-3" : "md:col-span-2"}`}>
            <div className="relative w-full h-full min-h-[400px] overflow-hidden rounded-xl shadow-lg">
              <img src={beritaData[0].img} alt={beritaData[0].title} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent"></div>
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <h3 className="text-2xl font-semibold leading-snug">{beritaData[0].title}</h3>
                <p className="mt-2 text-sm md:text-base">{beritaData[0].content}</p>
              </div>
            </div>
          </div>

          {!showMore && (
            <div className="grid grid-rows-2 gap-4 h-full">
              {beritaData.slice(1, 3).map((berita) => (
                <div key={berita.id} className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition flex flex-col">
                  <img src={berita.img} alt={berita.title} className="w-full h-32 object-cover" />
                  <div className="p-4 flex-1 flex flex-col">
                    <h4 className="text-lg font-semibold">{berita.title}</h4>
                    <p className="text-gray-600 text-sm mt-1">{berita.content}</p>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {showMore && (
          <div className="grid md:grid-cols-3 gap-6 mt-6">
            {beritaData.slice(1).map((berita) => (
              <div key={berita.id} className="rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition">
                <img src={berita.img} alt={berita.title} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h4 className="text-lg font-semibold">{berita.title}</h4>
                  <p className="text-gray-600 text-sm mt-1">{berita.content}</p>
                </div>
              </div>
            ))}
          </div>
        )}

        <div className="flex justify-center">
          <button
            onClick={() => setShowMore(!showMore)}
            className="mt-6 px-6 py-2 bg-[#18446C] text-white rounded-lg shadow hover:bg-[#1d5f9d] transition"
          >
            {showMore ? "Tutup Berita" : "Lihat Lebih Banyak Berita"}
          </button>
        </div>
      </div>



      {/* Section Slider */}
      <div className="relative w-full overflow-hidden max-w-7xl mx-auto px-6 py-6">
        <div className="relative h-[250px] md:h-[400px] overflow-hidden rounded-xl shadow-lg">
          {sliderData.map((slide, index) => (
            <div
              key={slide.id}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ease-in-out ${
                index === currentSlide ? "opacity-100" : "opacity-0"
              }`}
            >
              <img
                src={slide.img}
                alt={`Slide ${slide.id}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent flex items-end">
                <p className="text-white p-6 md:p-12 text-sm md:text-base max-w-2xl">
                  {slide.content}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Indikator Slider (Titik-titik) */}
        <div className="flex justify-center mt-4 space-x-2">
          {sliderData.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-3 w-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[#18446C] w-6" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>



      {/* Section Layanan Lainnya */}
      <section className="relative py-20">
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8">
            <div className="md:w-1/3 mb-8 md:mb-0">
              <h2 className="text-4xl font-extrabold text-black">
                Layanan Lainnya
              </h2>
              <p className="text-gray-600 font-semibold mt-2 text-lg">
                Temukan layanan yang Anda perlukan di sini
              </p>
            </div>
            <div className="relative md:w-2/3 h-[250px]">
              <div
                className="absolute inset-0 rounded-lg overflow-hidden bg-no-repeat bg-center bg-cover"
                style={{
                  backgroundImage: "url('/gedung.png')",
                  filter: "brightness(0.9)",
                }}
              />
              {/* Kotak Layanan */}
              <div className="absolute -bottom-16 left-1/2 -translate-x-1/2 w-[90%] md:w-full bg-white rounded-lg shadow-lg border-2 border-[#0B94E0] overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-200">
                  {layananItems.map((item) => (
                    <div key={item.id} className="p-6 text-center">
                      <h3 className="font-bold text-black text-base md:text-lg">
                        {item.title}
                      </h3>
                      <div className="mt-4 text-2xl text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6 mx-auto"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M19 14l-7 7m0 0l-7-7m7 7V3"
                          />
                        </svg>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <Footer />
    </>
  );
};

export default Home;