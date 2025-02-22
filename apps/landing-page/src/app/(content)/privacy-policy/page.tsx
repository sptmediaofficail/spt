import React from 'react';
import { sptClient } from '../../../service/spt-client/spt-client';
import { ContentSection } from '../../../components/section';

export default async function PrivacyPolicyPage() {
  const content = await sptClient.getPage('privacy');

  return (
    <ContentSection
      id={'top-selling'}
      position={'center'}
      className={'max-w-3xl overflow-visible p-4'}
    >
      <h2 className="mb-4 font-semibold text-3xl">{content.title}</h2>
      <div
        className="prose lg:prose-xl text-gray-700"
        dangerouslySetInnerHTML={{ __html: content.content }}
      />
    </ContentSection>
  );
}
