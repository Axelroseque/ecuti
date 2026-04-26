import Layout from '../../components/layout/Layout'
import Footer from '../../components/common/Footer'

export default function Verifikasi() {
  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <div className="page-padding flex-1">
          {/* Breadcrumb & Title */}
          <div className="mb-8">
            <h2 className="text-3xl font-bold text-red-900 tracking-tight font-headline">Verifikasi Pengajuan Cuti</h2>
          </div>

          {/* Filters Section */}
          <div className="flex flex-wrap items-center gap-4 mb-8 relative z-10">
            <div className="flex flex-col gap-1.5 min-w-[180px]">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 ml-1">Filter Bulan</label>
              <select className="bg-surface-container-lowest border-none rounded-lg px-4 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer">
                <option>Maret 2024</option>
                <option>April 2024</option>
                <option>Mei 2024</option>
              </select>
            </div>
            <div className="flex flex-col gap-1.5 min-w-[180px]">
              <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 ml-1">Status Verifikasi</label>
              <select className="bg-surface-container-lowest border-none rounded-lg px-4 py-2.5 text-sm shadow-sm focus:ring-2 focus:ring-red-500 appearance-none cursor-pointer">
                <option>Semua Status</option>
                <option>Pending</option>
                <option>Validated</option>
                <option>Rejected</option>
              </select>
            </div>
            <button className="mt-5 px-6 py-2.5 bg-primary text-white rounded-lg font-semibold text-sm hover:translate-y-[-1px] transition-transform active:scale-95 shadow-lg shadow-red-900/10 cursor-pointer">
              Terapkan Filter
            </button>
          </div>

          {/* Two Column Layout: Table and Details */}
          <div className="grid grid-cols-1 xl:grid-cols-3 gap-8 items-start relative z-10">
            {/* Table Section */}
            <div className="xl:col-span-2 space-y-4">
              <div className="table-responsive-wrapper">
                <table className="w-full text-left border-collapse min-w-[800px]">
                  <thead>
                    <tr className="bg-surface-container-low border-b border-outline-variant/20">
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">No</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Nama Pegawai</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Jenis Cuti</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Periode</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500">Status</th>
                      <th className="px-6 py-4 text-[11px] font-bold uppercase tracking-wider text-slate-500 text-center">Aksi</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100">
                    {/* Active Row */}
                    <tr className="hover:bg-red-50/30 transition-colors group bg-red-50/50">
                      <td className="px-6 py-5 font-mono text-sm">01</td>
                      <td className="px-6 py-5">
                        <p className="font-bold text-slate-900">Ahmad Fauzi</p>
                        <p className="text-xs text-slate-500 font-mono">NIP: 198503122010121001</p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm font-medium">Cuti Tahunan</span>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-mono">28 Mar - 1 Apr</p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-secondary-container/20 text-on-secondary-container">
                          <span className="w-1.5 h-1.5 rounded-full bg-secondary mr-2"></span>
                          Menunggu
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <button className="text-red-900 hover:bg-red-100 p-2 rounded-lg transition-colors cursor-pointer">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                      </td>
                    </tr>
                    {/* Warning Row */}
                    <tr className="hover:bg-red-50/30 transition-colors group">
                      <td className="px-6 py-5 font-mono text-sm">02</td>
                      <td className="px-6 py-5">
                        <p className="font-bold text-slate-900">Budi Santoso</p>
                        <p className="text-xs text-slate-500 font-mono">NIP: 199005222015031002</p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm font-medium">Cuti Sakit</span>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-mono">26 - 27 Mar</p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center gap-1.5 text-error font-semibold text-xs">
                          <span className="material-symbols-outlined text-[18px]">warning</span>
                          Ada Kendala
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <button className="text-slate-400 hover:bg-slate-100 p-2 rounded-lg transition-colors cursor-pointer">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                      </td>
                    </tr>
                    {/* Ready Row */}
                    <tr className="hover:bg-red-50/30 transition-colors group">
                      <td className="px-6 py-5 font-mono text-sm">03</td>
                      <td className="px-6 py-5">
                        <p className="font-bold text-slate-900">Citra Dewi</p>
                        <p className="text-xs text-slate-500 font-mono">NIP: 199511302020122003</p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="text-sm font-medium">Cuti Besar</span>
                      </td>
                      <td className="px-6 py-5">
                        <p className="text-sm font-mono">1 Apr - 30 Jun</p>
                      </td>
                      <td className="px-6 py-5">
                        <span className="inline-flex items-center px-2.5 py-1 rounded-full text-xs font-semibold bg-tertiary-fixed/30 text-tertiary-container border border-tertiary-container/10">
                          Siap Verifikasi
                        </span>
                      </td>
                      <td className="px-6 py-5 text-center">
                        <button className="text-slate-400 hover:bg-slate-100 p-2 rounded-lg transition-colors cursor-pointer">
                          <span className="material-symbols-outlined">visibility</span>
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            {/* Side Detail Panel */}
            <div className="xl:col-span-1">
              <div className="bg-surface-container-lowest rounded-xl shadow-lg border border-red-900/5 overflow-hidden flex flex-col h-full sticky top-24">
                <div className="p-6 border-b border-slate-100 bg-gradient-to-r from-red-900/5 to-transparent">
                  <h3 className="text-lg font-bold text-red-900 mb-1">Detail Validasi</h3>
                  <p className="text-sm text-slate-600 font-medium">Ahmad Fauzi</p>
                </div>
                <div className="p-6 space-y-8 flex-1">
                  {/* Checklist Section */}
                  <div className="space-y-4">
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-md bg-tertiary-container text-white shadow-sm">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 leading-none mb-1">Saldo cuti mencukupi</p>
                        <p className="text-xs text-slate-500 font-mono">Sisa: 8 hari</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-md bg-tertiary-container text-white shadow-sm">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 leading-none mb-1">Masa kerja memenuhi syarat</p>
                        <p className="text-xs text-slate-500">&gt; 1 tahun (Terhitung Jan 2011)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-4 p-3 rounded-lg hover:bg-slate-50 transition-colors">
                      <div className="mt-0.5 flex items-center justify-center w-5 h-5 rounded-md bg-tertiary-container text-white shadow-sm">
                        <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'wght' 700" }}>check</span>
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-slate-900 leading-none mb-1">Dokumen pendukung lengkap</p>
                        <p className="text-xs text-red-800 font-medium underline cursor-pointer">Lihat Lampiran.pdf</p>
                      </div>
                    </div>
                    <label className="flex items-start gap-4 p-3 rounded-lg border-2 border-dashed border-red-100 hover:border-red-200 cursor-pointer transition-all group">
                      <input className="mt-0.5 w-5 h-5 rounded border-red-200 text-red-900 focus:ring-red-500" type="checkbox" />
                      <span className="text-sm font-medium text-slate-700 leading-tight group-hover:text-red-900">Sesuai Perka BKN No. 24/2017</span>
                    </label>
                  </div>

                  {/* Notes Area */}
                  <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-slate-500 ml-1">Catatan Verifikator</label>
                    <textarea className="w-full bg-slate-50 border-none rounded-lg p-3 text-sm font-mono h-24 focus:ring-2 focus:ring-red-500 placeholder-slate-400" placeholder="Tambahkan catatan jika pengajuan ditolak atau butuh perbaikan..."></textarea>
                  </div>
                </div>
                <div className="p-6 bg-slate-50 border-t border-slate-100 grid grid-cols-2 gap-3">
                  <button className="px-4 py-2.5 bg-gradient-to-br from-primary to-primary-container text-white rounded-lg font-bold text-sm shadow-md hover:shadow-red-900/20 active:scale-95 transition-all cursor-pointer">
                    Verifikasi Lolos
                  </button>
                  <button className="px-4 py-2.5 border border-outline text-outline rounded-lg font-bold text-sm hover:bg-slate-100 active:scale-95 transition-all cursor-pointer">
                    Tolak + Catatan
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
