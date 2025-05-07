import React, { useEffect, useRef } from 'react';
import { hyperpayConfig } from '../../config/hyperpay';
import axios from 'axios';
import { toast } from 'react-hot-toast';
import { useTranslations } from 'next-intl';

interface HyperPayWidgetProps {
  checkoutId: string;
  ndc: string;
  orderId: string;
  onSuccess?: (response: any) => void;
  onError?: (error: any) => void;
  onCancel?: () => void;
}

declare global {
  interface Window {
    _hyperpayConfig: any;
  }
}

export const HyperPayWidget: React.FC<HyperPayWidgetProps> = ({
  checkoutId,
  ndc,
  orderId,
  onSuccess,
  onError,
  onCancel,
}) => {
  const formRef = useRef<HTMLFormElement>(null);
  const t = useTranslations();
  console.log('orderId', orderId);

  useEffect(() => {
    // Store form reference at the start of effect
    const form = formRef.current;

    // Load HyperPay script
    const script = document.createElement('script');
    script.src = `${
      hyperpayConfig.testMode ? 'https://test.oppwa.com' : 'https://oppwa.com'
    }/v1/paymentWidgets.js?checkoutId=${checkoutId}`;
    script.async = true;
    document.body.appendChild(script);

    // Add form submission listener
    const handleSubmit = async (event: Event) => {
      event.preventDefault();
      console.log('Form submission started');

      if (!formRef.current) {
        console.error('Form reference not found');
        return;
      }

      // Get the form data
      const formData = new FormData(formRef.current);
      const formDataObj: Record<string, string> = {};
      formData.forEach((value, key) => {
        formDataObj[key] = value.toString();
      });
      console.log('Form data:', formDataObj);

      try {
        const requestUrl = `https://eu-test.oppwa.com/v1/checkouts/${checkoutId}/payment`;
        console.log('Submitting payment to:', requestUrl);

        const response = await axios.post(requestUrl, formData, {
          headers: {
            Authorization: `Bearer ${hyperpayConfig.accessToken}`,
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });

        console.log('Response Data:', response.data);
        if (response.data.result.code === '000.100.110') {
          // Payment successful
          toast.success(t('payment.success'));
          if (onSuccess) {
            onSuccess(response.data);
          }
        } else {
          // Payment failed or other status
          console.error('Payment failed:', response.data.result);
          toast.error(response.data.result.description || t('payment.failed'));
          if (onError) {
            onError(response.data);
          }
          window._hyperpayConfig.onError(response.data);
        }
      } catch (error) {
        console.error('Payment Error:', error);
        if (axios.isAxiosError(error)) {
          console.error('Axios Error Details:', {
            status: error.response?.status,
            data: error.response?.data,
            headers: error.response?.headers,
          });
        }
        toast.error(t('payment.error'));
        if (onError) {
          onError(error);
        }
        window._hyperpayConfig.onError(error);
      }
    };

    // Wait for the form to be available
    const checkForm = setInterval(() => {
      if (formRef.current) {
        formRef.current.addEventListener('submit', handleSubmit);
        clearInterval(checkForm);
      }
    }, 100);

    return () => {
      // Cleanup
      if (script.parentNode) {
        script.parentNode.removeChild(script);
      }
      if (form) {
        form.removeEventListener('submit', handleSubmit);
      }
      clearInterval(checkForm);
    };
  }, [checkoutId, ndc, orderId, onSuccess, onError, onCancel, t]);

  return (
    <div className="w-full max-w-md mx-auto p-4">
      <div className="w-full">
        <form
          ref={formRef}
          action={`/orders/success/${orderId}`}
          onError={onError}
          className="paymentWidgets"
          data-brands="VISA"
          data-style="card"
          data-locale="en"
          data-theme="default"
          data-ndc={ndc}
        />
        <div className="mt-4 flex justify-end gap-2">
          <button
            type="button"
            onClick={onCancel}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50"
          >
            {t('cancel')}
          </button>
        </div>
      </div>
    </div>
  );
};
