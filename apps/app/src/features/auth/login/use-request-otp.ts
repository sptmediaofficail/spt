import { useRouter } from 'next/navigation';
import { usePreAuthStore } from '../preAuthStore';
import { useAuthenticationServicePostSharedAuthSendOtp } from '../../../../../../libs/api-sdk/src/lib/gen2/queries';

export const useRequestOtp = ({
  onRequestOTPSuccess,
}: {
  onRequestOTPSuccess?: () => void;
}) => {
  const router = useRouter();
  const { state } = usePreAuthStore();
  const { mutateAsync: requestOTPAsync, isPending } =
    useAuthenticationServicePostSharedAuthSendOtp();

  const requestOTP = async () => {
    try {
      await requestOTPAsync(
        {
          requestBody: {
            recipient: `+${state.recipient}`,
          },
        },
        {
          onSuccess: onRequestOTPSuccess,
          onError: (error) => {
            router.push(`/register`);
          },
        }
      );
    } catch (error) {
      //
    }
  };

  return { requestOTP, isPending };
};
