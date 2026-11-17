import { useEffect, useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { DestinationDetailModal } from './components/DestinationDetailModal';
import { DestinationsScreen } from './components/DestinationsScreen';
import { Footer } from './components/Footer';
import { HomeScreen } from './components/HomeScreen';
import { Navbar } from './components/Navbar';
import { PackagesScreen } from './components/PackagesScreen';
import { WhatsAppBookingModal } from './components/WhatsAppBookingModal';
import { formatRupiah } from './data/lerengAsriData';
import { BookingContext, Destination, ScreenId, TourPackage } from './types/tourism';

function parseHashScreen(): ScreenId {
  const hash = window.location.hash.replace('#', '').toLowerCase();
  if (hash === ScreenId.DESTINASI) return ScreenId.DESTINASI;
  if (hash === ScreenId.PAKET) return ScreenId.PAKET;
  return ScreenId.BERANDA;
}

export default function App() {
  const [activeScreen, setActiveScreen] = useState<ScreenId>(() => parseHashScreen());
  const [itineraryIds, setItineraryIds] = useState<string[]>([]);
  const [activeDestination, setActiveDestination] = useState<Destination | null>(null);
  const [preselectedPackageId, setPreselectedPackageId] = useState<string | null>(null);
  const [bookingContext, setBookingContext] = useState<BookingContext | null>(null);

  useEffect(() => {
    const handleHashChange = () => {
      setActiveScreen(parseHashScreen());
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleNavigate = (screen: ScreenId) => {
    setActiveScreen(screen);
    if (window.location.hash !== `#${screen}`) {
      window.history.pushState(null, '', `#${screen}`);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleToggleItinerary = (id: string) => {
    setItineraryIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const handleOpenGeneralWhatsApp = () => {
    setBookingContext({
      type: 'general',
      title: 'Konsultasi & Informasi Kunjungan',
      subtitle: 'Tanyakan jadwal, ketersediaan pemandu, atau rencana kunjungan Anda',
      defaultPax: 2,
      minPax: 1,
    });
  };

  const handleBookDestination = (destination: Destination) => {
    setActiveDestination(null);
    setBookingContext({
      type: 'destination',
      title: `Tiket & Kunjungan: ${destination.name}`,
      subtitle: `${formatRupiah(destination.ticketPrice)} ${destination.priceUnit} · ${destination.openHours}`,
      unitPrice: destination.ticketPrice,
      defaultPax: 2,
      minPax: 1,
      selectedDestinations: [destination.name],
      estimatedTotal: destination.ticketPrice * 2,
    });
  };

  const handleBookItinerary = (destinations: Destination[]) => {
    const totalPerPax = destinations.reduce((sum, d) => sum + d.ticketPrice, 0);
    setBookingContext({
      type: 'itinerary',
      title: `Rencana Kunjungan (${destinations.length} Destinasi)`,
      subtitle: `Estimasi tiket satuan ${formatRupiah(totalPerPax)}/orang`,
      unitPrice: totalPerPax,
      defaultPax: 2,
      minPax: 1,
      selectedDestinations: destinations.map((d) => d.name),
      estimatedTotal: totalPerPax * 2,
    });
  };

  const handleBookPackageQuick = (pkg: TourPackage) => {
    setPreselectedPackageId(pkg.id);
    setBookingContext({
      type: 'package',
      title: pkg.name,
      subtitle: `${pkg.durationLabel} · Min. ${pkg.minPax} peserta`,
      unitPrice: pkg.pricePerPerson,
      defaultPax: pkg.minPax,
      minPax: pkg.minPax,
      selectedDestinations: pkg.destinationsIncluded,
      estimatedTotal: pkg.pricePerPerson * pkg.minPax,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#FEF9F0] text-[#1D1C16]">
      <Navbar
        activeScreen={activeScreen}
        onNavigate={handleNavigate}
        onOpenWhatsApp={handleOpenGeneralWhatsApp}
      />

      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeScreen}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.16, ease: [0.16, 1, 0.3, 1] }}
          >
            {activeScreen === ScreenId.BERANDA && (
              <HomeScreen
                onNavigate={handleNavigate}
                onSelectDestination={setActiveDestination}
                onBookPackage={handleBookPackageQuick}
                onOpenGeneralWhatsApp={handleOpenGeneralWhatsApp}
              />
            )}

            {activeScreen === ScreenId.DESTINASI && (
              <DestinationsScreen
                itineraryIds={itineraryIds}
                onToggleItinerary={handleToggleItinerary}
                onClearItinerary={() => setItineraryIds([])}
                onSelectDestination={setActiveDestination}
                onBookDestination={handleBookDestination}
                onBookItinerary={handleBookItinerary}
              />
            )}

            {activeScreen === ScreenId.PAKET && (
              <PackagesScreen
                preselectedPackageId={preselectedPackageId}
                onBookWithContext={setBookingContext}
              />
            )}
          </motion.div>
        </AnimatePresence>
      </main>

      <Footer
        onNavigate={handleNavigate}
        onOpenWhatsApp={handleOpenGeneralWhatsApp}
      />

      <DestinationDetailModal
        destination={activeDestination}
        isInItinerary={activeDestination ? itineraryIds.includes(activeDestination.id) : false}
        onToggleItinerary={handleToggleItinerary}
        onClose={() => setActiveDestination(null)}
        onBookDestination={handleBookDestination}
      />

      <WhatsAppBookingModal
        booking={bookingContext}
        onClose={() => setBookingContext(null)}
      />
    </div>
  );
}
