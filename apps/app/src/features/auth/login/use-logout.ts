import { useAuthenticationServicePostSharedAuthLogout } from '../../../../../../libs/api-sdk/src/lib/gen2/queries';
import { useRouter } from 'next/navigation';
import { useUserStore } from '../user-store';

export const useLogout = () => {
  const router = useRouter();
  const { reset } = useUserStore();
  const { mutateAsync: logoutAsync } =
    useAuthenticationServicePostSharedAuthLogout();

  const logout = async () => {
    // await logoutAsync({}, {onSuccess: reset});
    reset();
    router.push('/login');
  };

  return { logout };
};
