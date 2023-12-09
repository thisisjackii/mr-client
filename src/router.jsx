// src/router.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './login';
import Register from './register';
import Dashboard from './Dashboard';
import DataPengeluaran from './DataPengeluaran';
import DataPemasukan from './DataPemasukan';
import DataKatPengeluaran from './DataKatPengeluaran';
import DataKatPemasukan from './DataKatPemasukan';
import DataHutang from './DataHutang';
import DataWishlist from './DataWishlist';
import DataRekapBulanan from './DataRekapBulanan';
import DataRiwayat from './DataRiwayat';
import CreateHutang from './CreateForm/CreateHutang';

const AppRouter = () => {
  return (
    <Router>
      <Routes> {/* Use Routes instead of Switch */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/datapengeluaran" element={<DataPengeluaran />} />
        <Route path="/datakatpengeluaran" element={<DataKatPengeluaran />} />
        <Route path="/datakatpengeluaran" element={<DataPemasukan />} />
        <Route path="/datakatpemasukan" element={<DataKatPemasukan />} />
        <Route path="/datahutang" element={<DataHutang />} />      
        <Route path="/datawishlist" element={<DataWishlist />} />  
        <Route path="/datarekapbulanan" element={<DataRekapBulanan />} />
        <Route path="/datariwayat" element={<DataRiwayat />} />
        <Route path="/createhutang" element={<CreateHutang/>} />                       
      </Routes>
    </Router>
  );
};

export default AppRouter;
