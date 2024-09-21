import { AuthCard } from '../../../features/auth/components/card';
import { useTranslations } from 'next-intl';

export default function LoginPage() {
  const t = useTranslations();
  return (
    <>
      <AuthCard
        title={t('login.card.title')}
        description={t('login.card.description')}
      >
        asd
      </AuthCard>
    </>
  );
}
