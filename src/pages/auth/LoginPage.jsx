import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function LoginPage() {
  const [nip, setNip] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    // Bypass authentication for sample, directly navigate to dashboard
    navigate('/dashboard')
  }

  return (
    <div className="font-body bg-surface text-on-surface min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* ── Background Layer ── */}
      <div className="absolute inset-0 bg-judicial-gradient z-0" />
      <div className="absolute inset-0 wave-pattern z-[1] opacity-40" />

      {/* ── Ornamental Blurs ── */}
      <div className="absolute top-[-10%] left-[-5%] w-[40rem] h-[40rem] bg-primary-container/20 rounded-full blur-[120px] z-[2]" />
      <div className="absolute bottom-[-10%] right-[-5%] w-[35rem] h-[35rem] bg-secondary-container/10 rounded-full blur-[100px] z-[2]" />

      {/* ── Main Content ── */}
      <main className="relative z-10 w-full max-w-md px-6 py-12">
        {/* Brand Identity */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center p-4 rounded-xl bg-white/10 backdrop-blur-md mb-6 border border-white/10">
            <img
              alt="PN Kediri Logo"
              className="h-20 w-auto"
              src="/logo-pn-kediri.png"
            />
          </div>
          <h1 className="text-white font-headline font-bold text-xl tracking-tight leading-snug px-4">
            Sistem Informasi Cuti
            <br />
            <span className="text-secondary-fixed">
              Pengadilan Negeri Kediri Kelas I-B
            </span>
          </h1>
        </div>

        {/* Login Card */}
        <div className="glass-card rounded-xl overflow-hidden border border-white/20">
          <div className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* NIP Input */}
              <div>
                <label
                  className="block text-[10px] font-mono uppercase tracking-widest text-on-surface-variant mb-2"
                  htmlFor="nip"
                >
                  Nomor Induk Pegawai (NIP)
                </label>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                    badge
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded focus:ring-2 focus:ring-primary/20 text-on-surface font-mono text-sm placeholder:text-outline/50 transition-all"
                    id="nip"
                    name="nip"
                    placeholder="19870101 201101 1 001"
                    required
                    type="text"
                    value={nip}
                    onChange={(e) => setNip(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <label
                    className="block text-[10px] font-mono uppercase tracking-widest text-on-surface-variant"
                    htmlFor="password"
                  >
                    Kata Sandi
                  </label>
                  <a
                    className="text-[10px] font-mono uppercase tracking-widest text-primary hover:text-primary-container transition-colors"
                    href="#"
                  >
                    Lupa Password?
                  </a>
                </div>
                <div className="relative">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">
                    lock
                  </span>
                  <input
                    className="w-full pl-12 pr-4 py-3 bg-surface-container-highest border-none rounded focus:ring-2 focus:ring-primary/20 text-on-surface font-mono text-sm placeholder:text-outline/50 transition-all"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    required
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
              </div>

              {/* Remember Me */}
              <div className="flex items-center">
                <input
                  className="h-4 w-4 rounded border-outline-variant text-primary focus:ring-primary/30 bg-surface-container-highest"
                  id="remember"
                  name="remember"
                  type="checkbox"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                <label
                  className="ml-2 text-xs text-on-surface-variant font-medium"
                  htmlFor="remember"
                >
                  Ingat Saya
                </label>
              </div>

              {/* Submit Button */}
              <button
                className="w-full py-4 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-bold text-sm tracking-widest rounded-lg shadow-lg hover:shadow-primary/20 active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                type="submit"
              >
                MASUK
                <span className="material-symbols-outlined text-sm">
                  login
                </span>
              </button>
            </form>
          </div>

          {/* Footer decoration */}
          <div className="h-1 w-full bg-gradient-to-r from-transparent via-secondary-container to-transparent opacity-30" />
        </div>

        {/* External Links / Footer */}
        <footer className="mt-8 text-center">
          <p className="text-[10px] font-mono text-white/60 tracking-tighter uppercase">
            © 2024 Pengadilan Negeri Kediri. All Rights Reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4">
            <a
              className="text-[10px] font-mono text-white/40 hover:text-white transition-colors"
              href="#"
            >
              Privacy Policy
            </a>
            <span className="text-white/20">•</span>
            <a
              className="text-[10px] font-mono text-white/40 hover:text-white transition-colors"
              href="#"
            >
              Terms of Service
            </a>
          </div>
        </footer>
      </main>

      {/* Server Status Indicator (Bottom Right) */}
      <div className="absolute bottom-8 right-8 hidden lg:block z-20">
        <div className="flex items-center gap-3 bg-white/5 backdrop-blur-md px-4 py-2 rounded-full border border-white/10">
          <div className="w-2 h-2 rounded-full bg-secondary-container animate-pulse" />
          <span className="text-[10px] font-mono text-white/80 uppercase tracking-widest">
            Server Status: Online
          </span>
        </div>
      </div>
    </div>
  )
}
