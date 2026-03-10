import React from 'react';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { User, Undo2, Image as ImageIcon, CheckCircle2 } from 'lucide-react';

const PortfolioEdit = () => {
  const navigate = useNavigate();
  const { id } = useParams();

  const dataSiswa = {
    "1": { nama: 'Budi Santoso', proyek: 'Rancang Bangun IoT Smart Home System', deskripsi: 'Sistem penyiraman otomatis berbasis sensor kelembaban tanah. Menggunakan mikrokontroler. Membantu efisiensi air di kebun praktik sekolah.' },
    "2": { nama: 'Siti Aminah', proyek: 'Produksi Film Pendek "Harmoni Balige"', deskripsi: 'Karya film pendek bertema budaya lokal Balige.' }
  };

  const siswa = dataSiswa[id] || { nama: '', proyek: '', deskripsi: '' };

  return (
    <div className="min-h-screen bg-[#fbf9f0] font-sans antialiased">
      <nav className="bg-black text-white px-8 py-2.5 flex justify-between items-center text-[11px] font-medium sticky top-0 z-50">
        <div className="flex items-center gap-3">
          <div className="bg-[#facc15] text-black w-7 h-7 flex items-center justify-center rounded-full text-[10px] font-bold shadow-sm">SMK</div>
          <div className="flex flex-col">
            <span className="font-extrabold text-[14px] leading-tight text-[#facc15]">SMA NEGERI 3 BALIGE</span>
            <span className="text-[9px] text-gray-400">Excellence in Education</span>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-gray-300">Beranda</Link>
          <div className="text-blue-400 font-bold border-b-2 border-blue-400 pb-0.5">Portofolio & Skill ⌄</div>
          <button className="bg-white text-black px-4 py-1.5 rounded-md flex items-center gap-2 font-bold ml-2 shadow-sm">
            <div className="bg-gray-200 rounded-full p-0.5 text-black"><User size={12} /></div>
            Admin
          </button>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto mt-12 px-10 pb-24">
        <div className="bg-white rounded-xl shadow-lg border border-gray-100 p-12 relative overflow-hidden">
          <button 
            onClick={() => navigate(-1)}
            className="mb-8 p-1 text-gray-400 hover:text-blue-600 transition-all active:scale-90"
          >
            <Undo2 size={24} strokeWidth={2.5} />
          </button>

          <h2 className="text-3xl font-extrabold text-[#001d3d] mb-12 flex items-center gap-3 tracking-tighter">
            Portofolio
          </h2>

          <form className="space-y-10" onSubmit={(e) => { e.preventDefault(); navigate('/'); }}>
            <div className="grid grid-cols-12 items-center gap-10">
              <label className="col-span-3 text-sm font-bold text-slate-800 tracking-tight">Judul Karya</label>
              <input 
                type="text" 
                defaultValue={siswa.proyek}
                className="col-span-9 p-2.5 border border-gray-300 rounded-lg bg-gray-50/20 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium"
              />
            </div>

            <div className="grid grid-cols-12 items-start gap-10">
              <label className="col-span-3 text-sm font-bold text-slate-800 tracking-tight pt-2">Deskripsi</label>
              <textarea 
                rows="4"
                defaultValue={siswa.deskripsi}
                className="col-span-9 p-2.5 border border-gray-300 rounded-lg bg-gray-50/20 focus:bg-white focus:ring-2 focus:ring-blue-100 outline-none transition-all text-sm font-medium resize-none leading-relaxed"
              />
            </div>

            <div className="grid grid-cols-12 items-center gap-10">
              <label className="col-span-3 text-sm font-bold text-slate-800 tracking-tight">Nama</label>
              <div className="col-span-3 relative">
                <select className="w-full p-2 border border-gray-300 rounded-lg bg-gray-50/20 text-xs font-bold focus:bg-white outline-none appearance-none cursor-pointer">
                  <option>{siswa.nama}</option>
                </select>
                <div className="absolute right-2 top-2.5 pointer-events-none text-gray-400 text-[10px]">▼</div>
              </div>
            </div>

            <div className="grid grid-cols-12 items-start gap-10">
              <label className="col-span-3 text-sm font-bold text-slate-800 tracking-tight pt-2">Upload Gambar</label>
              <div className="col-span-9">
                <div className="border-2 border-dashed border-gray-200 rounded-2xl p-12 flex flex-col items-center justify-center bg-gray-50/30 group hover:border-blue-300 transition-all cursor-pointer">
                  <ImageIcon size={48} className="text-gray-300 mb-2 transition-transform group-hover:scale-110" />
                  <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">Klik untuk pilih gambar</span>
                </div>
                <button type="button" className="mt-5 bg-black text-white px-10 py-2 rounded-lg text-[10px] font-black uppercase tracking-[0.2em] hover:bg-slate-800 transition-all shadow-md active:scale-95">
                  Upload
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="flex justify-end gap-5 mt-14">
          <button 
            onClick={() => navigate(-1)}
            className="bg-[#FF4B4B] text-white px-14 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-red-600 transition-all active:scale-95"
          >
            Batal
          </button>
          <button 
            onClick={() => navigate('/')}
            className="bg-[#6B8EEF] text-white px-14 py-2.5 rounded-xl font-black text-sm uppercase tracking-widest shadow-xl hover:bg-blue-600 transition-all active:scale-95"
          >
            Save
          </button>
        </div>
      </main>
    </div>
  );
};

export default PortfolioEdit;