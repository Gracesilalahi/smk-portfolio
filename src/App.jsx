import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import PortfolioTable from './PortfolioTable';
import PortfolioDetail from './PortfolioDetail';
import PortfolioEdit from './PortfolioEdit';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Halaman Daftar Utama */}
        <Route path="/" element={<PortfolioTable />} />
        
        {/* Halaman Detail (Akses lewat klik baris) */}
        <Route path="/detail/:id" element={<PortfolioDetail />} />

        {/* Halaman Edit (Akses lewat klik titik tiga) */}
        <Route path="/edit/:id" element={<PortfolioEdit />} />

        {/* Jika URL salah, kembali ke Home */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;