import React, { useState } from 'react';
import { Search, ChevronRight, User } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const PortofolioTable = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');

  // Data Siswa tetap dipertahankan sebagai sumber data utama
  const dataSiswa = [
    { id: 1, nama: 'Budi Santoso', initial: 'B', color: 'bg-blue-600', proyek: 'Rancang Bangun IoT Smart Home System', jurusan: 'Teknik Komputer' },
    { id: 2, nama: 'Siti Aminah', initial: 'S', color: 'bg-orange-500', proyek: 'Produksi Film Pendek "Harmoni Balige"', jurusan: 'Multimedia' },
    { id: 3, nama: 'Andi Wijaya', initial: 'A', color: 'bg-yellow-500', proyek: 'Sistem Audit Keuangan Koperasi Digital', jurusan: 'Akuntansi' },
    { id: 4, nama: 'Nana Manunu', initial: 'N', color: 'bg-teal-500', proyek: 'Rancang Bangun IoT Smart Home System', jurusan: 'Teknik Komputer' },
  ];

  // Fungsi Filter untuk fitur pencarian yang interaktif
  const filteredData = dataSiswa.filter(siswa => 
    siswa.nama.toLowerCase().includes(searchTerm.toLowerCase()) ||
    siswa.proyek.toLowerCase().includes(searchTerm.toLowerCase()) ||
    siswa.jurusan.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fbf9f0] font-sans antialiased">
      
      {/* Navbar Hitam SMK Negeri 3 Balige */}
      <nav className="bg-black text-white px-8 py-2.5 flex justify-between items-center text-[11px] font-medium sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-3">
          <div className="bg-[#facc15] text-black w-7 h-7 flex items-center justify-center rounded-full text-[10px] font-bold">SMK</div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[14px] leading-tight tracking-tight text-[#facc15]">SMK NEGERI 3 BALIGE</span>
            <span className="text-[9px] text-gray-400 font-normal">Excellence in Education</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-gray-300 transition-colors">Beranda</Link>
          <div className="hover:text-gray-300 cursor-pointer flex items-center gap-1 transition-colors">Berita & Informasi ⌄</div>
          <div className="hover:text-gray-300 cursor-pointer flex items-center gap-1 transition-colors">Profil Sekolah ⌄</div>
          <Link to="/" className="text-blue-400 font-bold border-b-2 border-blue-400 pb-0.5">Portofolio & Skill ⌄</Link>
          <div className="hover:text-gray-300 cursor-pointer flex items-center gap-1 transition-colors">Unduh SKL ⌄</div>
          <div className="hover:text-gray-300 cursor-pointer flex items-center gap-1 transition-colors">Data ⌄</div>
          <div className="hover:text-gray-300 cursor-pointer flex items-center gap-1 transition-colors">Pelanggaran ⌄</div>
          <button className="bg-white text-black px-4 py-1.5 rounded-md flex items-center gap-2 font-bold ml-2 shadow-sm hover:bg-gray-100 transition-all active:scale-95">
            <div className="bg-gray-200 rounded-full p-0.5"><User size={12} /></div>
            SISWA
          </button>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto mt-12 px-12 pb-20">
        <div className="mb-6 animate-in fade-in duration-700">
          <span className="text-blue-600 text-[10px] font-bold bg-blue-50 px-3 py-1 rounded-full border border-blue-100 uppercase tracking-widest shadow-sm">
            Karya dan Kompetensi Siswa
          </span>
          <h1 className="text-4xl font-extrabold text-[#001d3d] mt-4 tracking-tight leading-none">Portofolio & Skill Siswa</h1>
        </div>

        {/* Search Bar Row */}
        <div className="flex justify-between items-end mb-4">
          <div className="relative group">
            <input 
              type="text" 
              placeholder="cari nama atau proyek....." 
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-md w-80 focus:outline-none focus:ring-2 focus:ring-blue-100 focus:border-blue-400 bg-white transition-all shadow-sm"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400 group-focus-within:text-blue-500 transition-colors" size={18} />
          </div>
          <div className="text-blue-600 text-xs font-bold flex items-center gap-1 cursor-default opacity-80">
            Klik pada baris siswa untuk melihat detail <ChevronRight size={14} />
          </div>
        </div>

        {/* Tabel Interaktif */}
        <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
          <table className="w-full text-left border-collapse">
            <thead className="bg-white border-b border-gray-100">
              <tr className="text-[#001c3d] font-bold text-sm uppercase tracking-tight">
                <th className="p-5 w-16 text-center"><input type="checkbox" className="w-4 h-4 rounded border-gray-300" /></th>
                <th className="p-5">Nama Siswa</th>
                <th className="p-5">Subjek Proyek</th>
                <th className="p-5">Kategori Jurusan</th>
                <th className="p-5">Skill</th>
                {/* Kolom Detail Dihapus Sesuai Instruksi */}
              </tr>
            </thead>
            <tbody>
              {filteredData.length > 0 ? (
                filteredData.map((siswa) => (
                  <tr 
                    key={siswa.id} 
                    onClick={() => navigate(`/detail/${siswa.id}`)}
                    className="border-b border-gray-50 hover:bg-blue-50/40 transition-all cursor-pointer group"
                  >
                    <td className="p-5 text-center" onClick={(e) => e.stopPropagation()}>
                      {/* e.stopPropagation agar saat klik checkbox, tidak malah pindah halaman */}
                      <input type="checkbox" className="w-4 h-4 rounded border-gray-300 cursor-pointer" />
                    </td>
                    <td className="p-5">
                      <div className="flex items-center gap-3">
                        <div className={`${siswa.color} text-white w-8 h-8 flex items-center justify-center rounded text-sm font-bold shadow-sm transition-transform group-hover:scale-110`}>
                          {siswa.initial}
                        </div>
                        <span className="font-semibold text-gray-700 group-hover:text-blue-700 transition-colors">{siswa.nama}</span>
                      </div>
                    </td>
                    <td className="p-5 text-sm text-gray-600 leading-snug w-1/3 italic group-hover:not-italic transition-all">
                      {siswa.proyek}
                    </td>
                    <td className="p-5 text-sm text-gray-600 font-medium">
                      <span className="bg-gray-100 px-2 py-1 rounded text-[11px] uppercase tracking-tighter">
                        {siswa.jurusan}
                      </span>
                    </td>
                    <td className="p-5"></td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="p-10 text-center text-gray-400 italic">Data tidak ditemukan...</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination Section */}
        <div className="flex justify-center mt-8 gap-1.5">
          <button className="w-8 h-8 flex items-center justify-center border border-gray-400 bg-white rounded text-xs font-bold shadow-sm">1</button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 rounded text-xs hover:border-gray-400 transition-all">2</button>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 rounded text-xs hover:border-gray-400 transition-all">3</button>
          <span className="px-1 text-gray-400 self-center text-xs">...</span>
          <button className="w-8 h-8 flex items-center justify-center border border-gray-200 text-gray-500 rounded text-xs">50</button>
          <button className="px-4 h-8 border border-black rounded text-xs font-bold hover:bg-black hover:text-white transition-all ml-1 uppercase tracking-widest shadow-sm">
            Next {'>'}
          </button>
        </div>
      </main>
    </div>
  );
};

export default PortofolioTable;