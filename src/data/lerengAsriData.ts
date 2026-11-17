import {
  Destination,
  DestinationCategory,
  DifficultyLevel,
  PackageAddon,
  PackageDurationFilter,
  TourPackage,
} from '../types/tourism';

export const WHATSAPP_ADMIN_PHONE = '6281234567890';
export const WHATSAPP_DISPLAY_PHONE = '+62 812-3456-7890';

export function formatRupiah(amount: number): string {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(amount);
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${WHATSAPP_ADMIN_PHONE}?text=${encodeURIComponent(message)}`;
}

export const DESTINATIONS: Destination[] = [
  {
    id: 'puncak-batu-pandang',
    name: 'Puncak Sunrise Batu Pandang',
    category: DestinationCategory.ALAM,
    shortDesc:
      'Gardu pandang alami di ketinggian 1.420 mdpl dengan panorama lautan awan dan tiga puncak gunung.',
    fullDesc:
      'Titik terbaik untuk menyaksikan matahari terbit di atas hamparan kabut lembah. Jalur pendakian sudah tertata rapi menggunakan batu andesit dan pagar kayu pengaman, cocok untuk keluarga maupun pendaki pemula yang ingin berfoto di pagi hari.',
    ticketPrice: 20000,
    priceUnit: 'per orang',
    parkingFee: 'Motor Rp 3.000 · Mobil Rp 5.000',
    openHours: '04.30 – 17.00 WIB',
    durationEstimate: '2 – 3 jam',
    elevation: '1.420 mdpl',
    difficulty: DifficultyLevel.SEDANG,
    rating: '4.9',
    reviewCount: 318,
    localGuideAvailable: true,
    artwork: 'sunrise-peak',
    highlights: [
      'Panorama matahari terbit 270 derajat menghadap lembah pinus',
      'Pos istirahat dengan sajian teh jahe hangat dari warga',
      'Spot foto dek kayu alami berlatar perbukitan vulkanik',
    ],
    facilities: ['Pos Tiket Resmi', 'Mushola Puncak', 'Toilet Bersih', 'Warung Kopi Lokal'],
    visitorTips: 'Berangkat sebelum pukul 04.45 WIB dan gunakan jaket tahan angin (suhu pagi 15–17°C).',
    distanceFromGate: '1,4 km dari Gerbang Desa (20 menit jalan kaki)',
    featuredOnHome: true,
  },
  {
    id: 'curug-embun',
    name: 'Air Terjun Curug Embun',
    category: DestinationCategory.ALAM,
    shortDesc:
      'Air terjun bertingkat setinggi 28 meter di tengah hutan pakis dengan kolam alami berair jernih.',
    fullDesc:
      'Terletak di sisi barat lereng desa, Curug Embun mengalirkan air mata air pegunungan yang sejuk sepanjang tahun. Suara gemericik air dan kanopi hutan tropis membuat lokasi ini ideal untuk relaksasi serta piknik keluarga.',
    ticketPrice: 15000,
    priceUnit: 'per orang',
    parkingFee: 'Motor Rp 3.000 · Mobil Rp 5.000',
    openHours: '07.00 – 16.30 WIB',
    durationEstimate: '1,5 – 2 jam',
    elevation: '1.120 mdpl',
    difficulty: DifficultyLevel.MUDAH,
    rating: '4.8',
    reviewCount: 245,
    localGuideAvailable: false,
    artwork: 'waterfall',
    highlights: [
      'Jalur setapak landai ramah anak dan lansia',
      'Kolam dangkal alami untuk bermain air dengan aman',
      'Gazebo bambu tepi sungai untuk beristirahat',
    ],
    facilities: ['Ruang Bilas & Ganti', 'Gazebo Bambu', 'Loker Titip Barang', 'Kantin Desa'],
    visitorTips: 'Gunakan alas kaki anti-slip saat musim hujan karena batu di tepi kolam bisa licin.',
    distanceFromGate: '900 m dari Gerbang Desa (12 menit jalan kaki)',
    featuredOnHome: true,
  },
  {
    id: 'kebun-kopi-teh',
    name: 'Kebun Teh & Kopi Rakyat Lereng',
    category: DestinationCategory.AGRO,
    shortDesc:
      'Tur kebun arabika dan teh organik bersama petani lokal lengkap dengan sesi seduh manual.',
    fullDesc:
      'Belajar langsung dari petani Desa Lereng Asri mengenai budidaya kopi arabika dataran tinggi dan pemetikan pucuk teh. Pengunjung diajak melihat proses sangrai tradisional menggunakan kuali tanah liat dan mencicipi hasil panen segar.',
    ticketPrice: 35000,
    priceUnit: 'per orang (termasuk 1 cangkir seduhan)',
    parkingFee: 'Gratis area parkir kebun',
    openHours: '07.30 – 17.00 WIB',
    durationEstimate: '2 jam',
    elevation: '1.260 mdpl',
    difficulty: DifficultyLevel.MUDAH,
    rating: '4.9',
    reviewCount: 194,
    localGuideAvailable: true,
    artwork: 'tea-coffee',
    highlights: [
      'Pemandangan terasering kebun teh yang terawat',
      'Edukasi panen & sangrai kopi arabika khas lereng',
      'Mencicipi jajanan singkong keju dan gula aren organik',
    ],
    facilities: ['Saung Seduh Kopi', 'Toko Oleh-Oleh Panen', 'Toilet', 'Mushola'],
    visitorTips: 'Waktu terbaik berkunjung adalah pukul 08.00–10.30 WIB saat petani melakukan pemetikan pagi.',
    distanceFromGate: '600 m dari Gerbang Desa',
    featuredOnHome: true,
  },
  {
    id: 'hutan-pinus-sepeda',
    name: 'Hutan Pinus & Jalur Sepeda Gunung',
    category: DestinationCategory.ALAM,
    shortDesc:
      'Kawasan pinus teduh dengan jalur trekking ringan, area piknik tikar, dan sewa sepeda gunung.',
    fullDesc:
      'Area seluas 12 hektar dengan barisan pinus merkusii berusia puluhan tahun. Tersedia jalur khusus sepeda gunung sepanjang 4,5 km serta area hamparan rumput rindang yang sering digunakan untuk gathering keluarga maupun kegiatan pramuka.',
    ticketPrice: 15000,
    priceUnit: 'per orang (sewa sepeda Rp 40.000/jam)',
    parkingFee: 'Motor Rp 3.000 · Mobil Rp 5.000',
    openHours: '06.30 – 17.30 WIB',
    durationEstimate: '2 – 4 jam',
    elevation: '1.180 mdpl',
    difficulty: DifficultyLevel.SEDANG,
    rating: '4.7',
    reviewCount: 162,
    localGuideAvailable: true,
    artwork: 'pine-forest',
    highlights: [
      'Udara pinus sejuk tanpa terik matahari siang',
      'Tersedia penyewaan sepeda MTB dan helm standar',
      'Area camping ground berkapasitas hingga 40 tenda',
    ],
    facilities: ['Rental Sepeda & Hammock', 'Area Piknik', 'Sumber Listrik Lapangan', 'Toilet'],
    visitorTips: 'Untuk peminjaman sepeda rombongan (>5 unit), disarankan konfirmasi via WhatsApp H-1.',
    distanceFromGate: '1,1 km dari Gerbang Desa',
  },
  {
    id: 'kampung-batik-daun',
    name: 'Sanggar Tenun & Batik Ecoprint',
    category: DestinationCategory.EDUKASI,
    shortDesc:
      'Lokakarya membatik motif dedaunan lereng menggunakan pewarna alami bersama ibu-ibu pengrajin.',
    fullDesc:
      'Pengalaman budaya autentik di rumah joglo sanggar warga. Peserta belajar teknik memukul dan mengukus daun jati, jarak, serta kenikir ke atas kain katun alami. Hasil karya kain selendang atau totebag bisa langsung dibawa pulang.',
    ticketPrice: 65000,
    priceUnit: 'per orang (termasuk bahan kain & pewarna)',
    parkingFee: 'Gratis parkir halaman sanggar',
    openHours: '08.30 – 16.00 WIB',
    durationEstimate: '2 – 2,5 jam',
    elevation: '1.050 mdpl',
    difficulty: DifficultyLevel.MUDAH,
    rating: '4.9',
    reviewCount: 141,
    localGuideAvailable: true,
    artwork: 'batik-craft',
    highlights: [
      'Dibimbing langsung oleh kelompok pengrajin wanita desa',
      'Bahan pewarna 100% alami dari tanaman pekarangan',
      'Membawa pulang 1 karya kain ecoprint buatan sendiri',
    ],
    facilities: ['Pendopo Joglo Luas', 'Galeri Karya Warga', 'Minuman Selamat Datang', 'Toilet'],
    visitorTips: 'Gunakan pakaian santai yang nyaman saat mengikuti sesi pewarnaan kain.',
    distanceFromGate: '350 m dari Gerbang Desa',
  },
  {
    id: 'agrowisata-stroberi',
    name: 'Kebun Stroberi & Hidroponik Desa',
    category: DestinationCategory.AGRO,
    shortDesc:
      'Wisata petik buah stroberi segar dan edukasi sayuran hidroponik untuk wisata keluarga dan anak.',
    fullDesc:
      'Rumah kaca dan lahan terbuka tempat pengunjung dapat memetik sendiri buah stroberi manis yang bebas pestisida kimia. Anak-anak juga diajak menanam bibit selada hidroponik sebagai edukasi pertanian modern ramah lingkungan.',
    ticketPrice: 25000,
    priceUnit: 'per orang (bonus 100g stroberi petik sendiri)',
    parkingFee: 'Gratis parkir area kebun',
    openHours: '08.00 – 16.30 WIB',
    durationEstimate: '1 – 1,5 jam',
    elevation: '1.150 mdpl',
    difficulty: DifficultyLevel.MUDAH,
    rating: '4.8',
    reviewCount: 209,
    localGuideAvailable: false,
    artwork: 'strawberry-farm',
    highlights: [
      'Lahan datar dan bersih, ramah kereta dorong anak',
      'Stroberi ditimbang transparan Rp 40.000/kg jika petik tambahan',
      'Tersedia jus stroberi segar dan selai buatan warga',
    ],
    facilities: ['Keranjang & Gunting Petik', 'Wastafel Cuci Tangan', 'Kios Olahan Buah', 'Mushola'],
    visitorTips: 'Kunjungi pada hari kerja atau pagi akhir pekan agar pilihan buah merah matang lebih melimpah.',
    distanceFromGate: '500 m dari Gerbang Desa',
  },
  {
    id: 'tubing-kali-bening',
    name: 'Susur Sungai Tubing Kali Bening',
    category: DestinationCategory.ALAM,
    shortDesc:
      'Petualangan menyusuri jeram sungai pegunungan sepanjang 1,8 km dengan ban pelampung dan pemandu.',
    fullDesc:
      'Aktivitas air menyegarkan melewati tebing batu alami dan pepohonan rindang di Sungai Kali Bening. Setiap rombongan didampingi tim pemandu bersertifikat keselamatan sungai lengkap dengan pelampung, helm, dan pelindung lutut.',
    ticketPrice: 85000,
    priceUnit: 'per orang (termasuk perlengkapan & pemandu)',
    parkingFee: 'Motor Rp 3.000 · Mobil Rp 5.000',
    openHours: '08.00 – 15.00 WIB',
    durationEstimate: '1,5 – 2 jam',
    elevation: '980 mdpl',
    difficulty: DifficultyLevel.MENANTANG,
    rating: '4.9',
    reviewCount: 178,
    localGuideAvailable: true,
    artwork: 'river-tubing',
    highlights: [
      'Perlengkapan keselamatan lengkap (helm, jaket pelampung, ban)',
      'Pemandu bersertifikat mendampingi di depan dan belakang barisan',
      'Termasuk angkutan lokal kembali ke titik awal & teh hangat',
    ],
    facilities: ['Kamar Mandi Air Hangat', 'Loker Pribadi', 'P3K Pos Sungai', 'Gazebo Tunggu'],
    visitorTips: 'Bawa pakaian ganti lengkap. Minimal usia peserta 8 tahun dan tidak sedang dalam kondisi hujan deras.',
    distanceFromGate: '1,8 km dari Gerbang Desa (tersedia ojek/jemputan pos)',
  },
  {
    id: 'homestay-lumbung-asri',
    name: 'Homestay Kayu & Lumbung Asri',
    category: DestinationCategory.PENGINAPAN,
    shortDesc:
      'Penginapan rumah kayu warga yang hangat dengan sarapan tradisional dan teras menghadap sawah.',
    fullDesc:
      'Dikelola langsung oleh keluarga warga Desa Lereng Asri, menyediakan 14 kamar bersih berbahan kayu jati dan bambu. Menginap di sini memberi kesempatan merasakan suasana malam pedesaan yang tenang serta kuliner rumahan hangat.',
    ticketPrice: 250000,
    priceUnit: 'per malam (kapasitas 2–3 orang)',
    parkingFee: 'Gratis parkir halaman rumah warga',
    openHours: 'Check-in 14.00 · Check-out 12.00 WIB',
    durationEstimate: 'Menginap 1+ malam',
    elevation: '1.080 mdpl',
    difficulty: DifficultyLevel.MUDAH,
    rating: '4.9',
    reviewCount: 127,
    localGuideAvailable: true,
    artwork: 'homestay-joglo',
    highlights: [
      'Sudah termasuk sarapan nasi jagung/nasi goreng kampung & teh',
      'Kamar mandi dalam dengan pemanas air (water heater)',
      'Interaksi hangat bersama tuan rumah penduduk desa',
    ],
    facilities: ['Wi-Fi Area Ruang Tamu', 'Water Heater', 'Teras Pemandangan', 'Dapur Bersama'],
    visitorTips: 'Sangat disarankan reservasi minimal 3 hari sebelumnya untuk akhir pekan dan libur nasional.',
    distanceFromGate: '400 m dari Gerbang Desa',
  },
];

export const TOUR_PACKAGES: TourPackage[] = [
  {
    id: 'paket-jelajah-pagi',
    name: 'Paket Jelajah Pagi & Kopi Lereng',
    durationLabel: 'Setengah Hari (05.00 – 11.00 WIB)',
    filterType: PackageDurationFilter.SETENGAH_HARI,
    pricePerPerson: 145000,
    minPax: 2,
    maxPax: 15,
    rating: '4.9',
    summary:
      'Cocok untuk pelancong akhir pekan yang ingin berburu sunrise di Batu Pandang lalu bersantai menyeduh kopi lokal di kebun rakyat.',
    destinationsIncluded: [
      'Puncak Sunrise Batu Pandang',
      'Kebun Teh & Kopi Rakyat Lereng',
    ],
    includedItems: [
      'Tiket masuk seluruh destinasi dalam rute',
      'Pemandu lokal dari komunitas desa',
      'Sarapan pagi tradisional + 1 cangkir kopi arabika/teh lereng',
      'Air mineral dan dokumentasi foto grup',
    ],
    excludedItems: [
      'Transportasi menuju Desa Lereng Asri',
      'Biaya parkir kendaraan pribadi',
      'Oleh-oleh kopi kemasan',
    ],
    rundown: [
      { time: '04.45 WIB', activity: 'Berkumpul di Gerbang Desa Lereng Asri & briefing pemandu' },
      { time: '05.15 WIB', activity: 'Menikmati matahari terbit di Puncak Batu Pandang' },
      { time: '07.30 WIB', activity: 'Sarapan hangat & berjalan santai ke Kebun Teh dan Kopi' },
      { time: '09.00 WIB', activity: 'Sesi edukasi sangrai dan seduh kopi bersama petani' },
      { time: '11.00 WIB', activity: 'Acara selesai dan pembagian dokumentasi foto' },
    ],
    artwork: 'sunrise-peak',
    isPopular: true,
  },
  {
    id: 'paket-seharian-ekowisata',
    name: 'Paket Seharian Ekowisata & Budaya',
    durationLabel: '1 Hari Penuh (08.00 – 16.30 WIB)',
    filterType: PackageDurationFilter.SATU_HARI,
    pricePerPerson: 265000,
    minPax: 4,
    maxPax: 25,
    rating: '4.9',
    summary:
      'Perpaduan lengkap wisata air terjun, petik stroberi, makan siang prasmanan khas desa, dan lokakarya batik ecoprint.',
    destinationsIncluded: [
      'Air Terjun Curug Embun',
      'Kebun Stroberi & Hidroponik Desa',
      'Sanggar Tenun & Batik Ecoprint',
    ],
    includedItems: [
      'Semua tiket masuk 3 destinasi utama',
      '1x makan siang prasmanan lauk khas desa + es kelapa muda',
      'Bahan praktik batik ecoprint (kain katun dibawa pulang)',
      'Pemandu pendamping sepanjang hari & P3K dasar',
    ],
    excludedItems: [
      'Tambahan buah stroberi hasil petik di atas 100g',
      'Pengeluaran pribadi di kios UMKM warga',
    ],
    rundown: [
      { time: '08.00 WIB', activity: 'Penyambutan di Pendopo Desa dengan minuman jahe serai' },
      { time: '08.45 WIB', activity: 'Trekking santai menuju Air Terjun Curug Embun' },
      { time: '11.30 WIB', activity: 'Makan siang bersama di saung pinggir sawah' },
      { time: '13.00 WIB', activity: 'Petik stroberi segar dan pengenalan hidroponik' },
      { time: '14.30 WIB', activity: 'Workshop Batik Ecoprint di Sanggar Ibu-Ibu Desa' },
      { time: '16.30 WIB', activity: 'Penutupan dan foto kenang-kenangan' },
    ],
    artwork: 'batik-craft',
    isPopular: true,
  },
  {
    id: 'paket-menginap-2h1m',
    name: 'Paket Menginap Homestay & Sunrise 2H1M',
    durationLabel: '2 Hari 1 Malam',
    filterType: PackageDurationFilter.MENGINAP,
    pricePerPerson: 580000,
    minPax: 2,
    maxPax: 12,
    rating: '5.0',
    summary:
      'Pengalaman lengkap tinggal di rumah kayu warga, api unggun malam dengan jagung bakar, sunrise puncak, dan tubing sungai.',
    destinationsIncluded: [
      'Homestay Kayu & Lumbung Asri',
      'Puncak Sunrise Batu Pandang',
      'Kebun Teh & Kopi Rakyat Lereng',
      'Susur Sungai Tubing Kali Bening',
    ],
    includedItems: [
      'Menginap 1 malam di Homestay Kayu (sekamar 2 orang)',
      '3x makan utama (malam, sarapan, makan siang) + 2x camilan tradisional',
      'Sesi api unggun & akustik malam bersama warga',
      'Tiket & perlengkapan lengkap River Tubing Kali Bening',
      'Pemandu lokal penuh selama 2 hari',
    ],
    excludedItems: [
      'Transportasi pulang-pergi ke lokasi desa',
      'Peralatan mandi pribadi khusus dan obat-obatan pribadi',
    ],
    rundown: [
      { time: 'Hari 1 · 14.00', activity: 'Check-in Homestay & welcome snack rebusan lereng' },
      { time: 'Hari 1 · 16.00', activity: 'Jalan sore ke Kebun Teh & menikmati senja' },
      { time: 'Hari 1 · 19.30', activity: 'Makan malam keluarga desa & api unggun jagung bakar' },
      { time: 'Hari 2 · 04.45', activity: 'Berburu sunrise di Puncak Batu Pandang' },
      { time: 'Hari 2 · 09.30', activity: 'Petualangan Tubing Sungai Kali Bening (opsional ganti Curug Embun)' },
      { time: 'Hari 2 · 12.30', activity: 'Makan siang penutup & check-out homestay' },
    ],
    artwork: 'homestay-joglo',
  },
  {
    id: 'paket-rombongan-keluarga',
    name: 'Paket Rombongan Keluarga & Outbound',
    durationLabel: '1 Hari Penuh (08.00 – 16.00 WIB)',
    filterType: PackageDurationFilter.ROMBONGAN,
    pricePerPerson: 210000,
    minPax: 10,
    maxPax: 60,
    rating: '4.8',
    summary:
      'Dirancang khusus untuk keluarga besar, arisan kantor, atau study tour sekolah dengan permainan tradisional dan area kumpul privat.',
    destinationsIncluded: [
      'Hutan Pinus & Jalur Sepeda Gunung',
      'Air Terjun Curug Embun',
      'Kebun Stroberi & Hidroponik Desa',
    ],
    includedItems: [
      'Penggunaan pendopo & sound system khusus rombongan',
      'Sesi permainan kebersamaan (fun games) dipandu fasilitator desa',
      'Tiket masuk Hutan Pinus, Curug Embun, dan Kebun Stroberi',
      '1x makan siang kotak/prasmanan + 1x kudapan sore',
      'Spanduk selamat datang & dokumentasi foto kegiatan',
    ],
    excludedItems: [
      'Sewa sepeda gunung tambahan (opsional)',
      'Layanan bus/transportasi rombongan',
    ],
    rundown: [
      { time: '08.00 WIB', activity: 'Registrasi rombongan & pembukaan di Pendopo Hutan Pinus' },
      { time: '09.00 WIB', activity: 'Fun games edukatif & permainan tradisional bambu' },
      { time: '11.30 WIB', activity: 'Ishoma & makan siang bersama di bawah pohon pinus' },
      { time: '13.30 WIB', activity: 'Trekking ringan ke Air Terjun Curug Embun' },
      { time: '15.00 WIB', activity: 'Wisata petik stroberi & penutupan rombongan' },
    ],
    artwork: 'pine-forest',
  },
];

export const PACKAGE_ADDONS: PackageAddon[] = [
  {
    id: 'addon-jeep',
    name: 'Antar-Jemput Jeep Lereng (Sunrise & Tubing)',
    price: 250000,
    unitLabel: 'per unit jeep (maks. 4 orang)',
    perPerson: false,
  },
  {
    id: 'addon-foto',
    name: 'Jasa Dokumentasi Fotografer & Drone',
    price: 300000,
    unitLabel: 'per rombongan',
    perPerson: false,
  },
  {
    id: 'addon-snack-oleh',
    name: 'Paket Oleh-Oleh Kopi & Gula Aren (250g)',
    price: 45000,
    unitLabel: 'per orang',
    perPerson: true,
  },
];

export const VISITOR_PRACTICAL_INFO = [
  {
    title: 'Jam Layanan & Operasional',
    detail: 'Kawasan wisata buka setiap hari pukul 04.30 – 17.30 WIB (khusus pemburu sunrise). Admin WhatsApp aktif pukul 07.00 – 20.00 WIB.',
  },
  {
    title: 'Akses & Kondisi Jalan',
    detail: 'Jalan beraspal mulus dapat dilalui motor, mobil keluarga, hingga minibus (Elf/Hiace). Berjarak ±45 menit dari pusat kota kabupaten.',
  },
  {
    title: 'Fasilitas Umum Desa',
    detail: 'Tersedia area parkir terpusat berpenjaga, 4 titik mushola bersih, toilet ramah disabilitas, pos kesehatan P3K, dan pembayaran tunai/QRIS di loket resmi.',
  },
];

export const VISITOR_TESTIMONIALS = [
  {
    name: 'Ratri Kusumawardhani',
    role: 'Koordinator Keluarga Besar · Yogyakarta',
    quote:
      'Awalnya bingung mencari info harga masuk karena postingan di media sosial terpisah-pisah. Lewat halaman paket ini, rincian untuk 18 anggota keluarga langsung jelas dan admin WhatsApp membalas konfirmasi dalam 7 menit.',
  },
  {
    name: 'Bagas Prakoso',
    role: 'Pegiat Fotografi Alam · Semarang',
    quote:
      'Jadwal keberangkatan sunrise di Batu Pandang dan informasi kondisi kabut sangat membantu persiapan kami. Tidak ada biaya tersembunyi di lokasi—semua sesuai daftar tarif resmi.',
  },
];
