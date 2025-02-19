'use client';
import React from 'react';
import { Accordion, AccordionItem } from '@heroui/react';
import { Content } from '../service/spt-client/types';
import { sanitize } from 'isomorphic-dompurify';
import { Tab, Tabs } from '@heroui/tabs';

enum transcations {
  client = 'العميل',
  provider = 'التاجر',
  public = 'العامة',
}

export const TermsAccordions = ({
  sections,
}: {
  sections: (Content & { category: string })[];
}) => {
  const categories = new Set(sections.map((section) => section.category));
  return (
    <Tabs color="primary" aria-label="Tabs" className={'mt-10'}>
      {Array.from(categories).map((tab) => (
        // @ts-ignore
        <Tab key={tab} value={tab} title={transcations[tab]}>
          <div className={'mt-6'}>
            <Accordion>
              {sections
                .filter((section) => section.category === tab)
                .map((section, index) => (
                  <AccordionItem key={index} title={section.title}>
                    <div
                      className="text-secondaryText"
                      dangerouslySetInnerHTML={{
                        __html: sanitize(section.content),
                      }}
                    />
                  </AccordionItem>
                ))}
            </Accordion>
          </div>
        </Tab>
      ))}
    </Tabs>
  );
};
