import {useLandingServiceGetLandingMostRatedProviders} from "../../../../../libs/api-sdk/src/lib/gen2/queries";
import {HomeSection} from "../home/home-section";
import {useTranslations} from "next-intl";

export const ProvidersSection = () => {
  const t = useTranslations();
  const {data, isLoading} = useLandingServiceGetLandingMostRatedProviders()
  return (
    <>
      <div className={'w-full flex flex-col gap-6'}>
        <HomeSection title={t('Providers')}>
        </HomeSection>
      </div>
    </>
  );
}
