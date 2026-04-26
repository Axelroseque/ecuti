import { useState, useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Footer from '../../components/common/Footer'
import JenisCutiStep from '../../features/leave/JenisCutiStep'
import DetailCutiStep from '../../features/leave/DetailCutiStep'
import DokumenStep from '../../features/leave/DokumenStep'
import KonfirmasiStep from '../../features/leave/KonfirmasiStep'

export default function PengajuanCuti() {
  const [currentStep, setCurrentStep] = useState(2)

  useEffect(() => {
    document.title = 'Pengajuan Cuti | SI-CUTI PN KEDIRI'
  }, [])

  const renderStep = () => {
    switch (currentStep) {
      case 1: return <JenisCutiStep />
      case 2: return <DetailCutiStep />
      case 3: return <DokumenStep />
      case 4: return <KonfirmasiStep />
      default: return <DetailCutiStep />
    }
  }
  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <div className="page-padding space-y-8 flex-1">
          <div className="max-w-5xl mx-auto">
            {/* Page Title Section */}
            <div className="mb-10">
              <h2 className="text-4xl font-bold tracking-tight text-primary mb-2">Formulir Pengajuan Cuti</h2>
              <p className="text-on-surface-variant font-medium">Lengkapi rincian detail permohonan cuti Anda secara seksama.</p>
            </div>

            {/* Step Indicator Component */}
            <div className="mb-12 relative">
              <div className="step-indicator-container">
                {/* Step 1 */}
                <div className={`step-node group ${currentStep >= 1 ? 'active' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep > 1 ? 'bg-primary text-on-primary' : currentStep === 1 ? 'bg-primary text-on-primary ring-4 ring-primary/20 scale-110' : 'bg-surface-container-highest text-on-surface-variant'} font-bold shadow-lg transition-all`}>
                    {currentStep > 1 ? <span className="material-symbols-outlined text-sm">check</span> : 1}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${currentStep >= 1 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>1. Jenis Cuti</span>
                </div>
                {/* Connector */}
                <div className={`flex-1 h-[2px] mx-4 mb-6 transition-colors ${currentStep > 1 ? 'bg-primary' : 'bg-outline-variant/30'}`}></div>

                {/* Step 2 */}
                <div className={`step-node ${currentStep >= 2 ? 'active' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep > 2 ? 'bg-primary text-on-primary' : currentStep === 2 ? 'bg-primary text-on-primary ring-4 ring-primary/20 scale-110' : 'bg-surface-container-highest text-on-surface-variant'} font-bold shadow-lg transition-all`}>
                    {currentStep > 2 ? <span className="material-symbols-outlined text-sm">check</span> : 2}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${currentStep >= 2 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>2. Detail Cuti</span>
                </div>
                {/* Connector */}
                <div className={`flex-1 h-[2px] mx-4 mb-6 transition-colors ${currentStep > 2 ? 'bg-primary' : 'bg-outline-variant/30'}`}></div>

                {/* Step 3 */}
                <div className={`step-node ${currentStep >= 3 ? 'active' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep > 3 ? 'bg-primary text-on-primary' : currentStep === 3 ? 'bg-primary text-on-primary ring-4 ring-primary/20 scale-110' : 'bg-surface-container-highest text-on-surface-variant'} font-bold shadow-lg transition-all`}>
                    {currentStep > 3 ? <span className="material-symbols-outlined text-sm">check</span> : 3}
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${currentStep >= 3 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>3. Dokumen</span>
                </div>
                {/* Connector */}
                <div className={`flex-1 h-[2px] mx-4 mb-6 transition-colors ${currentStep > 3 ? 'bg-primary' : 'bg-outline-variant/30'}`}></div>

                {/* Step 4 */}
                <div className={`step-node ${currentStep >= 4 ? 'active' : ''}`}>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${currentStep === 4 ? 'bg-primary text-on-primary ring-4 ring-primary/20 scale-110' : 'bg-surface-container-highest text-on-surface-variant'} font-bold shadow-lg transition-all`}>
                    4
                  </div>
                  <span className={`text-[10px] font-mono uppercase tracking-widest ${currentStep >= 4 ? 'text-primary font-bold' : 'text-on-surface-variant'}`}>4. Konfirmasi</span>
                </div>
              </div>
            </div>

            {/* Form Layout */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Form Section */}
              <div className="lg:col-span-8 space-y-6">
                <div className="form-section">
                  {renderStep()}
                </div>

                {/* Action Buttons */}
                <div className="flex justify-between items-center pt-4">
                  <button 
                    onClick={() => setCurrentStep(Math.max(1, currentStep - 1))}
                    disabled={currentStep === 1}
                    className="px-6 py-3 text-sm font-semibold text-primary hover:bg-surface-container-high rounded-lg transition-all flex items-center gap-2 cursor-pointer disabled:opacity-30 disabled:cursor-not-allowed">
                    <span className="material-symbols-outlined text-lg">arrow_back</span>
                    Kembali
                  </button>
                  <button 
                    onClick={() => setCurrentStep(Math.min(4, currentStep + 1))}
                    className="px-10 py-3 bg-gradient-to-br from-primary to-primary-container text-on-primary font-bold rounded-lg shadow-lg hover:shadow-xl active:scale-95 transition-all flex items-center gap-2 cursor-pointer hover:shadow-primary/20">
                    {currentStep === 4 ? 'Kirim Pengajuan' : 'Selanjutnya'}
                    <span className="material-symbols-outlined text-lg">{currentStep === 4 ? 'send' : 'arrow_forward'}</span>
                  </button>
                </div>
              </div>

              {/* Sidebar Validation / Info */}
              <div className="lg:col-span-4 space-y-6">
                {/* Validation Checklist Card */}
                <div className="bg-surface-container-lowest p-6 rounded-xl shadow-sm border border-outline-variant/15">
                  <h3 className="text-sm font-bold text-primary mb-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-lg">verified</span>
                    Validasi Pengajuan
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-tertiary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px] text-on-tertiary">check</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-on-surface">Saldo Cuti Tersedia</p>
                        <p className="text-[10px] text-on-surface-variant leading-relaxed">Sisa: 12 hari (Tahunan 2024)</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-tertiary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px] text-on-tertiary">check</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-on-surface">Tidak Ada Konflik Jadwal</p>
                        <p className="text-[10px] text-on-surface-variant leading-relaxed">Tidak ada pengajuan di tanggal yang sama.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="mt-0.5 h-5 w-5 rounded-full bg-tertiary-container flex items-center justify-center">
                        <span className="material-symbols-outlined text-[14px] text-on-tertiary">check</span>
                      </div>
                      <div>
                        <p className="text-xs font-bold text-on-surface">Pegawai Pengganti Siap</p>
                        <p className="text-[10px] text-on-surface-variant leading-relaxed">Staff terpilih telah dikonfirmasi bersedia.</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Guidance Card */}
                <div className="bg-primary p-6 rounded-xl shadow-lg text-on-primary">
                  <span className="material-symbols-outlined text-3xl mb-4">info</span>
                  <h4 className="font-bold mb-2">Informasi Penting</h4>
                  <p className="text-xs leading-relaxed opacity-90 mb-4">
                    Pastikan alasan cuti dijelaskan secara detail jika durasi cuti melebihi 3 hari kerja untuk mempercepat proses persetujuan oleh Atasan Langsung.
                  </p>
                  <a className="inline-flex items-center gap-1 text-[10px] font-mono uppercase tracking-widest border-b border-on-primary/30 pb-0.5 hover:border-on-primary transition-all" href="#">
                    Baca Regulasi Cuti
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </Layout>
  )
}
