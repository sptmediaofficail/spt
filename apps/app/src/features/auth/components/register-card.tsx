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
import { LiaCitySolid } from 'react-icons/lia';
import { usePreAuthStore } from '../store';

export function RegisterCard(props: { text: string }) {
  const t = useTranslations();
  const router = useRouter();

  const [formData, setFormData] = useState({
    name: '',
    city_id: 0,
  });

  const { mutateAsync, isPending } =
    useAuthenticationServicePostSharedAuthRegister();

  const { state } = usePreAuthStore();

  const submit = async () => {
    try {
      await mutateAsync(
        {
          formData: {
            name: formData.name,
            city_id: formData.city_id.toString(),
            // @ts-ignore
            phone: `+${state.recipient}`,
          },
        },
        {
          onSuccess: () => {
            router.push(`/home`);
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
    <div className={'flex flex-col gap-6 py-6'}>
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
        placeholder={t('placeholder.city')}
        label={t('label.city')}
        startContent={<LiaCitySolid />}
        labelPlacement={'outside'}
        className={'text-right rounded-full'}
        disabled={isLoading}
        style={{
          borderRadius: '4rem!important',
        }}
        step={1}
        defaultItems={cities}
        disabledKeys={cities
          .filter((city) => !city.is_active)
          .map((city) => city.id)}
        allowsCustomValue={false}
        onSelectionChange={(city_id) => {
          setFormData({ ...formData, city_id });
        }}
      >
        {(item) => (
          <AutocompleteItem key={item.id} value={item.id}>
            {item.name_ar}
          </AutocompleteItem>
        )}
      </Autocomplete>
      <PrimaryButton isLoading={isPending} text={props.text} onClick={submit} />
    </div>
  );
}
