import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { User, Image as ImageIcon, ChevronLeft } from 'lucide-react';

const PortofolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  // Scroll ke atas otomatis saat halaman dibuka agar user tidak bingung
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Database Mockup yang lebih lengkap untuk menjaga volume kode
  const dataDetailSiswa = {
    "1": { 
      nama: 'Budi Santoso', 
      kelas: 'XII Mia 2', 
      jurusan: 'Informatika', 
      proyek: 'Rancang Bangun IoT Smart Home System', 
      deskripsi: 'Sistem penyiraman otomatis berbasis sensor kelembaban tanah. Menggunakan mikrokontroler Arduino Uno yang dikoneksikan dengan modul relay dan pompa air. Proyek ini bertujuan membantu efisiensi penggunaan air di kebun praktik sekolah melalui otomatisasi jadwal penyiraman.' 
    },
    "2": { 
      nama: 'Siti Aminah', 
      kelas: 'XII Multimedia 1', 
      jurusan: 'Multimedia', 
      proyek: 'Produksi Film Pendek "Harmoni Balige"', 
      deskripsi: 'Karya film pendek berdurasi 15 menit yang mengangkat tema pelestarian budaya Batak di era modern. Melibatkan teknik sinematografi canggih menggunakan drone dan color grading sinematik untuk menonjolkan keindahan lanskap Danau Toba.' 
    },
    "3": { 
      nama: 'Andi Wijaya', 
      kelas: 'XII Akuntansi 1', 
      jurusan: 'Akuntansi', 
      proyek: 'Sistem Audit Keuangan Koperasi Digital', 
      deskripsi: 'Pengembangan aplikasi berbasis Excel Macro dan VBA untuk mencatat transaksi koperasi harian. Sistem ini mampu menghasilkan laporan keuangan otomatis (Neraca & Laba Rugi) secara real-time untuk meminimalkan kesalahan input data manual.' 
    },
    "4": { 
      nama: 'Nana Manunu', 
      kelas: 'XII Mia 1', 
      jurusan: 'Informatika', 
      proyek: 'Monitoring Suhu Lab Berbasis Web', 
      deskripsi: 'Membangun sistem IoT menggunakan ESP8266 dan sensor DHT11. Data suhu dan kelembaban dikirim ke dashboard web secara live guna menjaga suhu ruangan server laboratorium komputer tetap stabil dan mencegah overheat pada perangkat.' 
    },
  };

  const siswa = dataDetailSiswa[id] || dataDetailSiswa["1"];

  return (
    <div className="min-h-screen bg-[#fbf9f0] font-sans antialiased text-slate-800">
      
      {/* 1. Navbar Utama - Header navigasi tetap konsisten di semua halaman */}
      <nav className="bg-black text-white px-8 py-2.5 flex justify-between items-center text-[11px] font-medium sticky top-0 z-50 shadow-lg">
        <div className="flex items-center gap-3">
          <div className="bg-[#facc15] text-black w-7 h-7 flex items-center justify-center rounded-full text-[10px] font-bold">SMK</div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[14px] leading-tight tracking-tight text-[#facc15]">SMK NEGERI 3 BALIGE</span>
            <span className="text-[9px] text-gray-400 font-normal">Excellence in Education</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-gray-300 transition-colors">Beranda</Link>
          <div className="hover:text-gray-300 cursor-pointer flex items-center gap-1">Berita & Informasi ⌄</div>
          <div className="hover:text-gray-300 cursor-pointer flex items-center gap-1">Profil Sekolah ⌄</div>
          <Link to="/" className="text-blue-400 font-bold border-b-2 border-blue-400 pb-0.5">Portofolio & Skill ⌄</Link>
          <div className="hover:text-gray-300 cursor-pointer flex items-center gap-1">Unduh SKL ⌄</div>
          <div className="hover:text-gray-300 cursor-pointer flex items-center gap-1">Data ⌄</div>
          <div className="hover:text-gray-300 cursor-pointer flex items-center gap-1">Pelanggaran ⌄</div>
          <button className="bg-white text-black px-4 py-1.5 rounded-md flex items-center gap-2 font-bold ml-2 shadow-sm active:scale-95 transition-all">
            <div className="bg-gray-200 rounded-full p-0.5"><User size={12} /></div>
            SISWA
          </button>
        </div>
      </nav>

      {/* 2. Content Section - Skala dan padding disamakan persis dengan halaman table */}
      <main className="max-w-7xl mx-auto mt-12 px-12 pb-32">
        
        {/* Container Judul yang telah diperbaiki posisinya */}
        <div className="mb-10 relative">
          {/* Badge Karya di atas judul */}
          <div className="mb-4">
            <span className="text-blue-600 text-[10px] font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest">
              Karya dan Kompetensi Siswa
            </span>
          </div>

          {/* Wrapper Flex untuk Judul dan Tombol Back */}
          <div className="flex items-center relative">
            {/* Tombol Back Simbol - Diletakkan secara ABSOLUTE agar tidak menggeser baseline judul */}
            <button 
              onClick={() => navigate(-1)}
              className="absolute -left-14 bg-white border border-gray-200 rounded-full p-2 text-gray-400 hover:text-blue-600 hover:border-blue-200 transition-all shadow-sm active:scale-90 group"
              title="Kembali ke daftar"
            >
              <ChevronLeft size={22} strokeWidth={3} className="group-hover:-translate-x-0.5 transition-transform" />
            </button>

            {/* Judul Utama - Sekarang posisinya akan sejajar persis dengan x-axis tabel */}
            <h1 className="text-[42px] font-extrabold text-[#001d3d] tracking-tighter leading-none">
              Portofolio & Skill Siswa
            </h1>
          </div>
        </div>

        {/* 3. Grid Layout (8:4) - Pembagian ruang antara detail proyek dan profil sidebar */}
        <div className="grid grid-cols-12 gap-12 items-start">
          
          {/* SISI KIRI (8 KOLOM): Penjelasan Proyek */}
          <div className="col-span-8">
            {/* Box Preview Gambar */}
            <div className="bg-white border-2 border-gray-200 rounded-2xl aspect-video flex flex-col items-center justify-center mb-10 shadow-sm relative group overflow-hidden">
              <div className="bg-gray-50/50 w-full h-full flex flex-col items-center justify-center transition-all duration-500 group-hover:bg-white">
                <ImageIcon size={100} className="text-gray-200 opacity-60 mb-2" strokeWidth={1} />
                {/* Progress bar dekoratif di bawah ikon */}
                <div className="w-40 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                  <div className="bg-blue-100 h-full w-1/4 animate-pulse"></div>
                </div>
              </div>
            </div>

            {/* Deskripsi Proyek dalam format List Baris */}
            <div className="space-y-10 pl-2">
              <div className="flex items-start gap-12">
                <span className="font-bold text-[#001d3d] w-24 text-[14px] pt-1 shrink-0 uppercase tracking-tight">
                  Proyek
                </span>
                <p className="text-gray-800 text-[17px] font-semibold leading-relaxed flex-1">
                  {siswa.proyek}
                </p>
              </div>

              <div className="flex items-start gap-12">
                <span className="font-bold text-[#001d3d] w-24 text-[14px] pt-1 shrink-0 uppercase tracking-tight">
                  Deskripsi
                </span>
                <p className="text-gray-600 text-[15px] font-medium leading-[1.8] flex-1 text-justify">
                  {siswa.deskripsi}
                </p>
              </div>
            </div>
          </div>

          {/* SISI KANAN (4 KOLOM): Sidebar Profil Siswa */}
          <div className="col-span-4">
            <div className="bg-white rounded-[32px] border border-gray-200 p-10 shadow-sm flex flex-col items-center sticky top-28 border-b-[6px] border-b-gray-300/50 min-h-[520px]">
              
              {/* Avatar Container */}
              <div className="relative mb-14">
                <div className="w-28 h-28 bg-slate-900 rounded-full overflow-hidden shadow-xl ring-4 ring-slate-50 transition-transform duration-500 hover:scale-105">
                  <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" 
                    alt="Foto Profil Siswa" 
                    className="w-full h-full object-cover grayscale brightness-110"
                  />
                </div>
              </div>

              {/* Tabel Informasi Identitas */}
              <div className="w-full space-y-8 px-2">
                <div className="flex justify-between items-center text-[15px] border-b border-gray-50 pb-4">
                  <span className="font-bold text-[#001d3d] uppercase text-[12px] tracking-tight">Nama</span>
                  <span className="text-gray-700 font-bold text-right ml-4">{siswa.nama}</span>
                </div>
                
                <div className="flex justify-between items-center text-[15px] border-b border-gray-50 pb-4">
                  <span className="font-bold text-[#001d3d] uppercase text-[12px] tracking-tight">Kelas</span>
                  <span className="text-gray-700 font-bold">{siswa.kelas}</span>
                </div>

                <div className="flex justify-between items-center text-[15px] pb-4">
                  <span className="font-bold text-[#001d3d] uppercase text-[12px] tracking-tight">Jurusan</span>
                  <span className="text-gray-700 font-bold">{siswa.jurusan}</span>
                </div>
              </div>

              {/* Ornamen Pojok (Visual Resizer style) */}
              <div className="absolute bottom-4 right-4 opacity-10">
                <div className="w-4 h-4 border-r-2 border-b-2 border-slate-900 rounded-sm"></div>
              </div>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
};

export default PortofolioDetail;