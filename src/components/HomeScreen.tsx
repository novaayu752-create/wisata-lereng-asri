import React from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Compass,
  MapPin,
  MessageCircle,
  Package,
  Sun,
} from 'lucide-react';
import {
  DESTINATIONS,
  formatRupiah,
  TOUR_PACKAGES,
  VISITOR_PRACTICAL_INFO,
  VISITOR_TESTIMONIALS,
} from '../data/lerengAsriData';
import { Destination, ScreenId, TourPackage } from '../types/tourism';
import { ScenicArtwork } from './ScenicArtwork';
import { TrailDifficultyGauge } from './TrailDifficultyGauge';

interface HomeScreenProps {
  onNavigate: (screen: ScreenId) => void;
  onSelectDestination: (destination: Destination) => void;
  onBookPackage: (pkg: TourPackage) => void;
  onOpenGeneralWhatsApp: () => void;
}

export const HomeScreen: React.FC<HomeScreenProps> = ({
  onNavigate,
  onSelectDestination,
  onBookPackage,
  onOpenGeneralWhatsApp,
}) => {
  const featuredDestinations = DESTINATIONS.filter((d) => d.featuredOnHome).slice(0, 3);
  const popularPackages = TOUR_PACKAGES.filter((p) => p.isPopular).slice(0, 2);

  return (
    <div className="space-y-16 pb-16 pt-6 sm:pt-10">
      {/* Section 1: Hero Split + Sunrise Weather Advisory */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="mb-6 inline-flex flex-wrap items-center gap-2 rounded-full bg-[#FEF3C7] px-4 py-2 text-xs font-semibold text-[#6E3900] border border-[#D97706]/25">
          <Sun className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
          <span>Kondisi Lereng Pagi Ini: Cerah Berkabut · 18°C · Sunrise 05.28 WIB</span>
        </div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12">
          <div className="flex flex-col justify-between space-y-6 lg:col-span-6">
            <div className="space-y-4">
              <p className="text-sm font-bold text-[#106D20]">
                Portal Informasi Resmi · Desa Wisata Lereng Asri
              </p>
              <h1
                className="text-3xl font-extrabold leading-[1.15] tracking-tight text-[#072417] sm:text-[40px] sm:leading-[48px]"
                style={{ textWrap: 'balance' }}
              >
                Satu tempat untuk info destinasi, paket wisata, dan harga resmi Lereng Asri
              </h1>
              <p className="max-w-xl text-base leading-relaxed text-[#424843]">
                Tidak perlu lagi mencari informasi yang tersebar di media sosial. Jelajahi daftar objek wisata, jam buka, rute jalur, rincian harga tiket, hingga simulasi paket wisata—lalu pesan langsung lewat WhatsApp pengelola desa.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <button
                type="button"
                onClick={() => onNavigate(ScreenId.DESTINASI)}
                className="inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#072417] px-6 py-3 text-base font-bold text-white transition-all hover:bg-[#1E3A2B] active:scale-[0.99]"
              >
                <Compass className="h-5 w-5" aria-hidden="true" />
                <span>Jelajahi Destinasi</span>
              </button>
              <button
                type="button"
                onClick={() => onNavigate(ScreenId.PAKET)}
                className="inline-flex min-h-[52px] cursor-pointer items-center justify-center gap-2 rounded-xl border-[1.5px] border-[#1E3A2B] bg-transparent px-6 py-3 text-base font-bold text-[#1E3A2B] transition-colors hover:bg-[#F2EDE4]"
              >
                <Package className="h-5 w-5" aria-hidden="true" />
                <span>Lihat Paket Wisata</span>
              </button>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative h-64 min-h-[280px] w-full overflow-hidden rounded-2xl border-hairline shadow-forest lg:h-full">
              <ScenicArtwork
                variant="hero-panorama"
                title="Ilustrasi lanskap pegunungan dan kebun teh Desa Wisata Lereng Asri"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#072417]/85 via-[#072417]/40 to-transparent p-5 text-white">
                <p className="text-xs font-semibold text-[#FDE68A]">
                  Ketinggian 980 – 1.420 mdpl · 45 Menit dari Pusat Kota
                </p>
                <p className="mt-0.5 text-sm font-bold">
                  Puncak Sunrise Batu Pandang, Curug Embun &amp; Kebun Kopi Rakyat
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 4-column info strip directly below hero split */}
        <div className="mt-8 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
          <div className="rounded-xl bg-[#FFFFFF] p-4 border-hairline">
            <p className="text-xs font-semibold text-[#424843]">Katalog Destinasi</p>
            <p className="mt-1 text-xl font-extrabold text-[#072417] tabular-nums">8 Lokasi Resmi</p>
            <p className="mt-0.5 text-xs text-[#424843]">Alam, budaya, agro &amp; homestay</p>
          </div>
          <div className="rounded-xl bg-[#FFFFFF] p-4 border-hairline">
            <p className="text-xs font-semibold text-[#424843]">Tiket Masuk Terbuka</p>
            <p className="mt-1 text-xl font-extrabold text-[#D97706] tabular-nums">Mulai Rp 15.000</p>
            <p className="mt-0.5 text-xs text-[#424843]">Tanpa biaya tersembunyi</p>
          </div>
          <div className="rounded-xl bg-[#FFFFFF] p-4 border-hairline">
            <p className="text-xs font-semibold text-[#424843]">Pilihan Paket</p>
            <p className="mt-1 text-xl font-extrabold text-[#072417] tabular-nums">4 Paket Lengkap</p>
            <p className="mt-0.5 text-xs text-[#424843]">Setengah hari hingga 2H1M</p>
          </div>
          <div className="rounded-xl bg-[#FFFFFF] p-4 border-hairline">
            <p className="text-xs font-semibold text-[#424843]">Pemesanan Langsung</p>
            <p className="mt-1 text-xl font-extrabold text-[#106D20] tabular-nums">WhatsApp &lt; 10 mnt</p>
            <p className="mt-0.5 text-xs text-[#424843]">Admin Pokdarwis aktif harian</p>
          </div>
        </div>
      </section>

      {/* Section 2: Featured Destinations Preview */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-sm font-bold text-[#106D20]">01. Destinasi Pilihan</p>
            <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#072417] sm:text-[28px]">
              Titik kunjungan favorit wisatawan
            </h2>
          </div>
          <button
            type="button"
            onClick={() => onNavigate(ScreenId.DESTINASI)}
            className="inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 self-start text-sm font-bold text-[#1E3A2B] hover:text-[#106D20] sm:self-auto"
          >
            <span>Lihat semua 8 destinasi</span>
            <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </button>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
          {featuredDestinations.map((dest) => (
            <article
              key={dest.id}
              className="flex flex-col overflow-hidden rounded-2xl bg-[#FFFFFF] border-hairline transition-transform duration-200 hover:-translate-y-0.5"
            >
              <div className="aspect-[16/10] w-full overflow-hidden bg-[#E7E2D9]">
                <ScenicArtwork variant={dest.artwork} title={dest.name} />
              </div>

              <div className="flex flex-1 flex-col justify-between space-y-4 p-5">
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#424843]">
                    <span>{dest.category}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">{dest.elevation}</span>
                    <span aria-hidden="true">·</span>
                    <span className="tabular-nums">★ {dest.rating}</span>
                  </div>
                  <h3 className="text-lg font-bold leading-snug text-[#072417]">{dest.name}</h3>
                  <p className="text-sm leading-relaxed text-[#424843]">{dest.shortDesc}</p>
                </div>

                <div className="space-y-4 pt-2 border-t border-[#1E3A2B]/8">
                  <div className="flex items-center justify-between gap-2">
                    <TrailDifficultyGauge level={dest.difficulty} />
                    <p className="text-base font-extrabold text-[#D97706] tabular-nums">
                      {formatRupiah(dest.ticketPrice)}
                    </p>
                  </div>
                  <button
                    type="button"
                    onClick={() => onSelectDestination(dest)}
                    className="min-h-[44px] w-full cursor-pointer rounded-xl bg-[#F2EDE4] px-4 py-2.5 text-sm font-bold text-[#072417] transition-colors hover:bg-[#CAEAD4]"
                  >
                    Lihat Info &amp; Jam Buka
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Section 3: Popular Packages Preview */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="rounded-3xl bg-[#F2EDE4] p-6 sm:p-10 border-hairline">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <p className="text-sm font-bold text-[#106D20]">02. Paket Wisata Terpadu</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#072417] sm:text-[28px]">
                Rencana perjalanan tanpa repot
              </h2>
              <p className="mt-1 max-w-2xl text-sm text-[#424843]">
                Sudah termasuk tiket masuk, pemandu warga lokal, hingga konsumsi khas desa dengan tarif transparan per peserta.
              </p>
            </div>
            <button
              type="button"
              onClick={() => onNavigate(ScreenId.PAKET)}
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 self-start text-sm font-bold text-[#1E3A2B] hover:text-[#106D20] sm:self-auto"
            >
              <span>Bandingkan semua 4 paket</span>
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>

          <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
            {popularPackages.map((pkg) => (
              <article
                key={pkg.id}
                className="flex flex-col justify-between rounded-2xl bg-[#FFFFFF] p-6 border-hairline"
              >
                <div className="space-y-4">
                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                    <span className="text-xs font-semibold text-[#424843]">
                      {pkg.durationLabel} · Min. {pkg.minPax} orang
                    </span>
                    <span className="text-lg font-extrabold text-[#D97706] tabular-nums">
                      {formatRupiah(pkg.pricePerPerson)}
                      <span className="text-xs font-medium text-[#424843]"> /orang</span>
                    </span>
                  </div>

                  <div>
                    <h3 className="text-xl font-bold text-[#072417]">{pkg.name}</h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-[#424843]">{pkg.summary}</p>
                  </div>

                  <ul className="space-y-1.5 pt-1">
                    {pkg.includedItems.slice(0, 3).map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-[#1D1C16]">
                        <CheckCircle2
                          className="mt-0.5 h-4 w-4 shrink-0 text-[#106D20]"
                          aria-hidden="true"
                        />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-6 flex flex-col gap-3 pt-4 border-t border-[#1E3A2B]/10 sm:flex-row">
                  <button
                    type="button"
                    onClick={() => onNavigate(ScreenId.PAKET)}
                    className="min-h-[48px] flex-1 cursor-pointer rounded-xl border-[1.5px] border-[#1E3A2B] px-4 py-2.5 text-sm font-bold text-[#1E3A2B] hover:bg-[#F8F3EA]"
                  >
                    Simulasi Biaya
                  </button>
                  <button
                    type="button"
                    onClick={() => onBookPackage(pkg)}
                    className="inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#106D20] px-4 py-2.5 text-sm font-bold text-white hover:bg-[#072417]"
                  >
                    <MessageCircle className="h-4 w-4" aria-hidden="true" />
                    <span>Pesan Paket</span>
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Practical Visitor Info + Testimonials (Claim-to-Proof Adjacency) */}
      <section className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-12">
          <div className="space-y-5 lg:col-span-6">
            <div>
              <p className="text-sm font-bold text-[#106D20]">03. Panduan Kunjungan</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#072417]">
                Informasi praktis sebelum berangkat
              </h2>
            </div>

            <div className="divide-y divide-[#1E3A2B]/10 rounded-2xl bg-[#FFFFFF] px-5 border-hairline">
              {VISITOR_PRACTICAL_INFO.map((info) => (
                <div key={info.title} className="py-4">
                  <h3 className="flex items-center gap-2 text-sm font-bold text-[#072417]">
                    <MapPin className="h-4 w-4 text-[#D97706]" aria-hidden="true" />
                    <span>{info.title}</span>
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-[#424843]">{info.detail}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-5 lg:col-span-6">
            <div>
              <p className="text-sm font-bold text-[#106D20]">04. Pengalaman Pengunjung</p>
              <h2 className="mt-1 text-2xl font-extrabold tracking-tight text-[#072417]">
                Kejelasan tarif dan konfirmasi cepat
              </h2>
            </div>

            <div className="space-y-4">
              {VISITOR_TESTIMONIALS.map((t) => (
                <blockquote
                  key={t.name}
                  className="rounded-2xl bg-[#F8F3EA] p-5 border-hairline"
                >
                  <p className="text-sm leading-relaxed text-[#1D1C16]">“{t.quote}”</p>
                  <footer className="mt-3 text-xs font-semibold text-[#424843]">
                    <span className="font-bold text-[#072417]">{t.name}</span> · {t.role}
                  </footer>
                </blockquote>
              ))}

              <div className="flex flex-col gap-3 rounded-2xl bg-[#072417] p-5 text-white sm:flex-row sm:items-center sm:justify-between">
                <div>
                  <p className="text-sm font-bold">Butuh jadwal khusus rombongan sekolah atau kantor?</p>
                  <p className="mt-0.5 text-xs text-[#CAEAD4]">
                    Konsultasikan kebutuhan Anda langsung dengan admin desa.
                  </p>
                </div>
                <button
                  type="button"
                  onClick={onOpenGeneralWhatsApp}
                  className="inline-flex min-h-[44px] shrink-0 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#D97706] px-4 py-2 text-sm font-bold text-white hover:bg-[#B45309]"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Tanya Admin WA</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
