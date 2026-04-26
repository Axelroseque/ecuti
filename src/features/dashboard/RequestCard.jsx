export default function RequestCard({
  initials,
  name,
  nip,
  position,
  leaveType,
  leaveTypeBg,
  leaveTypeColor,
  borderColor,
  dateRange,
  workDays,
  salaryLabel,
  salaryValue,
  attachment,
  alert,
}) {
  return (
    <div
      className={`bg-surface-container-lowest p-6 rounded-xl flex flex-col md:flex-row gap-6 border-l-4 ${borderColor} shadow-sm hover:shadow-md transition-shadow relative overflow-hidden`}
    >
      <div className="flex-1 space-y-4">
        {/* Employee Header */}
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-slate-100 flex items-center justify-center font-bold text-primary shrink-0">
            {initials}
          </div>
          <div className="min-w-0">
            <h4 className="font-bold text-on-surface">{name}</h4>
            <p className="font-mono text-xs text-slate-500 truncate">
              NIP. {nip} • {position}
            </p>
          </div>
          <span
            className={`ml-auto px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest shrink-0 ${leaveTypeBg} ${leaveTypeColor}`}
          >
            {leaveType}
          </span>
        </div>

        {/* Alert Banner */}
        {alert && (
          <div className="flex items-center gap-3 bg-secondary-container/10 p-3 rounded-lg border border-secondary/20">
            <span className="material-symbols-outlined text-secondary">warning</span>
            <p className="text-xs font-semibold text-on-secondary-container italic">
              {alert}
            </p>
          </div>
        )}

        {/* Details Grid */}
        <div className="grid grid-cols-2 gap-4 bg-surface-container-low p-4 rounded-lg">
          <div>
            <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Durasi Cuti</p>
            <p className="font-mono text-sm font-semibold">{dateRange}</p>
            <p className="text-xs text-slate-400">({workDays} Hari Kerja)</p>
          </div>
          <div>
            {attachment ? (
              <>
                <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">Lampiran</p>
                <button className="flex items-center gap-1 text-primary text-xs font-bold underline cursor-pointer">
                  <span className="material-symbols-outlined text-sm">description</span>
                  {attachment}
                </button>
              </>
            ) : (
              <>
                <p className="text-[10px] uppercase text-slate-500 font-bold mb-1">
                  {salaryLabel}
                </p>
                <p className="font-mono text-sm text-primary font-bold">{salaryValue}</p>
              </>
            )}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-2">
          <button className="flex-1 py-2 rounded-lg bg-gradient-to-br from-primary to-primary-container text-white font-bold text-xs uppercase tracking-widest active:scale-95 transition-transform cursor-pointer hover:shadow-md">
            Setujui
          </button>
          <button className="flex-1 py-2 rounded-lg bg-surface-container-high text-on-surface-variant font-bold text-xs uppercase tracking-widest hover:bg-slate-300 transition-colors cursor-pointer">
            Tangguhkan
          </button>
          <button className="flex-1 py-2 rounded-lg border border-error/20 text-error font-bold text-xs uppercase tracking-widest hover:bg-error/5 transition-colors cursor-pointer">
            Tolak
          </button>
        </div>
      </div>
    </div>
  )
}
