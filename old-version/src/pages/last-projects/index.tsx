import React from 'react';
import { useRouter } from 'next/router';
import { GetServerSideProps } from 'next';
import Image from 'next/image';

import { useLanguage } from '@/hooks/useLanguage';

import axios from 'axios';

import { Section } from '@/modules';

export interface IProject {
  id: string;
  title: string;
  techs: string[];
  description: string;
  img?: string;
}

interface ILastProjectsProps {
  projects: IProject[];
}

const LastProjects: React.FC<ILastProjectsProps> = ({ projects }) => {
  const text = useLanguage();

  const { push } = useRouter();

  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4 mt-">
        {text.sections.lastProjects.title}
      </h1>

      <ul className="grid grid-cols-2 gap-4 mt-12 md:grid-cols-3">
        {projects.map(item => (
          <li key={item.id}>
            <button
              type="button"
              className="flex flex-col border border-light-gray rounded"
              style={{ minHeight: 178 }}
              onClick={() => push(`/last-projects/${item.id}`)}
            >
              {item.img && (
                <div className="relative h-20 w-full">
                  <Image
                    src={item.img}
                    layout="fill"
                    objectFit="cover"
                    className="bg-gray rounded-t"
                  />
                </div>
              )}
              <div className="p-2  flex flex-col items-start">
                <strong className="mb-2">{item.title}</strong>
                <p
                  className={`text-left text-gray text-xs line-clamp-${
                    item.img ? 3 : 8
                  }`}
                >
                  {item.description}
                </p>
              </div>
            </button>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const url = `http://${context.req.headers.host}/api/projects`;

  const { data: projects } = await axios.get(url, {
    params: { lang: context.locale },
  });

  return {
    props: {
      projects,
    },
  };
};

export default LastProjects;
