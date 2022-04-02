import React from 'react';

import { MdArrowBack } from 'react-icons/md';
import { useRouter } from 'next/router';

import { Section } from '@/modules';

const LastProjectsDetails: React.FC = () => {
  const { back } = useRouter();

  return (
    <Section>
      <button
        type="button"
        className="flex items-center text-gray text-lg mb-8"
        onClick={back}
      >
        <MdArrowBack className="mr-2" />
        Projects
      </button>

      <h1 className="font-bold text-4xl mb-4">Detalhes</h1>

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
