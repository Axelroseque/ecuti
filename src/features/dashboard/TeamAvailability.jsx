const days = [25, 26, 27, 28, 29, 30, 31]

const teamMembers = [
  {
    name: 'Indra Wijaya',
    status: 'Aktif',
    statusColor: 'text-slate-400',
    bar: <div className="h-full w-full bg-tertiary-fixed-dim rounded-full"></div>,
  },
  {
    name: 'Siti Aminah',
    status: 'Cuti Tahunan',
    statusColor: 'text-secondary font-bold',
    bar: (
      <div className="flex h-full w-full">
        <div className="h-full w-1/4"></div>
        <div className="h-full w-2/4 bg-secondary-container rounded-full"></div>
      </div>
    ),
  },
  {
    name: 'Dian Pratama',
    status: 'Aktif',
    statusColor: 'text-slate-400',
    bar: <div className="h-full w-full bg-tertiary-fixed-dim rounded-full"></div>,
  },
]

const agendaItems = [
  {
    color: 'bg-primary',
    title: 'Rapat Koordinasi Bulanan',
    time: '28 Mar, 09:00 WIB',
  },
  {
    color: 'bg-secondary',
    title: 'Sidang Tipikor Akbar',
    time: '27 Mar, 10:00 WIB',
  },
]

export default function TeamAvailability() {
  return (
    <div className="lg:col-span-4 bg-surface-container-lowest p-6 rounded-xl shadow-sm space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-bold text-on-surface tracking-tight">Ketersediaan Tim</h3>
        <span className="material-symbols-outlined text-slate-400">calendar_month</span>
      </div>

      {/* Mini Gantt Chart */}
      <div className="space-y-6">
        {/* Day Headers */}
        <div className="flex gap-1 mb-4 text-[10px] font-mono text-slate-400 text-center">
          {days.map((d) => (
            <div
              key={d}
              className={`w-8 ${d === 27 ? 'bg-secondary-container/20 rounded' : ''}`}
            >
              {d}
            </div>
          ))}
        </div>

        {/* Team Rows */}
        <div className="space-y-4">
          {teamMembers.map((member) => (
            <div key={member.name} className="space-y-1">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold">{member.name}</span>
                <span className={`text-[10px] ${member.statusColor}`}>{member.status}</span>
              </div>
              <div className="h-1.5 w-full bg-slate-100 rounded-full overflow-hidden">
                {member.bar}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Office Agenda */}
      <div className="pt-6 border-t border-slate-100">
        <p className="text-[10px] font-bold text-slate-500 uppercase tracking-widest mb-3">
          Catatan Agenda Kantor
        </p>
        <div className="space-y-3">
          {agendaItems.map((item) => (
            <div key={item.title} className="flex gap-3">
              <div className={`w-1 h-8 ${item.color} rounded-full`}></div>
              <div>
                <p className="text-xs font-bold">{item.title}</p>
                <p className="text-[10px] text-slate-500 font-mono">{item.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
