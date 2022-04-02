import React, { useRef } from 'react';

import { Section } from '@/modules';

const Skills: React.FC = () => {
  const carouselRef = useRef<HTMLUListElement>(null);

  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4 mt-">Skills</h1>

      <ul
        ref={carouselRef}
        className="flex mt-12 overflow-scroll no-scroll -ml-6 px-6"
        style={{ width: 'calc(48px + 100%)' }}
      >
        {[1, 2, 3, 4].map(item => (
          <li key={String(item)} className="flex flex-col items-center mr-6">
            <div className="w-12 h-12 bg-gray rounded" />
            <strong className="text-left whitespace-nowrap mt-2">
              NODE JS
            </strong>
          </li>
        ))}
      </ul>

      <h2 className="font-bold text-2xl mt-8">Language</h2>
      <p className="text-left text-gray mt-2">
        PORTUGUESE (NATIVE)
        <br />
        ENGLISH (INTERMEDIATE)
      </p>

      <h2 className="font-bold text-2xl mt-8">Hobbies</h2>
      <p className="text-left text-gray mt-2 uppercase">
        MUSIC
        <br />
        DESIGN - UI/UX
        <br />
        Game developer
        <br />
        Machine learning
      </p>
    </Section>
  );
};

export default Skills;
