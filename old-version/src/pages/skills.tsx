import React, { useRef } from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

import axios from 'axios';

import { Section } from '@/modules';
import { useLanguage } from '@/hooks/useLanguage';

interface ISkillsProps {
  data: {
    skills: {
      id: string;
      label: string;
      img: string;
    }[];
    languages: string[];
    hobbies: string[];
  };
}

const Skills: React.FC<ISkillsProps> = ({ data }) => {
  const text = useLanguage();
  const carouselRef = useRef<HTMLUListElement>(null);

  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4 mt-">
        {text.sections.skills.title}
      </h1>

      <ul
        ref={carouselRef}
        className="flex mt-12 overflow-scroll no-scroll -ml-6 px-6"
        style={{ width: 'calc(48px + 100%)' }}
      >
        {data.skills.slice(0, 4).map(item => (
          <li key={item.id} className="flex flex-col items-center mr-6">
            <Image
              src={item.img}
              width="48"
              height="48"
              layout="fixed"
              className="rounded"
            />
            <strong className="text-left whitespace-nowrap mt-2">
              {item.label}
            </strong>
          </li>
        ))}
      </ul>

      <h2 className="font-bold text-2xl mt-8">
        {text.sections.skills.languages}
      </h2>
      <p className="text-left text-gray mt-2">
        {data.languages.map(item => (
          <span key={item} className="uppercase">
            {item}
            <br />
          </span>
        ))}
      </p>

      <h2 className="font-bold text-2xl mt-8">
        {text.sections.skills.hobbies}
      </h2>
      <p className="text-left text-gray mt-2 uppercase">
        {data.hobbies.map(item => (
          <span key={item} className="uppercase">
            {item}
            <br />
          </span>
        ))}
      </p>
    </Section>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const url = `http://${context.req.headers.host}/api/skills`;

  const { data } = await axios.get(url, {
    params: { lang: context.locale },
  });

  return {
    props: {
      data,
    },
  };
};

export default Skills;
