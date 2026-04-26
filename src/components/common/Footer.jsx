export default function Footer() {
  return (
    <footer className="mt-auto px-8 py-4 w-full flex justify-between items-center border-t border-slate-100">
      <p className="font-mono text-[10px] tracking-tight text-slate-400">
        © 2024 Pengadilan Negeri Kediri. All Rights Reserved.
      </p>
      <div className="flex gap-6">
        <a
          className="font-mono text-[10px] tracking-tight text-slate-400 hover:text-primary transition-colors"
          href="#"
        >
          Privacy Policy
        </a>
        <a
          className="font-mono text-[10px] tracking-tight text-slate-400 hover:text-primary transition-colors"
          href="#"
        >
          Terms of Service
        </a>
      </div>
    </footer>
  )
}
