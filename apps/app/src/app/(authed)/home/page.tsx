import { WelcomeCard } from '../../../features/home/welcome-card';
import { ProvidersSection } from '../../../features/providers/providers-section';
import { PromotionsSection } from '../../../features/promotions/promotions-section';
import { ReviewsSection } from '../../../features/reviews/reveiws-section';

export default function DashboardPage() {
  return (
    <>
      <div className={'w-full flex flex-col gap-6 overflow-hidden'}>
        <WelcomeCard />
        <PromotionsSection />
        <ProvidersSection />
        <ReviewsSection />
      </div>
    </>
  );
}
