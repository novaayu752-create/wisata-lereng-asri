import React, { useMemo, useState } from 'react';
import { Check, MessageCircle, Plus, Search, Trash2 } from 'lucide-react';
import { DESTINATIONS, formatRupiah } from '../data/lerengAsriData';
import { Destination, DestinationCategory, DifficultyLevel } from '../types/tourism';
import { ScenicArtwork } from './ScenicArtwork';
import { TrailDifficultyGauge } from './TrailDifficultyGauge';

interface DestinationsScreenProps {
  itineraryIds: string[];
  onToggleItinerary: (id: string) => void;
  onClearItinerary: () => void;
  onSelectDestination: (destination: Destination) => void;
  onBookDestination: (destination: Destination) => void;
  onBookItinerary: (destinations: Destination[]) => void;
}

export const DestinationsScreen: React.FC<DestinationsScreenProps> = ({
  itineraryIds,
  onToggleItinerary,
  onClearItinerary,
  onSelectDestination,
  onBookDestination,
  onBookItinerary,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<DestinationCategory>(
    DestinationCategory.SEMUA
  );
  const [selectedDifficulty, setSelectedDifficulty] = useState<'Semua' | DifficultyLevel>('Semua');

  const categories = Object.values(DestinationCategory);
  const difficulties: ('Semua' | DifficultyLevel)[] = [
    'Semua',
    DifficultyLevel.MUDAH,
    DifficultyLevel.SEDANG,
    DifficultyLevel.MENANTANG,
  ];

  const filteredDestinations = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return DESTINATIONS.filter((dest) => {
      const matchesCategory =
        selectedCategory === DestinationCategory.SEMUA || dest.category === selectedCategory;
      const matchesDifficulty =
        selectedDifficulty === 'Semua' || dest.difficulty === selectedDifficulty;
      const matchesQuery =
        !q ||
        dest.name.toLowerCase().includes(q) ||
        dest.shortDesc.toLowerCase().includes(q) ||
        dest.category.toLowerCase().includes(q);
      return matchesCategory && matchesDifficulty && matchesQuery;
    });
  }, [searchQuery, selectedCategory, selectedDifficulty]);

  const itineraryDestinations = useMemo(
    () => DESTINATIONS.filter((d) => itineraryIds.includes(d.id)),
    [itineraryIds]
  );

  const itineraryEstimatedTotal = useMemo(
    () => itineraryDestinations.reduce((sum, item) => sum + item.ticketPrice, 0),
    [itineraryDestinations]
  );

  const handleResetFilters = () => {
    setSearchQuery('');
    setSelectedCategory(DestinationCategory.SEMUA);
    setSelectedDifficulty('Semua');
  };

  return (
    <div className="mx-auto max-w-[1200px] space-y-8 px-4 pb-20 pt-8 sm:px-6">
      {/* Screen Header */}
      <div className="space-y-3">
        <p className="text-sm font-bold text-[#106D20]">Layar 2 · Katalog Destinasi Wisata</p>
        <h1
          className="text-3xl font-extrabold tracking-tight text-[#072417] sm:text-[36px]"
          style={{ textWrap: 'balance' }}
        >
          Semua objek wisata, jam buka, dan tarif tiket resmi
        </h1>
        <p className="max-w-2xl text-base text-[#424843]">
          Saring destinasi sesuai minat perjalanan Anda, lihat tingkat kesulitan jalur, dan tandai lokasi favorit untuk mengirim rencana kunjungan langsung ke WhatsApp admin.
        </p>
      </div>

      {/* Search & Filters */}
      <div className="space-y-4 rounded-2xl bg-[#FFFFFF] p-4 sm:p-5 border-hairline">
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-12">
          <div className="relative lg:col-span-6">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 h-5 w-5 -translate-y-1/2 text-[#424843]"
              aria-hidden="true"
            />
            <input
              type="search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Cari destinasi, kopi, sunrise, air terjun, homestay..."
              aria-label="Cari destinasi wisata"
              className="h-[52px] w-full rounded-xl border border-[#1E3A2B]/20 bg-[#FEF9F0] pl-12 pr-4 text-base text-[#1D1C16] placeholder:text-[#727973] focus:border-[#388E3C] focus:outline-none"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2 lg:col-span-6 lg:justify-end">
            <span className="text-xs font-semibold text-[#424843] mr-1">Jalur:</span>
            {difficulties.map((diff) => {
              const active = selectedDifficulty === diff;
              return (
                <button
                  key={diff}
                  type="button"
                  onClick={() => setSelectedDifficulty(diff)}
                  className={`min-h-[44px] cursor-pointer rounded-xl px-3.5 py-2 text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
                    active
                      ? 'bg-[#072417] text-white'
                      : 'bg-[#F2EDE4] text-[#1E3A2B] hover:bg-[#E7E2D9]'
                  }`}
                >
                  {diff === 'Semua' ? 'Semua Jalur' : diff}
                </button>
              );
            })}
          </div>
        </div>

        {/* Category filter chips (horizontal scroll on mobile) */}
        <div
          className="flex items-center gap-2 overflow-x-auto pb-1"
          role="tablist"
          aria-label="Filter kategori destinasi"
        >
          {categories.map((cat) => {
            const active = selectedCategory === cat;
            return (
              <button
                key={cat}
                type="button"
                role="tab"
                aria-selected={active}
                onClick={() => setSelectedCategory(cat)}
                className={`min-h-[44px] cursor-pointer rounded-full px-4 py-2 text-sm font-semibold transition-colors whitespace-nowrap shrink-0 ${
                  active
                    ? 'bg-[#106D20] text-white'
                    : 'bg-[#F2EDE4] text-[#1E3A2B] hover:bg-[#E7E2D9]'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Mini Itinerary Planner Summary (shows only when user selects 1+ destinations) */}
      {itineraryDestinations.length > 0 && (
        <div className="flex flex-col gap-4 rounded-2xl bg-[#CAEAD4]/55 p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5 border border-[#106D20]/25">
          <div>
            <p className="text-sm font-extrabold text-[#072417]">
              Rencana Kunjungan Tersimpan ({itineraryDestinations.length} destinasi)
            </p>
            <p className="mt-0.5 text-xs text-[#1E3A2B]">
              {itineraryDestinations.map((d) => d.name).join(' · ')}
            </p>
            <p className="mt-1 text-xs font-bold text-[#072417] tabular-nums">
              Estimasi total tiket satuan: {formatRupiah(itineraryEstimatedTotal)} /orang
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-2.5 shrink-0">
            <button
              type="button"
              onClick={onClearItinerary}
              aria-label="Kosongkan rencana kunjungan"
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-1.5 rounded-xl bg-white/80 px-3.5 py-2 text-xs font-bold text-[#424843] hover:bg-white"
            >
              <Trash2 className="h-4 w-4" aria-hidden="true" />
              <span>Hapus</span>
            </button>
            <button
              type="button"
              onClick={() => onBookItinerary(itineraryDestinations)}
              className="inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl bg-[#106D20] px-4 py-2 text-sm font-bold text-white hover:bg-[#072417]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Kirim Rencana ke WhatsApp</span>
            </button>
          </div>
        </div>
      )}

      {/* Results count */}
      <div className="flex items-center justify-between text-sm text-[#424843]">
        <p className="tabular-nums">
          Menampilkan <span className="font-bold text-[#072417]">{filteredDestinations.length}</span> dari{' '}
          {DESTINATIONS.length} destinasi
        </p>
        {(searchQuery ||
          selectedCategory !== DestinationCategory.SEMUA ||
          selectedDifficulty !== 'Semua') && (
          <button
            type="button"
            onClick={handleResetFilters}
            className="cursor-pointer font-semibold text-[#106D20] hover:underline"
          >
            Atur ulang filter
          </button>
        )}
      </div>

      {/* Destination Cards Grid or Empty State */}
      {filteredDestinations.length === 0 ? (
        <div className="rounded-2xl bg-[#FFFFFF] p-10 text-center border-hairline">
          <p className="text-lg font-bold text-[#072417]">
            Tidak ada destinasi yang sesuai dengan pencarian Anda
          </p>
          <p className="mt-1 text-sm text-[#424843]">
            Coba ubah kata kunci atau pilih kategori lain untuk melihat seluruh daftar wisata Lereng Asri.
          </p>
          <button
            type="button"
            onClick={handleResetFilters}
            className="mt-5 min-h-[48px] cursor-pointer rounded-xl bg-[#072417] px-5 py-2.5 text-sm font-bold text-white hover:bg-[#1E3A2B]"
          >
            Tampilkan Semua Destinasi
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredDestinations.map((dest) => {
            const isSaved = itineraryIds.includes(dest.id);
            return (
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
                      <span className="tabular-nums">{dest.openHours}</span>
                    </div>

                    <h2 className="text-lg font-bold leading-snug text-[#072417]">{dest.name}</h2>
                    <p className="text-sm leading-relaxed text-[#424843]">{dest.shortDesc}</p>
                  </div>

                  <div className="space-y-4 pt-3 border-t border-[#1E3A2B]/10">
                    <div className="flex items-end justify-between gap-2">
                      <div>
                        <TrailDifficultyGauge level={dest.difficulty} />
                        <p className="mt-1 text-xs text-[#424843] tabular-nums">
                          Durasi {dest.durationEstimate} · ★ {dest.rating}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-lg font-extrabold text-[#D97706] tabular-nums">
                          {formatRupiah(dest.ticketPrice)}
                        </p>
                        <p className="text-[11px] text-[#424843]">{dest.priceUnit}</p>
                      </div>
                    </div>

                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => onToggleItinerary(dest.id)}
                        aria-pressed={isSaved}
                        className={`inline-flex min-h-[44px] cursor-pointer items-center justify-center gap-1.5 rounded-xl px-3 py-2 text-xs font-bold transition-colors whitespace-nowrap shrink-0 ${
                          isSaved
                            ? 'bg-[#CAEAD4] text-[#072417]'
                            : 'bg-[#F2EDE4] text-[#1E3A2B] hover:bg-[#E7E2D9]'
                        }`}
                      >
                        {isSaved ? (
                          <>
                            <Check className="h-4 w-4 text-[#106D20]" aria-hidden="true" />
                            <span>Ditandai</span>
                          </>
                        ) : (
                          <>
                            <Plus className="h-4 w-4" aria-hidden="true" />
                            <span>Rencana</span>
                          </>
                        )}
                      </button>

                      <button
                        type="button"
                        onClick={() => onSelectDestination(dest)}
                        className="min-h-[44px] flex-1 cursor-pointer rounded-xl border-[1.5px] border-[#1E3A2B] px-3 py-2 text-xs font-bold text-[#1E3A2B] hover:bg-[#F8F3EA]"
                      >
                        Detail
                      </button>

                      <button
                        type="button"
                        onClick={() => onBookDestination(dest)}
                        className="inline-flex min-h-[44px] flex-1 cursor-pointer items-center justify-center gap-1.5 rounded-xl bg-[#106D20] px-3 py-2 text-xs font-bold text-white hover:bg-[#072417]"
                      >
                        <MessageCircle className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>Pesan WA</span>
                      </button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      )}
    </div>
  );
};
