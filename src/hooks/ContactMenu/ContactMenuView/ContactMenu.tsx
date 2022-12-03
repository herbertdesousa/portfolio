import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';

import classNames from 'classnames';

import { useLanguage } from '@/hooks/useLanguage';

import { MdClose, MdOpenInNew } from 'react-icons/md';
import Link from 'next/link';
import style from './ContactMenu.module.css';

const links = {
  whatsapp: 'https://api.whatsapp.com/send?phone=5511959110254',
  gmail: 'mailto:sousaherbert138@gmail.com',
  linkedin: 'https://www.linkedin.com/in/herbert-de-sousa-vilela-311638230/',
  github: 'https://github.com/herbertdesousa',
};

export interface IContactMenuRef {
  open(): void;
  close(): void;
  toggle(): void;
}

interface IProps {
  className?: string;
}

const ContactMenu: React.ForwardRefRenderFunction<IContactMenuRef, IProps> = (
  { className },
  ref,
) => {
  const text = useLanguage();

  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const rootClassName = classNames(
    style.root,
    { [style['root-top-open']]: isOpened },
    { [style['root-top-close']]: !isOpened },
    className,
  );

  const bgClassName = classNames(
    style.bg,
    { [style['bg-open']]: isOpened },
    { [style['bg-close']]: !isOpened },
  );

  useImperativeHandle(ref, () => ({
    open() {
      openContactMenu();
    },
    close() {
      closeContactMenu();
    },
    toggle() {
      if (isOpened) closeContactMenu();
      else openContactMenu();
    },
  }));

  const closeContactMenu = useCallback(() => {
    setIsOpened(false);
  }, []);
  const openContactMenu = useCallback(() => {
    setIsVisible(true);
    setTimeout(() => setIsOpened(true), 50);
  }, []);

  if (!isVisible) return <></>;
  return (
    <>
      <div
        role="button"
        tabIndex={0}
        className={bgClassName}
        onClick={() => closeContactMenu()}
        onKeyDown={() => closeContactMenu()}
      />
      <div
        className={rootClassName}
        onTransitionEnd={() => setIsVisible(isOpened)}
      >
        <div className="flex justify-between items-start">
          <h1 className="font-bold text-4xl mb-4 mt-">{text.contact.title}</h1>
          <button type="button" onClick={closeContactMenu}>
            <MdClose size={24} className="text-gray" />
          </button>
        </div>

        <ul className="mt-4">
          <li>
            <Link href={links.whatsapp} passHref>
              <a target="_blank" className={style['contact-button']}>
                WhatsApp
                <MdOpenInNew className="ml-2 text-gray" />
              </a>
            </Link>
            <Link href={links.gmail} passHref>
              <a target="_blank" className={style['contact-button']}>
                Gmail
                <MdOpenInNew className="ml-2 text-gray" />
              </a>
            </Link>
            <Link href={links.linkedin} passHref>
              <a target="_blank" className={style['contact-button']}>
                LinkedIn
                <MdOpenInNew className="ml-2 text-gray" />
              </a>
            </Link>
            <Link href={links.github} passHref>
              <a target="_blank" className={style['contact-button']}>
                Github
                <MdOpenInNew className="ml-2 text-gray" />
              </a>
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

export default forwardRef(ContactMenu);
