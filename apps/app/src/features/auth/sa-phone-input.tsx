import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';
import { usePreAuthStore } from './preAuthStore';

export const SAPhoneInput = () => {
  const [isDirty, setIsDirty] = useState(false);
  const { setState } = usePreAuthStore();
  const [phone, setPhone] = useState<string | null>(null);

  return (
    <PhoneInput
      value={phone}
      isValid={(value, country) => {
        if (!isDirty) return true;
        const saRegex = /^(966)([503649187])([0-9]{8})$/;
        return 'sa' && saRegex.test(value);
      }}
      disableDropdown={true}
      disableCountryGuess={true}
      country={'sa'}
      onChange={(value) => {
        setIsDirty(true);
        setPhone(value);
        setState({ recipient: value });
      }}
      inputStyle={{
        width: '100%',
        height: '100%',
        padding: '0.5rem',
        paddingLeft: '2.3rem',
        borderRadius: '0.5rem',
        border: '1px solid #eaeaea',
      }}
      buttonStyle={{
        backgroundColor: 'transparent',
        border: '1px solid #eaeaea',
        borderRightStyle: 'none',
        borderStyle: 'none',
        paddingInline: '0.5rem',
      }}
    />
  );
};

export const NewSAPhoneInput = () => {
  const [isDirty, setIsDirty] = useState(false);
  return (
    <PhoneInput
      isValid={(value, country) => {
        if (!isDirty) return true;
        const saRegex = /^(966)([503649187])([0-9]{8})$/;
        return 'sa' && saRegex.test(value);
      }}
      disableDropdown={true}
      disableCountryGuess={true}
      country={'sa'}
      onChange={(value) => {
        setIsDirty(true);
      }}
      inputStyle={{
        width: '100%',
        height: '100%',
        padding: '0.5rem',
        paddingLeft: '2.3rem',
        borderRadius: '0.5rem',
        border: '1px solid #eaeaea',
      }}
      buttonStyle={{
        backgroundColor: 'transparent',
        border: '1px solid #eaeaea',
        borderRightStyle: 'none',
        borderStyle: 'none',
        paddingInline: '0.5rem',
      }}
    />
  );
};
