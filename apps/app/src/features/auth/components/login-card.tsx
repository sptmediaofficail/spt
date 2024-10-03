import { PrimaryButton } from '../../../ui/primary-button';
import { useTranslations } from 'next-intl';
import { SAPhoneInput } from '../sa-phone-input';
import { useAuthenticationServicePostSharedAuthSendOtp } from '../../../../../../libs/api-sdk/src/lib/gen2/queries';
import { useRouter } from 'next/navigation';
import { usePreAuthStore } from '../store';

export function LoginCard(props: { onSuccessfulLogin: () => void }) {
  const t = useTranslations();
  const router = useRouter();

  const { state, setState } = usePreAuthStore();
  const onChange = (recipient: string) => setState({ recipient });
  const { mutateAsync, isPending } =
    useAuthenticationServicePostSharedAuthSendOtp();

  const submit = async () => {
    try {
      await mutateAsync(
        {
          requestBody: {
            recipient: `+${state.recipient}`,
          },
        },
        {
          onSuccess: (response) => {
            props.onSuccessfulLogin();
          },
        }
      );
    } catch (error) {
      router.push(`/register`);
    }
  };

  return (
    <div dir={'ltr'} className={'flex flex-col gap-6 py-6'}>
      <div className="flex flex-col gap-3">
        <label className="text-sm self-end">{t('label.phone')}</label>
        <SAPhoneInput onChange={onChange} />
      </div>
      <PrimaryButton
        isLoading={isPending}
        text={t('button.send')}
        onClick={submit}
      />
    </div>
  );
}
