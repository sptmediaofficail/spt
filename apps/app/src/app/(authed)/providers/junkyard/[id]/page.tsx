import { ShowProviderPage } from '../../../../../features/providers/show-provider-page';
import { fetchClient } from '../../../../../fetch-client';

export const revalidate = 60;

// We'll prerender only the params from `generateStaticParams` at build time.
// If a request comes in for a path that hasn't been generated,
// Next.js will server-render the page on-demand.
export const dynamicParams = true; // or false, to 404 on unknown paths

export async function generateStaticParams(): Promise<{ id: string }[]> {
  const { data } = (await fetchClient.GET('/provider/ids')) as {
    data: { data: Array<string> };
  };
  return data.data.map((id) => ({ id }));
}

export default async function JunkyardProviderPage({
  params,
}: {
  params: { id: string };
}) {
  return <ShowProviderPage id={params.id} />;
}
