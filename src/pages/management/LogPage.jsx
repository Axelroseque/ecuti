import Layout from '../../components/layout/Layout'
import Footer from '../../components/common/Footer'

export default function LogPage() {
  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <div className="page-padding flex-1">
          <div className="max-w-7xl mx-auto">
            {/* Header & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div className="space-y-4 flex-1">
                <div className="relative group max-w-md">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary">search</span>
                  <input className="w-full pl-12 pr-4 py-3 bg-white border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-slate-400 font-body" placeholder="Cari aktivitas, modul, atau ID..." type="text" />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <select className="bg-surface-container-low border-0 text-xs font-semibold px-4 py-2 rounded-lg text-slate-600 focus:ring-0 cursor-pointer">
                    <option>Semua Tingkat</option>
                    <option>INFO</option>
                    <option>WARNING</option>
                    <option>ERROR</option>
                  </select>
                  <select className="bg-surface-container-low border-0 text-xs font-semibold px-4 py-2 rounded-lg text-slate-600 focus:ring-0 cursor-pointer">
                    <option>7 Hari Terakhir</option>
                    <option>Hari Ini</option>
                    <option>Bulan Ini</option>
                  </select>
                  <select className="bg-surface-container-low border-0 text-xs font-semibold px-4 py-2 rounded-lg text-slate-600 focus:ring-0 cursor-pointer">
                    <option>Semua Modul</option>
                    <option>Otentikasi</option>
                    <option>Pengajuan</option>
                    <option>Verifikasi</option>
                    <option>Konfigurasi</option>
                  </select>
                </div>
              </div>
              <button className="bg-surface-container-low text-slate-600 px-6 py-3 rounded-xl border border-slate-200 flex items-center gap-2 hover:bg-white active:scale-95 transition-all cursor-pointer">
                <span className="material-symbols-outlined">download</span>
                <span className="font-semibold text-sm">Unduh Log (.csv)</span>
              </button>
            </div>

            {/* Log Table Container */}
            <div className="table-responsive-wrapper">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Waktu</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Tingkat</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Pengguna</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Aktivitas</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Modul</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Detail</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {/* Log Entry 1 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-5">
                      <p className="font-mono text-xs text-slate-800">2026-04-26</p>
                      <p className="font-mono text-[10px] text-slate-400">14:23:01 WIB</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg w-fit">
                        <span className="material-symbols-outlined text-[14px]">info</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Info</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-sm text-slate-800">Bambang Kusumo, M.H.</p>
                      <p className="font-mono text-[10px] text-slate-500">196801011994031005</p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-slate-700">Login berhasil ke dalam sistem.</p>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs text-slate-500">Auth</td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 group-hover:text-primary cursor-pointer">
                        <span className="material-symbols-outlined text-lg">data_object</span>
                      </button>
                    </td>
                  </tr>

                  {/* Log Entry 2 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-5">
                      <p className="font-mono text-xs text-slate-800">2026-04-26</p>
                      <p className="font-mono text-[10px] text-slate-400">13:10:45 WIB</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 px-2 py-1 bg-amber-50 text-amber-700 rounded-lg w-fit">
                        <span className="material-symbols-outlined text-[14px]">warning</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Warning</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-sm text-slate-800">Achmad Syarifuddin, S.H.</p>
                      <p className="font-mono text-[10px] text-slate-500">197508122002121001</p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-slate-700">Mencoba mengakses halaman tanpa izin.</p>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs text-slate-500">Routing</td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 group-hover:text-primary cursor-pointer">
                        <span className="material-symbols-outlined text-lg">data_object</span>
                      </button>
                    </td>
                  </tr>

                  {/* Log Entry 3 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-5">
                      <p className="font-mono text-xs text-slate-800">2026-04-26</p>
                      <p className="font-mono text-[10px] text-slate-400">11:05:12 WIB</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg w-fit">
                        <span className="material-symbols-outlined text-[14px]">info</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Info</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-sm text-slate-800">Hadi Kusuma, S.H.</p>
                      <p className="font-mono text-[10px] text-slate-500">198506112009031004</p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-slate-700">Mengubah Pengaturan Workflow #3.</p>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs text-slate-500">Konfigurasi</td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 group-hover:text-primary cursor-pointer">
                        <span className="material-symbols-outlined text-lg">data_object</span>
                      </button>
                    </td>
                  </tr>

                  {/* Log Entry 4 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-5">
                      <p className="font-mono text-xs text-slate-800">2026-04-26</p>
                      <p className="font-mono text-[10px] text-slate-400">09:45:30 WIB</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 px-2 py-1 bg-red-50 text-red-700 rounded-lg w-fit">
                        <span className="material-symbols-outlined text-[14px]">error</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Error</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-sm text-slate-800">System</p>
                      <p className="font-mono text-[10px] text-slate-500">SYS_DAEMON</p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-slate-700">Gagal mengirim notifikasi email ke user 199204152018012003.</p>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs text-slate-500">Notification</td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 group-hover:text-primary cursor-pointer">
                        <span className="material-symbols-outlined text-lg">data_object</span>
                      </button>
                    </td>
                  </tr>

                  {/* Log Entry 5 */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-5">
                      <p className="font-mono text-xs text-slate-800">2026-04-26</p>
                      <p className="font-mono text-[10px] text-slate-400">08:15:00 WIB</p>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 px-2 py-1 bg-emerald-50 text-emerald-700 rounded-lg w-fit">
                        <span className="material-symbols-outlined text-[14px]">info</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Info</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <p className="font-semibold text-sm text-slate-800">Dewi Rahayu, A.Md.</p>
                      <p className="font-mono text-[10px] text-slate-500">199204152018012003</p>
                    </td>
                    <td className="px-6 py-5">
                      <p className="text-sm font-medium text-slate-700">Membuat pengajuan Cuti Tahunan baru (#CUTI-2026-0042).</p>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs text-slate-500">Pengajuan</td>
                    <td className="px-6 py-5 text-right">
                      <button className="p-2 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 group-hover:text-primary cursor-pointer">
                        <span className="material-symbols-outlined text-lg">data_object</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Pagination */}
              <div className="px-6 py-4 bg-slate-50/30 flex items-center justify-between border-t border-slate-100">
                <p className="text-xs text-slate-500">Menampilkan 1-5 dari 1,240 log</p>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-xs shadow-md shadow-primary/20 cursor-pointer">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white transition-colors text-xs font-bold cursor-pointer">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white transition-colors text-xs font-bold cursor-pointer">3</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  )
}
