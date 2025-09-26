import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useState } from "react";
import { Link } from "react-router-dom"; // pakai Link

export default function Profile() {
  const [tab, setTab] = useState("visi");

  return (
    <>
      <Navbar />
      <section className="flex">
        {/* Sidebar */}
        <aside className="w-1/4 bg-blue-900 text-white p-6">
          <ul className="space-y-4">
            <li onClick={() => setTab("visi")} className="cursor-pointer">
              Visi & Misi
            </li>
            <li onClick={() => setTab("struktur")} className="cursor-pointer">
              Structural
            </li>
          </ul>
        </aside>

        {/* Konten Utama */}
        <main className="w-3/4 p-10">
          {tab === "visi" && (
            <>
              <h2 className="text-xl font-bold mb-4">Visi & Misi</h2>
              <p>Berisi informasi mengenai visi dan misi pemerintah.</p>
            </>
          )}
          {tab === "struktur" && (
            <>
              <h2 className="text-xl font-bold mb-4">Struktur Organisasi</h2>
              <img src="/struktur.png" alt="Struktur Organisasi" />
            </>
          )}
        </main>
      </section>
      <Footer />
    </>
  );
}
