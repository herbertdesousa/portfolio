import React from 'react';

import { MdDownload, MdOpenInNew } from 'react-icons/md';

import { Section } from '@/modules';
import { useLanguage } from '@/hooks/useLanguage';
import Link from 'next/link';

const CV: React.FC = () => {
  const text = useLanguage();

  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4">{text.sections.cv.title}</h1>

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
        </li>
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
      </ul>

      {/* https://www.notion.so/CV-Criado-por-Json-3abda8618f5841a0a524e4ca0fb5c756
      <div className="flex flex-col gap-y-2 my-12 mx-auto">
        <div>
          <button
            type="button"
            className="p-2 rounded bg-slate-800 hover:bg-slate-900 transition"
          >
            <MdDownload size={24} className="text-white" />
          </button>
        </div>

        <div className="w-[595px] min-h-[842px] rounded shadow-md border border-slate-200">
          <div className='h-36 w-36 rounded-full'></div>
        </div>
      </div> */}
    </Section>
  );
};

export default CV;
