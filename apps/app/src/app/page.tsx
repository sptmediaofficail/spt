'use client';
import { authenticationSWRHooks } from '@spt/api-sdk';
import { axiosInstance } from '@kubb/swagger-client/dist/client';

export default function Index() {
  // const { data, isLoading, mutate, isValidating, error } = useGetSharedAuthMe();
  // mutate();

  axiosInstance.defaults.baseURL = 'https://api.spt.sa/api/v1';

  const { data, trigger } = authenticationSWRHooks.usePostSharedAuthSendOtp(
    {},
    {
      client: {
        data: {
          recipient: '+9680002153529',
        },
      },
    }
  );
  trigger();
  console.log(data);
  // authenticationSWRHooks.useGetSharedAuthMe();

  // adminAuthSWRHooks.usePostAdminAuthLogin({});

  return <></>;
}
