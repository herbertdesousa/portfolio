import React from 'react';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

import { Section } from '@/modules';
import axios from 'axios';

import { useLanguage } from '@/hooks/useLanguage';

interface IExperienciesProps {
  experiencies: {
    id: string;
    title: string;
    date: string;
    img: string;
  }[];
}

const Experiencies: React.FC<IExperienciesProps> = ({ experiencies }) => {
  const text = useLanguage();

  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4 mt-">
        {text.sections.experiencies.title}
      </h1>

      <ul className="mt-12">
        {experiencies.map(item => (
          <li key={item.id} className="-m-1">
            <button type="button" className="flex bg-white w-full">
              <Image
                src={item.img}
                width="56"
                height="56"
                className="rounded-full"
              />
              <div className="ml-4">
                <strong className="text-left">{item.title}</strong>
                <br />
                <span className="flex items-center text-gray">{item.date}</span>
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

export const getServerSideProps: GetServerSideProps = async context => {
  const url = `http://${context.req.headers.host}/api/experiencies`;

  const { data: experiencies } = await axios.get(url);

  return {
    props: {
      experiencies,
    },
  };
};

export default Experiencies;
