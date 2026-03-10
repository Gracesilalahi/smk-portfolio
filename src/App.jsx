import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PortfolioTable from './PortfolioTable';
import PortfolioDetail from './PortfolioDetail';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Utama: Daftar Tabel */}
        <Route path="/" element={<PortfolioTable />} />
        
        {/* Halaman Detail: Berdasarkan ID Siswa */}
        <Route path="/detail/:id" element={<PortfolioDetail />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;