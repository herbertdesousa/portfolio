import React, { useEffect, useState } from 'react';

import { MdArrowBack } from 'react-icons/md';
import { useRouter } from 'next/router';
import axios from 'axios';

import { useLanguage } from '@/hooks/useLanguage';
import { Section } from '@/modules';

import { IProject } from '.';

const LastProjectsDetails: React.FC = () => {
  const { push, locale, query } = useRouter();

  const text = useLanguage();

  const [project, setProject] = useState<IProject>({
    id: '',
    description: '',
    techs: [],
    title: 'Loading',
  });

  useEffect(() => {
    (async () => {
      if (process.browser) {
        const url = `http://${window.location.host}/api/projects`;

        const data = await axios.get(url, {
          params: {
            lang: locale,
            id: query.id,
          },
        });
        setProject(data.data);
      }
    })();
  }, [query.id, locale]);

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
        {project.techs.map(item => (
          <li
            key={item}
            className="px-3 py-2 border border-light-gray font-medium mr-2 rounded"
          >
            {item}
          </li>
        ))}
      </ul>

      <h2 className="font-bold text-2xl mt-6">{project.title}</h2>
      <p className="text-left text-gray mt-2">{project.description}</p>
    </Section>
  );
};

export default LastProjectsDetails;
