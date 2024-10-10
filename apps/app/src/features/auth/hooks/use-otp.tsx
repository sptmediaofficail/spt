import { useEffect, useRef, useState } from 'react';

export const useOtp = () => {
  const [otp, setOtp] = useState<string[]>(['', '', '', '']);
  const inputRefs = useRef<Array<HTMLInputElement | null>>([]);

  const handleChange = (value: string, idx: number) => {
    if (!/^[0-9]$/.test(value)) return;
    const newOtp = [...otp];
    newOtp[idx] = value;
    setOtp(newOtp);

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

  const isSubmitDisabled = otp.some((v) => !v);

  useEffect(() => {
    inputRefs.current[0]?.focus();
  }, []);

  return { otp, inputRefs, handleChange, handleKeyDown, isSubmitDisabled };
};
