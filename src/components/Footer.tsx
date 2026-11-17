import React from 'react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_DISPLAY_PHONE } from '../data/lerengAsriData';
import { ScreenId } from '../types/tourism';

interface FooterProps {
  onNavigate: (screen: ScreenId) => void;
  onOpenWhatsApp: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenWhatsApp }) => {
  return (
    <footer className="border-t border-[#1E3A2B]/12 bg-[#F2EDE4] pb-24 pt-12 md:pb-12">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div>
            <p className="text-lg font-extrabold text-[#072417]">Desa Wisata Lereng Asri</p>
            <p className="mt-2 max-w-sm text-sm leading-relaxed text-[#424843]">
              Pusat informasi resmi ekowisata, tarif tiket, paket wisata desa, dan pemesanan langsung bersama Pokdarwis Lereng Asri.
            </p>
          </div>

          <div>
            <p className="text-sm font-bold text-[#072417]">Navigasi Informasi</p>
            <ul className="mt-3 space-y-2 text-sm text-[#424843]">
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(ScreenId.BERANDA)}
                  className="cursor-pointer hover:text-[#072417] hover:underline"
                >
                  Beranda Desa Wisata Lereng Asri
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(ScreenId.DESTINASI)}
                  className="cursor-pointer hover:text-[#072417] hover:underline"
                >
                  Katalog Destinasi &amp; Harga Tiket
                </button>
              </li>
              <li>
                <button
                  type="button"
                  onClick={() => onNavigate(ScreenId.PAKET)}
                  className="cursor-pointer hover:text-[#072417] hover:underline"
                >
                  Paket Wisata &amp; Simulasi Biaya
                </button>
              </li>
            </ul>
          </div>

          <div>
            <p className="text-sm font-bold text-[#072417]">Sekretariat &amp; Layanan Pengunjung</p>
            <p className="mt-3 text-sm text-[#424843]">
              Jl. Raya Lereng Selatan No. 14, Kec. Puncak Asri · Buka setiap hari 04.30 – 17.30 WIB
            </p>
            <p className="mt-1 text-sm text-[#424843] tabular-nums">
              Admin WhatsApp: {WHATSAPP_DISPLAY_PHONE} (07.00 – 20.00 WIB)
            </p>
            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="mt-4 inline-flex min-h-[44px] cursor-pointer items-center gap-2 rounded-xl bg-[#1E3A2B] px-4 py-2 text-sm font-bold text-white hover:bg-[#072417]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Hubungi Admin Desa</span>
            </button>
          </div>
        </div>

        <div className="mt-10 border-t border-[#1E3A2B]/10 pt-6 text-xs text-[#424843] flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 Kelompok Sadar Wisata (Pokdarwis) Desa Wisata Lereng Asri.</p>
          <p>Tarif tercantum adalah tarif resmi pengelola desa wisata.</p>
        </div>
      </div>
    </footer>
  );
};
