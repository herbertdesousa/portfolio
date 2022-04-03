/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

import { MdOpenInNew } from 'react-icons/md';

import { Section } from '@/modules';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';

const CV: React.FC = () => {
  const text = useLanguage();

  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4 mt-">
        {text.sections.cv.longTitle}
      </h1>

      <ul className="mt-12">
        <li>
          <Link href="/cv/cv-pt-br.pdf" locale="pt-br">
            <a
              target="_blank"
              className="flex justify-between items-center border-b border-light-gray py-6 h-20 w-full"
            >
              <div>
                <strong className="uppercase">
                  {text.sections.cv.ptBRTitle}
                </strong>
              </div>

              <span className="flex items-center text-primary">
                {text.openLink}
                <MdOpenInNew className="ml-2" />
              </span>
            </a>
          </Link>
          <li>
            <Link href="/cv/cv-en.pdf" locale="pt-br">
              <a
                target="_blank"
                className="flex justify-between items-center border-b border-light-gray py-6 h-20 w-full"
              >
                <div>
                  <strong className="uppercase">
                    {text.sections.cv.enTitle}
                  </strong>
                </div>

                <span className="flex items-center text-primary">
                  {text.openLink}
                  <MdOpenInNew className="ml-2" />
                </span>
              </a>
            </Link>
          </li>
        </li>
      </ul>
    </Section>
  );
};

export default CV;
