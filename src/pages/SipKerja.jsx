// src/pages/SipKerja.jsx
import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar, Pie, Doughnut } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, BarElement, ArcElement, Tooltip, Legend);

export default function SipKerja() {
  const dataIKM = {
    labels: [
      "Persyaratan",
      "Prosedur",
      "Waktu Pelayanan",
      "Produk Pelayanan",
      "Kompetensi Petugas",
      "Perilaku Petugas",
      "Sarana & Prasarana",
      "Penanganan Pengaduan",
    ],
    datasets: [
      {
        label: "Nilai IKM",
        data: [85, 90, 88, 84, 87, 89, 86, 83],
        backgroundColor: "rgba(54, 162, 235, 0.7)",
      },
    ],
  };

  const dataPendidikan = {
    labels: ["SD", "SMP", "SMA", "Diploma", "Sarjana"],
    datasets: [
      {
        data: [5, 10, 45, 20, 20],
        backgroundColor: ["#ff9999", "#66b3ff", "#99ff99", "#ffcc99", "#c299ff"],
      },
    ],
  };

  const dataGender = {
    labels: ["Laki-laki", "Perempuan"],
    datasets: [
      {
        data: [60, 40],
        backgroundColor: ["#36a2eb", "#ff6384"],
      },
    ],
  };

  const dataPekerjaan = {
    labels: ["Pelajar", "PNS", "Wiraswasta", "Karyawan", "Lainnya"],
    datasets: [
      {
        data: [15, 20, 25, 30, 10],
        backgroundColor: ["#ffcd56", "#4bc0c0", "#9966ff", "#ff9f40", "#c9cbcf"],
      },
    ],
  };

  return (
    <div className="font-sans">
      <Navbar />

      <section className="text-center py-6">
        <h2 className="text-xl font-semibold">HASIL KEPUASAN MASYARAKAT</h2>
        <p className="text-gray-500">DINAS KETENAGAKERJAAN KABUPATEN BEKASI</p>
      </section>

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-6 px-4 pb-10">
        <div className="bg-white rounded-xl shadow-md p-6 flex flex-col justify-center items-center">
          <h6 className="text-sm font-medium">Indeks Kepuasan Masyarakat</h6>
          <div className="py-4 text-center">
            <h2 className="text-4xl font-bold text-blue-700">86.10</h2>
            <p className="text-gray-600">
              Baik <br />
              <small>(01 Agu 2023 - 31 Agu 2023)</small>
            </p>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h6 className="text-sm font-medium mb-2">Grafik IKM Berdasarkan Unsur Pelayanan</h6>
          <div className="h-64">
            <Bar data={dataIKM} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h6 className="text-sm font-medium mb-2">Grafik Responden : Pendidikan</h6>
          <div className="h-64">
            <Pie data={dataPendidikan} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6">
          <h6 className="text-sm font-medium mb-2">Grafik Responden : Jenis Kelamin</h6>
          <div className="h-64">
            <Doughnut data={dataGender} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-6 lg:col-span-2">
          <h6 className="text-sm font-medium mb-2">Grafik Responden : Pekerjaan</h6>
          <div className="h-64">
            <Pie data={dataPekerjaan} options={{ responsive: true, maintainAspectRatio: false }} />
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
