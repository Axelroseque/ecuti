import { ROUTES } from './routes'

export const ROLE_CONFIGS = {
  bawahan: [
    { icon: 'dashboard', label: 'Dashboard', path: ROUTES.DASHBOARD_BAWAHAN },
    { icon: 'person', label: 'Ajukan Cuti', path: ROUTES.PENGAJUAN_CUTI }
  ],
  atasan: [
    { icon: 'dashboard', label: 'Dashboard', path: ROUTES.DASHBOARD_ATASAN },
    { icon: 'person', label: 'Ajukan Cuti', path: ROUTES.PENGAJUAN_CUTI },
    { icon: 'history', label: 'Verifikasi', path: ROUTES.VERIFIKASI },
    { icon: 'badge', label: 'Data Pegawai', path: ROUTES.DATA_PEGAWAI },
    { icon: 'add_circle', label: 'Laporan', path: ROUTES.LAPORAN }
  ],
  pimpinan: [
    { icon: 'dashboard', label: 'Dashboard', path: ROUTES.LAPORAN },
    { icon: 'history', label: 'Verifikasi', path: ROUTES.VERIFIKASI },
    { icon: 'badge', label: 'Data Pegawai', path: ROUTES.DATA_PEGAWAI }
  ],
  admin: [
    { icon: 'dashboard', label: 'Dashboard', path: ROUTES.LAPORAN },
    {
      icon: 'settings',
      label: 'Konfigurasi',
      path: '/konfigurasi',
      subItems: [
        { label: 'Manajemen Pengguna', path: ROUTES.MANAGEMENT_USERS },
        { label: 'Pengaturan Workflow', path: ROUTES.MANAGEMENT_WORKFLOW },
        { label: 'Log', path: ROUTES.MANAGEMENT_LOGS },
      ]
    }
  ]
}
