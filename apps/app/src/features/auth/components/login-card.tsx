import { AuthCard } from './card';
import PhoneInput from 'react-phone-input-2';
import { PrimaryButton } from '../../../ui/primary-button';
import 'react-phone-input-2/lib/style.css';

export function LoginCard(props: {
  title: string;
  description: string;
  value: string;
  onChange: (value: ((prevState: string) => string) | string) => void;
  text: string;
  onClick: () => void;
}) {
  return (
    <AuthCard title={props.title} description={props.description}>
      <div dir={'ltr'} className={'flex flex-col gap-6 py-6'}>
        <PhoneInput
          disableDropdown={true}
          disableCountryGuess={true}
          country={'sa'}
          value={props.value}
          onChange={props.onChange}
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
          searchStyle={{}}
        />
        <PrimaryButton text={props.text} onClick={props.onClick} />
      </div>
    </AuthCard>
  );
}
