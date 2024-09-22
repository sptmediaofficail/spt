import { AuthCard } from '../auth-card';
import { PrimaryButton } from '../../../ui/primary-button';
import { useTranslations } from 'next-intl';
import { SAPhoneInput } from '../sa-phone-input';
import { useState } from 'react';

export function LoginCard(props: {
  title: string;
  description: string;
  text: string;
}) {
  const t = useTranslations();
  const [phone, setPhone] = useState('');
  const onChange = (value: string) => setPhone(value);
  const submit = () => console.log(phone);

  return (
    <AuthCard title={props.title} description={props.description}>
      <div dir={'ltr'} className={'flex flex-col gap-6 py-6'}>
        <div className="flex flex-col gap-3">
          <label className="text-sm self-end">{t('label.phone')}</label>
          <SAPhoneInput onChange={onChange} />
        </div>
        <PrimaryButton disabled text={props.text} onClick={submit} />
      </div>
    </AuthCard>
  );
}
