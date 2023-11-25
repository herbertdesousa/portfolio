import React, { useState } from 'react';

import { useRouter } from 'next/router';
import { useDetectClickOutside } from 'react-detect-click-outside';
import { MdKeyboardArrowDown, MdMenu } from 'react-icons/md';

import { useSideMenu } from '@/hooks/SideMenu';
import { useLanguage } from '@/hooks/useLanguage';

interface IMenuProps {
  onClickOpenOptionLanguage?(): void;
}

const Menu: React.FC<IMenuProps> = ({ onClickOpenOptionLanguage }) => {
  const { locale, push, pathname } = useRouter();
  const { sideMenuModalizeRef } = useSideMenu();
  const text = useLanguage();

  const [isOptionLanguageOpened, setIsOptionLanguageOpened] = useState(false);
  const optionLanguageRef = useDetectClickOutside({
    onTriggered: () => {
      setIsOptionLanguageOpened(false);
    },
  });

  const onChangeLanguage = (_locale: string) => {
    push(pathname, pathname, { locale: _locale });
    setIsOptionLanguageOpened(false);
  };

  const handleOnClickOpenOptionLanguage = () => {
    if (onClickOpenOptionLanguage) onClickOpenOptionLanguage();
    setIsOptionLanguageOpened(st => !st);
  };

  return (
    <nav className="flex items-center justify-between py-2 px-4 bg-light-primary">
      <button
        type="button"
        onClick={() => sideMenuModalizeRef.current.open()}
        className="flex items-center text-black font-semibold uppercase"
      >
        <MdMenu className="mr-2" />
        {text.menu.title}
      </button>

      <div ref={optionLanguageRef} className="relative">
        <button
          type="button"
          className="flex items-center h-6 w-20 p-0.5 rounded bg-white"
          onClick={handleOnClickOpenOptionLanguage}
        >
          <span className="w-full font-medium uppercase">{locale}</span>
          <MdKeyboardArrowDown size={24} className="" />
        </button>

        {isOptionLanguageOpened && (
          <ul className="absolute py-1 top-7 shadow rounded bg-white">
            <li className="flex items-center h-6 w-20">
              <button
                type="button"
                className={`
                  font-medium w-full
                  ${locale === 'en' && 'text-primary bg-light-primary'}
                `}
                onClick={() => onChangeLanguage('en')}
              >
                EN
              </button>
            </li>
            <li className="flex items-center h-6 w-20  mt-1">
              <button
                type="button"
                className={`
                  font-medium w-full
                  ${locale === 'pt-br' && 'text-primary bg-light-primary'}
                `}
                onClick={() => onChangeLanguage('pt-br')}
              >
                PT-BR
              </button>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Menu;
