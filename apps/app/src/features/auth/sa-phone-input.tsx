import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import { useState } from 'react';

export const SAPhoneInput = (props: { onChange: (value: string) => void }) => {
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
        props.onChange(value);
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
