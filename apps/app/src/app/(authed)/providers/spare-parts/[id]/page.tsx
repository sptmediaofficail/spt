import { ShowProviderPage } from '../../../../../features/providers/show-provider-page';

export default function SparePartProviderPage({
  params,
}: {
  params: { id: string };
}) {
  return <ShowProviderPage id={params.id} />;
}
