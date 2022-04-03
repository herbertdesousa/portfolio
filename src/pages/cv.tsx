import React from 'react';

import { MdOpenInNew } from 'react-icons/md';

import { Section } from '@/modules';
import { useLanguage } from '@/hooks/useLanguage';

const CV: React.FC = () => {
  const text = useLanguage();

  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4 mt-">
        {text.sections.cv.longTitle}
      </h1>

      <ul className="mt-12">
        {[1, 2].map(item => (
          <li key={String(item)}>
            <button
              type="button"
              className="flex justify-between items-center border-b border-light-gray py-6 h-20 w-full"
            >
              <div>
                <strong>PORTUGUESE VERSION</strong>
              </div>

              <span className="flex items-center text-primary">
                Open
                <MdOpenInNew className="ml-2" />
              </span>
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default CV;
