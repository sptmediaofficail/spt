import { AuthCard } from '../auth-card';
import { PrimaryButton } from '../../../ui/primary-button';
import { useTranslations } from 'next-intl';
import { SAPhoneInput } from '../sa-phone-input';
import { useState } from 'react';
import { useAuthenticationServicePostSharedAuthSendOtp } from '../../../../../../libs/api-sdk/src/lib/gen2/queries';
import { useRouter } from 'next/navigation';

export function LoginCard(props: {
  title: string;
  description: string;
  text: string;
}) {
  const t = useTranslations();
  const router = useRouter();
  const [phone, setPhone] = useState('');
  const onChange = (value: string) => setPhone(value);
  const { mutateAsync, isPending } =
    useAuthenticationServicePostSharedAuthSendOtp();

  const submit = async () => {
    try {
      await mutateAsync(
        {
          requestBody: {
            recipient: `+${phone}`,
          },
        },
        {
          onSuccess: (error) => {
            router.push(`/`);
          },
        }
      );
    } catch (error) {
      router.push(`/register`);
    }
  };

  return (
    <AuthCard title={props.title} description={props.description}>
      <div dir={'ltr'} className={'flex flex-col gap-6 py-6'}>
        <div className="flex flex-col gap-3">
          <label className="text-sm self-end">{t('label.phone')}</label>
          <SAPhoneInput onChange={onChange} />
        </div>
        <PrimaryButton
          isLoading={isPending}
          text={props.text}
          onClick={submit}
        />
      </div>
    </AuthCard>
  );
}
