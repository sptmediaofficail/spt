import { WelcomeCard } from '../../../features/home/welcome-card';
import { ProvidersSection } from '../../../features/providers/providers-section';
import { OffersSection } from '../../../features/offers/offers-section';

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
