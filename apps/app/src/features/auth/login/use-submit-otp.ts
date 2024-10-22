import { useRouter } from 'next/navigation';
import { useUserStore } from '../user-store';
import { usePreAuthStore } from '../preAuthStore';
import { useAuthenticationServicePostSharedAuthVerifyOtp } from '../../../../../../libs/api-sdk/src/lib/gen2/queries';
import { User } from '../types';

export const useSubmitOtp = () => {
  const router = useRouter();
  const { state } = usePreAuthStore();
  const { setUser, setToken } = useUserStore();

  const handleLoginSuccess = (response: LoginResponse) => {
    const { user, token } = extractData(response);
    setUser(user);
    setToken(token);
    router.push('/home');
  };

  const { mutateAsync, isPending, error } =
    useAuthenticationServicePostSharedAuthVerifyOtp({
      onSuccess: (response) => {
        handleLoginSuccess(response as LoginResponse);
      },
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

  return { submitOtp, isPending, error: error?.body.message };
};

function extractData(response: LoginResponse) {
  return {
    user: response.data.user,
    token: response.data.token.token,
  };
}

type LoginResponse = {
  data: {
    user: User;
    token: {
      token: string;
    };
  };
};
