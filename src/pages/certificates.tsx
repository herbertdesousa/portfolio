/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { GetServerSideProps } from 'next';

import { MdOpenInNew } from 'react-icons/md';
import axios from 'axios';
import { useLanguage } from '@/hooks/useLanguage';

import { Section } from '@/modules';
import Link from 'next/link';

interface ICertificatesProps {
  certificates: {
    id: string;
    title: string;
    date: string;
    url: string;
  }[];
}

const Certificates: React.FC<ICertificatesProps> = ({ certificates }) => {
  const text = useLanguage();

  return (
    <Section>
      <h1 className="font-bold text-4xl mb-4 mt-">
        {text.sections.certificates.longTitle}
      </h1>

      <ul className="mt-12">
        {certificates.map(item => (
          <li key={item.id}>
            <Link href={item.url} locale="pt-br">
              <a
                target="_blank"
                className="flex justify-between items-center border-b border-light-gray py-6 h-20 w-full"
              >
                <div>
                  <strong className="uppercase">{item.title}</strong>
                  <p className="text-gray text-left mt-1">{item.date}</p>
                </div>

                <span className="flex items-center text-primary">
                  {text.openLink}
                  <MdOpenInNew className="ml-2" />
                </span>
              </a>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  );
};

export const getServerSideProps: GetServerSideProps = async context => {
  const url = `http://${context.req.headers.host}/api/certificates`;

  const { data: certificates } = await axios.get(url);

  return {
    props: {
      certificates,
    },
  };
};

export default Certificates;
