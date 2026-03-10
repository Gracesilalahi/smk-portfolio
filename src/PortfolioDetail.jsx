import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { User, Image as ImageIcon, ChevronLeft } from 'lucide-react';

const PortfolioDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const dataSiswa = {
    "1": { nama: 'Budi Santoso', kelas: 'XII Mia 2', jurusan: 'Informatika', proyek: 'Rancang Bangun IoT Smart Home System', deskripsi: 'Sistem penyiraman otomatis berbasis sensor kelembaban tanah. Menggunakan mikrokontroler. Membantu efisiensi air di kebun praktik sekolah.' },
    "2": { nama: 'Siti Aminah', kelas: 'XII Multimedia 1', jurusan: 'Multimedia', proyek: 'Produksi Film Pendek "Harmoni Balige"', deskripsi: 'Karya film pendek bertema budaya lokal Balige.' },
    "3": { nama: 'Andi Wijaya', kelas: 'XII Akuntansi 1', jurusan: 'Akuntansi', proyek: 'Sistem Audit Keuangan Koperasi Digital', deskripsi: 'Digitalisasi audit koperasi untuk transparansi data.' },
    "4": { nama: 'Nana Manunu', kelas: 'XII Mia 1', jurusan: 'Informatika', proyek: 'Rancang Bangun IoT Smart Home System', deskripsi: 'Monitoring suhu ruangan server lab komputer.' },
  };

  const siswa = dataSiswa[id] || dataSiswa["1"];

  return (
    <div className="min-h-screen bg-[#fbf9f0] font-sans antialiased">
      <nav className="bg-black text-white px-8 py-2.5 flex justify-between items-center text-[11px] font-medium sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-[#facc15] text-black w-7 h-7 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">SMK</div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[14px] leading-tight text-[#facc15]">SMA NEGERI 3 BALIGE</span>
            <span className="text-[9px] text-gray-400 font-normal">Excellence in Education</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-gray-300">Beranda</Link>
          <Link to="/" className="text-blue-400 font-bold border-b-2 border-blue-400 pb-0.5">Portofolio & Skill ⌄</Link>
          <button className="bg-white text-black px-4 py-1.5 rounded-md flex items-center gap-2 font-bold ml-2">
            <div className="bg-gray-200 rounded-full p-0.5"><User size={12} /></div> SISWA
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto mt-12 px-12 pb-24">
        <div className="mb-10 relative">
          <div className="mb-4">
            <span className="text-blue-600 text-[10px] font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest">Karya dan Kompetensi Siswa</span>
          </div>
          <div className="flex items-center relative">
            <button onClick={() => navigate(-1)} className="absolute -left-14 bg-white border border-gray-200 rounded-full p-2 text-gray-400 hover:text-blue-600 shadow-sm transition-all active:scale-90">
              <ChevronLeft size={22} strokeWidth={3} />
            </button>
            <h1 className="text-[42px] font-extrabold text-[#001d3d] tracking-tighter leading-none">Portofolio & Skill Siswa</h1>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-12 items-start">
          <div className="col-span-8">
            <div className="bg-white border-2 border-gray-200 rounded-2xl aspect-video flex flex-col items-center justify-center mb-10 shadow-sm overflow-hidden group">
              <ImageIcon size={100} className="text-gray-200 opacity-60 mb-2" strokeWidth={1} />
              <div className="w-40 h-1.5 bg-gray-100 rounded-full overflow-hidden"><div className="bg-blue-100 h-full w-1/4"></div></div>
            </div>
            <div className="space-y-10 pl-2">
              <div className="flex items-start gap-12">
                <span className="font-bold text-[#001d3d] w-24 text-[14px] pt-1 uppercase">Proyek</span>
                <p className="text-gray-800 text-[17px] font-semibold leading-relaxed flex-1">{siswa.proyek}</p>
              </div>
              <div className="flex items-start gap-12">
                <span className="font-bold text-[#001d3d] w-24 text-[14px] pt-1 uppercase">Deskripsi</span>
                <p className="text-gray-600 text-[15px] font-medium leading-[1.8] flex-1 text-justify italic">"{siswa.deskripsi}"</p>
              </div>
            </div>
          </div>
          <div className="col-span-4">
            <div className="bg-white rounded-[32px] border border-gray-200 p-10 shadow-sm flex flex-col items-center sticky top-28 border-b-4 border-b-gray-300/50 min-h-[500px]">
              <div className="mb-14">
                <div className="w-28 h-28 bg-slate-900 rounded-full overflow-hidden shadow-xl ring-4 ring-slate-50 transition-transform duration-500 hover:scale-105">
                  <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=400&h=400" alt="Avatar" className="w-full h-full object-cover grayscale brightness-110" />
                </div>
              </div>
              <div className="w-full space-y-8 px-2">
                <div className="flex justify-between items-center text-[15px] border-b border-gray-50 pb-4"><span className="font-bold text-[#001d3d] uppercase text-[12px]">Nama</span><span className="text-gray-700 font-bold">{siswa.nama}</span></div>
                <div className="flex justify-between items-center text-[15px] border-b border-gray-50 pb-4"><span className="font-bold text-[#001d3d] uppercase text-[12px]">Kelas</span><span className="text-gray-700 font-bold">{siswa.kelas}</span></div>
                <div className="flex justify-between items-center text-[15px] pb-4"><span className="font-bold text-[#001d3d] uppercase text-[12px]">Jurusan</span><span className="text-gray-700 font-bold">{siswa.jurusan}</span></div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default PortfolioDetail;