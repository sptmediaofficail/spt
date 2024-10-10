import React, { KeyboardEvent, useEffect, useRef, useState } from 'react';
import { cn } from '@nextui-org/theme';

interface OtpInputProps {
  boxCount: number;
  onOtpComplete: (otp: string) => void;
}

export const OtpInput: React.FC<OtpInputProps> = ({
  boxCount,
  onOtpComplete,
}) => {
  const [otp, setOtp] = useState<string[]>(Array(boxCount).fill(''));
  const inputRefs = useRef<HTMLInputElement[]>([]);

  const handleChange = (value: string, idx: number) => {
    if (!/^\d$/.test(value)) return; // Restrict to single digit (0-9)

    const updatedOtp = [...otp];
    updatedOtp[idx] = value;
    setOtp(updatedOtp);

    // Focus the next input if the current one is filled
    if (value && idx < boxCount - 1) {
      inputRefs.current[idx + 1]?.focus();
    }

    // Trigger onOtpComplete if all fields are filled
    if (updatedOtp.every((digit) => digit)) {
      onOtpComplete(updatedOtp.join(''));
    }
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>, idx: number) => {
    if (e.key === 'Backspace') {
      setOtp((prev) => {
        const updatedOtp = [...prev];
        updatedOtp[idx] = '';
        return updatedOtp;
      });
      inputRefs.current[idx - 1]?.focus();
    }
  };

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return (
    <div dir="ltr" className="flex justify-center gap-4 w-full">
      {otp.map((digit, idx) => (
        <input
          key={idx}
          type="text"
          maxLength={1}
          className={cn(
            'w-10 h-14 text-2xl text-center border border-accent-foreground/10 rounded-md',
            'transition-transform duration-200 ease-in-out',
            digit ? 'scale-110 border-accent-foreground' : ''
          )}
          ref={(el) => {
            if (el) inputRefs.current[idx] = el;
          }}
          value={digit}
          onChange={(e) => handleChange(e.target.value, idx)}
          onKeyDown={(e) => handleKeyDown(e, idx)}
        />
      ))}
    </div>
  );
};
