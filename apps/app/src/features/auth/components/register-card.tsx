import { AuthCard } from '../auth-card';
import { PrimaryButton } from '../../../ui/primary-button';
import { useTranslations } from 'next-intl';
import { useState } from 'react';
import {
  useAuthenticationServicePostSharedAuthRegister,
  useCitiesServiceGetCities,
} from '../../../../../../libs/api-sdk/src/lib/gen2/queries';
import { useRouter } from 'next/navigation';
import { Input } from '@nextui-org/input';
import { AiOutlineUser } from 'react-icons/ai';
import { Autocomplete, AutocompleteItem } from '@nextui-org/autocomplete';

export function RegisterCard(props: {
  title: string;
  description: string;
  text: string;
}) {
  const t = useTranslations();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    city_id: 0,
  });

  const { mutateAsync, isPending } =
    useAuthenticationServicePostSharedAuthRegister();

  const submit = async () => {
    try {
      await mutateAsync(
        {
          formData: {},
        },
        {
          onSuccess: () => {
            router.push(`/`);
          },
        }
      );
    } catch (error) {
      router.push(`/register`);
    }
  };

  const { data, isLoading } = useCitiesServiceGetCities();
  const cities: {
    id: number;
    name_ar: string;
    is_active: boolean;
  }[] = data?.data?.data ?? [];

  return (
    <AuthCard title={props.title} description={props.description}>
      <div className={'flex flex-col gap-6 py-6'}>
        <div className="flex flex-col gap-4 w-full">
          <Input
            startContent={<AiOutlineUser />}
            inputMode="text"
            className={'text-right'}
            placeholder={t('placeholder.name')}
            labelPlacement={'outside'}
            label={t('label.name')}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
          <Autocomplete
            placeholder={t('placeholder.name')}
            label={t('label.name')}
            labelPlacement={'outside'}
            className={'text-right rounded-full'}
            disabled={isLoading}
            style={{
              borderRadius: '4rem!important',
            }}
            step={1}
            onChange={(e) => {
              setFormData({ ...formData, city_id: e });
            }}
            defaultItems={cities}
            disabledKeys={cities
              .filter((city) => !city.is_active)
              .map((city) => city.id)}
            allowsCustomValue={false}
          >
            {(item) => (
              <AutocompleteItem key={item.id} value={item.id}>
                {item.name_ar}
              </AutocompleteItem>
            )}
          </Autocomplete>
        </div>
        <PrimaryButton
          isLoading={isPending}
          text={props.text}
          onClick={submit}
        />
      </div>
    </AuthCard>
  );
}
