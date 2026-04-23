# Sistem Informasi Cuti — Frontend Implementation Plan

Membangun antarmuka modern untuk Sistem Informasi Cuti Pengadilan Negeri Kediri Kelas I-B, mengakomodasi hierarki peradilan (Hakim, Panitera, Staf) dan regulasi kepegawaian ASN/PNS (Perka BKN No. 24/2017 jo. No. 7/2021).

---

## User Review Required

> [!IMPORTANT]
> **Tech Stack:** Rencana ini menggunakan **Vite + React** (SPA) karena ini adalah sistem internal tanpa kebutuhan SEO, mudah di-deploy ke server standar pemerintah (Nginx/Apache), dan lebih ringan dibanding Next.js. **Apakah Anda setuju, atau lebih memilih pendekatan lain (plain HTML/JS, Next.js, Vue)?**

> [!IMPORTANT]
> **Bahasa Antarmuka:** Seluruh UI akan menggunakan **Bahasa Indonesia** sebagai bahasa utama. Konfirmasi jika perlu dukungan bilingual.

> [!WARNING]
> **Backend:** Plan ini hanya mencakup **frontend**. Backend (API, database, autentikasi) diasumsikan akan dibangun terpisah. Frontend akan menggunakan mock data/dummy API untuk development.

---

## 1. Tech Stack & Tooling

| Layer | Pilihan | Alasan |
|:---|:---|:---|
| **Framework** | Vite + React 18 | Build cepat, SPA ringan, mudah deploy di server pemerintah |
| **Styling** | Vanilla CSS (CSS Modules) | Kontrol penuh, tanpa dependency eksternal |
| **Icons** | Material Symbols (sudah dipakai di website PN Kediri) | Konsistensi visual |
| **Font** | Inter (Google Fonts) | Modern, profesional, readability tinggi |
| **Charts** | Chart.js atau Recharts | Dashboard visualisasi data cuti |
| **PDF Preview** | react-pdf | Preview surat izin cuti |
| **Calendar** | Custom CSS Grid calendar | Kalender divisi tanpa library berat |
| **Routing** | React Router v6 | Standard, file-based-like routing |

---

## 2. Design System

### 2.1 Color Palette

Mengambil identitas visual PN Kediri (merah maroon) sebagai warna primer, diperkaya dengan palet profesional:

```
Primary (Maroon)     : #8B1A1A (utama), #A82620 (hover), #6B1010 (pressed)
Secondary (Gold)     : #C8942A (aksen), #E8B44A (hover), #A87720 (pressed)
Neutral Dark         : #1A1D23 (sidebar bg), #2A2D35 (card dark), #3A3D45 (border)
Neutral Light        : #F5F6FA (page bg), #FFFFFF (card bg), #E8EAF0 (divider)
Success              : #16A34A (approved)
Warning              : #F59E0B (pending/postponed)
Danger               : #DC2626 (rejected/error)
Info                 : #2563EB (informational)
```

### 2.2 Typography

```
Heading   : Inter, 600–700 weight
Body      : Inter, 400 weight
Caption   : Inter, 400 weight, 12px
Mono/Data : JetBrains Mono (untuk NIP, kode surat)
```

### 2.3 Spacing & Radius

```
Base spacing : 4px (unit), 8/12/16/24/32/48px (scale)
Border radius: 8px (cards), 12px (modals), 24px (pills/badges)
Shadow       : 0 1px 3px rgba(0,0,0,0.08) (subtle)
               0 4px 16px rgba(0,0,0,0.12) (elevated)
```

### 2.4 Micro-Animations

- **Page transitions:** Fade-in 300ms ease
- **Card hover:** translateY(-2px) + shadow elevation
- **Button press:** scale(0.97) → scale(1)
- **Status badges:** Subtle pulse untuk status "Pending"
- **Sidebar:** Smooth collapse/expand 250ms
- **Toast notifications:** Slide-in dari kanan atas

---

## 3. Role-Based Navigation

Sistem memiliki **4 role utama**, masing-masing melihat navigasi yang berbeda:

### 3.1 Struktur Role

```
┌─────────────────────────────────────────────────────────┐
│  ROLE            │  DESKRIPSI           │ CONTOH         │
├─────────────────────────────────────────────────────────┤
│  Pegawai         │  Pengaju cuti        │ Staf, PPNPN    │
│  Atasan          │  Approval level 1    │ Kasubag, Hakim │
│  Kepegawaian     │  Validasi HR         │ Staff Bagian   │
│                  │                      │ Kepegawaian    │
│  Pimpinan/Admin  │  Approval final +    │ KPN, WKPN,     │
│                  │  full access         │ Panitera       │
└─────────────────────────────────────────────────────────┘
```

### 3.2 Sidebar Navigation Per-Role

```
📊 SEMUA ROLE:
├── Dashboard
├── Profil Saya
└── Riwayat Cuti

📝 PEGAWAI (tambahan):
├── Ajukan Cuti
└── Cuti Saya (status tracking)

✅ ATASAN (tambahan):
├── Persetujuan Masuk
├── Kalender Tim
└── Riwayat Persetujuan

📋 KEPEGAWAIAN (tambahan):
├── Verifikasi Pengajuan
├── Manajemen Kuota
├── Data Pegawai
└── Laporan & Rekap

👑 PIMPINAN/ADMIN (tambahan):
├── Persetujuan Akhir
├── Kalender Instansi
├── Laporan & Analitik
├── Pengaturan Workflow
└── Manajemen Pengguna
```

---

## 4. Page Layouts & Wireframes

### 4.1 Layout Master (Semua Halaman)

```
┌──────────────────────────────────────────────────┐
│  TOP BAR (fixed)                                 │
│  [☰ Toggle] [Logo PN Kediri] [Notif 🔔] [User] │
├────────┬─────────────────────────────────────────┤
│        │                                         │
│ SIDE   │         MAIN CONTENT AREA               │
│ BAR    │                                         │
│        │  ┌─────────────────────────────────┐    │
│ 240px  │  │  Breadcrumb                     │    │
│ (col-  │  ├─────────────────────────────────┤    │
│ lapsi- │  │                                 │    │
│ ble    │  │  Page Content                   │    │
│ to     │  │                                 │    │
│ 64px)  │  │                                 │    │
│        │  └─────────────────────────────────┘    │
│        │                                         │
├────────┴─────────────────────────────────────────┤
│  FOOTER (minimal): © 2026 PN Kediri              │
└──────────────────────────────────────────────────┘
```

**Responsive behavior:**
- **≥1024px:** Sidebar expanded (240px) + main content
- **768–1023px:** Sidebar collapsed (64px, icons only) + main content
- **<768px:** Sidebar hidden → hamburger menu overlay

---

### 4.2 Halaman Login

```
┌──────────────────────────────────────────────────┐
│                                                  │
│          ┌────────────────────────┐               │
│          │  [Logo PN Kediri]      │               │
│          │                        │               │
│          │  Sistem Informasi Cuti │               │
│          │  Pengadilan Negeri     │               │
│          │  Kediri Kelas I-B     │               │
│          │                        │               │
│          │  ┌──────────────────┐  │               │
│          │  │ NIP              │  │               │
│          │  └──────────────────┘  │               │
│          │  ┌──────────────────┐  │               │
│          │  │ Password         │  │               │
│          │  └──────────────────┘  │               │
│          │                        │               │
│          │  [✓ Ingat Saya]        │               │
│          │                        │               │
│          │  [    MASUK    ]       │               │
│          │                        │               │
│          │  Lupa Password?        │               │
│          └────────────────────────┘               │
│                                                  │
│  Background: Gradient maroon + subtle pattern    │
└──────────────────────────────────────────────────┘
```

- **Glassmorphism card** dengan backdrop-blur
- Background animasi gelombang halus (inspirasi dari Vanta.js yang sudah dipakai di website PN Kediri)

---

### 4.3 Dashboard — Pegawai

```
┌─────────────────────────────────────────────────────┐
│  Selamat Pagi, [Nama Pegawai]  👋                   │
│  NIP: 19XXXXXX | Jabatan: [Staf] | Unit: [Umum]    │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌─────────┐ ┌─────────┐ ┌─────────┐ ┌─────────┐  │
│  │ Cuti    │ │ Cuti    │ │ Cuti    │ │ Pengaju-│  │
│  │ Tahunan │ │ Besar   │ │ Sakit   │ │ an      │  │
│  │         │ │         │ │         │ │ Aktif   │  │
│  │  8/12   │ │  90/90  │ │  0 hari │ │   2     │  │
│  │ [====  ]│ │ [██████]│ │ [██████]│ │ pending │  │
│  └─────────┘ └─────────┘ └─────────┘ └─────────┘  │
│                                                     │
│  ┌──────────────────────┐ ┌────────────────────┐   │
│  │ PENGAJUAN TERAKHIR   │ │ KALENDER CUTI      │   │
│  │                      │ │                    │   │
│  │ • 25 Mar - Tahunan   │ │  [Mini Calendar]   │   │
│  │   Status: ⏳ Pending  │ │  Hari cuti di-     │   │
│  │   Atasan: Kasubag    │ │  highlight warna   │   │
│  │                      │ │                    │   │
│  │ • 10 Feb - Sakit     │ │  Libur nasional    │   │
│  │   Status: ✅ Approved │ │  ditandai          │   │
│  │                      │ │                    │   │
│  │ [Lihat Semua →]      │ │                    │   │
│  └──────────────────────┘ └────────────────────┘   │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │   [+  AJUKAN CUTI BARU]  (FAB / CTA besar) │   │
│  └─────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────┘
```

**Komponen utama:**
- **Stat Cards:** 4 kartu kuota cuti dengan progress bar visual
- **Pengajuan Terakhir:** List 3-5 pengajuan terbaru + status badge
- **Mini Calendar:** Kalender bulan ini, highlight hari cuti & libur nasional
- **CTA Button:** Tombol besar "Ajukan Cuti Baru" sticky di bawah

---

### 4.4 Dashboard — Atasan

```
┌─────────────────────────────────────────────────────┐
│  Dashboard Persetujuan                              │
├─────────────────────────────────────────────────────┤
│                                                     │
│  ┌──────────┐ ┌──────────┐ ┌──────────┐            │
│  │ Menunggu │ │ Disetujui│ │ Ditolak  │            │
│  │ Approval │ │ Bulan Ini│ │ Bulan Ini│            │
│  │    5     │ │    12    │ │    1     │            │
│  │ 🟡 pulse │ │   🟢     │ │   🔴     │            │
│  └──────────┘ └──────────┘ └──────────┘            │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ PENGAJUAN MASUK (Perlu Tindakan)            │   │
│  ├─────────────────────────────────────────────┤   │
│  │ 👤 Ahmad Fauzi — Staf Umum                  │   │
│  │    Cuti Tahunan: 28 Mar – 1 Apr (3 hari)    │   │
│  │    Pengganti: Siti Rahayu                   │   │
│  │    [✅ Setujui] [⏸ Tangguhkan] [❌ Tolak]    │   │
│  ├─────────────────────────────────────────────┤   │
│  │ 👤 Budi Santoso — Panitera Pengganti        │   │
│  │    Cuti Sakit: 26 Mar – 27 Mar (2 hari)     │   │
│  │    ⚠️ Ada jadwal sidang 27 Mar!              │   │
│  │    [✅ Setujui] [⏸ Tangguhkan] [❌ Tolak]    │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  ┌────────────────────────────────────────────┐    │
│  │  KALENDER TIM — Maret 2026                 │    │
│  │  Visualisasi siapa yang cuti/hadir          │    │
│  │  [Gantt-style horizontal bars]              │    │
│  └────────────────────────────────────────────┘    │
└─────────────────────────────────────────────────────┘
```

**Highlight:**
- **Alert jadwal sidang** — Peringatan jika Hakim/PP cuti bertabrakan jadwal sidang
- **Quick action buttons** — Approve/Postpone/Reject langsung dari list
- **Team Calendar** — Gantt-style bar menunjukkan siapa cuti kapan

---

### 4.5 Form Pengajuan Cuti (Multi-Step Wizard)

```
Step Indicator:
  [1. Jenis Cuti] → [2. Detail] → [3. Dokumen] → [4. Konfirmasi]

═══════════════════════════════════════════════════════

STEP 1 — Pilih Jenis Cuti:
┌─────────────────────────────────────────────────────┐
│  Pilih jenis cuti yang akan diajukan:               │
│                                                     │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐         │
│  │ 📅        │ │ 📋        │ │ 🏥        │         │
│  │ Cuti      │ │ Cuti      │ │ Cuti      │         │
│  │ Tahunan   │ │ Besar     │ │ Sakit     │         │
│  │ Sisa: 8   │ │ Sisa: 90  │ │           │         │
│  └───────────┘ └───────────┘ └───────────┘         │
│  ┌───────────┐ ┌───────────┐ ┌───────────┐         │
│  │ 🤱        │ │ ⚡        │ │ 📝        │         │
│  │ Cuti      │ │ Cuti      │ │ CLTN      │         │
│  │ Melahir-  │ │ Alasan    │ │           │         │
│  │ kan       │ │ Penting   │ │           │         │
│  └───────────┘ └───────────┘ └───────────┘         │
│                                                     │
│                          [Selanjutnya →]            │
└─────────────────────────────────────────────────────┘

STEP 2 — Detail Cuti:
┌─────────────────────────────────────────────────────┐
│  Tanggal Mulai  : [___________] 📅                  │
│  Tanggal Selesai: [___________] 📅                  │
│  Durasi         : 3 hari kerja (auto-calc)          │
│                                                     │
│  Alamat Selama Cuti: [_________________________]    │
│  No. Telp Darurat  : [_________________________]    │
│  Alasan            : [_________________________]    │
│                      [_________________________]    │
│                                                     │
│  Pegawai Pengganti:                                 │
│  [🔍 Cari pegawai... _____________________ ]        │
│  → Siti Rahayu (NIP: 19XXXXXX) ✓                   │
│                                                     │
│  ⚠️ Validasi otomatis:                              │
│  ✅ Saldo cuti mencukupi (8 hari tersisa)            │
│  ✅ Tidak ada bentrok jadwal sidang                  │
│  ✅ Pegawai pengganti tersedia                       │
│                                                     │
│  [← Kembali]                [Selanjutnya →]         │
└─────────────────────────────────────────────────────┘

STEP 3 — Upload Dokumen:
┌─────────────────────────────────────────────────────┐
│  Dokumen Pendukung (opsional untuk Cuti Tahunan):   │
│                                                     │
│  ┌─────────────────────────────────────┐            │
│  │                                     │            │
│  │   📎 Drag & drop file di sini       │            │
│  │   atau klik untuk memilih           │            │
│  │                                     │            │
│  │   Format: PDF, JPG, PNG (max 5MB)   │            │
│  └─────────────────────────────────────┘            │
│                                                     │
│  📄 surat_dokter.pdf (1.2MB) [❌ Hapus]              │
│                                                     │
│  [← Kembali]                [Selanjutnya →]         │
└─────────────────────────────────────────────────────┘

STEP 4 — Konfirmasi & Kirim:
┌─────────────────────────────────────────────────────┐
│  📋 Ringkasan Pengajuan Cuti                        │
│  ─────────────────────────────────                  │
│  Jenis       : Cuti Tahunan                         │
│  Tanggal     : 28 Maret – 1 April 2026             │
│  Durasi      : 3 hari kerja                         │
│  Alasan      : Keperluan keluarga                   │
│  Pengganti   : Siti Rahayu                          │
│  Dokumen     : 1 file                               │
│                                                     │
│  Alur Persetujuan:                                  │
│  [Anda] → [Kasubag Umum] → [Kepegawaian] → [KPN]  │
│                                                     │
│  [← Kembali]        [📤 Kirim Pengajuan]            │
└─────────────────────────────────────────────────────┘
```

---

### 4.6 Halaman Tracking Status Cuti

```
┌─────────────────────────────────────────────────────┐
│  Status Pengajuan: CT-2026-0042                     │
│                                                     │
│  ●━━━━━━●━━━━━━●━━━━━━○━━━━━━○                     │
│  Diajukan  Atasan   HR     Pimpinan                 │
│  25 Mar    26 Mar   ...     ...                     │
│  ✅        ✅       ⏳      ○                        │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ Timeline Detail:                            │   │
│  │                                             │   │
│  │ 25 Mar 09:15 — Pengajuan dikirim            │   │
│  │ 25 Mar 09:15 — Notifikasi ke Kasubag Umum   │   │
│  │ 26 Mar 14:30 — ✅ Disetujui oleh Kasubag    │   │
│  │                Catatan: "Silakan"            │   │
│  │ 26 Mar 14:31 — Notifikasi ke Kepegawaian    │   │
│  │ ...           — ⏳ Menunggu verifikasi HR    │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  [📄 Download Surat Cuti]  (muncul jika approved)   │
│  [❌ Batalkan Pengajuan]   (jika masih pending)     │
└─────────────────────────────────────────────────────┘
```

---

### 4.7 Halaman Verifikasi Kepegawaian (HR)

```
┌─────────────────────────────────────────────────────┐
│  Verifikasi Pengajuan Cuti                          │
│                                                     │
│  Filter: [Semua ▾] [Bulan ini ▾] [🔍 Cari NIP...]  │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ No │ Nama       │ Jenis    │ Tgl        │ ⚡ │   │
│  ├────┼────────────┼──────────┼────────────┼────┤   │
│  │ 1  │ A. Fauzi   │ Tahunan  │ 28 Mar-1   │ ✅ │   │
│  │    │            │          │ Apr        │    │   │
│  │ 2  │ B. Santoso │ Sakit    │ 26-27 Mar  │ ⚠️ │   │
│  │ 3  │ C. Dewi    │ Besar    │ 1 Apr-30   │ 🔍 │   │
│  │    │            │          │ Jun        │    │   │
│  └─────────────────────────────────────────────┘   │
│                                                     │
│  Klik baris untuk buka detail + checklist:          │
│  ☑ Saldo cuti sesuai                               │
│  ☑ Masa kerja memenuhi syarat                      │
│  ☑ Dokumen pendukung lengkap                       │
│  ☐ Sesuai Perka BKN No. 24/2017                    │
│                                                     │
│  [✅ Verifikasi Lolos] [❌ Tolak + Catatan]          │
└─────────────────────────────────────────────────────┘
```

---

### 4.8 Halaman Laporan & Analitik (Pimpinan)

```
┌─────────────────────────────────────────────────────┐
│  Laporan & Analitik Cuti                            │
│  Periode: [2026 ▾]  Bulan: [Maret ▾]  [📥 Export]  │
│                                                     │
│  ┌──────────────────────┐ ┌────────────────────┐   │
│  │  CHART: Tren Cuti    │ │ PIE: Jenis Cuti    │   │
│  │  Bulanan (Bar Chart) │ │ Distribusi         │   │
│  │  ┌─ Jan              │ │                    │   │
│  │  ├─ Feb              │ │  🟢 Tahunan 65%    │   │
│  │  ├─ Mar   ████       │ │  🔵 Sakit 20%     │   │
│  │  └─ ...              │ │  🟡 Lainnya 15%   │   │
│  └──────────────────────┘ └────────────────────┘   │
│                                                     │
│  ┌─────────────────────────────────────────────┐   │
│  │ TABEL REKAP PER PEGAWAI                     │   │
│  ├─────┬──────────┬────┬────┬────┬─────┬───────┤   │
│  │ No  │ Nama     │ TH │ BS │ SK │ ML  │ Total │   │
│  ├─────┼──────────┼────┼────┼────┼─────┼───────┤   │
│  │ 1   │ A. Fauzi │ 4  │ 0  │ 2  │ 0   │ 6     │   │
│  │ 2   │ B. Santo │ 3  │ 0  │ 0  │ 0   │ 3     │   │
│  │ ... │          │    │    │    │     │       │   │
│  └─────┴──────────┴────┴────┴────┴─────┴───────┘   │
│                                                     │
│  [📄 Export PDF]  [📊 Export Excel]                  │
└─────────────────────────────────────────────────────┘
```

---

### 4.9 Halaman Profil & Riwayat Cuti

```
┌─────────────────────────────────────────────────────┐
│  ┌──────┐  Nama: Ahmad Fauzi                       │
│  │ Foto │  NIP : 199201012020011001                 │
│  │      │  Jabatan: Staf Sub Bagian Umum            │
│  └──────┘  Unit: Bagian Umum & Keuangan             │
│            Atasan: Kasubag Umum — Ir. Suyanto       │
│            Masa Kerja: 6 tahun 2 bulan              │
│                                                     │
│  ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │
│  KUOTA CUTI 2026:                                   │
│  ┌────────────┬──────┬──────┬──────┐               │
│  │ Jenis      │ Hak  │ Pakai│ Sisa │               │
│  ├────────────┼──────┼──────┼──────┤               │
│  │ Tahunan    │ 12+6 │  10  │  8   │               │
│  │ Besar      │ 90   │  0   │  90  │               │
│  │ Sakit      │  —   │  2   │  —   │               │
│  │ Melahirkan │  90  │  0   │  90  │               │
│  └────────────┴──────┴──────┴──────┘               │
│                                                     │
│  RIWAYAT CUTI:                                      │
│  [Filter: 2026 ▾] [Semua Jenis ▾] [🔍]             │
│  ┌────┬──────────┬──────────┬──────┬───────┐       │
│  │ No │ Tanggal  │ Jenis    │ Hari │Status │       │
│  ├────┼──────────┼──────────┼──────┼───────┤       │
│  │ 1  │ 10-11 Feb│ Sakit    │ 2    │ ✅    │       │
│  │ 2  │ 28 Mar-  │ Tahunan  │ 3    │ ⏳    │       │
│  │    │ 1 Apr    │          │      │       │       │
│  └────┴──────────┴──────────┴──────┴───────┘       │
└─────────────────────────────────────────────────────┘
```

---

### 4.10 Notification Center

```
┌─────────────────────────────────────────┐
│  🔔 Notifikasi (3 baru)                │
│                                         │
│  🟡 Pengajuan cuti Anda sedang          │
│     diverifikasi oleh Kepegawaian       │
│     2 jam lalu                          │
│                                         │
│  🟢 Cuti Tahunan Anda (10-11 Feb)      │
│     telah DISETUJUI                     │
│     3 hari lalu                         │
│                                         │
│  🔴 Cuti Besar Anda DITOLAK            │
│     Alasan: Masa kerja belum 5 tahun   │
│     1 minggu lalu                       │
│                                         │
│  [Tandai Semua Dibaca]                  │
└─────────────────────────────────────────┘
```

Muncul sebagai **dropdown panel** dari bell icon di topbar, dan juga halaman penuh `/notifikasi`.

---

## 5. Sitemap & Routing

```
/login                          → Halaman Login
/dashboard                      → Dashboard (role-aware)

/cuti/ajukan                    → Form Pengajuan Cuti (multi-step)
/cuti/saya                      → Daftar Cuti Saya + Status
/cuti/:id                       → Detail & Tracking Pengajuan
/cuti/:id/surat                 → Preview PDF Surat Izin Cuti

/approval                       → Daftar Pengajuan Masuk (Atasan)
/approval/:id                   → Detail untuk Approve/Reject

/verifikasi                     → Daftar Verifikasi HR (Kepegawaian)
/verifikasi/:id                 → Detail Verifikasi + Checklist

/kalender                       → Kalender Tim/Instansi
/profil                         → Profil & Riwayat Cuti
/notifikasi                     → Semua Notifikasi

/admin/laporan                  → Laporan & Analitik
/admin/kuota                    → Manajemen Kuota Cuti
/admin/pegawai                  → Data Pegawai
/admin/workflow                 → Pengaturan Alur Persetujuan
/admin/pengguna                 → Manajemen User & Role
```

---

## 6. Komponen Reusable

| Komponen | Deskripsi |
|:---|:---|
| `<Sidebar />` | Navigation sidebar, collapsible, role-aware menu items |
| `<Topbar />` | Logo, breadcrumb, notification bell, user avatar dropdown |
| `<StatCard />` | Kartu statistik dengan icon, angka, progress bar, warna status |
| `<StatusBadge />` | Badge: Pending (kuning pulse), Approved (hijau), Rejected (merah) |
| `<DataTable />` | Tabel dengan sorting, filtering, pagination |
| `<StepWizard />` | Multi-step form container dengan step indicator |
| `<FileUpload />` | Drag & drop + click upload dengan preview |
| `<MiniCalendar />` | Kalender bulan dengan highlight hari cuti & libur |
| `<TeamCalendar />` | Gantt-style kalender tim |
| `<Timeline />` | Vertical timeline untuk tracking approval progress |
| `<Modal />` | Dialog konfirmasi, detail view |
| `<Toast />` | Notifikasi toast slide-in |
| `<EmptyState />` | Ilustrasi + teks saat tidak ada data |
| `<SearchInput />` | Input pencarian dengan autocomplete (pegawai) |
| `<PDFPreview />` | Preview surat izin cuti dalam format PDF |

---

## 7. Folder Structure

```
d:\Git\pn-kediri\sicuti\
├── index.html
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.ico
│   └── logo-pn-kediri.png
└── src/
    ├── main.jsx                    # Entry point
    ├── App.jsx                     # Root + Router
    ├── index.css                   # Global styles + CSS variables
    │
    ├── assets/                     # Static assets (images, fonts)
    │
    ├── components/                 # Reusable UI components
    │   ├── layout/
    │   │   ├── Sidebar.jsx + .css
    │   │   ├── Topbar.jsx + .css
    │   │   └── MainLayout.jsx + .css
    │   ├── common/
    │   │   ├── StatCard.jsx + .css
    │   │   ├── StatusBadge.jsx + .css
    │   │   ├── DataTable.jsx + .css
    │   │   ├── Modal.jsx + .css
    │   │   ├── Toast.jsx + .css
    │   │   ├── FileUpload.jsx + .css
    │   │   ├── SearchInput.jsx + .css
    │   │   └── EmptyState.jsx + .css
    │   ├── calendar/
    │   │   ├── MiniCalendar.jsx + .css
    │   │   └── TeamCalendar.jsx + .css
    │   ├── cuti/
    │   │   ├── StepWizard.jsx + .css
    │   │   ├── Timeline.jsx + .css
    │   │   └── PDFPreview.jsx + .css
    │   └── charts/
    │       ├── BarChart.jsx
    │       └── PieChart.jsx
    │
    ├── pages/                      # Page-level components
    │   ├── Login.jsx + .css
    │   ├── Dashboard.jsx + .css
    │   ├── PengajuanCuti.jsx + .css
    │   ├── CutiSaya.jsx + .css
    │   ├── DetailCuti.jsx + .css
    │   ├── Approval.jsx + .css
    │   ├── Verifikasi.jsx + .css
    │   ├── Kalender.jsx + .css
    │   ├── Profil.jsx + .css
    │   ├── Notifikasi.jsx + .css
    │   └── admin/
    │       ├── Laporan.jsx + .css
    │       ├── ManajemenKuota.jsx + .css
    │       ├── DataPegawai.jsx + .css
    │       ├── Workflow.jsx + .css
    │       └── ManajemenUser.jsx + .css
    │
    ├── hooks/                      # Custom React hooks
    │   ├── useAuth.js
    │   ├── useNotification.js
    │   └── useCuti.js
    │
    ├── context/                    # React Context providers
    │   ├── AuthContext.jsx
    │   └── NotificationContext.jsx
    │
    ├── data/                       # Mock data untuk development
    │   ├── users.js
    │   ├── cutiData.js
    │   └── constants.js            # Jenis cuti, status enum, dll
    │
    └── utils/                      # Helper functions
        ├── dateUtils.js
        ├── cutiValidation.js
        └── formatters.js
```

---

## 8. Responsive Design Strategy

| Breakpoint | Layout | Sidebar | Detail |
|:---|:---|:---|:---|
| **≥1280px** (Desktop) | Full layout | Expanded (240px) | Stat cards 4 kolom |
| **1024–1279px** (Tablet landscape) | Full layout | Collapsed (64px) | Stat cards 4 kolom |
| **768–1023px** (Tablet portrait) | Stacked | Collapsed (64px) | Stat cards 2 kolom |
| **<768px** (Mobile) | Single column | Hidden (overlay) | Stat cards 1 kolom, bottom nav |

**Mobile-specific:**
- Bottom tab navigation (Dashboard, Cuti, Notif, Profil)
- Swipe gesture untuk approval cards
- FAB (Floating Action Button) untuk "Ajukan Cuti"

---

## 9. Accessibility

- Semua elemen interaktif memiliki `aria-label` deskriptif
- Keyboard navigation penuh (Tab, Enter, Escape)
- Color contrast ratio minimal 4.5:1 (WCAG AA)
- Focus visible styling yang jelas
- Screen reader support untuk status badges dan timeline

---

## Open Questions

> [!IMPORTANT]
> 1. **Apakah ingin menggunakan Vite + React**, atau lebih memilih pendekatan lain (plain HTML/JS/CSS, Vue, Next.js)?

> [!IMPORTANT]
> 2. **Apakah ada branding guide** resmi dari PN Kediri (selain warna maroon yang sudah ada di website) — misalnya file logo PNG/SVG beresolusi tinggi?

> [!NOTE]
> 3. **Untuk mock data**, apakah Anda punya contoh struktur data pegawai (NIP, nama, jabatan, unit) yang bisa dipakai sebagai dummy? Atau saya buatkan sesuai struktur umum pengadilan?

> [!NOTE]
> 4. **Apakah fitur Dark Mode** perlu dimasukkan dari awal, atau bisa ditambahkan nanti?

---

## Verification Plan

### Automated Tests
- Jalankan `npm run dev` dan pastikan semua route accessible
- Verifikasi responsive design di 4 breakpoint utama via browser DevTools
- Test keyboard navigation di semua form dan interactive elements

### Visual Verification
- Screenshot setiap halaman utama di desktop & mobile view
- Bandingkan dengan wireframe di atas
- Review color contrast ratio menggunakan browser accessibility tools

### Manual Verification
- Walkthrough lengkap flow: Login → Dashboard → Ajukan Cuti → Tracking → Approval → Generate PDF
- Test role switching: simulasi 4 role berbeda dan pastikan navigasi sesuai
