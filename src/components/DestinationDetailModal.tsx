import React, { useEffect } from 'react';
import { Check, Clock, Compass, MapPin, MessageCircle, ShieldCheck, X } from 'lucide-react';
import { formatRupiah } from '../data/lerengAsriData';
import { Destination } from '../types/tourism';
import { ScenicArtwork } from './ScenicArtwork';
import { TrailDifficultyGauge } from './TrailDifficultyGauge';

interface DestinationDetailModalProps {
  destination: Destination | null;
  isInItinerary: boolean;
  onToggleItinerary: (id: string) => void;
  onClose: () => void;
  onBookDestination: (destination: Destination) => void;
}

export const DestinationDetailModal: React.FC<DestinationDetailModalProps> = ({
  destination,
  isInItinerary,
  onToggleItinerary,
  onClose,
  onBookDestination,
}) => {
  useEffect(() => {
    if (!destination) return;
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [destination, onClose]);

  if (!destination) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#072417]/55 p-0 sm:items-center sm:p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="dest-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-2xl overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-[#FEF9F0] shadow-forest border-hairline"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header image */}
        <div className="relative h-56 sm:h-64 w-full overflow-hidden bg-[#E7E2D9]">
          <ScenicArtwork variant={destination.artwork} title={destination.name} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#072417]/80 via-[#072417]/20 to-transparent" />
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup detail destinasi"
            className="absolute right-4 top-4 flex h-11 w-11 items-center justify-center rounded-full bg-[#FEF9F0]/95 text-[#072417] shadow-forest transition-transform hover:scale-105 cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
          <div className="absolute bottom-4 left-5 right-5 text-white">
            <p className="text-xs font-semibold text-[#FDE68A]">
              {destination.category} · {destination.elevation} · Rating {destination.rating} ({destination.reviewCount} ulasan)
            </p>
            <h2 id="dest-modal-title" className="mt-1 text-2xl font-extrabold leading-tight">
              {destination.name}
            </h2>
          </div>
        </div>

        {/* Body */}
        <div className="space-y-6 p-5 sm:p-7">
          {/* Pricing & quick facts */}
          <div className="grid grid-cols-1 gap-3 rounded-xl bg-[#F2EDE4] p-4 sm:grid-cols-3 border-hairline">
            <div>
              <p className="text-xs font-semibold text-[#424843]">Harga Tiket Resmi</p>
              <p className="mt-0.5 text-lg font-extrabold text-[#D97706] tabular-nums">
                {formatRupiah(destination.ticketPrice)}
              </p>
              <p className="text-xs text-[#424843]">{destination.priceUnit}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#424843]">Jam Operasional</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm font-bold text-[#072417] tabular-nums">
                <Clock className="h-4 w-4 text-[#106D20]" aria-hidden="true" />
                {destination.openHours}
              </p>
              <p className="text-xs text-[#424843]">Estimasi {destination.durationEstimate}</p>
            </div>
            <div>
              <p className="text-xs font-semibold text-[#424843]">Akses & Parkir</p>
              <p className="mt-0.5 flex items-center gap-1.5 text-sm font-bold text-[#072417]">
                <MapPin className="h-4 w-4 text-[#106D20]" aria-hidden="true" />
                {destination.parkingFee}
              </p>
              <p className="text-xs text-[#424843]">{destination.distanceFromGate}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#1E3A2B]/10 pb-4">
            <TrailDifficultyGauge level={destination.difficulty} />
            <span className="flex items-center gap-1.5 text-xs font-semibold text-[#106D20]">
              <ShieldCheck className="h-4 w-4" aria-hidden="true" />
              {destination.localGuideAvailable
                ? 'Tersedia Pemandu Lokal Desa'
                : 'Kunjungan Mandiri Ramah Keluarga'}
            </span>
          </div>

          <div>
            <h3 className="text-base font-bold text-[#072417]">Tentang Destinasi</h3>
            <p className="mt-2 text-sm leading-relaxed text-[#424843]">
              {destination.fullDesc}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div>
              <h3 className="text-sm font-bold text-[#072417]">Daya Tarik Utama</h3>
              <ul className="mt-2.5 space-y-2">
                {destination.highlights.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-[#424843]">
                    <Check className="mt-0.5 h-4 w-4 shrink-0 text-[#106D20]" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="text-sm font-bold text-[#072417]">Fasilitas Tersedia</h3>
              <ul className="mt-2.5 space-y-2">
                {destination.facilities.map((fac) => (
                  <li key={fac} className="flex items-start gap-2 text-sm text-[#424843]">
                    <Compass className="mt-0.5 h-4 w-4 shrink-0 text-[#D97706]" aria-hidden="true" />
                    <span>{fac}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="rounded-xl bg-[#FEF3C7]/70 p-4 border border-[#D97706]/20">
            <p className="text-xs font-bold text-[#6E3900]">Saran Kunjungan</p>
            <p className="mt-1 text-sm text-[#341800]">{destination.visitorTips}</p>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-3 pt-2 sm:flex-row">
            <button
              type="button"
              onClick={() => onToggleItinerary(destination.id)}
              className={`min-h-[48px] flex-1 cursor-pointer rounded-xl px-4 py-3 text-sm font-bold transition-colors ${
                isInItinerary
                  ? 'bg-[#CAEAD4] text-[#072417] border border-[#106D20]/30'
                  : 'border-[1.5px] border-[#1E3A2B] bg-transparent text-[#1E3A2B] hover:bg-[#F2EDE4]'
              }`}
            >
              {isInItinerary ? 'Tersimpan di Rencana Kunjungan' : '+ Tambah ke Rencana Kunjungan'}
            </button>
            <button
              type="button"
              onClick={() => onBookDestination(destination)}
              className="inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#106D20] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#072417]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Pesan via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
