import React, { useEffect, useMemo, useState } from 'react';
import { Check, Copy, ExternalLink, MessageCircle, X } from 'lucide-react';
import {
  buildWhatsAppUrl,
  formatRupiah,
  WHATSAPP_DISPLAY_PHONE,
} from '../data/lerengAsriData';
import { BookingContext } from '../types/tourism';

interface WhatsAppBookingModalProps {
  booking: BookingContext | null;
  onClose: () => void;
}

export const WhatsAppBookingModal: React.FC<WhatsAppBookingModalProps> = ({
  booking,
  onClose,
}) => {
  const [visitorName, setVisitorName] = useState('');
  const [visitDate, setVisitDate] = useState('');
  const [pax, setPax] = useState(2);
  const [notes, setNotes] = useState('');
  const [copied, setCopied] = useState(false);
  const [validationError, setValidationError] = useState('');

  useEffect(() => {
    if (booking) {
      setPax(booking.defaultPax || 2);
      setCopied(false);
      setValidationError('');
    }
  }, [booking]);

  useEffect(() => {
    if (!booking) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [booking, onClose]);

  const formattedMessage = useMemo(() => {
    if (!booking) return '';
    const lines: string[] = [
      'Halo Admin Desa Wisata Lereng Asri,',
      'Saya ingin menanyakan / melakukan reservasi kunjungan dengan rincian berikut:',
      '',
      `• Nama Pemesan: ${visitorName.trim() || '(belum diisi)'}`,
      `• Rencana Tanggal: ${visitDate || '(belum dipilih)'}`,
      `• Jumlah Peserta: ${pax} orang`,
      `• Pilihan Layanan: ${booking.title}`,
    ];

    if (booking.selectedDestinations && booking.selectedDestinations.length > 0) {
      lines.push(`• Daftar Destinasi: ${booking.selectedDestinations.join(', ')}`);
    }

    if (booking.selectedAddons && booking.selectedAddons.length > 0) {
      lines.push(
        `• Tambahan Opsional: ${booking.selectedAddons.map((a) => a.name).join(', ')}`
      );
    }

    if (booking.estimatedTotal && booking.estimatedTotal > 0) {
      const recalculated =
        booking.type === 'package' && booking.unitPrice
          ? booking.estimatedTotal
          : booking.unitPrice
            ? booking.unitPrice * pax
            : booking.estimatedTotal;
      lines.push(`• Estimasi Biaya Awal: ${formatRupiah(recalculated)}`);
    }

    if (notes.trim()) {
      lines.push(`• Catatan Tambahan: ${notes.trim()}`);
    }

    lines.push('', 'Mohon konfirmasi ketersediaan jadwal dan langkah pembayaran. Terima kasih.');
    return lines.join('\n');
  }, [booking, visitorName, visitDate, pax, notes]);

  if (!booking) return null;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(formattedMessage);
      setCopied(true);
      setTimeout(() => setCopied(false), 2200);
    } catch {
      setCopied(false);
    }
  };

  const handleOpenWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    if (!visitorName.trim()) {
      setValidationError('Mohon isi nama Anda terlebih dahulu agar admin mudah menghubungi.');
      return;
    }
    setValidationError('');
    const url = buildWhatsAppUrl(formattedMessage);
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-end justify-center bg-[#072417]/55 p-0 sm:items-center sm:p-4 backdrop-blur-xs"
      role="dialog"
      aria-modal="true"
      aria-labelledby="wa-modal-title"
      onClick={onClose}
    >
      <div
        className="relative max-h-[92vh] w-full max-w-xl overflow-y-auto rounded-t-3xl sm:rounded-2xl bg-[#FEF9F0] p-5 sm:p-7 shadow-forest border-hairline"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 border-b border-[#1E3A2B]/10 pb-4">
          <div>
            <p className="text-xs font-semibold text-[#106D20]">
              Reservasi Resmi · WhatsApp {WHATSAPP_DISPLAY_PHONE}
            </p>
            <h2 id="wa-modal-title" className="mt-1 text-xl font-extrabold text-[#072417]">
              {booking.title}
            </h2>
            {booking.subtitle && (
              <p className="mt-0.5 text-sm text-[#424843]">{booking.subtitle}</p>
            )}
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Tutup formulir WhatsApp"
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-[#F2EDE4] text-[#072417] hover:bg-[#E7E2D9] cursor-pointer"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <form onSubmit={handleOpenWhatsApp} className="mt-5 space-y-4">
          <div>
            <label htmlFor="wa-name" className="block text-sm font-semibold text-[#072417]">
              Nama Lengkap Pemesan <span className="text-[#BA1A1A]">*</span>
            </label>
            <input
              id="wa-name"
              type="text"
              value={visitorName}
              onChange={(e) => {
                setVisitorName(e.target.value);
                if (validationError) setValidationError('');
              }}
              placeholder="Contoh: Budi Santoso"
              className="mt-1.5 h-[52px] w-full rounded-lg border border-[#1E3A2B]/20 bg-white px-4 text-base text-[#1D1C16] placeholder:text-[#727973] focus:border-[#388E3C] focus:outline-none"
            />
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
              <label htmlFor="wa-date" className="block text-sm font-semibold text-[#072417]">
                Rencana Tanggal Kunjungan
              </label>
              <input
                id="wa-date"
                type="date"
                value={visitDate}
                onChange={(e) => setVisitDate(e.target.value)}
                className="mt-1.5 h-[52px] w-full rounded-lg border border-[#1E3A2B]/20 bg-white px-4 text-base text-[#1D1C16] focus:border-[#388E3C] focus:outline-none"
              />
            </div>

            <div>
              <label htmlFor="wa-pax" className="block text-sm font-semibold text-[#072417]">
                Jumlah Peserta (Orang)
              </label>
              <input
                id="wa-pax"
                type="number"
                min={booking.minPax || 1}
                max={100}
                value={pax}
                onChange={(e) =>
                  setPax(Math.max(booking.minPax || 1, Number(e.target.value) || 1))
                }
                className="mt-1.5 h-[52px] w-full rounded-lg border border-[#1E3A2B]/20 bg-white px-4 text-base text-[#1D1C16] tabular-nums focus:border-[#388E3C] focus:outline-none"
              />
            </div>
          </div>

          <div>
            <label htmlFor="wa-notes" className="block text-sm font-semibold text-[#072417]">
              Catatan Tambahan (Opsional)
            </label>
            <input
              id="wa-notes"
              type="text"
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
              placeholder="Misal: rombongan anak SD, minta menu tidak pedas"
              className="mt-1.5 h-[52px] w-full rounded-lg border border-[#1E3A2B]/20 bg-white px-4 text-base text-[#1D1C16] placeholder:text-[#727973] focus:border-[#388E3C] focus:outline-none"
            />
          </div>

          {validationError && (
            <p role="alert" className="rounded-lg bg-[#FFDAD6] px-3.5 py-2.5 text-sm font-medium text-[#93000A]">
              {validationError}
            </p>
          )}

          {/* Live message preview */}
          <div className="rounded-xl bg-[#F2EDE4] p-4 border-hairline">
            <div className="flex items-center justify-between gap-2">
              <span className="text-xs font-bold text-[#072417]">Pratinjau Pesan WhatsApp</span>
              <button
                type="button"
                onClick={handleCopy}
                className="inline-flex min-h-[36px] cursor-pointer items-center gap-1.5 rounded-lg bg-white px-3 py-1 text-xs font-semibold text-[#1E3A2B] border-hairline hover:bg-[#F8F3EA]"
              >
                {copied ? (
                  <>
                    <Check className="h-3.5 w-3.5 text-[#106D20]" aria-hidden="true" />
                    <span>Pesan Disalin</span>
                  </>
                ) : (
                  <>
                    <Copy className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Salin Teks</span>
                  </>
                )}
              </button>
            </div>
            <pre className="mt-2 whitespace-pre-wrap font-sans text-xs leading-relaxed text-[#424843]">
              {formattedMessage}
            </pre>
          </div>

          <div className="flex flex-col gap-3 pt-1 sm:flex-row">
            <button
              type="button"
              onClick={onClose}
              className="min-h-[48px] cursor-pointer rounded-xl border-[1.5px] border-[#1E3A2B] px-5 py-3 text-sm font-bold text-[#1E3A2B] hover:bg-[#F2EDE4]"
            >
              Batal
            </button>
            <button
              type="submit"
              className="inline-flex min-h-[48px] flex-1 cursor-pointer items-center justify-center gap-2 rounded-xl bg-[#106D20] px-5 py-3 text-sm font-bold text-white transition-all hover:bg-[#072417]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Kirim Pesan via WhatsApp</span>
              <ExternalLink className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
