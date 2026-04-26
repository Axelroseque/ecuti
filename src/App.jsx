import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import LoginPage from './pages/auth/LoginPage'
import DashboardAtasan from './pages/dashboard/DashboardAtasan'
import DashboardBawahan from './pages/dashboard/DashboardBawahan'
import PengajuanCuti from './pages/leave/PengajuanCuti'
import Verifikasi from './pages/leave/Verifikasi'
import Laporan from './pages/leave/Laporan'
import ManajemenPengguna from './pages/management/ManajemenPengguna'
import PengaturanWorkflow from './pages/management/PengaturanWorkflow'
import LogPage from './pages/management/LogPage'
import DataPegawai from './pages/management/DataPegawai'

import { ROUTES } from './constants/routes'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.LOGIN} element={<LoginPage />} />
        <Route path={ROUTES.DASHBOARD_ATASAN} element={<DashboardAtasan />} />
        <Route path={ROUTES.DASHBOARD_BAWAHAN} element={<DashboardBawahan />} />
        <Route path={ROUTES.PENGAJUAN_CUTI} element={<PengajuanCuti />} />
        <Route path={ROUTES.VERIFIKASI} element={<Verifikasi />} />
        <Route path={ROUTES.DATA_PEGAWAI} element={<DataPegawai />} />
        <Route path={ROUTES.LAPORAN} element={<Laporan />} />
        <Route path={ROUTES.MANAGEMENT_USERS} element={<ManajemenPengguna />} />
        <Route path={ROUTES.MANAGEMENT_WORKFLOW} element={<PengaturanWorkflow />} />
        <Route path={ROUTES.MANAGEMENT_LOGS} element={<LogPage />} />
        <Route path="/" element={<Navigate to={ROUTES.LOGIN} replace />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
