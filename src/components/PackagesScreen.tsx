import React, { useMemo, useState } from 'react';
import {
  Check,
  ChevronDown,
  ChevronUp,
  Clock,
  MessageCircle,
  Minus,
  Plus,
  Users,
} from 'lucide-react';
import { formatRupiah, PACKAGE_ADDONS, TOUR_PACKAGES } from '../data/lerengAsriData';
import { BookingContext, PackageDurationFilter, TourPackage } from '../types/tourism';
import { ScenicArtwork } from './ScenicArtwork';

interface PackagesScreenProps {
  preselectedPackageId?: string | null;
  onBookWithContext: (booking: BookingContext) => void;
}

export const PackagesScreen: React.FC<PackagesScreenProps> = ({
  preselectedPackageId,
  onBookWithContext,
}) => {
  const [durationFilter, setDurationFilter] = useState<PackageDurationFilter>(
    PackageDurationFilter.SEMUA
  );
  const [selectedPkgId, setSelectedPkgId] = useState<string>(
    preselectedPackageId || TOUR_PACKAGES[0].id
  );
  const [expandedRundownId, setExpandedRundownId] = useState<string | null>(TOUR_PACKAGES[0].id);
  const [pax, setPax] = useState<number>(TOUR_PACKAGES[0].minPax);
  const [selectedAddonIds, setSelectedAddonIds] = useState<string[]>([]);

  const filterOptions = Object.values(PackageDurationFilter);

  const visiblePackages = useMemo(() => {
    if (durationFilter === PackageDurationFilter.SEMUA) return TOUR_PACKAGES;
    return TOUR_PACKAGES.filter((p) => p.filterType === durationFilter);
  }, [durationFilter]);

  const activePackage: TourPackage = useMemo(() => {
    return TOUR_PACKAGES.find((p) => p.id === selectedPkgId) || TOUR_PACKAGES[0];
  }, [selectedPkgId]);

  const handleSelectPackage = (pkg: TourPackage) => {
    setSelectedPkgId(pkg.id);
    setPax((prev) => Math.max(pkg.minPax, Math.min(prev, pkg.maxPax)));
  };

  const toggleAddon = (id: string) => {
    setSelectedAddonIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const calculation = useMemo(() => {
    const baseSubtotal = activePackage.pricePerPerson * pax;
    const activeAddons = PACKAGE_ADDONS.filter((a) => selectedAddonIds.includes(a.id)).map(
      (addon) => ({
        id: addon.id,
        name: addon.name,
        cost: addon.perPerson ? addon.price * pax : addon.price,
      })
    );
    const addonTotal = activeAddons.reduce((sum, a) => sum + a.cost, 0);
    return {
      baseSubtotal,
      activeAddons,
      addonTotal,
      grandTotal: baseSubtotal + addonTotal,
    };
  }, [activePackage, pax, selectedAddonIds]);

  const handleBookNow = () => {
    onBookWithContext({
      type: 'package',
      title: activePackage.name,
      subtitle: `${activePackage.durationLabel} · ${pax} peserta`,
      unitPrice: activePackage.pricePerPerson,
      defaultPax: pax,
      minPax: activePackage.minPax,
      selectedDestinations: activePackage.destinationsIncluded,
      selectedAddons: calculation.activeAddons.map((a) => ({ name: a.name, cost: a.cost })),
      estimatedTotal: calculation.grandTotal,
    });
  };

  return (
    <div className="mx-auto max-w-[1200px] space-y-8 px-4 pb-24 pt-8 sm:px-6">
      {/* Header */}
      <div className="space-y-3">
        <p className="text-sm font-bold text-[#106D20]">Layar 3 · Paket Wisata Desa</p>
        <h1
          className="text-3xl font-extrabold tracking-tight text-[#072417] sm:text-[36px]"
          style={{ textWrap: 'balance' }}
        >
          Paket wisata lengkap dengan rincian fasilitas &amp; simulasi biaya
        </h1>
        <p className="max-w-2xl text-base text-[#424843]">
          Pilih paket sesuai durasi kunjungan, lihat susunan acara per jam, dan hitung estimasi total biaya rombongan secara transparan sebelum memesan lewat WhatsApp.
        </p>
      </div>

      {/* Filter Tabs */}
      <div
        className="flex items-center gap-2 overflow-x-auto pb-1"
        role="tablist"
        aria-label="Filter durasi paket wisata"
      >
        {filterOptions.map((opt) => {
          const active = durationFilter === opt;
          return (
            <button
              key={opt}
              type="button"
              role="tab"
              aria-selected={active}
              onClick={() => setDurationFilter(opt)}
              className={`min-h-[44px] cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                active
                  ? 'bg-[#072417] text-white'
                  : 'bg-[#F2EDE4] text-[#1E3A2B] hover:bg-[#E7E2D9]'
              }`}
            >
              {opt}
            </button>
          );
        })}
      </div>

      {/* Main 12-column Layout: Package List + Sticky Calculator */}
      <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-12">
        {/* Left: Package Cards */}
        <div className="space-y-6 lg:col-span-7">
          {visiblePackages.map((pkg) => {
            const isSelected = pkg.id === activePackage.id;
            const isRundownOpen = expandedRundownId === pkg.id;

            return (
              <article
                key={pkg.id}
                className={`overflow-hidden rounded-2xl bg-[#FFFFFF] transition-all ${
                  isSelected
                    ? 'ring-2 ring-[#106D20] shadow-forest'
                    : 'border-hairline'
                }`}
              >
                <div className="grid grid-cols-1 sm:grid-cols-12">
                  <div className="h-44 sm:col-span-4 sm:h-auto bg-[#E7E2D9]">
                    <ScenicArtwork variant={pkg.artwork} title={pkg.name} />
                  </div>

                  <div className="flex flex-col justify-between p-5 sm:col-span-8">
                    <div className="space-y-2.5">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <span className="text-xs font-semibold text-[#424843]">
                          {pkg.durationLabel} · Min. {pkg.minPax} pax · ★ {pkg.rating}
                        </span>
                        {pkg.isPopular && (
                          <span className="text-xs font-bold text-[#D97706]">Favorit Wisatawan</span>
                        )}
                      </div>

                      <h2 className="text-xl font-extrabold text-[#072417]">{pkg.name}</h2>
                      <p className="text-sm leading-relaxed text-[#424843]">{pkg.summary}</p>

                      <div className="pt-1 text-xs text-[#424843]">
                        <span className="font-bold text-[#072417]">Destinasi: </span>
                        {pkg.destinationsIncluded.join(' · ')}
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap items-center justify-between gap-3 border-t border-[#1E3A2B]/10 pt-4">
                      <div>
                        <p className="text-xl font-extrabold text-[#D97706] tabular-nums">
                          {formatRupiah(pkg.pricePerPerson)}
                        </p>
                        <p className="text-xs text-[#424843]">per peserta</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            setExpandedRundownId(isRundownOpen ? null : pkg.id)
                          }
                          aria-expanded={isRundownOpen}
                          className="inline-flex min-h-[44px] cursor-pointer items-center gap-1 rounded-xl bg-[#F2EDE4] px-3.5 py-2 text-xs font-bold text-[#1E3A2B] hover:bg-[#E7E2D9]"
                        >
                          <span>Rincian &amp; Jadwal</span>
                          {isRundownOpen ? (
                            <ChevronUp className="h-4 w-4" aria-hidden="true" />
                          ) : (
                            <ChevronDown className="h-4 w-4" aria-hidden="true" />
                          )}
                        </button>

                        <button
                          type="button"
                          onClick={() => handleSelectPackage(pkg)}
                          className={`min-h-[44px] cursor-pointer rounded-xl px-4 py-2 text-xs font-bold transition-colors ${
                            isSelected
                              ? 'bg-[#106D20] text-white'
                              : 'bg-[#072417] text-white hover:bg-[#1E3A2B]'
                          }`}
                        >
                          {isSelected ? 'Sedang Dihitung' : 'Pilih Paket'}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Expanded details: Inclusions, Exclusions & Rundown */}
                {isRundownOpen && (
                  <div className="space-y-5 border-t border-[#1E3A2B]/10 bg-[#F8F3EA] p-5">
                    <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                      <div>
                        <h3 className="text-xs font-bold text-[#072417]">Sudah Termasuk Harga</h3>
                        <ul className="mt-2 space-y-1.5">
                          {pkg.includedItems.map((item) => (
                            <li key={item} className="flex items-start gap-2 text-xs text-[#1D1C16]">
                              <Check
                                className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#106D20]"
                                aria-hidden="true"
                              />
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-xs font-bold text-[#072417]">Belum Termasuk</h3>
                        <ul className="mt-2 space-y-1.5">
                          {pkg.excludedItems.map((item) => (
                            <li key={item} className="text-xs text-[#424843]">
                              · {item}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>

                    <div>
                      <h3 className="flex items-center gap-1.5 text-xs font-bold text-[#072417]">
                        <Clock className="h-3.5 w-3.5 text-[#D97706]" aria-hidden="true" />
                        <span>Perkiraan Susunan Acara (Rundown)</span>
                      </h3>
                      <div className="mt-2.5 space-y-2">
                        {pkg.rundown.map((step) => (
                          <div
                            key={step.time}
                            className="flex flex-col gap-0.5 rounded-lg bg-[#FFFFFF] px-3 py-2 text-xs sm:flex-row sm:items-center sm:gap-3 border-hairline"
                          >
                            <span className="w-28 shrink-0 font-bold text-[#106D20] tabular-nums">
                              {step.time}
                            </span>
                            <span className="text-[#1D1C16]">{step.activity}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Right: Interactive Cost Simulator & WhatsApp Checkout */}
        <aside className="lg:sticky lg:top-20 lg:col-span-5">
          <div className="rounded-2xl bg-[#FFFFFF] p-5 sm:p-6 shadow-forest border-hairline space-y-5">
            <div>
              <p className="text-xs font-bold text-[#106D20]">Simulasi Biaya Transparan</p>
              <h2 className="mt-1 text-xl font-extrabold text-[#072417]">
                {activePackage.name}
              </h2>
              <p className="mt-0.5 text-xs text-[#424843]">
                {activePackage.durationLabel} · Minimal {activePackage.minPax} peserta
              </p>
            </div>

            {/* Participant Counter */}
            <div className="rounded-xl bg-[#F2EDE4] p-4">
              <div className="flex items-center justify-between gap-3">
                <div>
                  <label htmlFor="pax-display" className="flex items-center gap-1.5 text-sm font-bold text-[#072417]">
                    <Users className="h-4 w-4 text-[#106D20]" aria-hidden="true" />
                    <span>Jumlah Peserta</span>
                  </label>
                  <p className="text-xs text-[#424843] tabular-nums">
                    Min. {activePackage.minPax} · Maks. {activePackage.maxPax} orang
                  </p>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    aria-label="Kurangi jumlah peserta"
                    disabled={pax <= activePackage.minPax}
                    onClick={() => setPax((p) => Math.max(activePackage.minPax, p - 1))}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-white text-[#072417] border-hairline disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#F8F3EA]"
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span
                    id="pax-display"
                    className="w-10 text-center text-base font-extrabold text-[#072417] tabular-nums"
                  >
                    {pax}
                  </span>
                  <button
                    type="button"
                    aria-label="Tambah jumlah peserta"
                    disabled={pax >= activePackage.maxPax}
                    onClick={() => setPax((p) => Math.min(activePackage.maxPax, p + 1))}
                    className="flex h-11 w-11 cursor-pointer items-center justify-center rounded-xl bg-white text-[#072417] border-hairline disabled:cursor-not-allowed disabled:opacity-40 hover:bg-[#F8F3EA]"
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Optional Add-ons (22x22 checkbox in 44x44 touch target) */}
            <div className="space-y-2.5">
              <p className="text-sm font-bold text-[#072417]">Tambahan Opsional (Jika Perlu)</p>
              <div className="space-y-2">
                {PACKAGE_ADDONS.map((addon) => {
                  const checked = selectedAddonIds.includes(addon.id);
                  return (
                    <label
                      key={addon.id}
                      className={`flex cursor-pointer items-start gap-2 rounded-xl p-3 transition-colors border ${
                        checked
                          ? 'border-[#106D20] bg-[#CAEAD4]/30'
                          : 'border-[#1E3A2B]/10 bg-[#FEF9F0] hover:bg-[#F8F3EA]'
                      }`}
                    >
                      <span className="flex h-10 w-10 shrink-0 items-center justify-center">
                        <input
                          type="checkbox"
                          checked={checked}
                          onChange={() => toggleAddon(addon.id)}
                          className="h-[22px] w-[22px] cursor-pointer accent-[#106D20]"
                        />
                      </span>
                      <span className="flex-1 pt-1">
                        <span className="block text-sm font-semibold text-[#072417]">
                          {addon.name}
                        </span>
                        <span className="block text-xs text-[#424843] tabular-nums">
                          + {formatRupiah(addon.price)} ({addon.unitLabel})
                        </span>
                      </span>
                    </label>
                  );
                })}
              </div>
            </div>

            {/* Price Breakdown */}
            <div className="space-y-2 border-t border-[#1E3A2B]/10 pt-4 text-sm">
              <div className="flex items-center justify-between text-[#424843]">
                <span className="tabular-nums">
                  Paket ({pax} × {formatRupiah(activePackage.pricePerPerson)})
                </span>
                <span className="font-semibold text-[#072417] tabular-nums">
                  {formatRupiah(calculation.baseSubtotal)}
                </span>
              </div>

              {calculation.activeAddons.map((a) => (
                <div key={a.id} className="flex items-center justify-between text-[#424843]">
                  <span className="truncate pr-2">{a.name}</span>
                  <span className="font-semibold text-[#072417] tabular-nums">
                    {formatRupiah(a.cost)}
                  </span>
                </div>
              ))}

              <div className="flex items-baseline justify-between border-t border-[#1E3A2B]/10 pt-3">
                <span className="text-sm font-bold text-[#072417]">Total Estimasi Biaya</span>
                <span className="text-2xl font-extrabold text-[#D97706] tabular-nums">
                  {formatRupiah(calculation.grandTotal)}
                </span>
              </div>
              <p className="text-[11px] text-[#424843]">
                Pembayaran dilakukan langsung setelah jadwal dikonfirmasi oleh admin desa di WhatsApp.
              </p>
            </div>

            <button
              type="button"
              onClick={handleBookNow}
              className="inline-flex min-h-[52px] w-full cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#106D20] px-5 py-3 text-base font-bold text-white transition-all hover:bg-[#072417] active:scale-[0.99]"
            >
              <MessageCircle className="h-5 w-5" aria-hidden="true" />
              <span>Pesan Paket via WhatsApp</span>
            </button>
          </div>
        </aside>
      </div>
    </div>
  );
};
