import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css'

import Layout from './components/Layout'
import Home from './pages/Home'
import JadwalDokter from './pages/JadwalDokter'
import CeklisRujukan from './pages/CeklisRujukan'
import PetaFaskes from './pages/PetaFaskes'
import Edukasi from './pages/Edukasi'
import NarahubungFKTP from './pages/NarahubungFKTP'
import PanduanRujukan from './pages/PanduanRujukan'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jadwal-dokter" element={<JadwalDokter />} />
          <Route path="ceklis-rujukan" element={<CeklisRujukan />} />
          <Route path="peta-faskes" element={<PetaFaskes />} />
          <Route path="edukasi" element={<Edukasi />} />
          <Route path="narahubung-fktp" element={<NarahubungFKTP />} />
          <Route path="panduan-rujukan" element={<PanduanRujukan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
