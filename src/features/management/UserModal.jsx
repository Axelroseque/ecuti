import React from 'react'

export default function UserModal({ isOpen, onClose, mode = 'add' }) {
  if (!isOpen) return null

  // If delete mode, show confirmation dialog
  if (mode === 'delete') {
    return (
      <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
        <div className="bg-white w-full max-w-md rounded-2xl shadow-2xl overflow-hidden p-6 text-center">
          <div className="w-16 h-16 bg-error-container text-error rounded-full flex items-center justify-center mx-auto mb-4">
            <span className="material-symbols-outlined text-3xl">delete_forever</span>
          </div>
          <h2 className="text-xl font-bold text-slate-800 mb-2">Hapus Pengguna?</h2>
          <p className="text-sm text-slate-500 mb-8">
            Apakah Anda yakin ingin menghapus pengguna ini? Tindakan ini tidak dapat dibatalkan dan semua data terkait akan dihapus secara permanen.
          </p>
          <div className="flex items-center gap-3 justify-center">
            <button onClick={onClose} className="px-6 py-2.5 rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer w-full border border-slate-200">
              Batal
            </button>
            <button onClick={onClose} className="bg-error text-white px-6 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-error/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer w-full">
              Ya, Hapus
            </button>
          </div>
        </div>
      </div>
    )
  }

  // Edit or Add mode
  const title = mode === 'edit' ? 'Edit Data Pengguna' : 'Tambah Pengguna Baru';
  const subtitle = mode === 'edit' ? 'Perbarui informasi personil dalam sistem SI-CUTI' : 'Daftarkan personil baru ke dalam sistem SI-CUTI';
  const submitText = mode === 'edit' ? 'Simpan Perubahan' : 'Simpan Data';

  return (
    <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden max-h-[90vh] flex flex-col">
        {/* Modal Header */}
        <div className="px-8 py-6 bg-slate-50 border-b border-slate-100 flex items-center justify-between">
          <div>
            <h2 className="text-xl font-bold text-primary">{title}</h2>
            <p className="text-xs text-slate-500 mt-0.5">{subtitle}</p>
          </div>
          <button onClick={onClose} className="p-2 hover:bg-slate-200 rounded-full transition-colors text-slate-400 cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>
        {/* Modal Body (Scrollable) */}
        <div className="flex-1 overflow-y-auto px-8 py-8 space-y-10">
          {/* Data Dasar Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-primary-fixed flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-xl">person</span>
              </div>
              <h3 className="font-bold text-slate-800">Data Dasar Kepegawaian</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">NIP (Nomor Induk Pegawai)</label>
                <div className="flex gap-2">
                  <input className="flex-1 bg-surface-container-low border-0 rounded-lg px-4 py-3 text-sm font-mono focus:ring-2 focus:ring-primary/20" placeholder="Contoh: 19820311..." type="text"/>
                  {mode === 'add' && (
                    <button className="bg-amber-100 text-amber-800 px-4 py-2 rounded-lg text-xs font-bold flex items-center gap-2 hover:bg-amber-200 transition-colors whitespace-nowrap cursor-pointer">
                      <span className="material-symbols-outlined text-sm">sync</span>
                      Sinkron SIKEP
                    </button>
                  )}
                </div>
              </div>
              <div className="space-y-1.5 md:col-span-2">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">Nama Lengkap & Gelar</label>
                <input className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" placeholder="Ketik nama lengkap beserta gelar..." type="text"/>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">Jabatan</label>
                <select defaultValue="" className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 cursor-pointer">
                  <option value="" disabled>Pilih Jabatan</option>
                  <option>Hakim Madya</option>
                  <option>Panitera Muda</option>
                  <option>Sekretaris</option>
                  <option>Pranata Komputer</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">Golongan / Ruang</label>
                <select defaultValue="" className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 font-mono cursor-pointer">
                  <option value="" disabled>Pilih Golongan</option>
                  <option>IV/a (Pembina)</option>
                  <option>III/d (Penata Tk. I)</option>
                  <option>III/c (Penata)</option>
                </select>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">Email Kedinasan</label>
                <input className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" placeholder="nama@pn-kediri.go.id" type="email"/>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">Nomor WhatsApp/HP</label>
                <input className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20" placeholder="08..." type="text"/>
              </div>
            </div>
          </section>
          {/* Pengaturan Akses Section */}
          <section className="space-y-6">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                <span className="material-symbols-outlined text-xl">key</span>
              </div>
              <h3 className="font-bold text-slate-800">Pengaturan Hak Akses</h3>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <label className="relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-slate-100 cursor-pointer hover:border-emerald-200 transition-all group has-[:checked]:border-emerald-500 has-[:checked]:bg-emerald-50/50">
                  <input className="hidden peer" name="role" type="radio"/>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-emerald-500 peer-checked:text-emerald-500">person</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Pegawai</span>
                </label>
                <label className="relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-slate-100 cursor-pointer hover:border-blue-200 transition-all group has-[:checked]:border-blue-500 has-[:checked]:bg-blue-50/50">
                  <input className="hidden peer" name="role" type="radio"/>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-blue-500 peer-checked:text-blue-500">groups</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Atasan</span>
                </label>
                <label className="relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-slate-100 cursor-pointer hover:border-primary/20 transition-all group has-[:checked]:border-primary has-[:checked]:bg-primary/5">
                  <input className="hidden peer" name="role" type="radio"/>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-primary peer-checked:text-primary">shield_person</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Admin</span>
                </label>
                <label className="relative flex flex-col items-center gap-2 p-4 rounded-xl border-2 border-slate-100 cursor-pointer hover:border-amber-200 transition-all group has-[:checked]:border-amber-500 has-[:checked]:bg-amber-50/50">
                  <input className="hidden peer" name="role" type="radio"/>
                  <span className="material-symbols-outlined text-slate-400 group-hover:text-amber-500 peer-checked:text-amber-500" style={{fontVariationSettings: "'FILL' 1"}}>stars</span>
                  <span className="text-[10px] font-bold uppercase tracking-widest text-slate-500">Pimpinan</span>
                </label>
              </div>
              <div className="space-y-1.5">
                <label className="text-[11px] font-bold text-slate-500 uppercase tracking-wider px-1">Atasan Langsung (Penilai)</label>
                <select defaultValue="" className="w-full bg-surface-container-low border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-primary/20 cursor-pointer">
                  <option value="" disabled>Cari & Pilih Nama Atasan</option>
                  <option>Achmad Syarifuddin, S.H. (Panmud Hukum)</option>
                  <option>Bambang Kusumo, M.H. (Ketua PN)</option>
                </select>
              </div>
              {mode === 'add' && (
                <div className="bg-slate-50 rounded-xl p-4 flex items-start gap-3 border border-slate-100">
                  <span className="material-symbols-outlined text-amber-600">info</span>
                  <div className="space-y-1">
                    <p className="text-xs font-bold text-slate-700">Informasi Kata Sandi</p>
                    <p className="text-[11px] text-slate-500 leading-relaxed">
                        Sistem akan melakukan <span className="font-semibold italic">auto-generate</span> kata sandi awal menggunakan format: <br/>
                        <code className="bg-white px-1.5 py-0.5 rounded border border-slate-200 font-mono text-primary font-bold">NIP + Tanggal Lahir (DDMMYYYY)</code>
                    </p>
                  </div>
                </div>
              )}
            </div>
          </section>
        </div>
        {/* Modal Footer */}
        <div className="px-8 py-6 bg-white border-t border-slate-100 flex items-center justify-end gap-3">
          <button onClick={onClose} className="px-6 py-2.5 rounded-lg text-sm font-bold text-slate-500 hover:bg-slate-50 transition-colors cursor-pointer">Batal</button>
          <button onClick={onClose} className="bg-gradient-to-br from-primary to-primary-container text-white px-8 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-primary/20 hover:scale-[1.02] active:scale-95 transition-all cursor-pointer">
              {submitText}
          </button>
        </div>
      </div>
    </div>
  )
}
