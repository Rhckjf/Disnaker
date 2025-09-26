import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Post() {
  return (
    <>
      <Navbar />
      <section className="p-10 max-w-4xl mx-auto">
        <img src="/post.jpg" alt="Gambar Berita" className="rounded-lg mb-4"/>
        <h2 className="text-2xl font-bold mb-2">Judul Berita</h2>
        <p className="text-gray-500 text-sm">02 September 2025 | 07:41</p>
        <article className="mt-4 leading-relaxed">
          <p>Isi berita lengkap ditulis disini...</p>
        </article>

        <div className="mt-6">
          <h3 className="font-bold">Bagikan:</h3>
          <div className="flex gap-4 mt-2">
            <a href="#">Facebook</a>
            <a href="#">Twitter</a>
            <a href="#">WhatsApp</a>
          </div>
        </div>
      </section>

      <section className="p-10 bg-gray-100">
        <h3 className="font-bold mb-4">Berita Lainnya</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {[1,2,3].map((i) => (
            <div key={i} className="bg-white p-4 shadow rounded">
              <h4 className="font-bold">Judul Berita {i}</h4>
              <p>Ringkasan singkat berita {i}...</p>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
}
