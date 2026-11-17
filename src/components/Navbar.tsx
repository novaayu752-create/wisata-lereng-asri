import React from 'react';
import { Compass, Home, MessageCircle, Package } from 'lucide-react';
import { ScreenId } from '../types/tourism';

interface NavbarProps {
  activeScreen: ScreenId;
  onNavigate: (screen: ScreenId) => void;
  onOpenWhatsApp: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  activeScreen,
  onNavigate,
  onOpenWhatsApp,
}) => {
  const navItems: { id: ScreenId; label: string; shortLabel: string; icon: React.ReactNode }[] = [
    {
      id: ScreenId.BERANDA,
      label: 'Beranda',
      shortLabel: 'Beranda',
      icon: <Home className="h-4 w-4" aria-hidden="true" />,
    },
    {
      id: ScreenId.DESTINASI,
      label: 'Katalog Destinasi',
      shortLabel: 'Destinasi',
      icon: <Compass className="h-4 w-4" aria-hidden="true" />,
    },
    {
      id: ScreenId.PAKET,
      label: 'Paket Wisata',
      shortLabel: 'Paket',
      icon: <Package className="h-4 w-4" aria-hidden="true" />,
    },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-[#1E3A2B]/10 bg-[#FEF9F0]/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-[1200px] items-center justify-between gap-8 px-4 py-3 sm:px-6">
          {/* Zone 1: Single text element wordmark */}
          <button
            type="button"
            onClick={() => onNavigate(ScreenId.BERANDA)}
            className="whitespace-nowrap shrink-0 text-left text-lg font-extrabold tracking-tight text-[#072417] hover:text-[#1E3A2B] transition-colors cursor-pointer"
          >
            Lereng Asri
          </button>

          {/* Zone 2: Clean single-line text nav links */}
          <nav
            aria-label="Navigasi Utama"
            className="hidden md:flex items-center gap-7 text-sm font-semibold"
          >
            {navItems.map((item) => {
              const isActive = activeScreen === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => onNavigate(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`whitespace-nowrap shrink-0 cursor-pointer py-1.5 transition-colors border-b-2 ${
                    isActive
                      ? 'border-[#106D20] text-[#072417]'
                      : 'border-transparent text-[#424843] hover:text-[#072417] hover:border-[#C2C8C2]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="flex items-center shrink-0">
            <button
              type="button"
              onClick={onOpenWhatsApp}
              className="inline-flex min-h-[44px] items-center gap-2 whitespace-nowrap shrink-0 cursor-pointer rounded-xl bg-[#106D20] px-4 py-2 text-sm font-bold text-white transition-all hover:bg-[#072417] active:scale-[0.99]"
            >
              <MessageCircle className="h-4 w-4" aria-hidden="true" />
              <span>Pesan WhatsApp</span>
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Bottom Navigation (within 15% viewport height cap, thumb-zone accessible) */}
      <nav
        aria-label="Navigasi Layar Mobile"
        className="fixed bottom-0 left-0 right-0 z-40 border-t border-[#1E3A2B]/12 bg-[#FEF9F0]/98 backdrop-blur-md md:hidden"
      >
        <div className="grid grid-cols-3 px-2 py-1">
          {navItems.map((item) => {
            const isActive = activeScreen === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => onNavigate(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`flex min-h-[48px] flex-col items-center justify-center gap-1 rounded-lg px-2 py-1 text-xs font-semibold transition-colors cursor-pointer ${
                  isActive
                    ? 'bg-[#CAEAD4]/65 text-[#072417]'
                    : 'text-[#424843] hover:text-[#072417]'
                }`}
              >
                {item.icon}
                <span className="whitespace-nowrap">{item.shortLabel}</span>
              </button>
            );
          })}
        </div>
      </nav>
    </>
  );
};
