import React from 'react';

import { Section } from '@/modules';

const Experiencies: React.FC = () => {
  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4 mt-">Experiencies</h1>

      <ul className="mt-12">
        {[1].map(item => (
          <li key={String(item)} className="-m-1">
            <button type="button" className="flex bg-white w-full">
              <div className="min-w-14 w-14 h-14 bg-gray rounded-full" />
              <div className="ml-4">
                <strong className="text-left">Guia do Transporte</strong>
                <br />
                <span className="flex items-center text-gray">2019-2022</span>
              </div>
            </button>
            <div
              className="ml-7 h-16 border-l-2 border-dashed border-gray"
              style={{ width: 0 }}
            />
          </li>
        ))}
      </ul>
    </Section>
  );
};

export default Experiencies;
