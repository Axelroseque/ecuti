export default function DetailCutiStep() {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Tanggal Mulai</label>
          <div className="relative">
            <input className="w-full bg-surface-container-highest border-none rounded-lg p-3 font-mono text-sm focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer" type="date" defaultValue="2024-11-20" />
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Tanggal Selesai</label>
          <div className="relative">
            <input className="w-full bg-surface-container-highest border-none rounded-lg p-3 font-mono text-sm focus:ring-2 focus:ring-primary/50 transition-all cursor-pointer" type="date" defaultValue="2024-11-22" />
          </div>
        </div>
        <div className="md:col-span-2 space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Durasi Cuti</label>
          <div className="flex items-center gap-3 bg-secondary-container/10 p-4 rounded-lg border border-secondary-container/20">
            <span className="material-symbols-outlined text-secondary">event_note</span>
            <span className="font-mono text-lg font-bold text-on-secondary-container">3 HARI KERJA</span>
            <span className="text-xs text-on-secondary-container/70 ml-auto italic">*Terhitung hari kerja efektif</span>
          </div>
        </div>
      </div>

      <div className="space-y-6">
        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Alasan Pengajuan</label>
          <textarea className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Contoh: Menghadiri acara keluarga di luar kota..." rows="3"></textarea>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Alamat Selama Cuti</label>
            <input className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Jl. Diponegoro No. 12, Kediri" type="text" />
          </div>
          <div className="space-y-2">
            <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Nomor Telepon</label>
            <input className="w-full bg-surface-container-highest border-none rounded-lg p-3 font-mono text-sm focus:ring-2 focus:ring-primary/50 transition-all" type="text" defaultValue="0812-3456-XXXX" />
          </div>
        </div>

        <div className="space-y-2">
          <label className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Pegawai Pengganti (Mandatory)</label>
          <div className="relative group">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 material-symbols-outlined text-slate-400 group-focus-within:text-primary">search</span>
            <input className="w-full bg-surface-container-highest border-none rounded-lg py-3 pl-10 pr-4 text-sm focus:ring-2 focus:ring-primary/50 transition-all" placeholder="Cari nama atau NIP pegawai..." type="text" />
          </div>
          <div className="flex items-center gap-3 p-3 bg-surface-container mt-2 rounded-lg">
            <img alt="Substitution Staff" className="h-10 w-10 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAks-Ughkp9wu7b8MSSkGwV_K8thjTtoRqP_cch3SRbC_mE6PJvrkN8j2UJC1amzTUwRA5UwZcxdfo-U2noFjixDOD0hjyVPEnAB_pQSWdum85T7ZQ9AEUKD-siWPY_ymuF9S4T4ExRmhc-M6QztXeq55Kv27mBRbsTUpJYAE6z-09eP2f8bSKVspmSEQDBAdvrcvlwQ9_9hPKs-Lqh0qrUHGS4IEsaxwMfz5_MAqqPopBbAP8otiUO7KHB3ckhweu916Rw6bbHRnw" />
            <div>
              <p className="text-sm font-bold text-on-surface">Budi Satria, S.H.</p>
              <p className="text-[10px] font-mono text-on-surface-variant">NIP. 19880421 201101 1 004</p>
            </div>
            <span className="ml-auto material-symbols-outlined text-tertiary" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
          </div>
        </div>
      </div>
    </>
  )
}
