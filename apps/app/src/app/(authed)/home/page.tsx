import { WelcomeCard } from '../../../features/home/welcome-card';
import { OffersSection } from '../../../features/home/offers-section';

export default function DashboardPage() {
  return (
    <>
      <div className={'w-full'}>
        <WelcomeCard />
        <OffersSection />
      </div>
    </>
  );
}
