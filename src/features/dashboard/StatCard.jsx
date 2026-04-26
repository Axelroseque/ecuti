export default function StatCard({ icon, iconBg, iconColor, label, value, subtitle, subtitleColor, showPulse, pulseColor }) {
  return (
    <div className="bg-surface-container-lowest p-6 rounded-xl relative overflow-hidden transition-all duration-300 hover:shadow-lg group">
      <div className="flex justify-between items-start mb-4">
        <div className={`p-3 rounded-lg ${iconBg} ${iconColor}`}>
          <span className="material-symbols-outlined">{icon}</span>
        </div>
        {showPulse && (
          <span className="flex h-3 w-3">
            <span className={`animate-ping absolute inline-flex h-3 w-3 rounded-full ${pulseColor} opacity-75`}></span>
            <span className={`relative inline-flex rounded-full h-3 w-3 ${pulseColor}`}></span>
          </span>
        )}
      </div>
      <p className="text-slate-500 text-xs font-medium uppercase tracking-wider mb-1">
        {label}
      </p>
      <div className="flex items-baseline gap-2">
        <h3 className="text-4xl font-bold text-on-surface tracking-tighter">{value}</h3>
        <span className={`text-sm font-mono ${subtitleColor || 'text-slate-500'} ${showPulse ? 'animate-pulse-slow' : ''}`}>
          {subtitle}
        </span>
      </div>
    </div>
  )
}
