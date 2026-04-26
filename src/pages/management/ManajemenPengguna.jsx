import { useState } from 'react'
import Layout from '../../components/layout/Layout'
import Footer from '../../components/common/Footer'
import UserModal from '../../features/management/UserModal'

export default function ManajemenPengguna() {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalMode, setModalMode] = useState('add')

  const handleOpenModal = (mode) => {
    setModalMode(mode)
    setIsModalOpen(true)
  }

  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <div className="page-padding flex-1">
          <div className="max-w-7xl mx-auto">
            {/* Table Header & Actions */}
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
              <div className="space-y-4 flex-1">
                <div className="relative group max-w-md">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 transition-colors group-focus-within:text-primary">search</span>
                  <input className="w-full pl-12 pr-4 py-3 bg-white border-0 rounded-xl shadow-sm focus:ring-2 focus:ring-primary/20 text-sm placeholder:text-slate-400 font-body" placeholder="Cari nama, NIP, atau email..." type="text" />
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <select className="bg-surface-container-low border-0 text-xs font-semibold px-4 py-2 rounded-lg text-slate-600 focus:ring-0 cursor-pointer">
                    <option>Semua Role</option>
                    <option>Pegawai</option>
                    <option>Atasan</option>
                    <option>Kepegawaian</option>
                    <option>Pimpinan</option>
                  </select>
                  <select className="bg-surface-container-low border-0 text-xs font-semibold px-4 py-2 rounded-lg text-slate-600 focus:ring-0 cursor-pointer">
                    <option>Semua Status</option>
                    <option>Aktif</option>
                    <option>Nonaktif</option>
                  </select>
                  <select className="bg-surface-container-low border-0 text-xs font-semibold px-4 py-2 rounded-lg text-slate-600 focus:ring-0 cursor-pointer">
                    <option>Semua Unit</option>
                    <option>Kepaniteraan</option>
                    <option>Kesekretariatan</option>
                  </select>
                </div>
              </div>
              <button
                onClick={() => handleOpenModal('add')}
                className="bg-gradient-to-br from-primary to-primary-container text-white px-6 py-3 rounded-xl shadow-lg shadow-primary/20 flex items-center gap-2 hover:opacity-90 active:scale-95 transition-all cursor-pointer">
                <span className="material-symbols-outlined">add</span>
                <span className="font-semibold text-sm">+ Tambah Pengguna</span>
              </button>
            </div>

            {/* Table Container */}
            <div className="table-responsive-wrapper">
              <table className="w-full text-left border-collapse min-w-[800px]">
                <thead>
                  <tr className="bg-slate-50/50 border-b border-slate-100">
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">No</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Nama & Jabatan</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">NIP</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Role</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest">Status</th>
                    <th className="px-6 py-4 text-[11px] font-bold text-slate-400 uppercase tracking-widest text-right">Action</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-50">
                  {/* Row 1: Atasan */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-5 font-mono text-xs text-slate-400">01</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-primary font-bold text-xs">AS</div>
                        <div>
                          <p className="font-semibold text-sm text-slate-800">Achmad Syarifuddin, S.H.</p>
                          <p className="text-xs text-slate-500">Panitera Muda Hukum</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs text-slate-600">197508122002121001</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 text-blue-700 rounded-full w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Atasan</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-xs font-medium">Aktif</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleOpenModal('edit')} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-emerald-600 cursor-pointer" title="Update">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button onClick={() => handleOpenModal('delete')} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-error cursor-pointer" title="Delete">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 2: Pimpinan */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-5 font-mono text-xs text-slate-400">02</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-amber-50 flex items-center justify-center text-amber-700 font-bold text-xs">BK</div>
                        <div>
                          <p className="font-semibold text-sm text-slate-800">Bambang Kusumo, M.H.</p>
                          <p className="text-xs text-slate-500">Ketua Pengadilan</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs text-slate-600">196801011994031005</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 px-3 py-1 bg-amber-50 text-amber-700 rounded-full w-fit">
                        <span className="material-symbols-outlined text-[12px]" style={{ fontVariationSettings: "'FILL' 1" }}>stars</span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Pimpinan</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-xs font-medium">Aktif</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleOpenModal('edit')} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-emerald-600 cursor-pointer" title="Update">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button onClick={() => handleOpenModal('delete')} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-error cursor-pointer" title="Delete">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 3: Pegawai */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-5 font-mono text-xs text-slate-400">03</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-700 font-bold text-xs">DR</div>
                        <div>
                          <p className="font-semibold text-sm text-slate-800">Dewi Rahayu, A.Md.</p>
                          <p className="text-xs text-slate-500">Staf Kepegawaian</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs text-slate-600">199204152018012003</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Pegawai</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-xs font-medium">Aktif</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleOpenModal('edit')} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-emerald-600 cursor-pointer" title="Update">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button onClick={() => handleOpenModal('delete')} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-error cursor-pointer" title="Delete">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 4: Kepegawaian (Admin) */}
                  <tr className="hover:bg-slate-50/80 transition-colors group">
                    <td className="px-6 py-5 font-mono text-xs text-slate-400">04</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-700 font-bold text-xs">HK</div>
                        <div>
                          <p className="font-semibold text-sm text-slate-800">Hadi Kusuma, S.H.</p>
                          <p className="text-xs text-slate-500">Kasubag Kepegawaian</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs text-slate-600">198506112009031004</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-yellow-600"></span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Kepeg</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-emerald-600">
                        <span className="material-symbols-outlined text-sm" style={{ fontVariationSettings: "'FILL' 1" }}>check_circle</span>
                        <span className="text-xs font-medium">Aktif</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleOpenModal('edit')} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-emerald-600 cursor-pointer" title="Update">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button onClick={() => handleOpenModal('delete')} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-error cursor-pointer" title="Delete">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>

                  {/* Row 5: Non-aktif */}
                  <tr className="hover:bg-slate-50/80 transition-colors group opacity-70">
                    <td className="px-6 py-5 font-mono text-xs text-slate-400">05</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-3">
                        <div className="w-9 h-9 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-xs">ES</div>
                        <div>
                          <p className="font-semibold text-sm text-slate-800">Eko Setiawan, S.Kom.</p>
                          <p className="text-xs text-slate-500">Pranata Komputer</p>
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-5 font-mono text-xs text-slate-600">198809222015031002</td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-700 rounded-full w-fit">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                        <span className="text-[10px] font-bold uppercase tracking-wider">Pegawai</span>
                      </div>
                    </td>
                    <td className="px-6 py-5">
                      <div className="flex items-center gap-2 text-slate-400">
                        <span className="material-symbols-outlined text-sm">cancel</span>
                        <span className="text-xs font-medium">Nonaktif</span>
                      </div>
                    </td>
                    <td className="px-6 py-5 text-right">
                      <div className="flex items-center justify-end gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                        <button onClick={() => handleOpenModal('edit')} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-emerald-600 cursor-pointer" title="Update">
                          <span className="material-symbols-outlined text-[18px]">edit</span>
                        </button>
                        <button onClick={() => handleOpenModal('delete')} className="p-1.5 hover:bg-slate-200 rounded-lg transition-colors text-slate-400 hover:text-error cursor-pointer" title="Delete">
                          <span className="material-symbols-outlined text-[18px]">delete</span>
                        </button>
                      </div>
                    </td>
                  </tr>
                </tbody>
              </table>

              {/* Pagination */}
              <div className="px-6 py-4 bg-slate-50/30 flex items-center justify-between border-t border-slate-100">
                <p className="text-xs text-slate-500">Menampilkan 1-5 dari 28 pengguna</p>
                <div className="flex items-center gap-2">
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-sm">chevron_left</span>
                  </button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg bg-primary text-white font-bold text-xs shadow-md shadow-primary/20 cursor-pointer">1</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white transition-colors text-xs font-bold cursor-pointer">2</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-600 hover:bg-white transition-colors text-xs font-bold cursor-pointer">3</button>
                  <button className="w-8 h-8 flex items-center justify-center rounded-lg border border-slate-200 text-slate-400 hover:bg-white transition-colors cursor-pointer">
                    <span className="material-symbols-outlined text-sm">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
        <UserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} mode={modalMode} />
      </div>
    </Layout>
  )
}
