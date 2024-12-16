import { PrimaryButton } from '../../../ui/primary-button';
import { useTranslations } from 'next-intl';
import { SAPhoneInput } from '../sa-phone-input';
import { useRequestOtp } from '../login/use-request-otp';

export function LoginCard({ onSuccess }: { onSuccess: () => void }) {
  const t = useTranslations();
  const { requestOTP, isPending } = useRequestOtp({
    onRequestOTPSuccess: onSuccess,
  });

  return (
    <div dir={'ltr'} className={'flex flex-col gap-6 py-6'}>
      <div className="flex flex-col gap-3">
        <label className="text-sm self-end">{t('label.phone')}</label>
        <SAPhoneInput />
      </div>
      <PrimaryButton
        isLoading={isPending}
        text={t('button.send')}
        onPress={requestOTP}
      />
    </div>
  );
}
