import React from 'react';
import Link from 'next/link';

import { MdArrowForward } from 'react-icons/md';

import { useContactMenu } from '@/hooks/ContactMenu';
import { Avatar } from '@/components';
import { useLanguage } from '@/hooks/useLanguage';

const About: React.FC = () => {
  const text = useLanguage();
  const { contactMenuModalizeRef } = useContactMenu();

  return (
    <section className="col-span-4 md:col-span-8 pt-8">
      <strong className="text-gray text-sm font-semibold uppercase">
        {text.sections.about.mainTextLabel}
      </strong>
      <p className="mt-3 text-lg font-medium mb-4">
        {text.sections.about.mainText}
      </p>

      <div className="hidden lg:block">
        <Avatar />
      </div>

      <button
        type="button"
        className="flex items-center h-14 p-4 bg-black text-white mt-12 uppercase"
        onClick={() => contactMenuModalizeRef.current?.open()}
      >
        {text.sections.about.contactButton}
        <MdArrowForward size={20} className="ml-2" />
      </button>

      <div className="mt-8 mb-12">
        <strong className="text-gray text-sm font-semibold uppercase">
          {text.sections.about.topicsLabel}
        </strong>
        <ul>
          <li className="font-medium underline mt-3">
            <Link href="/last-projects">
              {text.sections.lastProjects.title}
            </Link>
          </li>
          <li className="font-medium underline mt-3">
            <Link href="/certificates">
              {text.sections.certificates.longTitle}
            </Link>
          </li>
          <li className="font-medium underline mt-3">
            <Link href="/experiencies">{text.sections.experiencies.title}</Link>
          </li>
          <li className="font-medium underline mt-3">
            <Link href="/skills">{text.sections.skills.title}</Link>
          </li>
          <li className="font-medium underline mt-3">
            <Link href="/cv">{text.sections.cv.title}</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
