import { useState } from "react";

export default function Layanan() {
  const [openIndex, setOpenIndex] = useState(null);

  const layanan = [
    {
      title: "Sistem Pelayanan Publik Nasional",
      content: "Informasi mengenai pelayanan publik nasional..."
    },
    {
      title: "Praktik Hukum & Pengadilan",
      content: "Berita hukum dan pengadilan..."
    },
    {
      title: "Hasil Kepuasan Masyarakat",
      content: "Laporan hasil survei kepuasan masyarakat..."
    }
  ];

  const toggle = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="p-10 bg-gray-100">
      <h2 className="text-xl font-bold text-center">Layanan Lainnya</h2>
      <p className="text-center text-gray-600 mb-6">
        Temukan layanan yang anda perlukan disini
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {layanan.map((item, index) => (
          <div
            key={index}
            className="bg-white shadow rounded-lg p-4 cursor-pointer"
            onClick={() => toggle(index)}
          >
            <h3 className="font-semibold flex justify-between">
              {item.title}
              <span>{openIndex === index ? "▲" : "▼"}</span>
            </h3>
            {openIndex === index && (
              <p className="mt-3 text-gray-600">{item.content}</p>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}
