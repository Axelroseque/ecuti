import { useEffect } from 'react'
import Layout from '../../components/layout/Layout'
import Footer from '../../components/common/Footer'
import StatCard from '../../features/dashboard/StatCard'
import RequestCard from '../../features/dashboard/RequestCard'
import TeamAvailability from '../../features/dashboard/TeamAvailability'

const stats = [
  {
    icon: 'pending_actions',
    iconBg: 'bg-secondary-container/20',
    iconColor: 'text-on-secondary-container',
    label: 'Menunggu Approval',
    value: 5,
    subtitle: 'Pengajuan Baru',
    subtitleColor: 'text-secondary',
    showPulse: true,
    pulseColor: 'bg-secondary',
  },
  {
    icon: 'check_circle',
    iconBg: 'bg-tertiary-container/10',
    iconColor: 'text-tertiary-container',
    label: 'Disetujui Bulan Ini',
    value: 12,
    subtitle: 'Pegawai',
    subtitleColor: 'text-tertiary-container',
    showPulse: false,
  },
  {
    icon: 'cancel',
    iconBg: 'bg-error-container/20',
    iconColor: 'text-error',
    label: 'Ditolak',
    value: 1,
    subtitle: 'Arsip',
    subtitleColor: 'text-error',
    showPulse: false,
  },
]

const requests = [
  {
    initials: 'AF',
    name: 'Ahmad Fauzi',
    nip: '198511202010011003',
    position: 'Panitera Muda',
    leaveType: 'Tahunan',
    leaveTypeBg: 'bg-surface-container-high',
    leaveTypeColor: 'text-on-surface-variant',
    borderColor: 'border-primary',
    dateRange: '28 Mar - 01 Apr 2024',
    workDays: 5,
    salaryLabel: 'Sisa Saldo',
    salaryValue: '8 Hari',
  },
  {
    initials: 'BS',
    name: 'Budi Santoso',
    nip: '199004152015021001',
    position: 'Hakim Anggota',
    leaveType: 'Sakit',
    leaveTypeBg: 'bg-error-container/20',
    leaveTypeColor: 'text-on-error-container',
    borderColor: 'border-secondary',
    dateRange: '26 - 27 Mar 2024',
    workDays: 2,
    alert: 'Ada jadwal sidang 27 Mar! (Perkara Pidana No. 12/Pid.B/2024)',
    attachment: 'Surat_Sakit.pdf',
  },
]

export default function DashboardPage() {
  useEffect(() => {
    document.title = 'Dashboard Atasan | SI-CUTI PN KEDIRI'
  }, [])
  return (
    <Layout>
      <div className="flex flex-col flex-1">
        <div className="page-padding space-y-8">
          {/* ── Stat Cards ── */}
          <div className="stat-card-grid">
            {stats.map((s) => (
              <StatCard key={s.label} {...s} />
            ))}
          </div>

          {/* ── Incoming Requests ── */}
          <section className="space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-primary font-bold">
                PENGAJUAN MASUK (Perlu Tindakan)
              </h2>
              <span className="font-mono text-xs text-slate-400">
                Terakhir diperbarui: 10:24 WIB
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              {/* Request List */}
              <div className="lg:col-span-8 space-y-4">
                {requests.map((r) => (
                  <RequestCard key={r.nip} {...r} />
                ))}
              </div>

              {/* Team Availability */}
              <TeamAvailability />
            </div>
          </section>
        </div>

        <Footer />
      </div>
    </Layout>
  )
}
