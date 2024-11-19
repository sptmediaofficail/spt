// Next.js will invalidate the cache when a
// request comes in, at most once every 60 seconds.
import {fetchClient} from '../../fetch-client';

export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams() {
  const { data } = (await fetchClient.GET('/provider/ids')) as {
    data: { id: string }[];
  };
  return data;
}

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
