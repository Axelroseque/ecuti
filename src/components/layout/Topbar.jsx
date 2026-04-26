import { useState } from 'react'
import { useLocation } from 'react-router-dom'

export default function Topbar({ onMenuClick }) {
  const location = useLocation()
  const [isNotifOpen, setIsNotifOpen] = useState(false)

  const getPageTitle = () => {
    switch (location.pathname) {
      case '/dashboard':
      case '/dashboard-bawahan':
        return 'Dashboard'
      case '/pengajuan-cuti':
        return 'Ajukan Cuti'
      case '/verifikasi':
        return 'Verifikasi Pengajuan'
      case '/data-pegawai':
        return 'Data Pegawai'
      case '/laporan':
        return 'Laporan & Analitik'
      case '/konfigurasi/pengguna':
        return 'Manajemen Pengguna'
      case '/konfigurasi/workflow':
        return 'Pengaturan Workflow'
      case '/konfigurasi/log':
        return 'Sistem Log'
      default:
        return 'Sistem Informasi Cuti'
    }
  }

  return (
    <header className="topbar-container">
      <div className="flex items-center gap-3">
        <button 
          onClick={onMenuClick}
          className="lg:hidden p-2 -ml-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors cursor-pointer flex items-center justify-center">
          <span className="material-symbols-outlined">menu</span>
        </button>
        <h2 className="text-lg font-bold tracking-tighter text-primary truncate max-w-[200px] sm:max-w-none">
          {getPageTitle()}
        </h2>
      </div>

      <div className="flex items-center gap-4 sm:gap-6">
        {/* Notification Container */}
        <div className="relative flex items-center">
          <button 
            onClick={() => setIsNotifOpen(!isNotifOpen)}
            className="relative p-2 text-slate-600 hover:bg-slate-100 rounded-full transition-colors active:scale-95 cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
            <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full border-2 border-white"></span>
          </button>

          {/* NOTIFICATION DROPDOWN */}
          {isNotifOpen && (
            <>
              {/* Invisible overlay to catch outside clicks */}
              <div 
                className="fixed inset-0 z-[55]" 
                onClick={() => setIsNotifOpen(false)}
              ></div>
              
              <div className="absolute top-full right-[-60px] sm:right-0 mt-3 w-[320px] sm:w-[360px] bg-white rounded-xl shadow-[0_10px_40px_-10px_rgba(25,28,31,0.15)] overflow-hidden border border-slate-100 ring-1 ring-black/5 z-[60] origin-top-right animate-in fade-in slide-in-from-top-2 duration-200">
                <div className="px-5 py-4 border-b border-slate-100 flex items-center justify-between bg-surface-container-low">
                  <span className="font-semibold text-on-surface">Notifikasi</span>
                  <span className="bg-primary-container text-on-primary-container text-[10px] px-2 py-0.5 rounded-full font-bold">3 Baru</span>
                </div>
                <div className="max-h-[400px] overflow-y-auto no-scrollbar">
                  {/* Notification 1 */}
                  <div className="p-4 hover:bg-surface-container-low transition-colors flex gap-4 cursor-pointer">
                    <div className="mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-secondary-container ring-4 ring-secondary-container/20"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium text-on-surface leading-snug">Pengajuan <span className="font-mono text-xs font-bold text-primary">CT-0042</span> sedang diverifikasi HR</p>
                      <span className="text-[11px] text-slate-500 font-medium">2 jam yang lalu</span>
                    </div>
                  </div>
                  {/* Notification 2 */}
                  <div className="p-4 hover:bg-surface-container-low transition-colors flex gap-4 cursor-pointer">
                    <div className="mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 ring-4 ring-emerald-100"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium text-on-surface leading-snug">Cuti <span className="font-mono text-xs">10-11 Feb</span> DISETUJUI oleh KPN</p>
                      <span className="text-[11px] text-slate-500 font-medium">3 hari yang lalu</span>
                    </div>
                  </div>
                  {/* Notification 3 */}
                  <div className="p-4 hover:bg-surface-container-low transition-colors flex gap-4 cursor-pointer">
                    <div className="mt-1 shrink-0">
                      <div className="w-2.5 h-2.5 rounded-full bg-error ring-4 ring-error-container"></div>
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="text-sm font-medium text-on-surface leading-snug">Cuti Besar DITOLAK: Masa kerja belum 5 tahun</p>
                      <span className="text-[11px] text-slate-500 font-medium">1 minggu yang lalu</span>
                    </div>
                  </div>
                </div>
                <div className="p-3 border-t border-slate-100 flex items-center justify-between bg-white relative z-10">
                  <button className="text-[11px] font-bold text-slate-500 hover:text-primary transition-colors uppercase tracking-wider cursor-pointer">Tandai Semua Dibaca</button>
                  <button className="text-[11px] font-bold text-primary hover:underline flex items-center gap-1 uppercase tracking-wider cursor-pointer">
                      Lihat Semua <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                  </button>
                </div>
              </div>
            </>
          )}
        </div>

        {/* User Info */}
        <div className="flex items-center gap-3 pl-4 border-l border-slate-200">
          <div className="text-right hidden sm:block">
            <p className="text-sm font-bold text-on-surface">Hakim Ketua</p>
            <p className="font-mono text-[10px] text-slate-500">NIP. 197805122005011002</p>
          </div>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-primary to-primary-container flex items-center justify-center text-white text-sm font-bold border-2 border-primary/10 shrink-0">
            HK
          </div>
        </div>
      </div>
    </header>
  )
}
