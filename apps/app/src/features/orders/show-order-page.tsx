import Error from 'next/error';
import { Card, Divider, Progress } from '@nextui-org/react';
import { useClientClientOrdersServiceGetClientOrdersById } from '../../../../../libs/api-sdk/src/lib/gen2/queries';

export const ShowOrderPage = ({ orderId }: { orderId: string }) => {
  const { data, isLoading, error } =
    useClientClientOrdersServiceGetClientOrdersById({ id: orderId });

  if (isLoading) return <Progress indeterminated value={50} color="gradient" />;
  if (error) return <Error statusCode={500} title={error.message} />;
  if (!data) return <Error statusCode={404} title="Order not found" />;

  const orderDetails = data.data?.details;
  const location = data.data?.address || 'القاهرة'; // Default to Cairo

  return (
    <Card>
      {/* Vehicle Information */}
      <Card>
        <Divider />
      </Card>
    </Card>
  );
};
