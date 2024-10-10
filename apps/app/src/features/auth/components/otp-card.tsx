import { useState } from 'react';
import { useTranslations } from 'next-intl';
import { PrimaryButton } from '../../../ui/primary-button';
import { useAuthenticationServicePostSharedAuthVerifyOtp } from '../../../../../../libs/api-sdk/src/lib/gen2/queries';
import { usePreAuthStore } from '../store';
import { useRouter } from 'next/navigation';
import { OtpInput } from './otp-input';

export const OtpCard = () => {
  const t = useTranslations();
  const router = useRouter();
  const { state } = usePreAuthStore();
  const [error, setError] = useState<string | null>(null);
  const [isOtpComplete, setIsOtpComplete] = useState<boolean>(false);

  const { mutateAsync, isPending } =
    useAuthenticationServicePostSharedAuthVerifyOtp({
      onSuccess: () => router.push('/dashboard'),
      onError: (error) => {
        // @ts-ignore
        setError(error.body.message);
      },
    });

  const submitOtp = async (otp: string) => {
    if (!state.recipient) return;
    try {
      await mutateAsync({
        requestBody: {
          recipient: `+${state.recipient}`,
          code: otp,
        },
      });
    } catch (error) {
      console.error('Error submitting OTP:', error);
    }
  };

  const handleOtpComplete = (otp: string) => {
    setIsOtpComplete(true);
    submitOtp(otp);
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
