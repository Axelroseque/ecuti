import { useLocation, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { ROLE_CONFIGS } from '../../constants/roles'
import { ROUTES } from '../../constants/routes'

export default function Sidebar({ isOpen, onClose }) {
  const location = useLocation()
  const navigate = useNavigate()

  // For demo purposes, we allow switching roles directly from the sidebar.
  const [currentRole, setCurrentRole] = useState('atasan')
  const navItems = ROLE_CONFIGS?.[currentRole] || []


  return (
    <aside className={`sidebar-container ${isOpen ? 'sidebar-open' : ''}`}>
      {/* Brand */}
      <div className="px-6 mb-8 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-on-primary shadow-lg">
            <span className="material-symbols-outlined">gavel</span>
          </div>
          <div>
            <h1 className="font-bold text-primary tracking-tighter">PN KEDIRI</h1>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Judicial Monolith
            </p>
          </div>
        </div>
        <button onClick={onClose} className="lg:hidden p-2 text-slate-400 hover:bg-slate-200 rounded transition-colors cursor-pointer flex items-center justify-center">
          <span className="material-symbols-outlined text-[20px]">close</span>
        </button>
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-3 space-y-1 overflow-y-auto no-scrollbar">
        {navItems.map((item) => {
          const isParentActive = location.pathname.startsWith(item.path) ||
            (item.path === '/dashboard-bawahan' && location.pathname === '/dashboard')

          return (
            <div key={item.label} className="w-full">
              <button
                onClick={() => navigate(item.subItems ? item.subItems[0].path : item.path)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-300 cursor-pointer ${isParentActive
                  ? 'text-primary border-r-4 border-primary bg-primary-fixed/30'
                  : 'text-slate-500 hover:text-primary hover:translate-x-1'
                  }`}
              >
                <span className="material-symbols-outlined">{item.icon}</span>
                <span className="font-mono text-xs uppercase tracking-widest font-bold">
                  {item.label}
                </span>
                {item.subItems && (
                  <span className="material-symbols-outlined ml-auto text-sm transition-transform duration-300">
                    {isParentActive ? 'expand_more' : 'chevron_right'}
                  </span>
                )}
              </button>

              {/* Submenu */}
              {item.subItems && isParentActive && (
                <div className="flex flex-col gap-1 mt-1 pl-12 pr-4 py-2 border-l border-slate-200 ml-6">
                  {item.subItems.map(subItem => {
                    const isChildActive = location.pathname === subItem.path
                    return (
                      <button
                        key={subItem.label}
                        onClick={() => navigate(subItem.path)}
                        className={`text-left text-xs font-bold py-2 border-l-2 pl-3 transition-colors cursor-pointer ${isChildActive
                          ? 'text-primary border-primary'
                          : 'text-slate-400 border-transparent hover:text-slate-600'
                          }`}
                      >
                        {subItem.label}
                      </button>
                    )
                  })}
                </div>
              )}
            </div>
          )
        })}
      </nav>

      {/* Role Switcher (Demo Only) */}
      <div className="mt-auto px-6 pt-6">
        <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest mb-2 block">Demo: Switch Role</label>
        <select
          value={currentRole}
          onChange={(e) => {
            setCurrentRole(e.target.value)
            navigate(ROLE_CONFIGS[e.target.value][0].path)
          }}
          className="w-full text-xs py-2 px-3 bg-slate-200 border-none rounded focus:ring-2 focus:ring-primary/20 outline-none cursor-pointer text-slate-700 font-bold"
        >
          <option value="bawahan">Bawahan (Staf)</option>
          <option value="atasan">Atasan (Pejabat)</option>
          <option value="pimpinan">Pimpinan (KPN/WKPN)</option>
          <option value="admin">Admin (Kepegawaian)</option>
        </select>
      </div>

      {/* Logout */}
      <div className="px-6 border-t border-slate-200 pt-4 mt-4 mb-4">
        <button
          onClick={() => navigate(ROUTES.LOGIN)}
          className="w-full flex items-center gap-3 py-3 text-slate-400 hover:text-error transition-colors cursor-pointer"
        >
          <span className="material-symbols-outlined">logout</span>
          <span className="font-mono text-xs uppercase tracking-widest">Logout</span>
        </button>
      </div>
    </aside>
  )
}
