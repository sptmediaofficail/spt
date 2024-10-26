import { WelcomeCard } from '../../../features/home/welcome-card';
import { OffersSection } from '../../../features/offers/offers-section';
import { ProvidersSection } from '../../../features/providers/providers-section';

export default function DashboardPage() {
  return (
    <>
      <div className={'w-full flex flex-col gap-6'}>
        <WelcomeCard />
        <OffersSection />
        <ProvidersSection />
      </div>
    </>
  );
}
