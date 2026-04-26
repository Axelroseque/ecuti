import React from 'react'

export default function EditKuotaModal({ isOpen, onClose }) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-[70] flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      ></div>

      {/* Modal Content */}
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-lg relative z-10 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="px-6 py-4 border-b border-surface-container-low flex items-center justify-between bg-surface-container-lowest">
          <div>
            <h3 className="text-lg font-bold text-primary">Edit Kuota Cuti</h3>
            <p className="text-xs text-on-surface-variant font-mono mt-0.5">Ahmad Fauzi - 199201012020011001</p>
          </div>
          <button onClick={onClose} className="p-2 text-on-surface-variant hover:bg-error-container hover:text-error rounded-full transition-colors cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 overflow-y-auto max-h-[70vh] no-scrollbar">
          <div className="bg-primary/5 text-primary-fixed-variant p-4 rounded-xl flex gap-3 text-sm">
            <span className="material-symbols-outlined shrink-0 text-primary">info</span>
            <p className="leading-relaxed font-medium">Perubahan kuota secara manual akan dicatat dalam log sistem. Harap pastikan perubahan sesuai dengan SK atau regulasi yang berlaku.</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-surface-container">
              <div>
                <h4 className="font-bold text-on-surface text-sm">Cuti Tahunan</h4>
                <p className="text-[10px] text-on-surface-variant mt-0.5">Total hak cuti tahun berjalan</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" defaultValue="18" className="w-20 text-center font-mono font-bold py-2 bg-white border border-surface-container rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" />
                <span className="text-xs text-on-surface-variant font-bold">Hari</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-surface-container">
              <div>
                <h4 className="font-bold text-on-surface text-sm">Cuti Besar</h4>
                <p className="text-[10px] text-on-surface-variant mt-0.5">Batas maksimal hak cuti besar</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" defaultValue="90" className="w-20 text-center font-mono font-bold py-2 bg-white border border-surface-container rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" />
                <span className="text-xs text-on-surface-variant font-bold">Hari</span>
              </div>
            </div>

            <div className="flex items-center justify-between p-4 bg-surface-container-low rounded-xl border border-surface-container">
              <div>
                <h4 className="font-bold text-on-surface text-sm">Cuti Sakit</h4>
                <p className="text-[10px] text-on-surface-variant mt-0.5">Hak cuti sakit dengan keterangan</p>
              </div>
              <div className="flex items-center gap-2">
                <input type="number" defaultValue="14" className="w-20 text-center font-mono font-bold py-2 bg-white border border-surface-container rounded-lg focus:ring-2 focus:ring-primary/50 outline-none" />
                <span className="text-xs text-on-surface-variant font-bold">Hari</span>
              </div>
            </div>
          </div>
          
          <div className="space-y-2">
            <label className="text-xs font-bold text-on-surface-variant uppercase tracking-widest">Catatan Perubahan (Wajib)</label>
            <textarea className="w-full bg-surface-container-highest border-none rounded-lg p-3 text-sm focus:ring-2 focus:ring-primary/50 transition-all outline-none" placeholder="Contoh: Penyesuaian kuota berdasarkan SK Nomor..." rows="3"></textarea>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-surface-container-low flex justify-end gap-3 bg-surface-container-lowest">
          <button onClick={onClose} className="px-5 py-2.5 text-sm font-bold text-on-surface-variant hover:bg-surface-container-highest rounded-lg transition-colors cursor-pointer">
            Batal
          </button>
          <button className="px-5 py-2.5 text-sm font-bold bg-primary text-white hover:opacity-90 rounded-lg shadow-md transition-all cursor-pointer">
            Simpan Perubahan
          </button>
        </div>
      </div>
    </div>
  )
}
