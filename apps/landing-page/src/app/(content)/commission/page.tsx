import React from 'react';
import { sptClient } from '../../../service/spt-client/spt-client';
import { TermsAccordions } from '../../../components/terms-accordions';
import { ContentSection } from '../../../components/section';

export default async function CommissionPage() {
  const sections = await sptClient.getTerms('commission');

  return (
    <ContentSection
      id={'top-selling'}
      heading={'الرسوم والعمولات'}
      position={'center'}
      className={'max-w-3xl overflow-visible p-4'}
    >
      <TermsAccordions sections={sections} />
    </ContentSection>
  );
}
