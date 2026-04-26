export default function DokumenStep() {
  return (
    <div className="space-y-6">
      <div className="bg-surface-container-highest/30 border-2 border-dashed border-outline-variant rounded-xl p-10 flex flex-col items-center justify-center text-center hover:bg-surface-container-highest/50 hover:border-primary/50 transition-colors cursor-pointer group">
        <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-primary shadow-sm mb-4 group-hover:scale-110 transition-transform">
          <span className="material-symbols-outlined text-3xl">upload_file</span>
        </div>
        <h4 className="font-bold text-on-surface mb-2">Unggah Dokumen Pendukung</h4>
        <p className="text-sm text-on-surface-variant max-w-md">Tarik dan lepas file di sini, atau klik untuk memilih file dari komputer Anda.</p>
        <p className="text-xs text-on-surface-variant mt-4 font-mono">Format: PDF, JPG, PNG (Maks. 5MB)</p>
      </div>

      <div className="space-y-3">
        <h5 className="font-bold text-sm text-on-surface">Dokumen Terlampir</h5>
        <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-lg border border-outline-variant/20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-error text-2xl">picture_as_pdf</span>
            <div>
              <p className="text-sm font-semibold text-on-surface">surat_keterangan_dokter.pdf</p>
              <p className="text-xs text-on-surface-variant">1.2 MB</p>
            </div>
          </div>
          <button className="p-2 text-on-surface-variant hover:text-error hover:bg-error-container rounded-full transition-colors cursor-pointer">
            <span className="material-symbols-outlined">delete</span>
          </button>
        </div>
      </div>
    </div>
  )
}
