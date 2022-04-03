import React from 'react';

import { MdArrowBack } from 'react-icons/md';
import { useRouter } from 'next/router';

import { useLanguage } from '@/hooks/useLanguage';
import { Section } from '@/modules';

const LastProjectsDetails: React.FC = () => {
  const { push } = useRouter();

  const text = useLanguage();

  return (
    <Section showMenu={false}>
      <button
        type="button"
        className="flex items-center text-gray text-lg mb-8"
        onClick={() => push('/last-projects')}
      >
        <MdArrowBack className="mr-2" />
        {text.sections.lastProjects.details.backTitle}
      </button>

      <h1 className="font-bold text-4xl mb-4">
        {text.sections.lastProjects.details.title}
      </h1>

      <div className="w-full rounded bg-gray mt-8" style={{ height: 190 }} />
      <ul className="flex mt-2">
        {[1, 2, 3].map(item => (
          <li
            key={item}
            className="px-3 py-2 border border-light-gray font-medium mr-2 rounded"
          >
            NodeJs
          </li>
        ))}
      </ul>

      <h2 className="font-bold text-2xl mt-6">Mais Cargas</h2>
      <p className="text-left text-gray mt-2">
        Projeto feito para motoristas de caminhões onde precisam achar fretes na
        região para fazer um frete. Usando um sistema de check in de origem e
        destino, é traçado a rota do caminhoneiro para encontrar fretes mais
        próximos na região.
      </p>
    </Section>
  );
};

export default LastProjectsDetails;
