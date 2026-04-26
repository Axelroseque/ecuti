export default function JenisCutiStep() {
  const leaveTypes = [
    { id: 'tahunan', name: 'Cuti Tahunan', icon: 'event_available', desc: 'Sisa kuota: 12 hari', color: 'primary' },
    { id: 'sakit', name: 'Cuti Sakit', icon: 'local_hospital', desc: 'Memerlukan surat keterangan dokter', color: 'error' },
    { id: 'besar', name: 'Cuti Besar', icon: 'card_travel', desc: 'Minimal masa kerja 5 tahun', color: 'secondary' },
    { id: 'melahirkan', name: 'Cuti Melahirkan', icon: 'child_friendly', desc: 'Maksimal 3 bulan', color: 'tertiary' },
    { id: 'penting', name: 'Cuti Alasan Penting', icon: 'warning', desc: 'Sesuai ketentuan perundang-undangan', color: 'amber' },
    { id: 'diluar', name: 'Cuti di Luar Tanggungan', icon: 'flight_takeoff', desc: 'Tidak mendapat penghasilan', color: 'slate' }
  ]

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {leaveTypes.map((type) => (
          <label key={type.id} className="relative flex flex-col p-6 border-2 border-outline-variant/30 rounded-xl cursor-pointer hover:border-primary/50 transition-all group has-[:checked]:border-primary has-[:checked]:bg-primary/5 bg-surface-container-lowest">
            <input type="radio" name="jenis_cuti" value={type.id} className="hidden peer" defaultChecked={type.id === 'tahunan'} />
            <div className="flex items-center gap-4">
              <div className={`w-12 h-12 rounded-full flex items-center justify-center bg-slate-100 text-slate-600 group-hover:bg-primary/10 group-hover:text-primary peer-checked:bg-primary peer-checked:text-white transition-colors`}>
                <span className="material-symbols-outlined">{type.icon}</span>
              </div>
              <div>
                <h4 className="font-bold text-on-surface">{type.name}</h4>
                <p className="text-xs text-on-surface-variant mt-1">{type.desc}</p>
              </div>
            </div>
            <div className="absolute top-6 right-6 opacity-0 peer-checked:opacity-100 text-primary transition-opacity">
              <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
            </div>
          </label>
        ))}
      </div>
    </div>
  )
}
