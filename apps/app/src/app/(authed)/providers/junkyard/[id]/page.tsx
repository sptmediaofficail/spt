import { ShowProviderPage } from '../../../../../features/providers/show-provider-page';

export default function JunkyardProviderPage({
  params,
}: {
  params: { id: string };
}) {
  return <ShowProviderPage id={params.id} />;
}
