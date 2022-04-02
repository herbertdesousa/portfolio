import React from 'react';
import Link from 'next/link';

import { MdArrowForward } from 'react-icons/md';
import { useContactMenu } from '@/hooks/ContactMenu';
import { Avatar } from '@/components';

const About: React.FC = () => {
  const { contactMenuModalizeRef } = useContactMenu();

  return (
    <section className="col-span-4 md:col-span-8 pt-8">
      <strong className="text-gray text-sm font-semibold">BACKGROUND</strong>
      <p className="mt-3 text-lg font-medium mb-4">
        Meu amor por programação começou quando eu era criança, jogava muitos
        videogames e ficava fascinado com o funcionamento dos jogos, o que
        acontece quando o jogador acerta uma moeda e como isso aumenta a
        pontuação. Tudo me fazia pensar e me fazia querer aprender mais sobre
        programação, então decidi estudar desenvolvimento de jogos e foi onde eu
        encontrei a Unity.
        <br />
        <br />
        Aos 15 consegui um emprego como jovem aprendiz de programação, fiquei
        muito empolgado porque era meu primeiro emprego. Trabalhei muito e
        aprendi novas coisas de programação e então conheci o Javascript que é
        meu amor até hoje, além de SEO, NextJs, React, React Native, NodeJs,
        Express, NestJs entre outros.
      </p>

      <div className="hidden lg:block">
        <Avatar />
      </div>

      <button
        type="button"
        className="flex items-center h-14 p-4 bg-black text-white mt-12"
        onClick={() => contactMenuModalizeRef.current?.open()}
      >
        GET IN TOUCH
        <MdArrowForward size={20} className="ml-2" />
      </button>

      <div className="mt-8 mb-12">
        <strong className="text-gray text-sm font-semibold">BACKGROUND</strong>
        <ul>
          <li className="font-medium underline mt-3">
            <Link href="/">Last Projects</Link>
          </li>
          <li className="font-medium underline mt-3">
            <Link href="/">Education and Certificates</Link>
          </li>
          <li className="font-medium underline mt-3">
            <Link href="/">Experiencies</Link>
          </li>
          <li className="font-medium underline mt-3">
            <Link href="/">Skills</Link>
          </li>
          <li className="font-medium underline mt-3">
            <Link href="/">CV</Link>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default About;
