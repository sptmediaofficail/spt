import { Card, CardBody, CardHeader } from '@heroui/card';
import Image from 'next/image';
import EnvatoSvg from './assets/envato.svg';
import StarSvg from './assets/star.svg';
import AddressSvg from './assets/address.svg';
import BranchesSvg from './assets/branches.svg';
import OrdersSvg from './assets/orders.svg';
import ServicesSvg from './assets/services.svg';
import YesSvg from './assets/yes.svg';
import NoSvg from './assets/no.svg';
import { IProvider } from './types';
import { Divider } from '@heroui/divider';
import { useTranslations } from 'next-intl';
import { Breadcrumbs } from '../../ui/breadcrumbs';
import { PrimaryLink } from '../../ui/primary-button';
import { GoogleMap } from './map';
import { getProviderData } from './use-providers';
import { Switch } from '@heroui/switch';

export const ShowProviderPage = async ({ id }: { id: string }) => {
  const provider = await getProviderData(id);

  if (!provider) {
    return <div>Provider not found</div>;
  }

  return (
    <div className={'h-full flex flex-col gap-4 p-4 lg:p-0'}>
      <Breadcrumbs type={provider?.services as 'spare_parts'} id={id} />
      <div className={'flex flex-col gap-8 h-full'}>
        <ProviderDetailsCard provider={provider} />
        <div className={'flex-1'}>
          <ProviderLocation
            location={provider?.location || { lat: 0, lng: 0 }}
          />
        </div>
        <ProviderFAQ provider={provider} />
        <OrderButton />
      </div>
    </div>
  );
};

const OrderButton = () => {
  const t = useTranslations();
  return (
    <PrimaryLink
      href={'/services/order-spare-part'}
      text={t('order_service')}
      className={
        'w-full lg:w-fit lg:px-12 lg:mr-auto shadow hover:shadow-md hover:scale-[102%] transition ease-out duration-100'
      }
    />
  );
};

const ProviderLocation = ({
  location,
}: {
  location: { lat: number; lng: number };
}) => {
  const t = useTranslations('ProviderLocation');
  return (
    <div className={'flex flex-col gap-4 h-full'}>
      <h2 className={'text-xl font-semibold'}>{t('location')}</h2>
      <GoogleMap position={location} />
    </div>
  );
};

const ProviderDetailsCard = ({ provider }: { provider: IProvider }) => {
  const t = useTranslations('ProviderDetailsCard');
  const details = [
    {
      icon: AddressSvg,
      label: t('address'),
      value: provider.address,
    },
    {
      icon: ServicesSvg,
      label: t('services'),
      value: t(provider?.services),
    },
    {
      icon: OrdersSvg,
      label: t('total_completed_orders'),
      value: provider.total_completed_orders,
    },
    {
      icon: BranchesSvg,
      label: t('branches'),
      value: provider.branches,
    },
  ];

  return (
    <Card shadow={'sm'} className={'p-2'}>
      <CardHeader>
        <div className={'flex items-center gap-4'}>
          <div className={'rounded-full bg-gray-200 w-12 h-12 relative'}>
            <Image src={EnvatoSvg} alt="Envato" fill className={'p-3'} />
          </div>
          <div className={'flex flex-col'}>
            <h2 className={'text-[#05b5b4] font-semibold text-lg'}>
              {provider.name}
            </h2>
            <div className={'flex items-center gap-1'}>
              <p className={'text-gray-500 text-sm font-bold'}>
                {provider.rate}
              </p>
              <Image
                src={StarSvg}
                alt="Star"
                width={14}
                height={14}
                className={'h-3.5 w-3.5'}
              />
            </div>
          </div>
        </div>
      </CardHeader>
      <Divider className="my-2 bg-gray-100 hidden lg:block" />

      <CardBody className={'mt-2 lg:mt-0'}>
        <div
          className={'flex flex-col gap-2 lg:flex-row justify-between lg:gap-0'}
        >
          {details.map((detail, index) => (
            <div key={detail.label} className={'lg:ml-auto'}>
              <Detail {...detail} />
              {index !== details.length - 1 && (
                <Divider
                  style={{
                    borderStyle: 'dashed',
                  }}
                  className="my-2 bg-white lg:hidden"
                />
              )}
            </div>
          ))}
        </div>
      </CardBody>
    </Card>
  );
};

const Detail = ({
  icon,
  label,
  value,
}: {
  icon: string;
  label: string;
  value: number | string;
}) => {
  return (
    <>
      {/* Desktop */}
      <div className={'gap-3 hidden lg:flex'}>
        <div
          className={
            'w-8 h-8 relative bg-babyBlue p-1.5 rounded-full flex items-center self-center'
          }
        >
          <Image
            src={icon}
            alt="Address"
            width={24}
            height={24}
            className={'h-6 w-6'}
          />
        </div>

        <div className={'flex flex-col gap-1 items-start'}>
          <p className={'text-gray-700 text-xs'}>{label}</p>
          <p className={'text-gray-700 font-semibold'}>{value}</p>
        </div>
      </div>

      {/* Mobile */}
      <div className={'flex justify-between gap-3 lg:hidden'}>
        <div className={'flex items-center gap-3'}>
          <Image
            src={icon}
            alt={label}
            width={24}
            height={24}
            className={'h-6 w-6'}
          />
          <p className={'text-gray-700'}>{label}</p>
        </div>
        <p className={'text-gray-700 font-semibold'}>{value}</p>
      </div>
    </>
  );
};

export const ProviderFAQ = ({
  provider,
  form,
}: {
  provider?: IProvider;
  form?: any;
}) => {
  const t = useTranslations('ProviderFAQ');

  const FAQ = [
    {
      icon: AddressSvg,
      label: t('q1'),
      value: provider?.is_delivery_available || false,
      name: 'is_delivery_available',
    },
    {
      icon: ServicesSvg,
      label: t('q2'),
      value: provider?.is_voice_call_available || false,
      name: 'is_voice_call_available',
    },
    {
      icon: OrdersSvg,
      label: t('q3'),
      value: provider?.is_video_call_available || false,
      name: 'is_video_call_available',
    },
  ];

  return (
    <div
      className={`flex flex-col ${
        !form && 'lg:flex-row'
      } gap-4 justify-between`}
    >
      {FAQ.map(({ icon, label, value, name }, index) => (
        <div key={label} className={'flex flex-col gap-2'}>
          <div className={'flex items-center justify-between lg:gap-4'}>
            <div className={'flex items-center gap-3'}>
              <Image
                src={icon}
                alt="Address"
                width={24}
                height={24}
                className={'h-6 w-6'}
              />
              <p className={'text-gray-700'}>{label}</p>
            </div>
            <p className={'text-gray-700 font-semibold'}>
              {form ? (
                <Switch
                  {...form.register(name)}
                  checked={value}
                  onChange={(e) => form.setValue(name, e.target.checked)}
                />
              ) : value ? (
                <Image
                  src={YesSvg}
                  alt="Yes"
                  width={24}
                  height={24}
                  className={'h-6 w-6'}
                />
              ) : (
                <Image
                  src={NoSvg}
                  alt="No"
                  width={24}
                  height={24}
                  className={'h-6 w-6'}
                />
              )}
            </p>
          </div>
          {index !== FAQ.length - 1 && (
            <Divider
              style={{
                borderStyle: 'dashed',
              }}
              className={`my-2 bg-gray-100 bg-transparent ${
                !form && 'lg:border-transparent'
              }`}
            />
          )}
        </div>
      ))}
    </div>
  );
};
