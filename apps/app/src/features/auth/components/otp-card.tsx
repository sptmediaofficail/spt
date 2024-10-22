import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { PrimaryButton } from '../../../ui/primary-button';
import { usePreAuthStore } from '../preAuthStore';
import { OtpInput } from './otp-input';
import { useSubmitOtp } from '../login/use-submit-otp';

export const OtpCard = () => {
  const t = useTranslations();
  const { state } = usePreAuthStore();
  const [isOtpComplete, setIsOtpComplete] = useState<boolean>(false);
  const { submitOtp, isPending, error } = useSubmitOtp();

  const handleOtpComplete = async (otp: string) => {
    setIsOtpComplete(true);
    await submitOtp(otp);
  };

  if (!state.recipient) return null;

  return (
    <>
      <h2 className="text-center text-[#6E7887] text-sm font-semibold mb-4">
        {t('label.otp')}
      </h2>

      <OtpInput boxCount={4} onOtpComplete={handleOtpComplete} />

      <PrimaryButton
        className="mt-6 w-full disabled:opacity-50 disabled:cursor-not-allowed"
        text={t('button.confirm')}
        onClick={() => {}}
        isLoading={isPending}
        isDisabled={!isOtpComplete}
      />

      {error && (
        <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
      )}
    </>
  );
};
