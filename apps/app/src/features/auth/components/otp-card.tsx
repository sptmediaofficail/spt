import { useEffect, useState } from 'react';
import { useTranslations } from 'next-intl';
import { PrimaryButton } from '../../../ui/primary-button';
import { usePreAuthStore } from '../preAuthStore';
import { useSubmitOtp } from '../login/use-submit-otp';
import { InputOtp } from '@nextui-org/input-otp';

export const OtpCard = () => {
  const t = useTranslations();
  const { state } = usePreAuthStore();
  const [isOtpComplete, setIsOtpComplete] = useState<boolean>(false);
  const { submitOtp, isPending, error } = useSubmitOtp();
  const [otp, setOtp] = useState<string>('');

  useEffect(() => {
    setIsOtpComplete(otp.length === 4);
  }, [otp]);

  if (!state.recipient) return null;

  return (
    <>
      <h2 className="text-center text-[#6E7887] text-sm font-semibold mb-4">
        {t('label.otp')}
      </h2>

      {/*<OtpInput boxCount={4} onOtpComplete={handleOtpComplete} />*/}
      <InputOtp
        width={'full'}
        variant={'bordered'}
        length={4}
        value={otp}
        dir={'ltr'}
        className={'mx-auto'}
        onValueChange={setOtp}
        onComplete={() => submitOtp(otp)}
        isDisabled={isPending}
        size={'lg'}
      />

      <PrimaryButton
        className="mt-6 w-full disabled:opacity-50 disabled:cursor-not-allowed"
        text={t('button.confirm')}
        onPress={() => submitOtp(otp)}
        isLoading={isPending}
        isDisabled={!isOtpComplete}
      />

      {error && (
        <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
      )}
    </>
  );
};
