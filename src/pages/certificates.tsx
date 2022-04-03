import React from 'react';

import { MdOpenInNew } from 'react-icons/md';
import { useLanguage } from '@/hooks/useLanguage';

import { Section } from '@/modules';

const Certificates: React.FC = () => {
  const text = useLanguage();

  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4 mt-">
        {text.sections.certificates.longTitle}
      </h1>

      <ul className="mt-12">
        {[1, 2, 3].map(item => (
          <li key={String(item)}>
            <button
              type="button"
              className="flex justify-between items-center border-b border-light-gray py-6 h-20 w-full"
              // style={{ width: 'calc(100% + 48px)', marginLeft: '-24px' }}
            >
              <div>
                <strong>HARDWARE</strong>
                <p className="text-gray text-left mt-1">2016-2017</p>
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

export default Certificates;
