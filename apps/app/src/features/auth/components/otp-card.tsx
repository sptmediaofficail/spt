import { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';
import { PrimaryButton } from '../../../ui/primary-button';
import { useAuthenticationServicePostSharedAuthVerifyOtp } from '../../../../../../libs/api-sdk/src/lib/gen2/queries';
import { usePreAuthStore } from '../store';
import { cn } from '@nextui-org/theme';

export const OtpCard = () => {
  const t = useTranslations();
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  const { state } = usePreAuthStore();
  if (!state.recipient) return null;

  const { mutateAsync } = useAuthenticationServicePostSharedAuthVerifyOtp({
    onSuccess: () => {
      alert('success');
    },
  });

  const handleChange = (value: string, idx: number) => {
    if (!/^[0-9]$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);

    // Auto-focus next input if available
    if (value && idx < inputRefs.current.length - 1) {
      inputRefs.current[idx + 1]?.focus();
    }
  };

  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLInputElement>,
    idx: number
  ) => {
    if (e.key === 'Backspace' && !otp[idx] && idx > 0) {
      inputRefs.current[idx - 1]?.focus();
    }
  };

  const submit = async () => {
    try {
      await mutateAsync({
        requestBody: {
          recipient: state.recipient,
          code: otp.join(''),
        },
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
      <h2 className="text-center text-[#6E7887] text-sm font-semibold mb-4">
        {t('label.otp')}
      </h2>

      <div dir={'ltr'} className="flex justify-center gap-4 w-full">
        {otp.map((_, idx) => (
          <input
            key={idx}
            type="text"
            maxLength={1}
            className={cn(
              'w-10 h-14 text-[2rem] text-center border border-accent-foreground/10 rounded-md',
              'transition-transform duration-200 ease-in-out',
              otp[idx] ? 'scale-110 border-accent-foreground' : ''
            )}
            ref={(el) => (inputRefs.current[idx] = el)}
            value={otp[idx]}
            onChange={(e) => handleChange(e.target.value, idx)}
            onKeyDown={(e) => handleKeyDown(e, idx)}
          />
        ))}
      </div>

      <PrimaryButton
        className="mt-6"
        text={t('button.confirm')}
        onClick={submit}
      />
    </>
  );
};
