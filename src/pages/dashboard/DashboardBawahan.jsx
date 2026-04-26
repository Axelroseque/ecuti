import Layout from '../../components/layout/Layout'
import Footer from '../../components/common/Footer'

export default function DashboardBawahan() {
  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <div className="page-padding space-y-8 flex-1">
          {/* Welcome Section */}
          <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
            <div className="space-y-1">
              <h1 className="text-4xl font-bold tracking-tight text-on-surface">Selamat Pagi, Ahmad Fauzi</h1>
              <div className="flex items-center gap-4 text-on-surface-variant mt-2">
                <span className="font-mono text-sm bg-surface-container-high px-2 py-0.5 rounded">NIP: 19850412 201012 1 002</span>
                <span className="h-1 w-1 bg-outline rounded-full"></span>
                <span className="text-sm font-medium italic">Panitera Muda Hukum</span>
              </div>
            </div>
          </section>

          {/* Stat Cards Bento Grid */}
          <section className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {/* Tahunan */}
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Tahunan</span>
                <span className="material-symbols-outlined text-primary">calendar_today</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-on-surface">8 <span className="text-sm font-normal text-on-surface-variant">/ 12 Hari</span></div>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-primary h-full w-2/3"></div>
              </div>
            </div>
            {/* Besar */}
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Besar</span>
                <span className="material-symbols-outlined text-secondary">workspace_premium</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-on-surface">90 <span className="text-sm font-normal text-on-surface-variant">/ 90 Hari</span></div>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-secondary h-full w-full"></div>
              </div>
            </div>
            {/* Sakit */}
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm space-y-4">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Sakit</span>
                <span className="material-symbols-outlined text-error">medical_services</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-on-surface">0 <span className="text-sm font-normal text-on-surface-variant">Hari</span></div>
              </div>
              <div className="w-full bg-surface-container-high h-2 rounded-full overflow-hidden">
                <div className="bg-error h-full w-0"></div>
              </div>
            </div>
            {/* Aktif */}
            <div className="bg-surface-container-lowest p-5 rounded-xl shadow-sm space-y-4 border-l-4 border-secondary-container">
              <div className="flex justify-between items-start">
                <span className="text-xs font-mono uppercase tracking-widest text-on-surface-variant">Pengajuan Aktif</span>
                <span className="material-symbols-outlined text-tertiary">pending_actions</span>
              </div>
              <div>
                <div className="text-3xl font-bold text-on-surface">2 <span className="text-sm font-normal text-on-surface-variant">Proses</span></div>
              </div>
              <p className="text-[10px] text-on-surface-variant italic">Menunggu verifikasi Ketua</p>
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Activity List */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold tracking-tight">Pengajuan Terakhir</h3>
                <a className="text-sm font-medium text-primary hover:underline" href="#">Lihat Semua</a>
              </div>
              <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
                <div className="divide-y divide-surface-container">
                  {/* Item 1 */}
                  <div className="p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary-container/20 flex items-center justify-center text-on-secondary-container">
                        <span className="material-symbols-outlined">hourglass_empty</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Cuti Tahunan</h4>
                        <p className="font-mono text-xs text-on-surface-variant">25 Mar - 27 Mar 2024 (3 Hari)</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-secondary-container text-on-secondary-container text-[10px] font-bold rounded-full uppercase tracking-wider">Pending</span>
                  </div>
                  {/* Item 2 */}
                  <div className="p-4 flex items-center justify-between hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-4">
                      <div className="w-10 h-10 rounded-full bg-tertiary-container/20 flex items-center justify-center text-on-tertiary-container">
                        <span className="material-symbols-outlined">check_circle</span>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm">Cuti Sakit</h4>
                        <p className="font-mono text-xs text-on-surface-variant">10 Feb - 11 Feb 2024 (2 Hari)</p>
                      </div>
                    </div>
                    <span className="px-3 py-1 bg-tertiary-container text-on-tertiary text-[10px] font-bold rounded-full uppercase tracking-wider">Approved</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Mini Calendar */}
            <div className="space-y-4">
              <h3 className="text-xl font-semibold tracking-tight">Agenda Cuti</h3>
              <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm">
                <div className="flex justify-between items-center mb-6">
                  <span className="font-bold text-primary">April 2024</span>
                  <div className="flex gap-2">
                    <button className="p-1 hover:bg-surface-container rounded transition-colors cursor-pointer"><span className="material-symbols-outlined text-sm">chevron_left</span></button>
                    <button className="p-1 hover:bg-surface-container rounded transition-colors cursor-pointer"><span className="material-symbols-outlined text-sm">chevron_right</span></button>
                  </div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-mono mb-2 text-on-surface-variant">
                  <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div>
                </div>
                <div className="grid grid-cols-7 gap-1 text-center">
                  <div className="py-2 text-xs text-on-surface-variant opacity-30">31</div>
                  <div className="py-2 text-xs font-bold text-on-surface">1</div>
                  <div className="py-2 text-xs font-bold text-on-surface">2</div>
                  <div className="py-2 text-xs font-bold text-on-surface">3</div>
                  <div className="py-2 text-xs font-bold text-on-surface">4</div>
                  <div className="py-2 text-xs font-bold text-on-surface bg-primary/10 rounded-full text-primary border border-primary/20 flex items-center justify-center aspect-square">5</div>
                  <div className="py-2 text-xs font-bold text-on-surface">6</div>
                  <div className="py-2 text-xs font-bold text-on-surface">7</div>
                  <div className="py-2 text-xs font-bold text-error">8</div>
                  <div className="py-2 text-xs font-bold text-error">9</div>
                  <div className="py-2 text-xs font-bold text-error">10</div>
                  <div className="py-2 text-xs font-bold text-on-surface">11</div>
                  <div className="py-2 text-xs font-bold text-on-surface">12</div>
                  <div className="py-2 text-xs font-bold text-on-surface">13</div>
                  <div className="py-2 text-xs font-bold text-on-surface">14</div>
                  <div className="py-2 text-xs font-bold text-on-surface">15</div>
                  <div className="py-2 text-xs font-bold text-on-surface">16</div>
                  <div className="py-2 text-xs font-bold text-on-surface">17</div>
                  <div className="py-2 text-xs font-bold text-on-surface">18</div>
                  <div className="py-2 text-xs font-bold text-on-surface">19</div>
                  <div className="py-2 text-xs font-bold text-on-surface">20</div>
                </div>
                <div className="mt-6 pt-4 border-t border-surface-container">
                  <div className="flex items-center gap-2 text-[10px] text-on-surface-variant">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>Pengajuan Cuti Anda</span>
                  </div>
                  <div className="flex items-center gap-2 text-[10px] text-on-surface-variant mt-1">
                    <span className="w-2 h-2 rounded-full bg-error"></span>
                    <span>Libur Nasional / Cuti Bersama</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        {/* Floating Action Button */}
        <button className="fixed bottom-8 right-8 bg-gradient-to-br from-primary to-primary-container text-on-primary px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 active:scale-95 transition-all z-50 group cursor-pointer hover:shadow-primary/20">
          <span className="material-symbols-outlined">add_circle</span>
          <span className="font-bold tracking-wider text-sm">AJUKAN CUTI BARU</span>
        </button>
      </div>
    </Layout>
  )
}
