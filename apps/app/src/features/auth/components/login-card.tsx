import { AuthCard } from '../auth-card';
import { PrimaryButton } from '../../../ui/primary-button';
import { useTranslations } from 'next-intl';
import { SAPhoneInput } from '../sa-phone-input';
import { useState } from 'react';
import { authenticationSWRHooks } from '@spt/api-sdk';

export function LoginCard(props: {
  title: string;
  description: string;
  text: string;
}) {
  const t = useTranslations();
  const [phone, setPhone] = useState('');
  const onChange = (value: string) => setPhone(value);
  const { data, trigger, error, reset, isMutating } =
    authenticationSWRHooks.usePostSharedAuthSendOtp();
  const submit = () => {
    trigger({ recipient: phone });
  };

  return (
    <AuthCard title={props.title} description={props.description}>
      <div dir={'ltr'} className={'flex flex-col gap-6 py-6'}>
        <div className="flex flex-col gap-3">
          <label className="text-sm self-end">{t('label.phone')}</label>
          <SAPhoneInput onChange={onChange} />
        </div>
        <PrimaryButton text={props.text} onClick={submit} />
      </div>
    </AuthCard>
  );
}
