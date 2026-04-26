import Layout from '../../components/layout/Layout'
import Footer from '../../components/common/Footer'

export default function Laporan() {
  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <div className="page-padding flex-1">
          {/* Title and Filters */}
          <section className="mb-8 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <h1 className="text-3xl font-bold tracking-tight text-on-surface mb-2">Laporan & Analitik Cuti</h1>
              <p className="text-on-surface-variant text-sm max-w-xl">Ikhtisar komprehensif statistik permohonan dan distribusi cuti pegawai di lingkungan Pengadilan Negeri Kediri.</p>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Tahun</label>
                <select className="bg-surface-container-highest border-none rounded-lg text-xs font-mono focus:ring-2 focus:ring-primary py-2 pl-3 pr-8">
                  <option>2026</option>
                  <option>2025</option>
                  <option>2024</option>
                </select>
              </div>
              <div className="flex flex-col gap-1">
                <label className="text-[10px] font-bold text-slate-400 uppercase ml-1">Bulan</label>
                <select className="bg-surface-container-highest border-none rounded-lg text-xs font-mono focus:ring-2 focus:ring-primary py-2 pl-3 pr-8">
                  <option>Maret</option>
                  <option>Februari</option>
                  <option>Januari</option>
                </select>
              </div>
              <button className="bg-gradient-to-br from-primary to-primary-container text-white px-5 py-2.5 rounded-lg flex items-center gap-2 text-sm font-semibold hover:shadow-lg transition-all active:scale-95 self-end cursor-pointer">
                <span className="material-symbols-outlined text-lg">download</span>
                <span>Ekspor Data</span>
              </button>
            </div>
          </section>

          {/* Stat Cards */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
            <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary/20 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-primary-fixed-dim/20 rounded-lg text-primary">
                  <span className="material-symbols-outlined">summarize</span>
                </div>
                <span className="text-green-600 text-xs font-bold">+12% vs Feb</span>
              </div>
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Total Cuti Bulan Ini</h3>
              <p className="text-3xl font-bold font-mono text-on-surface">42</p>
              <div className="mt-4 h-1 w-full bg-slate-100 rounded-full overflow-hidden">
                <div className="h-full bg-primary w-3/4"></div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary/20 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-secondary-fixed/20 rounded-lg text-secondary">
                  <span className="material-symbols-outlined">star</span>
                </div>
                <span className="text-slate-400 text-xs font-bold">Teratas</span>
              </div>
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Jenis Cuti Terpopuler</h3>
              <p className="text-2xl font-bold text-on-surface">Tahunan</p>
              <p className="text-[10px] font-mono text-slate-400 mt-2">65% DARI TOTAL PENGAJUAN</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary/20 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-tertiary-fixed/20 rounded-lg text-tertiary">
                  <span className="material-symbols-outlined">groups</span>
                </div>
                <span className="text-red-600 text-xs font-bold">Aktif</span>
              </div>
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Pegawai Cuti Hari Ini</h3>
              <p className="text-3xl font-bold font-mono text-on-surface">08</p>
              <p className="text-[10px] font-mono text-slate-400 mt-2">DARI 124 PEGAWAI</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant/10 group hover:border-primary/20 transition-colors">
              <div className="flex justify-between items-start mb-4">
                <div className="p-2 bg-on-surface-variant/10 rounded-lg text-on-surface-variant">
                  <span className="material-symbols-outlined">timer</span>
                </div>
                <span className="text-slate-400 text-xs font-bold">Stabil</span>
              </div>
              <h3 className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-1">Rata-rata Durasi</h3>
              <p className="text-3xl font-bold font-mono text-on-surface">4.5</p>
              <p className="text-[10px] font-mono text-slate-400 mt-2">HARI PER PERMOHONAN</p>
            </div>
          </section>

          {/* Visual Analytics */}
          <section className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-10">
            {/* Bar Chart Simulation */}
            <div className="lg:col-span-2 bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10">
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-lg font-bold text-on-surface">Tren Cuti Bulanan</h2>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-primary rounded-full"></span>
                  <span className="text-xs text-slate-500 font-mono">2026</span>
                </div>
              </div>
              <div className="h-64 flex items-end justify-between gap-4 px-2">
                {/* Fake Bars */}
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[40%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">JAN</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[55%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">FEB</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-primary-container rounded-t-lg h-[85%] relative">
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-on-surface text-white text-[10px] py-1 px-2 rounded">42</div>
                  </div>
                  <span className="text-[10px] font-mono text-slate-900 font-bold">MAR</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[30%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">APR</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[45%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">MEI</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[70%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">JUN</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[90%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">JUL</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[50%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">AGU</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[35%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">SEP</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[60%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">OKT</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[55%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">NOV</span>
                </div>
                <div className="flex-1 flex flex-col items-center gap-2">
                  <div className="w-full bg-slate-100 rounded-t-lg transition-all hover:bg-primary-container h-[75%]"></div>
                  <span className="text-[10px] font-mono text-slate-400">DES</span>
                </div>
              </div>
            </div>

            {/* Donut Chart Simulation */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-outline-variant/10">
              <h2 className="text-lg font-bold text-on-surface mb-8">Distribusi Jenis Cuti</h2>
              <div className="flex flex-col items-center">
                <div className="relative w-48 h-48 mb-8">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle cx="96" cy="96" fill="transparent" r="80" stroke="#f2f3f7" strokeWidth="20"></circle>
                    {/* Tahunan 65% */}
                    <circle cx="96" cy="96" fill="transparent" r="80" stroke="#690008" strokeDasharray="326.7 175.9" strokeDashoffset="0" strokeWidth="20"></circle>
                    {/* Sakit 20% */}
                    <circle cx="96" cy="96" fill="transparent" r="80" stroke="#7d5800" strokeDasharray="100.5 402.1" strokeDashoffset="-326.7" strokeWidth="20"></circle>
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold font-mono">100%</span>
                    <span className="text-[10px] text-slate-500 uppercase">Total Data</span>
                  </div>
                </div>
                <div className="w-full space-y-3">
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary"></span>
                      <span className="text-slate-600">Tahunan</span>
                    </div>
                    <span className="font-mono font-bold">65%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                      <span className="text-slate-600">Sakit</span>
                    </div>
                    <span className="font-mono font-bold">20%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-tertiary"></span>
                      <span className="text-slate-600">Alasan Penting</span>
                    </div>
                    <span className="font-mono font-bold">10%</span>
                  </div>
                  <div className="flex items-center justify-between text-xs">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-on-surface-variant"></span>
                      <span className="text-slate-600">Melahirkan</span>
                    </div>
                    <span className="font-mono font-bold">5%</span>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Detailed Data Table */}
          <section className="bg-white rounded-xl shadow-sm border border-outline-variant/10 overflow-hidden mb-10">
            <div className="p-6 border-b border-slate-100 flex items-center justify-between">
              <h2 className="text-lg font-bold text-on-surface">Tabel Rekap Per Pegawai</h2>
              <div className="relative">
                <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-lg">search</span>
                <input className="pl-10 pr-4 py-2 bg-surface-container-low border-none rounded-lg text-xs font-medium w-64 focus:ring-2 focus:ring-primary" placeholder="Cari Pegawai..." type="text" />
              </div>
            </div>
            <div className="table-responsive-wrapper !border-none !rounded-none !shadow-none">
              <table className="w-full text-left border-collapse min-w-[900px]">
                <thead>
                  <tr className="bg-surface-container-low">
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">No</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Nama Pegawai</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">NIP</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest">Jabatan</th>
                    <th className="px-3 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">TH</th>
                    <th className="px-3 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">BS</th>
                    <th className="px-3 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">SK</th>
                    <th className="px-3 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">ML</th>
                    <th className="px-6 py-4 text-[10px] font-bold text-slate-500 uppercase tracking-widest text-center">Total</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs">01</td>
                    <td className="px-6 py-4 text-sm font-semibold">Bambang Wijaya, S.H., M.H.</td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-500">198204122005011003</td>
                    <td className="px-6 py-4 text-xs text-slate-600">Ketua Pengadilan</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">08</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">00</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">02</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">00</td>
                    <td className="px-6 py-4 font-mono text-xs font-bold text-center bg-slate-50/50">10</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs">02</td>
                    <td className="px-6 py-4 text-sm font-semibold">Siti Aminah, S.Kom.</td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-500">199010252014032001</td>
                    <td className="px-6 py-4 text-xs text-slate-600">Pranata Komputer Ahli Pertama</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">05</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">03</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">00</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">90</td>
                    <td className="px-6 py-4 font-mono text-xs font-bold text-center bg-slate-50/50">98</td>
                  </tr>
                  <tr className="hover:bg-slate-50 transition-colors">
                    <td className="px-6 py-4 font-mono text-xs">03</td>
                    <td className="px-6 py-4 text-sm font-semibold">Eko Prasetyo, S.H.</td>
                    <td className="px-6 py-4 font-mono text-xs text-slate-500">198501012008011005</td>
                    <td className="px-6 py-4 text-xs text-slate-600">Panitera Pengganti</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">12</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">00</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">01</td>
                    <td className="px-3 py-4 font-mono text-xs text-center">00</td>
                    <td className="px-6 py-4 font-mono text-xs font-bold text-center bg-slate-50/50">13</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="p-6 bg-surface-container-low/30 flex items-center justify-between border-t border-slate-100">
              <p className="text-[10px] font-mono text-slate-400">Menampilkan 1-10 dari 124 data pegawai</p>
              <div className="flex items-center gap-2">
                <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 hover:bg-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-lg">chevron_left</span>
                </button>
                <button className="w-8 h-8 flex items-center justify-center rounded bg-primary text-white text-xs font-bold cursor-pointer">1</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 hover:bg-white transition-colors text-xs font-bold cursor-pointer">2</button>
                <button className="w-8 h-8 flex items-center justify-center rounded border border-slate-200 hover:bg-white transition-colors cursor-pointer">
                  <span className="material-symbols-outlined text-lg">chevron_right</span>
                </button>
              </div>
            </div>
          </section>

          {/* Action Buttons */}
          <section className="flex flex-wrap items-center justify-end gap-4 border-t border-slate-200 pt-8">
            <button className="px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-all active:scale-95 cursor-pointer">
              <span className="material-symbols-outlined text-xl text-red-600">picture_as_pdf</span>
              Export PDF
            </button>
            <button className="px-6 py-3 rounded-lg flex items-center gap-3 text-sm font-bold border-2 border-slate-200 text-slate-600 hover:bg-slate-50 transition-all active:scale-95 cursor-pointer">
              <span className="material-symbols-outlined text-xl text-green-600">table_view</span>
              Export Excel
            </button>
          </section>
        </div>

        <Footer />
      </div>
    </Layout>
  )
}
