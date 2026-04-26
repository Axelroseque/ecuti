import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import EditKuotaModal from '../../features/management/EditKuotaModal'

export default function DataPegawai() {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const [isEditKuotaOpen, setIsEditKuotaOpen] = useState(false)

  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <div className="page-padding flex-1 space-y-8 no-scrollbar">
          {/* Breadcrumbs & Title */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4">
            <div>
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-primary mb-1">Data Pegawai</h2>
              <p className="text-on-surface-variant text-xs sm:text-sm">Manajemen informasi dan kuota cuti aparatur sipil negara.</p>
            </div>
            <div className="flex gap-3 w-full sm:w-auto">
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-surface-container-high text-on-surface-variant rounded hover:bg-surface-container-highest transition-all text-sm font-semibold cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">print</span>
                Print
              </button>
              <button className="flex-1 sm:flex-none flex items-center justify-center gap-2 px-4 py-2 bg-primary text-white rounded shadow hover:opacity-90 transition-all text-sm font-semibold cursor-pointer">
                <span className="material-symbols-outlined text-[20px]">download</span>
                Export Excel
              </button>
            </div>
          </div>

          {/* Filter Section */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-4 bg-surface-container-low p-4 rounded-xl items-end">
            <div className="col-span-1 sm:col-span-2 md:col-span-4">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5 ml-1">Pencarian</label>
              <div className="relative group">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant group-focus-within:text-primary">search</span>
                <input className="w-full pl-10 pr-4 py-2.5 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm font-mono outline-none" placeholder="Cari nama atau NIP..." type="text"/>
              </div>
            </div>
            <div className="col-span-1 sm:col-span-1 md:col-span-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5 ml-1">Unit</label>
              <select defaultValue="Semua Unit" className="w-full py-2.5 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm cursor-pointer outline-none">
                <option>Semua Unit</option>
                <option>Kepaniteraan</option>
                <option>Kesekretariatan</option>
                <option>Sub Bagian Umum</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-1 md:col-span-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5 ml-1">Jabatan</label>
              <select defaultValue="Semua Jabatan" className="w-full py-2.5 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm cursor-pointer outline-none">
                <option>Semua Jabatan</option>
                <option>Hakim</option>
                <option>Panitera</option>
                <option>Staf</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-1 md:col-span-2">
              <label className="block text-[11px] font-bold uppercase tracking-wider text-on-surface-variant mb-1.5 ml-1">Status</label>
              <select defaultValue="Aktif" className="w-full py-2.5 bg-surface-container-lowest border-none rounded-lg focus:ring-2 focus:ring-primary/20 text-sm cursor-pointer outline-none">
                <option>Aktif</option>
                <option>Pensiun</option>
                <option>Mutasi</option>
              </select>
            </div>
            <div className="col-span-1 sm:col-span-1 md:col-span-2">
              <button className="w-full py-2.5 bg-secondary-container text-on-secondary-container font-bold rounded-lg hover:brightness-95 transition-all text-sm cursor-pointer">
                Terapkan
              </button>
            </div>
          </div>

          {/* Table Container */}
          <div className="table-responsive-wrapper">
            <table className="w-full border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-surface-container-low border-b border-surface-container">
                    <th className="px-6 py-4 text-left text-[11px] font-bold text-on-surface-variant uppercase tracking-widest w-16">No</th>
                    <th className="px-6 py-4 text-left text-[11px] font-bold text-on-surface-variant uppercase tracking-widest cursor-pointer hover:text-primary">
                      <div className="flex items-center gap-1">
                        Nama <span className="material-symbols-outlined text-[16px]">unfold_more</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-[11px] font-bold text-on-surface-variant uppercase tracking-widest cursor-pointer hover:text-primary">
                      <div className="flex items-center gap-1">
                        NIP <span className="material-symbols-outlined text-[16px]">unfold_more</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-[11px] font-bold text-on-surface-variant uppercase tracking-widest cursor-pointer hover:text-primary">
                      <div className="flex items-center gap-1">
                        Jabatan <span className="material-symbols-outlined text-[16px]">unfold_more</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-left text-[11px] font-bold text-on-surface-variant uppercase tracking-widest cursor-pointer hover:text-primary">
                      <div className="flex items-center gap-1">
                        Unit <span className="material-symbols-outlined text-[16px]">unfold_more</span>
                      </div>
                    </th>
                    <th className="px-6 py-4 text-right text-[11px] font-bold text-on-surface-variant uppercase tracking-widest">Aksi</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-surface-container-low">
                  {/* Row 1: Selected */}
                  <tr className="bg-primary/5 border-l-4 border-primary transition-colors">
                    <td className="px-6 py-4 text-sm text-on-surface-variant font-mono">01</td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-on-surface">Ahmad Fauzi</div>
                      <div className="text-[10px] text-tertiary-container font-bold uppercase tracking-tighter bg-tertiary-fixed px-1.5 rounded inline-block mt-0.5">Penata Muda</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-on-surface">199201012020011001</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">Staf</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">Sub Bagian Umum</td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => setIsDrawerOpen(true)} className="p-2 bg-primary text-white rounded-full shadow-lg hover:scale-105 transition-transform cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 2 */}
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 text-sm text-on-surface-variant font-mono">02</td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-on-surface">Siti Aminah, S.H.</div>
                      <div className="text-[10px] text-on-primary-fixed-variant font-bold uppercase tracking-tighter bg-primary-fixed px-1.5 rounded inline-block mt-0.5">Hakim Pratama</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-on-surface">198510122010032002</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">Hakim</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">Kepaniteraan Perdata</td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => setIsDrawerOpen(true)} className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 3 */}
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 text-sm text-on-surface-variant font-mono">03</td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-on-surface">Bambang Wijaya</div>
                      <div className="text-[10px] text-on-secondary-fixed-variant font-bold uppercase tracking-tighter bg-secondary-fixed px-1.5 rounded inline-block mt-0.5">Jurustik</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-on-surface">197805202005011004</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">Juru Sita</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">Kepaniteraan Hukum</td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => setIsDrawerOpen(true)} className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </td>
                  </tr>

                  {/* Row 4 */}
                  <tr className="hover:bg-surface-container-low transition-colors">
                    <td className="px-6 py-4 text-sm text-on-surface-variant font-mono">04</td>
                    <td className="px-6 py-4">
                      <div className="font-semibold text-on-surface">Ir. Suyanto</div>
                      <div className="text-[10px] text-tertiary-container font-bold uppercase tracking-tighter bg-tertiary-fixed px-1.5 rounded inline-block mt-0.5">Sekretaris</div>
                    </td>
                    <td className="px-6 py-4 text-sm font-mono text-on-surface">197001011995031001</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">Sekretaris</td>
                    <td className="px-6 py-4 text-sm text-on-surface-variant">Kesekretariatan</td>
                    <td className="px-6 py-4 text-right">
                      <button onClick={() => setIsDrawerOpen(true)} className="p-2 text-primary hover:bg-primary/10 rounded-full transition-colors cursor-pointer">
                        <span className="material-symbols-outlined text-[20px]">visibility</span>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="px-6 py-4 flex items-center justify-between bg-surface-container-low/50">
              <div className="flex items-center gap-4 text-sm text-on-surface-variant">
                <span>Menampilkan 1-10 dari <strong className="text-on-surface">47 pegawai</strong></span>
                <div className="flex items-center gap-2">
                  <span>Baris:</span>
                  <select defaultValue="10" className="py-1 pl-2 pr-8 text-xs bg-white border-none rounded focus:ring-1 focus:ring-primary/20 cursor-pointer outline-none">
                    <option>10</option>
                    <option>25</option>
                    <option>50</option>
                  </select>
                </div>
              </div>
              <div className="flex items-center gap-1">
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-highest transition-colors text-on-surface-variant cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white font-bold text-xs shadow-sm cursor-pointer">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-highest transition-colors text-xs font-medium cursor-pointer">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-highest transition-colors text-xs font-medium cursor-pointer">3</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-highest transition-colors text-xs font-medium cursor-pointer">4</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-highest transition-colors text-xs font-medium cursor-pointer">5</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-highest transition-colors text-xs font-medium cursor-pointer">6</button>
                <button className="w-8 h-8 flex items-center justify-center rounded hover:bg-surface-container-highest transition-colors text-on-surface-variant cursor-pointer">
                  <span className="material-symbols-outlined text-[20px]">chevron_right</span>
                </button>
              </div>
            </div>
          </div>

        {/* Slide-in Drawer */}
        {/* Overlay */}
        {isDrawerOpen && (
          <div 
            className="fixed inset-0 bg-slate-900/20 backdrop-blur-sm z-[55] transition-opacity"
            onClick={() => setIsDrawerOpen(false)}
          ></div>
        )}

        <div className={`fixed top-0 right-0 bottom-0 w-full sm:w-[420px] bg-white shadow-2xl z-[60] flex flex-col border-l border-surface-container transition-transform duration-300 ease-in-out ${isDrawerOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          {/* Drawer Header */}
          <div className="px-6 py-4 border-b border-surface-container flex justify-between items-center bg-surface-container-lowest">
            <h3 className="font-bold text-primary flex items-center gap-2">
              <span className="material-symbols-outlined">person</span>
              Detail Pegawai
            </h3>
            <button onClick={() => setIsDrawerOpen(false)} className="p-1 hover:bg-error-container hover:text-error rounded transition-colors cursor-pointer">
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 overflow-y-auto no-scrollbar p-6 space-y-6">
            {/* Profile Section */}
            <div className="flex flex-col items-center text-center p-4 bg-surface-container-low rounded-xl">
              <div className="w-24 h-24 rounded-full border-4 border-white shadow-md overflow-hidden mb-4 relative">
                <img className="w-full h-full object-cover" alt="Avatar" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBFIvkEPJ9XvJ-Cx2XtbeqAbNIJB9d9mtNW9N2VA_m976b_XQAvheTyRczwbyaeSYsla5ggqkj4Yh3tfwSDeAl4C-URsZfdmmSrdi1kUzFU5sy6pJ-05q70FKoHoVDcUNPdb11W3m9hzZYzzmiyeAJl_rwv9YSUKp2TWsXVRbPp8vGcI0hrTRl366BXThFDH8_EscnN-LFgjm6cYtVy9u2YZDkt1knQQ1wkSG09bFtR0II6SB63aI1pd31J1OTq-2CGXDNoMaoevaY"/>
                <div className="absolute bottom-0 right-0 bg-white p-0.5 rounded-full flex items-center justify-center">
                  <span className="material-symbols-outlined text-green-600 text-[18px]" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
                </div>
              </div>
              <h4 className="text-xl font-bold text-on-surface leading-tight">Ahmad Fauzi</h4>
              <p className="font-mono text-sm text-on-surface-variant mt-1">199201012020011001</p>
              <span className="mt-2 px-3 py-1 bg-tertiary-container text-[10px] font-black uppercase text-on-tertiary-container rounded-full">Aktif • Penata Muda</span>
            </div>

            {/* Informasi Jabatan */}
            <div className="space-y-3">
              <h5 className="text-[11px] font-bold uppercase tracking-widest text-primary border-b border-primary/10 pb-1">Informasi Jabatan</h5>
              <div className="grid grid-cols-2 gap-y-3 gap-x-4">
                <div>
                  <p className="text-[10px] text-on-surface-variant font-medium">Jabatan</p>
                  <p className="text-sm font-semibold">Staf</p>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant font-medium">Unit</p>
                  <p className="text-sm font-semibold">Sub Bagian Umum</p>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant font-medium">Golongan</p>
                  <p className="text-sm font-semibold font-mono">III/a</p>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant font-medium">TMT Jabatan</p>
                  <p className="text-sm font-semibold font-mono">01 Jan 2020</p>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant font-medium">Masa Kerja</p>
                  <p className="text-sm font-semibold">6y 2m</p>
                </div>
                <div>
                  <p className="text-[10px] text-on-surface-variant font-medium">Atasan Langsung</p>
                  <p className="text-sm font-semibold text-primary">Ir. Suyanto</p>
                </div>
              </div>
            </div>

            {/* Kuota Cuti 2026 */}
            <div className="space-y-3">
              <h5 className="text-[11px] font-bold uppercase tracking-widest text-primary border-b border-primary/10 pb-1">Kuota Cuti 2026</h5>
              <div className="overflow-hidden border border-surface-container rounded-lg">
                <table className="w-full text-xs">
                  <thead>
                    <tr className="bg-surface-container-low text-on-surface-variant">
                      <th className="px-3 py-2 text-left font-bold">Jenis</th>
                      <th className="px-2 py-2 text-center font-bold">Hak</th>
                      <th className="px-2 py-2 text-center font-bold">Pakai</th>
                      <th className="px-2 py-2 text-center font-bold">Sisa</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-surface-container">
                    <tr className="bg-primary/5">
                      <td className="px-3 py-2 font-bold text-on-surface">Tahunan</td>
                      <td className="px-2 py-2 text-center font-mono">18</td>
                      <td className="px-2 py-2 text-center font-mono text-error">10</td>
                      <td className="px-2 py-2 text-center font-mono font-bold text-primary">8</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Cuti Besar</td>
                      <td className="px-2 py-2 text-center font-mono">90</td>
                      <td className="px-2 py-2 text-center font-mono">0</td>
                      <td className="px-2 py-2 text-center font-mono">90</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Cuti Sakit</td>
                      <td className="px-2 py-2 text-center font-mono">14</td>
                      <td className="px-2 py-2 text-center font-mono">2</td>
                      <td className="px-2 py-2 text-center font-mono">12</td>
                    </tr>
                    <tr>
                      <td className="px-3 py-2 font-medium">Melahirkan</td>
                      <td className="px-2 py-2 text-center font-mono">-</td>
                      <td className="px-2 py-2 text-center font-mono">-</td>
                      <td className="px-2 py-2 text-center font-mono">-</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Riwayat Cuti Terbaru */}
            <div className="space-y-3">
              <h5 className="text-[11px] font-bold uppercase tracking-widest text-primary border-b border-primary/10 pb-1">Riwayat Cuti Terbaru</h5>
              <div className="space-y-3">
                <div className="flex gap-4 p-3 bg-surface-container-low rounded-lg border-l-4 border-secondary-container">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-on-surface">Cuti Tahunan</p>
                    <p className="text-[11px] font-mono text-on-surface-variant">28 Mar - 01 Apr 2026 (5 Hari)</p>
                  </div>
                  <span className="px-2 py-0.5 bg-secondary-fixed text-[10px] font-bold text-on-secondary-fixed-variant rounded-full self-start">Pending</span>
                </div>
                <div className="flex gap-4 p-3 bg-surface-container-low rounded-lg border-l-4 border-tertiary-container">
                  <div className="flex-1">
                    <p className="text-xs font-bold text-on-surface">Cuti Sakit</p>
                    <p className="text-[11px] font-mono text-on-surface-variant">10 Feb - 11 Feb 2026 (2 Hari)</p>
                  </div>
                  <span className="px-2 py-0.5 bg-tertiary-fixed text-[10px] font-bold text-on-tertiary-fixed-variant rounded-full self-start">Approved</span>
                </div>
              </div>
            </div>
          </div>

          {/* Drawer Footer */}
          <div className="p-6 border-t border-surface-container bg-surface-container-lowest grid grid-cols-2 gap-3 mt-auto">
            <button 
              onClick={() => setIsEditKuotaOpen(true)}
              className="py-2.5 px-4 bg-surface-container-highest text-on-surface font-bold text-sm rounded-lg hover:brightness-95 transition-all cursor-pointer">
                Edit Kuota
            </button>
            <button className="py-2.5 px-4 bg-primary text-white font-bold text-sm rounded-lg hover:opacity-90 transition-all flex items-center justify-center gap-2 cursor-pointer">
              <span className="material-symbols-outlined text-[18px]">description</span>
              Cetak Rekap
            </button>
          </div>
        </div>

        <EditKuotaModal isOpen={isEditKuotaOpen} onClose={() => setIsEditKuotaOpen(false)} />
      </div>
    </Layout>
  )
}
