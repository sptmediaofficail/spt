import { WelcomeCard } from '../../../features/home/welcome-card';
import { OffersSection } from '../../../features/offers/offers-section';

export default function DashboardPage() {
  return (
    <>
      <div className={'w-full flex flex-col gap-6'}>
        <WelcomeCard />
        <OffersSection />
      </div>
    </>
  );
}
