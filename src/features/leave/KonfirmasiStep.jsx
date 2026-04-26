export default function KonfirmasiStep() {
  return (
    <div className="space-y-8">
      <div className="bg-primary-container text-on-primary-container p-6 rounded-xl flex items-start gap-4">
        <span className="material-symbols-outlined mt-1">info</span>
        <div>
          <h4 className="font-bold mb-1">Konfirmasi Pengajuan</h4>
          <p className="text-sm opacity-90 leading-relaxed">Harap periksa kembali detail permohonan cuti Anda. Pengajuan yang telah dikirim tidak dapat dibatalkan atau diubah tanpa persetujuan HR.</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-y-6 gap-x-8 bg-surface-container-lowest p-6 rounded-xl border border-outline-variant/20">
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-1">Jenis Cuti</p>
          <p className="font-bold text-on-surface">Cuti Sakit</p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-1">Durasi</p>
          <p className="font-bold text-on-surface">3 Hari Kerja</p>
          <p className="text-xs text-on-surface-variant">20 Nov 2024 - 22 Nov 2024</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-1">Alasan</p>
          <p className="font-medium text-on-surface bg-surface-container-low p-3 rounded-lg border border-outline-variant/20">Gejala tipes, disarankan istirahat total oleh dokter RSUD.</p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-1">Alamat Selama Cuti</p>
          <p className="font-medium text-on-surface">Jl. Diponegoro No. 12, Kediri</p>
        </div>
        <div>
          <p className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-1">Kontak Darurat</p>
          <p className="font-medium text-on-surface font-mono">0812-3456-7890</p>
        </div>
        <div className="col-span-2">
          <p className="text-xs font-mono uppercase tracking-widest text-on-surface-variant mb-1">Pegawai Pengganti</p>
          <div className="flex items-center gap-3 p-3 bg-surface-container-low border border-outline-variant/20 rounded-lg max-w-sm mt-1">
            <img alt="Substitution Staff" className="h-8 w-8 rounded-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAks-Ughkp9wu7b8MSSkGwV_K8thjTtoRqP_cch3SRbC_mE6PJvrkN8j2UJC1amzTUwRA5UwZcxdfo-U2noFjixDOD0hjyVPEnAB_pQSWdum85T7ZQ9AEUKD-siWPY_ymuF9S4T4ExRmhc-M6QztXeq55Kv27mBRbsTUpJYAE6z-09eP2f8bSKVspmSEQDBAdvrcvlwQ9_9hPKs-Lqh0qrUHGS4IEsaxwMfz5_MAqqPopBbAP8otiUO7KHB3ckhweu916Rw6bbHRnw" />
            <div>
              <p className="text-sm font-bold text-on-surface">Budi Satria, S.H.</p>
              <p className="text-[10px] font-mono text-on-surface-variant">NIP. 19880421 201101 1 004</p>
            </div>
          </div>
        </div>
      </div>
      
      <div className="border-t border-outline-variant/20 pt-6">
        <label className="flex items-start gap-3 cursor-pointer group">
          <div className="mt-0.5">
            <input type="checkbox" className="w-5 h-5 rounded border-outline-variant text-primary focus:ring-primary/50 cursor-pointer" />
          </div>
          <span className="text-sm text-on-surface leading-relaxed group-hover:text-primary transition-colors">
            Dengan ini saya menyatakan bahwa informasi yang saya berikan adalah benar, dan saya bersedia mematuhi segala peraturan cuti yang berlaku di lingkungan Mahkamah Agung Republik Indonesia.
          </span>
        </label>
      </div>
    </div>
  )
}
