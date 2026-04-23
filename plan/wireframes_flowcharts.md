# Sistem Informasi Cuti — Wireframes & Flowcharts

---

## 1. Application Flow Diagrams

### 1.1 Autentikasi & Routing

```mermaid
flowchart TD
    A([Buka Aplikasi]) --> B{Sudah Login?}
    B -->|Ya| C{Cek Role}
    B -->|Tidak| D[Halaman Login]
    D --> E[Input NIP + Password]
    E --> F{Validasi}
    F -->|Gagal| G[Tampilkan Error]
    G --> E
    F -->|Berhasil| H[Simpan Token + Session]
    H --> C

    C -->|Pegawai| I[Dashboard Pegawai]
    C -->|Atasan| J[Dashboard Atasan]
    C -->|Kepegawaian| K[Dashboard HR]
    C -->|Pimpinan| L[Dashboard Pimpinan]

    style A fill:#8B1A1A,color:#fff
    style D fill:#2A2D35,color:#fff
    style I fill:#16A34A,color:#fff
    style J fill:#2563EB,color:#fff
    style K fill:#F59E0B,color:#000
    style L fill:#C8942A,color:#fff
```

---

### 1.2 Alur Pengajuan Cuti (Leave Request Flow)

```mermaid
flowchart TD
    A([Pegawai Klik 'Ajukan Cuti']) --> B[Step 1: Pilih Jenis Cuti]
    B --> C[Step 2: Isi Detail & Tanggal]
    C --> D{Validasi Otomatis}

    D -->|Saldo Tidak Cukup| E[❌ Tampilkan Error Saldo]
    E --> C
    D -->|Bentrok Jadwal Sidang| F["⚠️ Warning Jadwal Sidang"]
    F --> G{Tetap Lanjut?}
    G -->|Tidak| C
    G -->|Ya| H[Step 3: Upload Dokumen]
    D -->|Lolos Validasi| H

    H --> I[Step 4: Konfirmasi & Review]
    I --> J{Kirim?}
    J -->|Batal| C
    J -->|Kirim| K[📤 Simpan ke Database]
    K --> L[🔔 Notifikasi ke Atasan]
    L --> M[Status: Menunggu Atasan]

    style A fill:#8B1A1A,color:#fff
    style E fill:#DC2626,color:#fff
    style F fill:#F59E0B,color:#000
    style K fill:#16A34A,color:#fff
    style L fill:#2563EB,color:#fff
```

---

### 1.3 Workflow Engine — Alur Persetujuan Multi-Level

```mermaid
flowchart TD
    START([Pengajuan Masuk]) --> ATL{Atasan Langsung}

    ATL -->|✅ Setuju| HR{Bagian Kepegawaian}
    ATL -->|⏸ Tangguhkan| HOLD[Status: Ditangguhkan]
    ATL -->|❌ Tolak| REJ1[Status: Ditolak Atasan]

    HOLD --> NOTIF_H["🔔 Notifikasi ke Pegawai"]
    REJ1 --> NOTIF_R1["🔔 Notifikasi Penolakan"]

    HR -->|✅ Verifikasi Lolos| PPK{Pejabat Berwenang}
    HR -->|❌ Tidak Sesuai Regulasi| REJ2[Status: Ditolak HR]
    REJ2 --> NOTIF_R2["🔔 Notifikasi Penolakan"]

    PPK -->|✅ Setuju| APPROVED[Status: DISETUJUI]
    PPK -->|❌ Tolak| REJ3[Status: Ditolak Pimpinan]
    REJ3 --> NOTIF_R3["🔔 Notifikasi Penolakan"]

    APPROVED --> GEN["📄 Generate Surat Izin Cuti PDF"]
    GEN --> TTE["🔏 Tanda Tangan Elektronik"]
    TTE --> UPDATE["📊 Update Saldo Cuti"]
    UPDATE --> DONE([Selesai ✅])

    style START fill:#8B1A1A,color:#fff
    style APPROVED fill:#16A34A,color:#fff
    style DONE fill:#16A34A,color:#fff
    style REJ1 fill:#DC2626,color:#fff
    style REJ2 fill:#DC2626,color:#fff
    style REJ3 fill:#DC2626,color:#fff
    style HOLD fill:#F59E0B,color:#000
    style GEN fill:#2563EB,color:#fff
    style TTE fill:#7C3AED,color:#fff
```

---

### 1.4 Manajemen Kuota Cuti

```mermaid
flowchart TD
    A([Awal Tahun / 1 Januari]) --> B[Reset Kuota Cuti Tahunan]
    B --> C{Sisa Cuti Tahun Lalu?}
    C -->|Ada sisa ≤ 6 hari| D["Carry Forward: maks 6 hari"]
    C -->|Tidak ada / > 6 hari| E["Kuota = 12 hari"]
    D --> F["Kuota = 12 + carry forward (maks 18)"]
    E --> G[Simpan ke Database]
    F --> G

    H([Cuti Disetujui]) --> I[Kurangi Saldo]
    I --> J{Saldo = 0?}
    J -->|Ya| K["🔒 Lock: Tidak bisa ajukan cuti tahunan"]
    J -->|Tidak| L[Saldo tersedia]

    M([Cuti Dibatalkan]) --> N[Kembalikan Saldo]

    style A fill:#C8942A,color:#fff
    style H fill:#16A34A,color:#fff
    style M fill:#F59E0B,color:#000
    style K fill:#DC2626,color:#fff
```

---

### 1.5 Navigasi Per-Role

```mermaid
flowchart LR
    subgraph SEMUA["🔓 Semua Role"]
        D[Dashboard]
        P[Profil]
        R[Riwayat Cuti]
        N[Notifikasi]
    end

    subgraph PEG["📝 Pegawai"]
        AC[Ajukan Cuti]
        CS[Cuti Saya]
    end

    subgraph ATS["✅ Atasan"]
        PM[Persetujuan Masuk]
        KT[Kalender Tim]
        RP[Riwayat Persetujuan]
    end

    subgraph HRD["📋 Kepegawaian"]
        VP[Verifikasi Pengajuan]
        MK[Manajemen Kuota]
        DP[Data Pegawai]
        LR[Laporan Rekap]
    end

    subgraph ADM["👑 Pimpinan / Admin"]
        PA[Persetujuan Akhir]
        KI[Kalender Instansi]
        LA[Laporan Analitik]
        WF[Pengaturan Workflow]
        MU[Manajemen Pengguna]
    end

    style SEMUA fill:#2A2D35,color:#fff
    style PEG fill:#16A34A,color:#fff
    style ATS fill:#2563EB,color:#fff
    style HRD fill:#F59E0B,color:#000
    style ADM fill:#8B1A1A,color:#fff
```

---

## 2. ASCII Wireframes — Semua Halaman

### 2.1 Login

```
╔══════════════════════════════════════════════════════════════════╗
║                                                                  ║
║          ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                    ║
║          ░  Background: Maroon Gradient     ░                    ║
║          ░  + Vanta.js Wave Animation       ░                    ║
║          ░                                  ░                    ║
║          ░   ╔══════════════════════════╗    ░                    ║
║          ░   ║                          ║    ░                    ║
║          ░   ║     ┌──────────────┐     ║    ░                    ║
║          ░   ║     │  ⚖️  LOGO    │     ║    ░                    ║
║          ░   ║     │  PN KEDIRI   │     ║    ░                    ║
║          ░   ║     └──────────────┘     ║    ░                    ║
║          ░   ║                          ║    ░                    ║
║          ░   ║   SISTEM INFORMASI CUTI  ║    ░                    ║
║          ░   ║   Pengadilan Negeri      ║    ░                    ║
║          ░   ║   Kediri Kelas I-B       ║    ░                    ║
║          ░   ║                          ║    ░                    ║
║          ░   ║   NIP                    ║    ░                    ║
║          ░   ║   ┌──────────────────┐   ║    ░                    ║
║          ░   ║   │ 19XXXXXXXXXXXX   │   ║    ░                    ║
║          ░   ║   └──────────────────┘   ║    ░                    ║
║          ░   ║                          ║    ░                    ║
║          ░   ║   Password               ║    ░                    ║
║          ░   ║   ┌──────────────────┐   ║    ░                    ║
║          ░   ║   │ ••••••••    👁   │   ║    ░                    ║
║          ░   ║   └──────────────────┘   ║    ░                    ║
║          ░   ║                          ║    ░                    ║
║          ░   ║   [✓] Ingat Saya         ║    ░                    ║
║          ░   ║                          ║    ░                    ║
║          ░   ║   ┌──────────────────┐   ║    ░                    ║
║          ░   ║   │     M A S U K    │   ║    ░                    ║
║          ░   ║   └──────────────────┘   ║    ░                    ║
║          ░   ║                          ║    ░                    ║
║          ░   ║    Lupa Password?         ║    ░                    ║
║          ░   ║                          ║    ░                    ║
║          ░   ╚══════════════════════════╝    ░                    ║
║          ░   Card: Glassmorphism             ░                    ║
║          ░   backdrop-filter: blur(20px)     ░                    ║
║          ░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░░                    ║
║                                                                  ║
╚══════════════════════════════════════════════════════════════════╝
```

---

### 2.2 Master Layout (Sidebar + Topbar)

```
╔═══════════════════════════════════════════════════════════════════════╗
║ TOPBAR  h:56px  bg:#1A1D23                                          ║
║ ┌────┬─────────────────────────────────────────┬────┬──────────────┐ ║
║ │ ☰  │ ⚖️ SIC — Pengadilan Negeri Kediri       │ 🔔3│ 👤 A.Fauzi ▾│ ║
║ └────┴─────────────────────────────────────────┴────┴──────────────┘ ║
╠════════╦══════════════════════════════════════════════════════════════╣
║ SIDEBAR║  MAIN CONTENT                                              ║
║ w:240px║                                                            ║
║        ║  Breadcrumb: Dashboard > ...                               ║
║ ┌────┐ ║  ════════════════════════════════════                      ║
║ │LOGO│ ║                                                            ║
║ └────┘ ║  ┌────────────────────────────────────────────────────┐    ║
║        ║  │                                                    │    ║
║ ───────║  │            PAGE CONTENT AREA                       │    ║
║ 📊 Dash║  │                                                    │    ║
║   board║  │       (Konten berubah sesuai route)                │    ║
║        ║  │                                                    │    ║
║ 📝 Aju-║  │                                                    │    ║
║   kan  ║  │                                                    │    ║
║        ║  │                                                    │    ║
║ 📋 Cuti║  │                                                    │    ║
║   Saya ║  │                                                    │    ║
║        ║  └────────────────────────────────────────────────────┘    ║
║ 👤 Pro-║                                                            ║
║   fil  ║                                                            ║
║        ║  ┌────────────────────────────────────────────────────┐    ║
║ 📅 Kal-║  │ Footer: © 2026 Pengadilan Negeri Kediri Kelas I-B │    ║
║   ender║  └────────────────────────────────────────────────────┘    ║
║        ║                                                            ║
║ ───────║                                                            ║
║ 🚪 Log-║                                                            ║
║   out  ║                                                            ║
╚════════╩══════════════════════════════════════════════════════════════╝
```

**Collapsed (64px):**
```
╔════╦═══════════════════════════════════╗
║    ║                                   ║
║ 📊 ║   Content area lebih lebar        ║
║ 📝 ║                                   ║
║ 📋 ║   Icon-only sidebar               ║
║ 👤 ║   Tooltip on hover                ║
║ 📅 ║                                   ║
║    ║                                   ║
║ 🚪 ║                                   ║
╚════╩═══════════════════════════════════╝
```

---

### 2.3 Dashboard — Pegawai

```
┌─────────────────────────────────────────────────────────────────┐
│  Selamat Pagi, Ahmad Fauzi 👋                                   │
│  NIP: 199201012020011001 │ Staf Umum │ Bagian Umum & Keuangan  │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  KUOTA CUTI                                                     │
│  ┌──────────────┐ ┌──────────────┐ ┌──────────────┐ ┌────────┐│
│  │ 📅 TAHUNAN   │ │ 📋 BESAR     │ │ 🏥 SAKIT     │ │ 📤 AKT-││
│  │              │ │              │ │              │ │   IF   ││
│  │    8/12      │ │   90/90      │ │   2 hari     │ │   2    ││
│  │ ┌────────┐  │ │ ┌────────┐  │ │              │ │pending ││
│  │ │████░░░░│  │ │ │████████│  │ │  terpakai    │ │        ││
│  │ └────────┘  │ │ └────────┘  │ │              │ │        ││
│  │ sisa 8 hari │ │ belum pakai │ │              │ │        ││
│  └──────────────┘ └──────────────┘ └──────────────┘ └────────┘│
│                                                                 │
│  ┌─────────────────────────────┐ ┌─────────────────────────┐   │
│  │ 📋 PENGAJUAN TERAKHIR       │ │ 📅 KALENDER MARET 2026  │   │
│  │                             │ │                         │   │
│  │  CT-2026-0042               │ │  Se Se Ra Ka Ju Sa Mi   │   │
│  │  Cuti Tahunan               │ │                    1    │   │
│  │  28 Mar – 1 Apr (3 hari)    │ │   2  3  4  5  6  7  8  │   │
│  │  ⏳ Pending — Kasubag       │ │   9 10 11 12 13 14 15  │   │
│  │  ─────────────────────────  │ │  16 17 18 19 20 21 22  │   │
│  │  CT-2026-0038               │ │  23 24 25 26 27[28 29] │   │
│  │  Cuti Sakit                 │ │  30[31]                 │   │
│  │  10–11 Feb (2 hari)         │ │                         │   │
│  │  ✅ Disetujui               │ │  [██] = hari cuti Anda  │   │
│  │                             │ │  merah = libur nasional │   │
│  │  [Lihat Semua →]            │ │                         │   │
│  └─────────────────────────────┘ └─────────────────────────┘   │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │            [ + AJUKAN CUTI BARU ]                       │   │
│  │            btn: bg #8B1A1A, full-width, h:48px          │   │
│  └─────────────────────────────────────────────────────────┘   │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2.4 Dashboard — Atasan

```
┌─────────────────────────────────────────────────────────────────┐
│  Dashboard Persetujuan — Ir. Suyanto (Kasubag Umum)            │
├─────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ┌────────────────┐ ┌────────────────┐ ┌────────────────┐      │
│  │ 🟡 MENUNGGU    │ │ 🟢 DISETUJUI   │ │ 🔴 DITOLAK     │      │
│  │                │ │                │ │                │      │
│  │      5         │ │     12         │ │      1         │      │
│  │   (pulse)      │ │  bulan ini     │ │  bulan ini     │      │
│  └────────────────┘ └────────────────┘ └────────────────┘      │
│                                                                 │
│  PENGAJUAN MASUK (Perlu Tindakan)                               │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ 👤 Ahmad Fauzi — Staf Umum              28 Mar '26 │ │   │
│  │ │ Cuti Tahunan: 28 Mar – 1 Apr 2026 (3 hari kerja)  │ │   │
│  │ │ Alasan: Keperluan keluarga                         │ │   │
│  │ │ Pengganti: Siti Rahayu                             │ │   │
│  │ │ Sisa kuota: 8 hari                                 │ │   │
│  │ │                                                     │ │   │
│  │ │ [✅ Setujui]  [⏸ Tangguhkan]  [❌ Tolak]  [👁 Detail]│ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  │                                                         │   │
│  │ ┌─────────────────────────────────────────────────────┐ │   │
│  │ │ 👤 Budi Santoso — Panitera Pengganti    26 Mar '26 │ │   │
│  │ │ Cuti Sakit: 26 – 27 Mar 2026 (2 hari kerja)       │ │   │
│  │ │ ┌───────────────────────────────────────────────┐  │ │   │
│  │ │ │ ⚠️ PERINGATAN: Jadwal sidang 27 Mar 2026      │  │ │   │
│  │ │ │ Perkara No. 45/Pdt.G/2026 jam 09:00           │  │ │   │
│  │ │ └───────────────────────────────────────────────┘  │ │   │
│  │ │ [✅ Setujui]  [⏸ Tangguhkan]  [❌ Tolak]  [👁 Detail]│ │   │
│  │ └─────────────────────────────────────────────────────┘ │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  KALENDER TIM — Maret 2026                                      │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ Nama          │24│25│26│27│28│29│30│31│ 1│ 2│ 3│       │   │
│  │───────────────┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──┼──│       │   │
│  │ A. Fauzi      │  │  │  │  │██│██│██│██│██│  │  │       │   │
│  │ B. Santoso    │  │  │██│██│  │  │  │  │  │  │  │       │   │
│  │ S. Rahayu     │  │  │  │  │  │  │  │  │  │  │  │       │   │
│  │ C. Dewi       │  │  │  │  │  │  │  │  │  │  │  │       │   │
│  └─────────────────────────────────────────────────────────┘   │
│  ██ = cuti                                                      │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2.5 Form Pengajuan Cuti — Step-by-Step

**Step Indicator:**
```
┌─────────────────────────────────────────────────────────────────┐
│                                                                 │
│   ●━━━━━━━━●━━━━━━━━○━━━━━━━━○                                 │
│   Jenis    Detail   Dokumen  Konfirmasi                        │
│   Cuti                                                          │
│                                                                 │
│   ● = selesai (hijau)   ● = aktif (maroon)   ○ = belum        │
└─────────────────────────────────────────────────────────────────┘
```

**Step 1 — Pilih Jenis:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Pilih Jenis Cuti                                               │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │   📅        │  │   📋        │  │   🏥         │            │
│  │             │  │             │  │              │            │
│  │   CUTI      │  │   CUTI      │  │   CUTI       │            │
│  │   TAHUNAN   │  │   BESAR     │  │   SAKIT      │            │
│  │             │  │             │  │              │            │
│  │  Sisa: 8 hr │  │ Sisa: 90 hr │  │  —           │            │
│  │  ─────────  │  │  ─────────  │  │              │            │
│  │  [SELECTED] │  │             │  │              │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
│  ┌─────────────┐  ┌─────────────┐  ┌─────────────┐            │
│  │   🤱        │  │   ⚡        │  │   📝         │            │
│  │             │  │             │  │              │            │
│  │   CUTI      │  │   CUTI      │  │   CLTN       │            │
│  │   MELAHIR-  │  │   ALASAN    │  │              │            │
│  │   KAN       │  │   PENTING   │  │  Di Luar     │            │
│  │             │  │             │  │  Tanggungan   │            │
│  │  Maks: 3 bl │  │  —          │  │  Negara      │            │
│  └─────────────┘  └─────────────┘  └─────────────┘            │
│                                                                 │
│  Card style: border 2px solid transparent                       │
│  Selected: border 2px solid #8B1A1A + shadow + scale(1.02)     │
│  Disabled (syarat tak terpenuhi): opacity 0.5, cursor not-allow│
│                                                                 │
│                               [Selanjutnya →]                   │
└─────────────────────────────────────────────────────────────────┘
```

**Step 2 — Detail:**
```
┌─────────────────────────────────────────────────────────────────┐
│  Detail Pengajuan — Cuti Tahunan                                │
│                                                                 │
│  ┌─────────────────────────┐ ┌─────────────────────────┐       │
│  │ Tanggal Mulai        📅 │ │ Tanggal Selesai      📅 │       │
│  │ [28 Maret 2026       ] │ │ [1 April 2026        ] │       │
│  └─────────────────────────┘ └─────────────────────────┘       │
│                                                                 │
│  Durasi: 3 hari kerja (auto-calc, exclude weekend & libur)     │
│                                                                 │
│  ┌───────────────────────────────────────────────────┐         │
│  │ Alamat Selama Cuti                                │         │
│  │ [Jl. Brawijaya No. 12, Kediri                   ] │         │
│  └───────────────────────────────────────────────────┘         │
│  ┌───────────────────────────────────────────────────┐         │
│  │ No. Telp yang Bisa Dihubungi                      │         │
│  │ [0812-XXXX-XXXX                                 ] │         │
│  └───────────────────────────────────────────────────┘         │
│  ┌───────────────────────────────────────────────────┐         │
│  │ Alasan Cuti                                       │         │
│  │ [Keperluan keluarga                             ] │         │
│  │ [                                               ] │         │
│  └───────────────────────────────────────────────────┘         │
│                                                                 │
│  Pegawai Pengganti:                                             │
│  ┌───────────────────────────────────────────────────┐         │
│  │ 🔍 [Cari nama atau NIP...                       ] │         │
│  └───────────────────────────────────────────────────┘         │
│  → Siti Rahayu (NIP: 199503152021012001) ✓ Tersedia            │
│                                                                 │
│  ┌───────────────────────────────────────────────────┐         │
│  │ ⚡ VALIDASI OTOMATIS                              │         │
│  │                                                   │         │
│  │  ✅ Saldo cuti mencukupi (sisa 8 dari 12 hari)    │         │
│  │  ✅ Tidak bentrok jadwal sidang                    │         │
│  │  ✅ Pegawai pengganti tersedia                     │         │
│  │  ✅ Tidak overlapping dengan cuti lain              │         │
│  └───────────────────────────────────────────────────┘         │
│                                                                 │
│  [← Kembali]                          [Selanjutnya →]          │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2.6 Detail & Tracking Cuti (Timeline)

```
┌─────────────────────────────────────────────────────────────────┐
│  📋 Detail Pengajuan CT-2026-0042                               │
│                                                                 │
│  ┌──────────────────────────────────────┐                      │
│  │ Jenis     : Cuti Tahunan            │                      │
│  │ Tanggal   : 28 Maret – 1 April 2026 │                      │
│  │ Durasi    : 3 hari kerja            │                      │
│  │ Pengaju   : Ahmad Fauzi             │                      │
│  │ Pengganti : Siti Rahayu             │                      │
│  └──────────────────────────────────────┘                      │
│                                                                 │
│  PROGRESS PERSETUJUAN:                                          │
│  ●━━━━━━━━━━●━━━━━━━━━━◉━━━━━━━━━━○                           │
│  Diajukan    Atasan    HR        Pimpinan                      │
│  25 Mar      26 Mar    (proses)  (belum)                       │
│                                                                 │
│  TIMELINE:                                                      │
│  ┌──────────────────────────────────────────────────────┐      │
│  │                                                      │      │
│  │  ● 25 Mar 2026 — 09:15                               │      │
│  │  │ 📤 Pengajuan cuti berhasil dikirim                │      │
│  │  │                                                   │      │
│  │  ● 25 Mar 2026 — 09:15                               │      │
│  │  │ 🔔 Notifikasi terkirim ke Kasubag Umum            │      │
│  │  │                                                   │      │
│  │  ● 26 Mar 2026 — 14:30                               │      │
│  │  │ ✅ Disetujui oleh Ir. Suyanto (Kasubag Umum)      │      │
│  │  │    Catatan: "Silakan, koordinasi dgn pengganti"   │      │
│  │  │                                                   │      │
│  │  ● 26 Mar 2026 — 14:31                               │      │
│  │  │ 🔔 Notifikasi terkirim ke Bag. Kepegawaian        │      │
│  │  │                                                   │      │
│  │  ◉ Menunggu — Verifikasi Kepegawaian                 │      │
│  │  │ (estimasi 1-2 hari kerja)                         │      │
│  │  │                                                   │      │
│  │  ○ Belum — Persetujuan Pimpinan                      │      │
│  │                                                      │      │
│  └──────────────────────────────────────────────────────┘      │
│                                                                 │
│  ┌──────────────────┐  ┌───────────────────┐                   │
│  │ 📄 Download PDF  │  │ ❌ Batalkan Cuti   │                   │
│  │ (jika approved)  │  │ (jika pending)    │                   │
│  └──────────────────┘  └───────────────────┘                   │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2.7 Halaman Laporan & Analitik

```
┌─────────────────────────────────────────────────────────────────┐
│  📊 Laporan & Analitik Cuti                                     │
│                                                                 │
│  Tahun: [2026 ▾]  Bulan: [Semua ▾]  Unit: [Semua ▾]  [📥 Exp] │
│                                                                 │
│  ┌──────────────────────────────┐ ┌─────────────────────────┐  │
│  │  📊 TREN CUTI BULANAN       │ │  🥧 DISTRIBUSI JENIS    │  │
│  │                              │ │                         │  │
│  │  12│       ██                │ │     ┌────────┐          │  │
│  │  10│    ██ ██                │ │    ╱ Tahunan ╲ 65%      │  │
│  │   8│ ██ ██ ██ ██            │ │   │  Sakit    │ 20%     │  │
│  │   6│ ██ ██ ██ ██            │ │    ╲ Lainnya ╱ 15%      │  │
│  │   4│ ██ ██ ██ ██ ██         │ │     └────────┘          │  │
│  │   2│ ██ ██ ██ ██ ██         │ │                         │  │
│  │   0└──────────────────      │ │  ■ Tahunan   ■ Sakit    │  │
│  │    Jan Feb Mar Apr May      │ │  ■ Melahirkan ■ CAP     │  │
│  └──────────────────────────────┘ └─────────────────────────┘  │
│                                                                 │
│  ┌─────────────────────────────────────────────────────────┐   │
│  │ REKAP CUTI PER PEGAWAI                                  │   │
│  ├────┬──────────────┬────┬────┬────┬────┬────┬────────────┤   │
│  │ No │ Nama         │ TH │ BS │ SK │ ML │ CAP│ Total Hari │   │
│  ├────┼──────────────┼────┼────┼────┼────┼────┼────────────┤   │
│  │ 1  │ Ahmad Fauzi  │  4 │  0 │  2 │  0 │  0 │     6      │   │
│  │ 2  │ Budi Santoso │  3 │  0 │  0 │  0 │  0 │     3      │   │
│  │ 3  │ Citra Dewi   │  0 │  0 │  0 │ 90 │  0 │    90      │   │
│  │ 4  │ Siti Rahayu  │  6 │  0 │  1 │  0 │  2 │     9      │   │
│  ├────┴──────────────┴────┴────┴────┴────┴────┴────────────┤   │
│  │ Halaman: [< 1 2 3 ... 5 >]    Tampilkan: [10 ▾] baris  │   │
│  └─────────────────────────────────────────────────────────┘   │
│                                                                 │
│  [📄 Export PDF]   [📊 Export Excel]   [🖨 Cetak]              │
└─────────────────────────────────────────────────────────────────┘
```

---

### 2.8 Notifikasi Panel (Dropdown)

```
                                              ┌──────────────────────────────┐
                                              │ 🔔 Notifikasi (3 baru)       │
                                              ├──────────────────────────────┤
                                              │                              │
                                              │ ● 🟡 Pengajuan CT-0042      │
                                              │   sedang diverifikasi HR     │
                                              │   2 jam lalu                 │
                                              │ ──────────────────────────── │
                                              │ ● 🟢 Cuti 10-11 Feb         │
                                              │   DISETUJUI oleh KPN        │
                                              │   3 hari lalu               │
                                              │ ──────────────────────────── │
                                              │ ○ 🔴 Cuti Besar DITOLAK     │
                                              │   Masa kerja belum 5 tahun  │
                                              │   1 minggu lalu             │
                                              │ ──────────────────────────── │
                                              │                              │
                                              │ [Tandai Semua Dibaca]        │
                                              │ [Lihat Semua Notifikasi →]   │
                                              └──────────────────────────────┘
                                              Max-height: 400px, scrollable
                                              Width: 360px
                                              Shadow: elevated
```

---

### 2.9 Mobile Layout (<768px)

```
┌───────────────────────┐
│ ☰  SIC PN Kediri  🔔  │  ← Topbar (sticky)
├───────────────────────┤
│                       │
│  Selamat Pagi, Ahmad  │
│                       │
│  ┌─────────────────┐  │
│  │ 📅 Tahunan 8/12 │  │  ← Single column
│  │ ████████░░░░░░░ │  │    stat cards
│  └─────────────────┘  │
│  ┌─────────────────┐  │
│  │ 📋 Besar  90/90 │  │
│  │ ████████████████ │  │
│  └─────────────────┘  │
│                       │
│  PENGAJUAN TERAKHIR   │
│  ┌─────────────────┐  │
│  │ CT-0042 Tahunan │  │
│  │ 28 Mar – 1 Apr  │  │
│  │ ⏳ Pending       │  │
│  └─────────────────┘  │
│                       │
│  ┌─────────────────┐  │
│  │[+ AJUKAN CUTI  ]│  │  ← FAB
│  └─────────────────┘  │
│                       │
├───────────────────────┤
│ 📊   📝   🔔   👤    │  ← Bottom Tab Nav
│Dash  Cuti Notif Profil│
└───────────────────────┘
```

---

### 2.10 Data Pegawai (Kepegawaian / Admin)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  👥 Data Pegawai                                                        │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ 🔍 [Cari nama atau NIP...                                     ] │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  Filter:                                                                │
│  Unit: [Semua ▾]  Jabatan: [Semua ▾]  Status: [Aktif ▾]  [🔄 Reset]  │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────┐     │
│  │  Total: 47 pegawai                          [📥 Export] [🖨]  │     │
│  ├────┬──────────────┬─────────────────┬────────────┬──────┬─────┤     │
│  │ No │ Nama ↕       │ NIP ↕           │ Jabatan ↕  │Unit ↕│ ⚡  │     │
│  ├────┼──────────────┼─────────────────┼────────────┼──────┼─────┤     │
│  │ 1  │ Ahmad Fauzi  │ 199201012020..  │ Staf       │Umum  │ [👁]│     │
│  │ 2  │ Budi Santoso │ 198805132019..  │ Panitera   │Hukum │ [👁]│     │
│  │    │              │                 │ Pengganti  │      │     │     │
│  │ 3  │ Citra Dewi   │ 199107222020..  │ Staf       │Kepeg.│ [👁]│     │
│  │ 4  │ Dian Pratama │ 198512012015..  │ Hakim      │  —   │ [👁]│     │
│  │ 5  │ Eko Wahyudi  │ 199003102018..  │ Kasubag    │Umum  │ [👁]│     │
│  │    │              │                 │ Umum       │      │     │     │
│  │ 6  │ Fitri Ayu    │ 199208152021..  │ PPNPN      │IT    │ [👁]│     │
│  │ 7  │ Galih S.     │ 198709052016..  │ Juru Sita  │  —   │ [👁]│     │
│  │ 8  │ Heni Kusuma  │ 199405012022..  │ Staf       │Keu.  │ [👁]│     │
│  ├────┴──────────────┴─────────────────┴────────────┴──────┴─────┤     │
│  │ Halaman: [< 1  2  3  4  5  6 >]      Tampilkan: [10 ▾] baris │     │
│  └───────────────────────────────────────────────────────────────┘     │
│                                                                         │
│  Keterangan:                                                            │
│  ↕ = kolom bisa di-sort (ascending/descending)                         │
│  [👁] = buka detail pegawai (slide-in drawer dari kanan)               │
└─────────────────────────────────────────────────────────────────────────┘
```

**Detail Pegawai — Slide-in Drawer (klik 👁):**
```
                        ┌──────────────────────────────────────┐
                        │  ✕                                   │
                        │  ┌──────┐                            │
                        │  │ FOTO │  Ahmad Fauzi               │
                        │  │      │  NIP: 199201012020011001   │
                        │  └──────┘  Status: Aktif ✅           │
                        │                                      │
                        │  ═══════════════════════════════     │
                        │  INFORMASI JABATAN                   │
                        │  ─────────────────                   │
                        │  Jabatan    : Staf                   │
                        │  Unit       : Sub Bagian Umum        │
                        │  Golongan   : III/a                  │
                        │  TMT Jabatan: 01 Januari 2020        │
                        │  Masa Kerja : 6 tahun 2 bulan        │
                        │  Atasan     : Ir. Suyanto (Kasubag)  │
                        │                                      │
                        │  ═══════════════════════════════     │
                        │  KUOTA CUTI 2026                     │
                        │  ─────────────────                   │
                        │  ┌──────────┬─────┬──────┬──────┐   │
                        │  │ Jenis    │ Hak │Pakai │ Sisa │   │
                        │  ├──────────┼─────┼──────┼──────┤   │
                        │  │ Tahunan  │ 18  │  10  │   8  │   │
                        │  │ Besar    │ 90  │   0  │  90  │   │
                        │  │ Sakit    │  —  │   2  │   —  │   │
                        │  │ Melahir. │  —  │   0  │   —  │   │
                        │  └──────────┴─────┴──────┴──────┘   │
                        │                                      │
                        │  ═══════════════════════════════     │
                        │  RIWAYAT CUTI TERBARU                │
                        │  ─────────────────                   │
                        │  • 10-11 Feb 2026 — Sakit (2hr) ✅   │
                        │  • 28 Mar-1 Apr — Tahunan (3hr) ⏳   │
                        │                                      │
                        │  [Lihat Riwayat Lengkap →]           │
                        │                                      │
                        │  ═══════════════════════════════     │
                        │  AKSI                                │
                        │  ┌──────────────┐ ┌──────────────┐  │
                        │  │ ✏️ Edit Kuota │ │ 📄 Cetak     │  │
                        │  │              │ │    Rekap     │  │
                        │  └──────────────┘ └──────────────┘  │
                        └──────────────────────────────────────┘
                        Width: 420px
                        Slide-in dari kanan, 300ms ease
                        Backdrop: overlay semi-transparent
```

---

### 2.11 Pengaturan Workflow (Admin)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  ⚙️ Pengaturan Alur Persetujuan (Workflow)                              │
│                                                                         │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │ ℹ️ Atur rantai persetujuan untuk setiap kombinasi jabatan dan    │  │
│  │    jenis cuti. Perubahan berlaku untuk pengajuan baru.           │  │
│  └──────────────────────────────────────────────────────────────────┘  │
│                                                                         │
│  ┌────────────────────────────────────────────────────────────────┐    │
│  │ WORKFLOW AKTIF                                    [+ Tambah]   │    │
│  ├────────────────────────────────────────────────────────────────┤    │
│  │                                                                │    │
│  │  ┌──────────────────────────────────────────────────────────┐  │    │
│  │  │ 📋 Workflow #1 — Staf → Cuti Tahunan / Sakit            │  │    │
│  │  │                                                          │  │    │
│  │  │  Berlaku untuk:                                          │  │    │
│  │  │  Jabatan: [Staf, PPNPN]   Jenis Cuti: [Tahunan, Sakit]  │  │    │
│  │  │                                                          │  │    │
│  │  │  Rantai Persetujuan:                                     │  │    │
│  │  │  ┌──────────┐    ┌──────────────┐    ┌──────────────┐   │  │    │
│  │  │  │ Pengaju  │ →  │ Kasubag      │ →  │ Kepegawaian  │   │  │    │
│  │  │  │ (auto)   │    │ (atasan      │    │ (verifikasi) │   │  │    │
│  │  │  │          │    │  langsung)   │    │              │   │  │    │
│  │  │  └──────────┘    └──────────────┘    └──────────────┘   │  │    │
│  │  │                                                          │  │    │
│  │  │  [✏️ Edit]  [📋 Duplikat]  [🗑️ Hapus]                    │  │    │
│  │  └──────────────────────────────────────────────────────────┘  │    │
│  │                                                                │    │
│  │  ┌──────────────────────────────────────────────────────────┐  │    │
│  │  │ 📋 Workflow #2 — Staf → Cuti Besar / Melahirkan / CLTN  │  │    │
│  │  │                                                          │  │    │
│  │  │  Berlaku untuk:                                          │  │    │
│  │  │  Jabatan: [Staf, PPNPN]   Jenis: [Besar, Melahirkan,   │  │    │
│  │  │                                    CLTN, Alasan Penting] │  │    │
│  │  │                                                          │  │    │
│  │  │  Rantai Persetujuan:                                     │  │    │
│  │  │  ┌────────┐  ┌────────┐  ┌───────────┐  ┌───────────┐  │  │    │
│  │  │  │Pengaju │→ │Kasubag │→ │Kepegawaian│→ │Ketua PN   │  │  │    │
│  │  │  │(auto)  │  │        │  │           │  │(KPN)      │  │  │    │
│  │  │  └────────┘  └────────┘  └───────────┘  └───────────┘  │  │    │
│  │  │                                                          │  │    │
│  │  │  [✏️ Edit]  [📋 Duplikat]  [🗑️ Hapus]                    │  │    │
│  │  └──────────────────────────────────────────────────────────┘  │    │
│  │                                                                │    │
│  │  ┌──────────────────────────────────────────────────────────┐  │    │
│  │  │ 📋 Workflow #3 — Hakim → Semua Jenis Cuti               │  │    │
│  │  │                                                          │  │    │
│  │  │  Berlaku untuk:                                          │  │    │
│  │  │  Jabatan: [Hakim]   Jenis Cuti: [Semua]                 │  │    │
│  │  │                                                          │  │    │
│  │  │  Rantai Persetujuan:                                     │  │    │
│  │  │  ┌────────┐    ┌───────────┐    ┌───────────┐           │  │    │
│  │  │  │Pengaju │ →  │Kepegawaian│ →  │Ketua PN   │           │  │    │
│  │  │  │(auto)  │    │           │    │(KPN)      │           │  │    │
│  │  │  └────────┘    └───────────┘    └───────────┘           │  │    │
│  │  │                                                          │  │    │
│  │  │  ⚠️ Hakim langsung ke Kepegawaian (tanpa Kasubag)        │  │    │
│  │  │                                                          │  │    │
│  │  │  [✏️ Edit]  [📋 Duplikat]  [🗑️ Hapus]                    │  │    │
│  │  └──────────────────────────────────────────────────────────┘  │    │
│  │                                                                │    │
│  │  ┌──────────────────────────────────────────────────────────┐  │    │
│  │  │ 📋 Workflow #4 — Panitera/PP → Semua Jenis Cuti         │  │    │
│  │  │                                                          │  │    │
│  │  │  Berlaku untuk:                                          │  │    │
│  │  │  Jabatan: [Panitera, Panitera Pengganti, Juru Sita]     │  │    │
│  │  │  Jenis Cuti: [Semua]                                    │  │    │
│  │  │                                                          │  │    │
│  │  │  Rantai Persetujuan:                                     │  │    │
│  │  │  ┌────────┐  ┌─────────┐  ┌───────────┐  ┌──────────┐  │  │    │
│  │  │  │Pengaju │→ │Panitera │→ │Kepegawaian│→ │Ketua PN  │  │  │    │
│  │  │  │(auto)  │  │Muda     │  │           │  │(KPN)     │  │  │    │
│  │  │  └────────┘  └─────────┘  └───────────┘  └──────────┘  │  │    │
│  │  │                                                          │  │    │
│  │  │  [✏️ Edit]  [📋 Duplikat]  [🗑️ Hapus]                    │  │    │
│  │  └──────────────────────────────────────────────────────────┘  │    │
│  └────────────────────────────────────────────────────────────────┘    │
│                                                                         │
│  ═══════════════════════════════════════════════════════════════════    │
│                                                                         │
│  PENGATURAN UMUM                                                        │
│  ┌──────────────────────────────────────────────────────────────────┐  │
│  │                                                                  │  │
│  │  Batas Waktu Approval (hari kerja):                              │  │
│  │  ┌─────────────────────────┐                                     │  │
│  │  │ Atasan: [3 ▾]  HR: [2 ▾]  Pimpinan: [3 ▾]                   │  │
│  │  └─────────────────────────┘                                     │  │
│  │  ℹ️ Jika melebihi batas, notifikasi eskalasi otomatis dikirim    │  │
│  │                                                                  │  │
│  │  Auto-Escalation:                                                │  │
│  │  [✓] Kirim reminder jika belum diproses dalam batas waktu       │  │
│  │  [✓] Eskalasi ke atasan berikutnya setelah 2x reminder          │  │
│  │                                                                  │  │
│  │  Jadwal Sidang Warning:                                          │  │
│  │  [✓] Tampilkan peringatan jika cuti bentrok jadwal sidang       │  │
│  │  [ ] Blokir pengajuan jika bentrok jadwal sidang (strict mode)  │  │
│  │                                                                  │  │
│  │                                         [💾 Simpan Pengaturan]   │  │
│  └──────────────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────────────┘
```

**Modal: Tambah / Edit Workflow (klik [+ Tambah] atau [✏️ Edit]):**
```
╔═══════════════════════════════════════════════════════════════╗
║  ✕                                                           ║
║                                                               ║
║  Tambah Alur Persetujuan Baru                                 ║
║  ════════════════════════════                                  ║
║                                                               ║
║  Nama Workflow:                                               ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │ [Staf — Cuti Tahunan/Sakit                      ] │       ║
║  └───────────────────────────────────────────────────┘       ║
║                                                               ║
║  Berlaku untuk Jabatan (multi-select):                        ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │ [✓] Staf      [✓] PPNPN      [ ] Hakim           │       ║
║  │ [ ] Panitera  [ ] Panitera Pengganti              │       ║
║  │ [ ] Juru Sita [ ] Kasubag    [ ] Sekretaris       │       ║
║  └───────────────────────────────────────────────────┘       ║
║                                                               ║
║  Berlaku untuk Jenis Cuti (multi-select):                     ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │ [✓] Tahunan   [✓] Sakit      [ ] Besar           │       ║
║  │ [ ] Melahirkan [ ] Alasan Penting  [ ] CLTN       │       ║
║  └───────────────────────────────────────────────────┘       ║
║                                                               ║
║  Rantai Persetujuan (drag to reorder):                        ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │                                                   │       ║
║  │  1. ☰ [Atasan Langsung     ▾]  — auto-detect     │       ║
║  │  2. ☰ [Bagian Kepegawaian  ▾]  — verifikasi      │       ║
║  │  3. ☰ [—                   ▾]  (opsional)         │       ║
║  │                                                   │       ║
║  │  [+ Tambah Level Persetujuan]                     │       ║
║  │                                                   │       ║
║  └───────────────────────────────────────────────────┘       ║
║  ☰ = drag handle untuk reorder                               ║
║                                                               ║
║  Preview:                                                     ║
║  ┌────────┐    ┌──────────┐    ┌───────────┐                 ║
║  │Pengaju │ →  │ Kasubag  │ →  │Kepegawaian│                 ║
║  └────────┘    └──────────┘    └───────────┘                 ║
║                                                               ║
║  ┌────────────────┐  ┌──────────────────┐                    ║
║  │    Batal       │  │  💾 Simpan       │                    ║
║  └────────────────┘  └──────────────────┘                    ║
╚═══════════════════════════════════════════════════════════════╝
Modal: max-width 640px, centered, backdrop overlay
```

---

### 2.12 Manajemen Pengguna (Admin)

```
┌─────────────────────────────────────────────────────────────────────────┐
│  👤 Manajemen Pengguna                                                  │
│                                                                         │
│  ┌──────────────────────────────────────────────────┐  ┌────────────┐  │
│  │ 🔍 [Cari nama, NIP, atau email...             ] │  │ [+ Tambah] │  │
│  └──────────────────────────────────────────────────┘  └────────────┘  │
│                                                                         │
│  Filter:                                                                │
│  Role: [Semua ▾]   Status: [Semua ▾]   Unit: [Semua ▾]                │
│                                                                         │
│  ┌───────────────────────────────────────────────────────────────┐     │
│  │  Total: 47 pengguna    Aktif: 45    Nonaktif: 2              │     │
│  ├────┬──────────────┬─────────────────┬──────────┬──────┬──────┤     │
│  │ No │ Nama ↕       │ NIP             │ Role ↕   │Status│ Aksi │     │
│  ├────┼──────────────┼─────────────────┼──────────┼──────┼──────┤     │
│  │ 1  │ Ahmad Fauzi  │ 19920101202001  │ 🟢       │ ✅   │ ⚡   │     │
│  │    │              │                 │ Pegawai  │ Aktif│      │     │
│  ├────┼──────────────┼─────────────────┼──────────┼──────┼──────┤     │
│  │ 2  │ Ir. Suyanto  │ 19780315200501  │ 🔵       │ ✅   │ ⚡   │     │
│  │    │              │                 │ Atasan   │ Aktif│      │     │
│  ├────┼──────────────┼─────────────────┼──────────┼──────┼──────┤     │
│  │ 3  │ Dewi Anggar. │ 19850720201001  │ 🟡       │ ✅   │ ⚡   │     │
│  │    │              │                 │ Kepeg.   │ Aktif│      │     │
│  ├────┼──────────────┼─────────────────┼──────────┼──────┼──────┤     │
│  │ 4  │ Dr. Bambang  │ 19720101200001  │ 👑       │ ✅   │ ⚡   │     │
│  │    │  S.H., M.H.  │                 │ Pimpinan │ Aktif│      │     │
│  ├────┼──────────────┼─────────────────┼──────────┼──────┼──────┤     │
│  │ 5  │ Rina Wati    │ 19900501202201  │ 🟢       │ ❌   │ ⚡   │     │
│  │    │              │                 │ Pegawai  │ Non- │      │     │
│  │    │              │                 │          │aktif │      │     │
│  ├────┴──────────────┴─────────────────┴──────────┴──────┴──────┤     │
│  │ Halaman: [< 1  2  3  4  5 >]          Tampilkan: [10▾] baris│     │
│  └───────────────────────────────────────────────────────────────┘     │
│                                                                         │
│  Keterangan Role:                                                       │
│  🟢 Pegawai   🔵 Atasan   🟡 Kepegawaian   👑 Pimpinan/Admin          │
│                                                                         │
│  Klik ⚡ untuk menu aksi:                                              │
│  ┌─────────────────┐                                                    │
│  │ ✏️ Edit Pengguna │                                                    │
│  │ 🔄 Reset Passw.  │                                                    │
│  │ 🔀 Ubah Role     │                                                    │
│  │ ⏸ Non-aktifkan  │                                                    │
│  │ 🗑️ Hapus         │                                                    │
│  └─────────────────┘                                                    │
└─────────────────────────────────────────────────────────────────────────┘
```

**Modal: Tambah / Edit Pengguna:**
```
╔═══════════════════════════════════════════════════════════════╗
║  ✕                                                           ║
║                                                               ║
║  Tambah Pengguna Baru                                         ║
║  ════════════════════                                          ║
║                                                               ║
║  DATA DASAR                                                   ║
║  ──────────                                                   ║
║  NIP:                                                         ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │ [199201012020011001                              ] │       ║
║  └───────────────────────────────────────────────────┘       ║
║  💡 Isi NIP lalu klik "Sinkron" untuk tarik data dari SIKEP  ║
║  [🔄 Sinkron SIKEP]                                          ║
║                                                               ║
║  Nama Lengkap:                                                ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │ [Ahmad Fauzi                                    ] │       ║
║  └───────────────────────────────────────────────────┘       ║
║                                                               ║
║  ┌────────────────────────┐  ┌────────────────────────┐      ║
║  │ Jabatan:               │  │ Unit Kerja:            │      ║
║  │ [Staf             ▾]  │  │ [Sub Bagian Umum   ▾] │      ║
║  └────────────────────────┘  └────────────────────────┘      ║
║                                                               ║
║  ┌────────────────────────┐  ┌────────────────────────┐      ║
║  │ Golongan:              │  │ Pangkat:               │      ║
║  │ [III/a             ▾] │  │ [Penata Muda       ▾] │      ║
║  └────────────────────────┘  └────────────────────────┘      ║
║                                                               ║
║  Email:                                                       ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │ [ahmad.fauzi@pn-kediri.go.id                    ] │       ║
║  └───────────────────────────────────────────────────┘       ║
║                                                               ║
║  No. HP (untuk notifikasi WA):                                ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │ [0812XXXXXXXX                                   ] │       ║
║  └───────────────────────────────────────────────────┘       ║
║                                                               ║
║  ════════════════════════════════════════                     ║
║  PENGATURAN AKSES                                             ║
║  ──────────────────                                           ║
║                                                               ║
║  Role Sistem:                                                 ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │ ( ) 🟢 Pegawai   — Ajukan cuti, lihat status     │       ║
║  │ (●) 🔵 Atasan    — Approve cuti bawahan           │       ║
║  │ ( ) 🟡 Kepegawaian — Verifikasi, kelola kuota    │       ║
║  │ ( ) 👑 Pimpinan  — Full access, approval akhir    │       ║
║  └───────────────────────────────────────────────────┘       ║
║                                                               ║
║  Atasan Langsung (untuk role Pegawai):                        ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │ 🔍 [Ir. Suyanto — Kasubag Umum               ▾] │       ║
║  └───────────────────────────────────────────────────┘       ║
║                                                               ║
║  Password Awal:                                               ║
║  ┌───────────────────────────────────────────────────┐       ║
║  │ [Auto-generate: NIP + tgl lahir]    [🔄 Generate] │       ║
║  └───────────────────────────────────────────────────┘       ║
║  ℹ️ Pengguna wajib ganti password saat login pertama          ║
║                                                               ║
║  ┌────────────────┐  ┌──────────────────┐                    ║
║  │    Batal       │  │  💾 Simpan       │                    ║
║  └────────────────┘  └──────────────────┘                    ║
╚═══════════════════════════════════════════════════════════════╝
Modal: max-width 580px, centered, scrollable
```

**Konfirmasi Hapus / Non-aktifkan:**
```
╔═══════════════════════════════════════════════════╗
║                                                   ║
║  ⚠️ Konfirmasi Non-aktifkan Pengguna               ║
║                                                   ║
║  Anda akan menonaktifkan:                         ║
║  Nama: Rina Wati                                  ║
║  NIP : 199005012022011001                         ║
║                                                   ║
║  Pengguna yang dinonaktifkan:                     ║
║  • Tidak bisa login ke sistem                     ║
║  • Pengajuan cuti aktif akan dibatalkan           ║
║  • Data riwayat tetap tersimpan                   ║
║                                                   ║
║  Ketik NIP untuk konfirmasi:                      ║
║  ┌─────────────────────────────────────┐         ║
║  │ [                                 ] │         ║
║  └─────────────────────────────────────┘         ║
║                                                   ║
║  ┌──────────────┐  ┌────────────────────┐        ║
║  │    Batal     │  │  ⏸ Non-aktifkan   │        ║
║  └──────────────┘  └────────────────────┘        ║
║                     btn: bg #DC2626 (danger)      ║
╚═══════════════════════════════════════════════════╝
```

---

### 2.13 Flowchart — CRUD Admin Pages

```mermaid
flowchart TD
    subgraph DP["📋 Data Pegawai"]
        DP1[Lihat Daftar Pegawai] --> DP2[Filter / Cari]
        DP2 --> DP3["Klik 👁 Detail"]
        DP3 --> DP4[Slide-in Drawer]
        DP4 --> DP5[Edit Kuota Cuti]
        DP4 --> DP6[Cetak Rekap]
    end

    subgraph WF["⚙️ Pengaturan Workflow"]
        WF1[Lihat Semua Workflow] --> WF2["Klik + Tambah"]
        WF2 --> WF3[Modal: Pilih Jabatan + Jenis Cuti]
        WF3 --> WF4[Susun Rantai Persetujuan]
        WF4 --> WF5[Preview Chain]
        WF5 --> WF6[Simpan]

        WF1 --> WF7["Klik ✏️ Edit"]
        WF7 --> WF3

        WF1 --> WF8["Klik 🗑️ Hapus"]
        WF8 --> WF9{Konfirmasi?}
        WF9 -->|Ya| WF10[Hapus Workflow]
        WF9 -->|Tidak| WF1
    end

    subgraph MU["👤 Manajemen Pengguna"]
        MU1[Lihat Daftar User] --> MU2["Klik + Tambah"]
        MU2 --> MU3[Modal: Input Data + Role]
        MU3 --> MU4["Opsional: Sinkron SIKEP"]
        MU4 --> MU5[Simpan]

        MU1 --> MU6["Klik ⚡ Aksi"]
        MU6 --> MU7[Edit Pengguna]
        MU6 --> MU8[Reset Password]
        MU6 --> MU9[Ubah Role]
        MU6 --> MU10[Non-aktifkan]
        MU10 --> MU11{Konfirmasi NIP?}
        MU11 -->|Cocok| MU12[User Dinonaktifkan]
        MU11 -->|Tidak| MU1
    end

    style DP fill:#2563EB,color:#fff
    style WF fill:#C8942A,color:#fff
    style MU fill:#8B1A1A,color:#fff
```

---

## 3. State & Interaction Diagrams

### 3.1 Status Pengajuan Cuti (State Machine)

```mermaid
stateDiagram-v2
    [*] --> Draft: Pegawai mulai isi form
    Draft --> Diajukan: Klik "Kirim"
    Diajukan --> MenungguAtasan: Notifikasi terkirim

    MenungguAtasan --> DisetujuiAtasan: Atasan approve
    MenungguAtasan --> Ditangguhkan: Atasan postpone
    MenungguAtasan --> DitolakAtasan: Atasan reject

    Ditangguhkan --> MenungguAtasan: Pegawai revisi & kirim ulang

    DisetujuiAtasan --> MenungguHR: Forward ke Kepegawaian
    MenungguHR --> DiverifikasiHR: HR approve
    MenungguHR --> DitolakHR: HR reject

    DiverifikasiHR --> MenungguPimpinan: Forward ke Pimpinan
    MenungguPimpinan --> DISETUJUI: Pimpinan approve
    MenungguPimpinan --> DitolakPimpinan: Pimpinan reject

    DISETUJUI --> SuratTerbit: Generate PDF + TTE
    SuratTerbit --> [*]

    DitolakAtasan --> [*]
    DitolakHR --> [*]
    DitolakPimpinan --> [*]

    Diajukan --> Dibatalkan: Pegawai cancel
    Dibatalkan --> [*]
```

---

### 3.2 Component Hierarchy

```mermaid
graph TD
    App["App.jsx"] --> Router["React Router"]
    Router --> Login["Login Page"]
    Router --> ML["MainLayout"]

    ML --> Topbar["Topbar"]
    ML --> Sidebar["Sidebar"]
    ML --> Content["Page Content"]

    Topbar --> NotifBell["NotifDropdown"]
    Topbar --> UserMenu["UserDropdown"]

    Sidebar --> NavItem["NavItem (role-filtered)"]

    Content --> Dashboard
    Content --> PengajuanCuti
    Content --> CutiSaya
    Content --> DetailCuti
    Content --> Approval
    Content --> Verifikasi
    Content --> Kalender
    Content --> Profil
    Content --> AdminPages["Admin Pages"]

    Dashboard --> StatCard
    Dashboard --> MiniCalendar
    Dashboard --> RecentList["RecentList"]

    PengajuanCuti --> StepWizard
    StepWizard --> StepJenis["Step: Jenis Cuti"]
    StepWizard --> StepDetail["Step: Detail"]
    StepWizard --> StepDokumen["Step: Upload"]
    StepWizard --> StepKonfirmasi["Step: Konfirmasi"]

    DetailCuti --> Timeline
    DetailCuti --> PDFPreview

    Approval --> DataTable
    Approval --> ApprovalCard["ApprovalCard"]

    AdminPages --> Laporan
    AdminPages --> ManajemenKuota
    Laporan --> BarChart
    Laporan --> PieChart

    style App fill:#8B1A1A,color:#fff
    style ML fill:#2A2D35,color:#fff
    style Dashboard fill:#16A34A,color:#fff
    style PengajuanCuti fill:#2563EB,color:#fff
    style Approval fill:#F59E0B,color:#000
    style AdminPages fill:#C8942A,color:#fff
```

---

### 3.3 Data Flow — Pengajuan ke Persetujuan

```mermaid
sequenceDiagram
    participant P as Pegawai
    participant FE as Frontend
    participant API as Backend API
    participant DB as Database
    participant AT as Atasan
    participant HR as Kepegawaian
    participant PM as Pimpinan

    P->>FE: Isi form cuti
    FE->>FE: Validasi client-side (saldo, tanggal)
    FE->>API: POST /api/cuti/ajukan
    API->>DB: Simpan pengajuan (status: DIAJUKAN)
    API->>AT: 🔔 Push notification
    API-->>FE: 201 Created + ID pengajuan

    AT->>FE: Buka dashboard persetujuan
    FE->>API: GET /api/approval/pending
    API-->>FE: List pengajuan pending

    AT->>FE: Klik "Setujui"
    FE->>API: PATCH /api/cuti/{id}/approve
    API->>DB: Update status: DISETUJUI_ATASAN
    API->>HR: 🔔 Push notification
    API->>P: 🔔 Notif "Disetujui Atasan"

    HR->>FE: Verifikasi administrasi
    FE->>API: PATCH /api/cuti/{id}/verify
    API->>DB: Update status: DIVERIFIKASI_HR
    API->>PM: 🔔 Push notification

    PM->>FE: Persetujuan akhir
    FE->>API: PATCH /api/cuti/{id}/final-approve
    API->>DB: Update status: DISETUJUI + kurangi saldo
    API->>API: Generate PDF surat cuti
    API->>P: 🔔 Notif "DISETUJUI" + link PDF
```

---

Silakan review wireframes dan flowcharts di atas. Beri tahu jika ada halaman yang perlu ditambahkan atau alur yang perlu disesuaikan! 🎯
