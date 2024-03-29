import React, {
  forwardRef,
  useCallback,
  useImperativeHandle,
  useState,
} from 'react';

import { useRouter } from 'next/router';
import classNames from 'classnames';

import { useLanguage } from '@/hooks/useLanguage';

import { Avatar } from '@/components';
import style from './SideMenu.module.css';

export interface ISideMenuRef {
  open(): void;
  close(): void;
  toggle(): void;
}

interface IProps {
  className?: string;
}

const SideMenu: React.ForwardRefRenderFunction<ISideMenuRef, IProps> = (
  { className },
  ref,
) => {
  const { pathname, push } = useRouter();
  const text = useLanguage();

  const [isOpened, setIsOpened] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  const rootClassName = classNames(
    style.root,
    { [style['root-left-open']]: isOpened },
    { [style['root-left-close']]: !isOpened },
    className,
  );

  const bgClassName = classNames(
    style.bg,
    { [style['bg-open']]: isOpened },
    { [style['bg-close']]: !isOpened },
  );

  const linkButtonClassName = (path: string): string => {
    return classNames(
      style['link-button'],
      pathname === path && style['link-button-active'],
    );
  };

  useImperativeHandle(ref, () => ({
    open() {
      openSideMenu();
    },
    close() {
      closeSideMenu();
    },
    toggle() {
      if (isOpened) closeSideMenu();
      else openSideMenu();
    },
  }));

  const closeSideMenu = useCallback(() => {
    setIsOpened(false);
  }, []);
  const openSideMenu = useCallback(() => {
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
        onClick={() => closeSideMenu()}
        onKeyDown={() => closeSideMenu()}
      />
      <div
        className={rootClassName}
        onTransitionEnd={() => setIsVisible(isOpened)}
      >
        <Avatar onClickContact={closeSideMenu} />

        <ul className="mt-8">
          <li>
            <button
              type="button"
              className={linkButtonClassName('/')}
              onClick={() => {
                closeSideMenu();
                push('/');
              }}
            >
              {text.sections.about.title}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={linkButtonClassName('/last-projects')}
              onClick={() => {
                closeSideMenu();
                push('/last-projects');
              }}
            >
              {text.sections.lastProjects.title}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={linkButtonClassName('/certificates')}
              onClick={() => {
                closeSideMenu();
                push('/certificates');
              }}
            >
              {text.sections.certificates.title}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={linkButtonClassName('/experiencies')}
              onClick={() => {
                closeSideMenu();
                push('/experiencies');
              }}
            >
              {text.sections.experiencies.title}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={linkButtonClassName('/skills')}
              onClick={() => {
                closeSideMenu();
                push('/skills');
              }}
            >
              {text.sections.skills.title}
            </button>
          </li>
          <li>
            <button
              type="button"
              className={linkButtonClassName('/cv')}
              onClick={() => {
                closeSideMenu();
                push('/cv');
              }}
            >
              {text.sections.cv.title}
            </button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default forwardRef(SideMenu);
