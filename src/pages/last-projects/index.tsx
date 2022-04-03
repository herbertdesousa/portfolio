import React from 'react';
import { useRouter } from 'next/router';

import { useLanguage } from '@/hooks/useLanguage';

import { Section } from '@/modules';

const LastProjects: React.FC = () => {
  const text = useLanguage();

  const { push } = useRouter();

  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4 mt-">
        {text.sections.lastProjects.title}
      </h1>

      <ul className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-3">
        {[1, 2, 3, 4].map(item => (
          <li key={String(item)}>
            <button
              type="button"
              className="border border-light-gray rounded"
              onClick={() => push(`/last-projects/${item}`)}
            >
              <div className="w-full h-20 bg-gray rounded-t" />
              <div className="p-2  flex flex-col items-start">
                <strong className="mb-2">Mais Cargas</strong>
                <p className="text-left text-gray text-xs line-clamp-3">
                  Projeto feito para motoristas de caminhões onde precisam achar
                  frete Projeto feito para motoristas de caminhões onde precisam
                  achar frete
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default LastProjects;
