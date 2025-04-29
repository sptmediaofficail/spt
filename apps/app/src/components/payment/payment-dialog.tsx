import React from 'react';
import { HyperPayWidget } from './hyperpay-widget';
import { useTranslations } from 'next-intl';
import { useLocale } from 'next-intl';

interface PaymentDialogProps {
  isOpen: boolean;
  onClose: () => void;
  checkoutId: string;
  ndc: string;
  orderId: string;
  onError?: (error: any) => void;
  onSuccess?: (response: any) => void;
}

export const PaymentDialog: React.FC<PaymentDialogProps> = ({
  isOpen,
  onClose,
  checkoutId,
  ndc,
  orderId,
  onError,
  onSuccess,
}) => {
  const t = useTranslations();
  const locale = useLocale();
  const isRTL = locale === 'ar';

  if (!isOpen) return null;

  const handleSuccess = (response: any) => {
    if (onSuccess) {
      onSuccess(response);
    }
    onClose();
  };

  const handleError = (error: any) => {
    if (onError) {
      onError(error);
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto">
      <div className="flex min-h-screen items-center justify-center p-4">
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black bg-opacity-50 transition-opacity"
          onClick={onClose}
        />

        {/* Dialog */}
        <div className="relative w-full max-w-md transform overflow-hidden rounded-lg bg-white p-6 shadow-xl transition-all">
          {/* Close button */}
          <button
            onClick={onClose}
            className={`absolute ${
              isRTL ? 'left-4' : 'right-4'
            } top-4 text-gray-400 hover:text-gray-500`}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={isRTL ? 'M18 6L6 18M18 18L6 6' : 'M6 18L18 6M6 6l12 12'}
              />
            </svg>
          </button>

          {/* Title */}
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900">
              {t('payment.title')}
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              {t('payment.description')}
            </p>
          </div>

          {/* Payment Widget */}
          <div className="mt-4">
            <HyperPayWidget
              checkoutId={checkoutId}
              ndc={ndc}
              orderId={orderId}
              onError={handleError}
              onSuccess={handleSuccess}
              onCancel={onClose}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
