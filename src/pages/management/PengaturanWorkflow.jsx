import Layout from '../../components/layout/Layout'
import Footer from '../../components/common/Footer'

export default function PengaturanWorkflow() {
  return (
    <Layout>
      <div className="flex flex-col flex-1 relative">
        <div className="page-padding flex-1">
          <div className="max-w-7xl mx-auto">
            {/* Info Alert */}
            <div className="mb-10 bg-tertiary-fixed/30 border-l-4 border-tertiary-container p-6 rounded-r-xl flex gap-4 items-start">
              <span className="material-symbols-outlined text-tertiary">info</span>
              <div>
                <p className="text-on-surface font-medium">Informasi Konfigurasi</p>
                <p className="text-on-surface-variant text-sm mt-1 leading-relaxed">Atur rantai persetujuan untuk setiap kombinasi jabatan dan jenis cuti. Setiap perubahan akan berdampak pada pengajuan baru yang masuk ke sistem SI-CUTI PN Kediri.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 xl:grid-cols-12 gap-8">
              {/* Left Column: Workflow List (Bento-style Grid) */}
              <div className="xl:col-span-8 space-y-6">
                <div className="flex justify-between items-end mb-4">
                  <h2 className="text-2xl font-bold text-primary tracking-tight">Workflow Aktif</h2>
                  <button className="flex items-center gap-2 text-primary font-semibold hover:underline text-sm transition-all cursor-pointer">
                    <span className="material-symbols-outlined text-sm">add_circle</span>
                    Tambah Aturan Baru
                  </button>
                </div>
                
                <div className="grid grid-cols-1 gap-4">
                  {/* Workflow Card #1 */}
                  <div className="content-card !p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-bold text-lg text-on-surface">Staf → Cuti Tahunan / Sakit</h3>
                        <div className="flex gap-2 mt-2">
                          <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] font-mono rounded uppercase">Staf</span>
                          <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] font-mono rounded uppercase">PPNPN</span>
                        </div>
                      </div>
                      <button className="p-2 text-outline hover:text-primary cursor-pointer"><span className="material-symbols-outlined">edit</span></button>
                    </div>
                    {/* Diagram Flow */}
                    <div className="overflow-x-auto no-scrollbar pb-2">
                      <div className="flex items-center justify-between relative px-4 min-w-[500px]">
                      <div className="absolute h-0.5 bg-outline-variant left-12 right-12 top-1/2 -translate-y-1/2 z-0"></div>
                      {/* Node 1 */}
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white">
                          <span className="material-symbols-outlined text-sm">person</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Pengaju</span>
                      </div>
                      <span className="material-symbols-outlined text-outline-variant relative z-10 bg-white" style={{ fontSize: '16px' }}>arrow_forward_ios</span>
                      {/* Node 2 */}
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container">
                          <span className="material-symbols-outlined text-sm">manage_accounts</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Kasubag</span>
                      </div>
                      <span className="material-symbols-outlined text-outline-variant relative z-10 bg-white" style={{ fontSize: '16px' }}>arrow_forward_ios</span>
                      {/* Node 3 */}
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-10 h-10 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                          <span className="material-symbols-outlined text-sm">verified_user</span>
                        </div>
                        <span className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant">Kepegawaian</span>
                      </div>
                    </div>
                  </div>
                </div>

                  {/* Workflow Card #2 */}
                  <div className="content-card !p-6">
                    <div className="flex justify-between items-start mb-6">
                      <div>
                        <h3 className="font-bold text-lg text-on-surface">Staf → Cuti Besar / Melahirkan / CLTN</h3>
                        <div className="flex gap-2 mt-2">
                          <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] font-mono rounded uppercase">Staf</span>
                          <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant text-[10px] font-mono rounded uppercase">PPNPN</span>
                        </div>
                      </div>
                      <button className="p-2 text-outline hover:text-primary cursor-pointer"><span className="material-symbols-outlined">edit</span></button>
                    </div>
                    <div className="overflow-x-auto no-scrollbar pb-2">
                      <div className="flex items-center justify-between relative px-4 min-w-[500px]">
                      <div className="absolute h-0.5 bg-outline-variant left-10 right-10 top-1/2 -translate-y-1/2 z-0"></div>
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"><span className="material-symbols-outlined text-xs">person</span></div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">Pengaju</span>
                      </div>
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container"><span className="material-symbols-outlined text-xs">manage_accounts</span></div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">Kasubag</span>
                      </div>
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary"><span className="material-symbols-outlined text-xs">verified_user</span></div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">Kepegawaian</span>
                      </div>
                      <div className="relative z-10 flex flex-col items-center gap-2">
                        <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white"><span className="material-symbols-outlined text-xs">gavel</span></div>
                        <span className="text-[9px] font-bold uppercase tracking-wider text-on-surface-variant">Ketua PN</span>
                      </div>
                    </div>
                  </div>
                </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {/* Workflow Card #3 */}
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-transparent hover:border-outline-variant transition-all">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="font-bold text-md text-on-surface">Hakim → Semua Cuti</h3>
                        <button className="p-1 text-outline hover:text-primary cursor-pointer"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span></button>
                      </div>
                      <div className="flex items-center justify-around relative px-2">
                        <div className="absolute h-0.5 bg-outline-variant left-8 right-8 top-1/2 -translate-y-1/2 z-0"></div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white"><span className="material-symbols-outlined text-xs">person</span></div>
                          <span className="text-[9px] font-bold uppercase text-on-surface-variant">Pengaju</span>
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary"><span className="material-symbols-outlined text-xs">verified_user</span></div>
                          <span className="text-[9px] font-bold uppercase text-on-surface-variant">Kepeg</span>
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <div className="w-8 h-8 rounded-full bg-primary-container flex items-center justify-center text-white"><span className="material-symbols-outlined text-xs">gavel</span></div>
                          <span className="text-[9px] font-bold uppercase text-on-surface-variant">Ketua</span>
                        </div>
                      </div>
                    </div>

                    {/* Workflow Card #4 */}
                    <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-transparent hover:border-outline-variant transition-all">
                      <div className="flex justify-between items-start mb-6">
                        <h3 className="font-bold text-md text-on-surface">Panitera/PP → Semua Cuti</h3>
                        <button className="p-1 text-outline hover:text-primary cursor-pointer"><span className="material-symbols-outlined" style={{ fontSize: '18px' }}>edit</span></button>
                      </div>
                      <div className="flex items-center justify-between relative px-2">
                        <div className="absolute h-0.5 bg-outline-variant left-6 right-6 top-1/2 -translate-y-1/2 z-0"></div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-white"><span className="material-symbols-outlined text-[10px]">person</span></div>
                          <span className="text-[8px] font-bold uppercase text-on-surface-variant">Pengaju</span>
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-secondary-container flex items-center justify-center text-on-secondary-container"><span className="material-symbols-outlined text-[10px]">account_tree</span></div>
                          <span className="text-[8px] font-bold uppercase text-on-surface-variant">Panmud</span>
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center text-primary"><span className="material-symbols-outlined text-[10px]">verified_user</span></div>
                          <span className="text-[8px] font-bold uppercase text-on-surface-variant">Kepeg</span>
                        </div>
                        <div className="relative z-10 flex flex-col items-center gap-2">
                          <div className="w-7 h-7 rounded-full bg-primary-container flex items-center justify-center text-white"><span className="material-symbols-outlined text-[10px]">gavel</span></div>
                          <span className="text-[8px] font-bold uppercase text-on-surface-variant">Ketua</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: General Settings */}
              <div className="xl:col-span-4 space-y-8">
                <div className="bg-white rounded-xl shadow-lg border border-outline-variant overflow-hidden relative z-10">
                  <div className="bg-primary px-6 py-4">
                    <h2 className="text-white font-bold tracking-wide">PENGATURAN UMUM</h2>
                  </div>
                  <div className="p-6 space-y-8">
                    {/* Limits Section */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest border-b border-surface-container pb-2">Batas Waktu Persetujuan (Hari)</h3>
                      <div className="space-y-4">
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-on-surface">Tingkat Atasan Langsung</label>
                          <input className="w-12 h-10 text-center font-mono bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary" type="text" defaultValue="3" />
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-on-surface">Tingkat Kepegawaian (HR)</label>
                          <input className="w-12 h-10 text-center font-mono bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary" type="text" defaultValue="2" />
                        </div>
                        <div className="flex items-center justify-between">
                          <label className="text-sm font-medium text-on-surface">Tingkat Pimpinan (Ketua)</label>
                          <input className="w-12 h-10 text-center font-mono bg-surface-container-high border-none rounded-lg focus:ring-2 focus:ring-primary" type="text" defaultValue="3" />
                        </div>
                      </div>
                    </div>
                    {/* Checkboxes Section */}
                    <div className="space-y-4">
                      <h3 className="text-xs font-bold text-on-surface-variant uppercase tracking-widest border-b border-surface-container pb-2">Otomasi & Validasi</h3>
                      <div className="space-y-3">
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className="relative flex items-center h-5">
                            <input defaultChecked className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" />
                          </div>
                          <div className="text-sm">
                            <span className="block font-medium text-on-surface group-hover:text-primary transition-colors">Auto-Escalation</span>
                            <span className="text-[11px] text-on-surface-variant leading-tight">Teruskan ke pimpinan jika batas waktu terlewati</span>
                          </div>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className="relative flex items-center h-5">
                            <input defaultChecked className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" />
                          </div>
                          <div className="text-sm">
                            <span className="block font-medium text-on-surface group-hover:text-primary transition-colors">Jadwal Sidang Warning</span>
                            <span className="text-[11px] text-on-surface-variant leading-tight">Validasi bentrok jadwal sidang bagi Hakim/PP</span>
                          </div>
                        </label>
                        <label className="flex items-start gap-3 cursor-pointer group">
                          <div className="relative flex items-center h-5">
                            <input className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary cursor-pointer" type="checkbox" />
                          </div>
                          <div className="text-sm">
                            <span className="block font-medium text-on-surface group-hover:text-primary transition-colors">Quota Multiplier</span>
                            <span className="text-[11px] text-on-surface-variant leading-tight">Hitung hari kerja x koefisien jabatan</span>
                          </div>
                        </label>
                      </div>
                    </div>
                    {/* Save Button */}
                    <div className="pt-4">
                      <button className="w-full bg-gradient-to-br from-primary to-primary-container text-white py-4 rounded-lg font-bold shadow-lg hover:shadow-primary/20 hover:opacity-90 active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer">
                        <span className="material-symbols-outlined">save</span>
                        Simpan Pengaturan
                      </button>
                      <p className="text-center text-[10px] text-on-surface-variant mt-3 font-mono">Last updated: 2023-10-24 14:20:01</p>
                    </div>
                  </div>
                </div>

                {/* Auxiliary Card: Log Info */}
                <div className="p-6 bg-surface-container rounded-xl border-dashed border-2 border-outline-variant relative z-10">
                  <h4 className="text-xs font-bold text-on-surface-variant uppercase mb-3 flex items-center gap-2">
                    <span className="material-symbols-outlined text-sm">history</span>
                    Riwayat Perubahan
                  </h4>
                  <div className="space-y-3">
                    <div className="flex gap-3">
                      <div className="w-1 h-8 bg-secondary rounded-full"></div>
                      <div className="text-[11px]">
                        <span className="font-bold text-on-surface block">Workflow #3 Updated</span>
                        <span className="text-on-surface-variant font-mono">by Admin - 2 days ago</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        
        {/* Visual Accent Element */}
        <div className="absolute bottom-0 right-0 p-8 pointer-events-none opacity-[0.03] overflow-hidden z-0">
          <span className="material-symbols-outlined text-[300px]" style={{ fontVariationSettings: "'wght' 700" }}>account_balance</span>
        </div>
      </div>
    </Layout>
  )
}
