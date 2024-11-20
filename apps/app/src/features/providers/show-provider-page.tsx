// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
import {fetchClient} from '../../fetch-client';

export const ShowProviderPage = async ({ id }: { id: string }) => {
  const { data: provider } = await fetchClient.GET('/provider/{id}', {
    params: {
      path: { id },
    },
  });

  console.log('provider', id);
  return (
    <div>
      <h1>Provider {id}</h1>
      <pre>{JSON.stringify(provider, null, 2)}</pre>
    </div>
  );
};
